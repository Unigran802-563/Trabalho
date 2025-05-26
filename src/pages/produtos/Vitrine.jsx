import { useState } from "react";
import produtos from "./Produto";
import Carrinho from '../../componentes/carrinho/Carrinho';
import './Vitrine.css';

function Vitrine() {
  const [carrinho, setCarrinho] = useState([]);

  const addProduto = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerProduto = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return (
    <div>
      <Carrinho itens={carrinho} removerProduto={removerProduto} />
      <div className="vitrine">
        {produtos.map((produto, index) => (
          <div className="card" key={index}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.valor.toFixed(2)}</p>
            <div className="button-group">
              <button onClick={() => addProduto(produto)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vitrine;
