import React from 'react';
import './BannerComponent.css';
import pizzaBanner from '../../assets/banner/pizzaBanner.png'; // Certifique-se de que o caminho está correto
import happyPizza from '../../assets/banner/happyPizza.png'; // Certifique-se de que o caminho está correto

const BannerComponent = () => {
  return (
    <div className="container-fluid degrade">
      <div className="row align-items-start mt-4 position-relative">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="banner-content">
            <h1 className="display-4">
              COMBO<img src={happyPizza} className="img-fluid happy-pizza" alt="happy pizza" /><br /> SUPREMO
            </h1>
            <p className="lead"><strong>1 PIZZA GRANDE</strong><br /><strong>+ 1 REFRIGERANTE 2L</strong></p>
            <div className="highlight-section">
              <p><strong>A felicidade está a algumas fatias de distância!</strong><br /><strong>Descubra o verdadeiro sabor da pizza aqui na Sapore Di Pizza</strong></p>
              <a className="btn btn-custom btn-lg" href="#" role="button">Peça agora</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
          <img src={pizzaBanner} className="img-fluid pizza-banner" alt="Pizza Banner" />
          <div className="background-coresfundo"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
