import React from 'react';
import products from '../produtos/produtos';
import '../produtos/ProductCard.css';
import adornoSabor from '../produtos/imgs/adornoSabor.png';
import ProductCard from '../produtos/ProductCard'; // Certifique-se de que o caminho está correto

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
        <div className="row">
          {pizzaSalgada.map((product, index) => (
            <ProductCard
              key={index}
              product={product.product}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      
      <div className="category-section">
        <div className="category-header">
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
          <h2 className="category-title" style={{ color: '#F0B872' }}>Pizza Doce</h2>
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
        </div>
        <div className="row">
          {pizzaDoce.map((product, index) => (
            <ProductCard
              key={index}
              product={product.product}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      
      <div className="category-section">
        <div className="category-header">
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
          <h2 className="category-title" style={{ color: '#F0B872' }}>Bebidas</h2>
          <img src={adornoSabor} alt="Adorno Sabor" className="category-decoration" />
        </div>
        <div className="row">
          {bebidas.map((product, index) => (
            <ProductCard
              key={index}
              product={product.product}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
