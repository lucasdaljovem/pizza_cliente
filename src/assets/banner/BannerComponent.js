import React from 'react';
import './BannerComponent.css';

const BannerComponent = () => {
  return (
    <div className="container-fluid degrade">
      <div className="banner-content mt-4">
        <h1 className="display-4">COMBO <br /> SUPREMO</h1>
        <p className="lead">Este é um banner de exemplo criado com Bootstrap e React.</p>
        <p>Utilize esta área para destacar informações importantes.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Peça agora</a>
      </div>
    </div>
  );
};

export default BannerComponent;

