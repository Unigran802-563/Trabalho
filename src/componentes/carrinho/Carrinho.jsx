import { useState } from 'react';
import './Carrinho.css';
import carrinhoIcone from "../../assets/carrinho.png";

function Carrinho({ itens, removerProduto }) {
  const [aberto, setAberto] = useState(false);

  const total = itens.reduce((acc, item) => acc + item.valor, 0);

  return (
    <>
      <button className="botao-carrinho" onClick={() => setAberto(!aberto)}>
        <img src={carrinhoIcone} alt="Carrinho" />
        {itens.length}
      </button>

      <div className={`barra-lateral ${aberto ? 'aberto' : ''}`}>
        <div className="topo-carrinho">
          <h3>Seu Carrinho</h3>
          <button className="fechar-carrinho" onClick={() => setAberto(false)}>✖</button>
        </div>

        {itens.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            {itens.map((item, index) => (
              <div className="item-carrinho" key={index}>
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <strong>{item.nome}</strong>
                  <p>R$ {item.valor.toFixed(2)}</p>
                </div>
                <button className="remover-btn" onClick={() => removerProduto(index)}>
                  Remover
                </button>
              </div>
            ))}
            <hr />
            <div className="total-carrinho">
              <strong>Total:</strong> R$ {total.toFixed(2)}
            </div>
          </>
        )}
      </div>

      {aberto && <div className="overlay" onClick={() => setAberto(false)}></div>}
    </>
  );
}

export default Carrinho;
