import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Auth } from '../styles/pages/Auth';
import { Button } from '../components/Button';
import { database } from '../services/firebase';

export function NewRoom() {
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('')
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') return

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <Auth>
      <aside className="aside">
        <img src={illustrationImg} alt="Illustration" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main className="main">
        <div className="main__content">
          <img src={logoImg} alt="Logo Letmeask" />
          <h2 className="main__subtitle">Crie uma nova sala</h2>

          <form className="main-form" onSubmit={handleCreateRoom}>
            <input
              type="text"
              name="roomName"
              id="roomName"
              placeholder="Nome da sala"
              className="main-form__input"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button
              type="submit"
              variant="primary"
            >
              Criar sala
            </Button>
          </form>
          <small>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></small>
        </div>
      </main>
    </Auth>
  )
}
