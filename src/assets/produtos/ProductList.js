import React from 'react';
import ProductCard from './ProductCard';  // Importa o componente ProductCard
import products from './Products';  // Importa o array de produtos

const ProductList = () => {
  return (
    <div className="row">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
