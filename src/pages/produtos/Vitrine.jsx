import { useState } from "react";
import produtos from "./Produto";
import Carrinho from './Carrinho.jsx';
import './Vitrine.css';

function Vitrine() {
    const [carrinho, setCarrinho] = useState([]);

    const addProduto = (produto) => {
        setCarrinho([...carrinho, produto]);
    };

    const removeProduto = (produto) => {
        const index = carrinho.findIndex((item) => item.nome === produto.nome);
        if (index !== -1) {
            const novoCarrinho = [...carrinho];
            novoCarrinho.splice(index, 1);
            setCarrinho(novoCarrinho);
        }
    };

    return (
        <div>
            <Carrinho itens={carrinho} />
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Vitrine de Produtos</h1>
            <div className="vitrine">
                {produtos.map((produto, index) => (
                    <div className="card" key={index}>
                        <img src={produto.imagem} alt={produto.nome} />
                        <h3>{produto.nome}</h3>
                        <p>R$ {produto.valor.toFixed(2)}</p>
                        <div className="button-group">
                            <button onClick={() => addProduto(produto)}>+</button>
                            <button onClick={() => removeProduto(produto)}>-</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vitrine;
