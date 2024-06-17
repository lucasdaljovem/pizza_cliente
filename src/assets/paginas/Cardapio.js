import React from 'react';
import products from '../produtos/Products';
import '../produtos/ProductCard.css';
import adornoSabor from '../produtos/imgs/adornoSabor.png';
import ProductList from '../produtos/ProductList'; // Importa o ProductList

const Cardapio = () => {
  const pizzaSalgada = products.filter(product => product.category === 'Pizza Salgada');
  const pizzaDoce = products.filter(product => product.category === 'Pizza Doce');
  const bebidas = products.filter(product => product.category === 'Bebidas');

  return (
    <div className="container mt-5">
      <div className="category-section">
        <div className="category-header">
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
          <h2 className="category-title" style={{ color: '#F0B872' }}>Pizza Salgada</h2>
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
        </div>
        <ProductList products={pizzaSalgada} /> {/* Usa ProductList */}
      </div>
      
      <div className="category-section">
        <div className="category-header">
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
          <h2 className="category-title" style={{ color: '#F0B872' }}>Pizza Doce</h2>
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
        </div>
        <ProductList products={pizzaDoce} /> {/* Usa ProductList */}
      </div>
      
      <div className="category-section">
        <div className="category-header">
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
          <h2 className="category-title" style={{ color: '#F0B872' }}>Bebidas</h2>
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
        </div>
        <ProductList products={bebidas} /> {/* Usa ProductList */}
      </div>
    </div>
  );
};

export default Cardapio;
