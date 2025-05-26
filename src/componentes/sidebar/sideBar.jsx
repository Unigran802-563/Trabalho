import './Sidebar.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import perfil from '../../assets/perfil.png'

export default function Sidebar() {
  const navigate = useNavigate()
  const [nomeUsuario, setNomeUsuario] = useState('')

  useEffect(() => {
    const nome = localStorage.getItem('nomeUsuario')
    if (nome) {
      setNomeUsuario(nome)
    }
  }, [])

  const logoff = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('nomeUsuario')
    navigate('/')
  }

  return (
    <div className="sidebar">
      <div className="profile">
        <img src={perfil} />
        <p><strong>Nome:</strong> {nomeUsuario}</p>
      </div>

      <div className="buttons">
        <button onClick={logoff} className="sidebar-button">Logoff</button>
        <button className="sidebar-button">Editar Produtos</button>
      </div>
    </div>
  )
}
