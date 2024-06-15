import React, { useState } from 'react';
import './ProductCard.css';
import TelaConfirmar from './TelaConfirmar';

const ProductCard = ({ product, description, image, price }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="col-md-6">
      <div className="card product-card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#C1000F' }}>
            <img src={image} className="img-fluid rounded-start" alt={product} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product}</h5>
              <div className="description-price-container" style={{ backgroundColor: 'rgba(234, 148, 83, 0.7)' }}>
                <p className="card-text description">{description}</p>
                <p className="card-text price"><strong>{price}</strong></p>
              </div>
              <button className="btn btn-primary add-to-cart-button font-weight-bold rounded-pill" onClick={handleShowModal}>
                ADICIONAR AO CARRINHO <i className="bi bi-cart-plus" style={{ fontSize: '20px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TelaConfirmar show={showModal} handleClose={handleCloseModal} product={product} />
    </div>
  );
};

export default ProductCard;
