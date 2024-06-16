import React, { useState, useEffect } from 'react';
import './TelaConfirmar.css';
import product from './produtos';

const TelaConfirmar = ({ show, handleClose, product }) => {
  const [size, setSize] = useState('Médio');
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState('');

  useEffect(() => {
    if (product && product.category) {
      setSize('Médio');
    }
  }, [product]);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(99, e.target.value));
    setQuantity(value);
  };
  const handleObservationsChange = (e) => setObservations(e.target.value);

  const isPizza = product.category === 'Pizza Salgada' || product.category === 'Pizza Doce';

  return (
    <div className={`modal fade ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-dialog-mobile" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.product}</h5>
            <button type="button" className="close-button" onClick={handleClose}>
              <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="modal-body">
            {isPizza && (
              <div className="form-group">
                <label>Tamanho</label>
                {['Grande', 'Médio', 'Pequeno'].map((sizeOption) => (
                  <div key={sizeOption} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      value={sizeOption}
                      checked={size === sizeOption}
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label">
                      {`${sizeOption} R$${product.prices[sizeOption].toFixed(2)}`}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <div className="form-group">
              <label className="mb-0">Observações:</label>
              <div className="d-flex align-items-center">
                <div className="input-group input-group-observations">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="bi bi-pencil-square"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-observations"
                    placeholder="Adicione suas observações aqui"
                    value={observations}
                    onChange={handleObservationsChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group d-flex align-items-center">
              <label className="mr-2 mb-0">Quantidade:</label>
              <input
                type="number"
                className="form-control form-control-quantity text-center"
                min="1"
                max="99"
                value={quantity}
                onChange={handleQuantityChange}
                style={{ width: '60px' }}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary button-secondary mr-2" onClick={handleClose}>
              Continuar Comprando
            </button>
            <button type="button" className="btn btn-primary button-primary ml-2" onClick={() => {/* lógica para concluir pedido */}}>
              Concluir Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaConfirmar;