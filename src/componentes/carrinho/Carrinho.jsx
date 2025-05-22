import './Carrinho.css';

function Carrinho({ itens }) {
    return (
        <div className="carrinho-container">
            <h3>Carrinho ({itens.length})</h3>
            {itens.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                itens.map((item, index) => (
                    <div className="item-carrinho" key={index}>
                        <img src={item.imagem} alt={item.nome} />
                        <div>
                            <strong>{item.nome}</strong>
                            <p>R$ {item.valor.toFixed(2)}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Carrinho;
