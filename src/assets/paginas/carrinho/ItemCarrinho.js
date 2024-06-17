import React from 'react';
import './Carrinho.css';

const ItemCarrinho = ({ item }) => {
  const { product, size, price, observations } = item;

  return (
    <div className="cart-item">
      <div className="pizza-image-container">
        <img src={product.image} className="pizza-image" alt={product.product} />
      </div>
      <div className="cart-item-details">
        <h4 className="item-name">{product.product}</h4>
        <p className="item-size">Tamanho: {size}</p>
        <p className="item-price">R$ {price.toFixed(2)}</p>
        <div className="item-observations">
          <span>Observações:</span>
          <input
            type="text"
            className="observations-input"
            placeholder="Adicione suas observações aqui"
            value={observations}
            readOnly
          />
        </div>
        <button className="remove-item-button">
          <i className="bi bi-x" style={{ color: 'red' }}></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCarrinho;
