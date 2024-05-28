import React from 'react';
import NavbarComponent from './assets/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerComponent from './assets/banner/BannerComponent';
import FooterComponent from './assets/footer/FooterComponent';


function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent />
      </header>

      <div className="container-fluid mt-5" style={{ paddingLeft: '0', paddingRight: '0', marginTop: '0px' }}>
        <BannerComponent />
        {/* Resto do conteúdo da página */}
      </div>

      <FooterComponent />
    </div>
  );
}

export default App;
