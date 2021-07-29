import { useHistory, useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import { RoomCode } from '../components/RoomCode';
import { RoomStyle } from '../styles/pages/Room';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';
import { Button } from '../components/Button';
import { database } from '../services/firebase';

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/');
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  return (
    <RoomStyle id="page-room">
      <header className="header">
        <div className="header__content">
          <img className="header__img" src={logoImg} alt="Letmeask Logo" />
          <div className="header__column">
            <RoomCode code={roomId} />
            <Button variant="outline" isBlock="no" onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
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
                  <>
                    <button className="like__btn" type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                      <img src={checkImg} alt="Marcar pergunta como respondida" title="Marcar pergunta como respondida" />
                    </button>

                    <button className="like__btn" type="button" onClick={() => handleHighlightQuestion(question.id)}>
                      <img src={answerImg} alt="Dar destaque à pergunta" title="Dar destaque à pergunta" />
                    </button>
                  </>
                )}

                <button className="like__btn" type="button" onClick={() => handleDeleteQuestion(question.id)}>
                  <img src={deleteImg} alt="Remover pergunta" title="Remover pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </RoomStyle >
  )
}
