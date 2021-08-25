import { useHistory, useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { RoomCode } from '../components/RoomCode';
import { RoomStyle } from '../styles/pages/Room';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { ReactComponent as CheckImg } from '../assets/images/check.svg';
import { ReactComponent as DeleteImg } from '../assets/images/delete.svg';
import { ReactComponent as AnswerImg } from '../assets/images/answer.svg';

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
                    <button className="like__btn like__btn--delete" type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                      <CheckImg title="Marcar pergunta como respondida" />
                    </button>

                    <button className="like__btn like__btn--purple" type="button" onClick={() => handleHighlightQuestion(question.id)}>
                      <AnswerImg title="Dar destaque à pergunta" />
                    </button>
                  </>
                )}

                <button className="like__btn like__btn--red" type="button" onClick={() => handleDeleteQuestion(question.id)}>
                  <DeleteImg title="Remover pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </RoomStyle >
  )
}
