import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Auth } from '../styles/pages/Auth';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exist.')
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.')
      return;
    }

    history.push(`rooms/${roomCode}`)
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
          <Button variant="google" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google Logo" />
            <span>Crie sua sala com o Google</span>
          </Button>

          <div className="separator">ou entre em uma sala</div>

          <form className="main-form" onSubmit={handleJoinRoom}>
            <input
              type="text"
              name="room"
              id="room"
              placeholder="Digite o código da sala"
              className="main-form__input"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button
              type="submit"
              variant="primary"
            >
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </Auth>
  )
}
