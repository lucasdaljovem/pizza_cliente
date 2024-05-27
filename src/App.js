//imports here
import React from 'react';

import NavbarComponent from './assets/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavbarComponent />
        <div className="container mt-5">
          <h1>Conteúdo da Página</h1>
          {/* Resto do conteúdo da página */}
        </div> {/* Esta div estava faltando a tag de fechamento */}
      </div>
    </div>
  );
}

export default App;
