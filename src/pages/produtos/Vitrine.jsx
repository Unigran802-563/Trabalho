import { useState, useEffect } from "react";
import Carrinho from '../../componentes/carrinho/Carrinho';
import './Vitrine.css';
import Sidebar from "../../componentes/sidebar/sideBar";
import { useNavigate } from 'react-router-dom'
function Vitrine() {
  const [itensCarrinho, definirItensCarrinho] = useState([]);
  const [listaProdutos, definirListaProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const produtosArmazenados = JSON.parse(localStorage.getItem('products')) || [];
    definirListaProdutos(produtosArmazenados);
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const itemCarrinho = {
      nome: produto.name,
      valor: parseFloat(produto.price),
      imagem: produto.URL
    };
    definirItensCarrinho([...itensCarrinho, itemCarrinho]);
  };

  const removerDoCarrinho = (indice) => {
    const carrinhoAtualizado = [...itensCarrinho];
    carrinhoAtualizado.splice(indice, 1);
    definirItensCarrinho(carrinhoAtualizado);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', width: '100%' }}>
        <Carrinho itens={itensCarrinho} removerProduto={removerDoCarrinho} />
        <div className="vitrine">
          <div>
            <div className="titulo">
              <h2>Vitrine</h2>
            </div>
            {listaProdutos.length === 0 ? (
              <div >
                <h2>Nenhum produto cadastrado ainda.</h2>
                <div>
                  <button onClick={() => navigate('/Edição')} className="sidebar-button">Cadastar Produtos</button>
                </div>
              </div>
            ) : (
              listaProdutos.map((produto, indice) => (
                <div className="card" key={indice}>
                  <img src={produto.URL} alt={produto.name} />
                  <h3>{produto.name}</h3>
                  <p>R$ {parseFloat(produto.price).toFixed(2)}</p>
                  <div className="button-group">
                    <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vitrine;
