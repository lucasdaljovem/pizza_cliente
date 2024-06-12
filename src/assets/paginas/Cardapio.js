import React from "react";
import ProductCard from "../produtos/ProductCard";
import products from "../produtos/produtos";

const Cardapio = () => {
  return (
    <div className="container-fluid mt-5">
        <div className="row">
          {products.map((product, index) => (
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
  )
};

export default Cardapio;