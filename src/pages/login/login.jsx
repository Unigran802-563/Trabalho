import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './login.css'

export default function Login() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  function login() {
  if (nome && senha) {
    localStorage.setItem('auth', 'true')
    localStorage.setItem('nomeUsuario', nome)  
    navigate('/vitrine')
  } else {
    alert('Preencha os campos!')
  }
}


  function Cadastrar() {
    navigate('/cadastro')
  }
  
  return (
    <div className="container-login">
      <div className="form-box">
        <h2>Login</h2>
        <div className="input-group">
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="botao-login" onClick={login}>Entrar</button>
          <button className="botao-cadastro" onClick={Cadastrar}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}
