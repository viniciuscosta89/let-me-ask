import { useState, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { RoomStyle } from '../styles/pages/Room';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';

type RoomParams = {
  id: string
}

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState('');
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') return;
    if (!user) {
      throw new Error('Not logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)
    console.log(database.ref(`rooms/${roomId}/questions`))
    setNewQuestion('');
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`)
        .push({
          authorId: user?.id
        })
    }
  }

  return (
    <RoomStyle id="page-room">
      <header className="header">
        <div className="header__content">
          <img className="header__img" src={logoImg} alt="Letmeask Logo" />
          <RoomCode code={roomId} />
        </div>
      </header>
      <main className="content">
        <div className="content__room-title-wrapper">
          <h1 className="content__room-title">Sala {title}</h1>
          <span className="content__room-tag">
            {questions.length !== 0 ? questions.length : 'Nenhuma'}
            {' '}
            {questions.length > 1 ? 'perguntas' : 'pergunta'}
          </span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea className="form__textarea" name="" id="" cols={30} rows={5} placeholder="O que voc?? quer perguntar?" onChange={event => setNewQuestion(event.target.value)} value={newQuestion} />

          <div className="form__footer">
            {user ? (
              <div className="user-info">
                <img className="user-info__img" src={user.avatar} alt={user.name} />
                <span className="user-info__name">{user.name}</span>
              </div>
            ) : (
              <span className="form__info">Para enviar uma pergunta, <button className="form__link">fa??a seu login</button>.</span>
            )}
            <Button
              type="submit"
              variant="primary"
              isBlock="no"
              disabled={!user}
            >
              Enviar pergunta
            </Button>
          </div>
        </form>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                content={question.content}
                author={question.author}
                key={question.id}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >

                {!question.isAnswered && (
                  <button className={`like__btn ${question.likeId ? 'liked' : ''}`} aria-label="Marcar como gostei" onClick={() => handleLikeQuestion(question.id, question.likeId)}>
                    {question.likeCount > 0 && <span className="like__number">{question.likeCount}</span>}

                    <svg className="like__icon" width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </Question>
            )
          })}
        </div>


      </main>
    </RoomStyle >
  )
}
