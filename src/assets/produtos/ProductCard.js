import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css';

const ProductCard = ({ product, description, image, price }) => {
  return (
    <div className="col-md-6">
      <div className="card product-card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#C1000F' }}> {/* Altera o background da imagem */}
            <img src={image} className="img-fluid rounded-start" alt={product} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product}</h5>
              {/* Novo container para description e price com fundo na cor #EA9453 e opacidade 70% */}
              <div className="description-price-container" style={{ backgroundColor: '#EA9453' }}> {/* Cor com opacidade */}
                <p className="card-text description">{description}</p>
                <p className="card-text price"><strong>{price}</strong></p>
              </div>
              <button className="btn btn-primary add-to-cart-button font-weight-bold rounded-pill">ADICIONAR AO CARRINHO <i className="bi bi-cart-plus" style={{ fontSize: '20px' }}></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
