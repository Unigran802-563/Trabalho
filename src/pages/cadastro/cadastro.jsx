import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './cadastro.css'

export default function Cadastro() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  function Cadatro() {
  if (nome && senha) {
    localStorage.setItem('auth', 'true')
    localStorage.setItem('nomeUsuario', nome) 
    navigate('/vitrine')
  } else {
    alert('Preencha os campos!')
  }
}


  return (
    <div className="container-cadastro">
      <div className="form-box">
        <h2>Cadastro</h2>
        <div className="input-group">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="botao-cadastro" onClick={Cadatro}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}
