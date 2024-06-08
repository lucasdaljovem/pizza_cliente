import React from 'react';
import NavbarComponent from './assets/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerComponent from './assets/banner/BannerComponent';
import FooterComponent from './assets/footer/FooterComponent';
import ProductCard from './assets/produtos/ProductCard.js';
import pizzaPeperoniImage from './pizzaPeperoniImage.png'
import { Outlet } from 'react-router-dom/dist/index.js';
import './App.css';

const products = [
  {
    product: "Pizza Peperoni",
    description: "Fatias generosas de pepperoni picante sobre uma camada de queijo mussarela derretido e molho de tomate.",
    image: pizzaPeperoniImage,
    price: "R$43,90"
  },
  {
    product: "Pizza Portuguesa",
    description: "Uma combinação saborosa de presunto, ovos cozidos, cebola, pimentão, azeitonas e queijo mussarela.",
    image: pizzaPeperoniImage, // Adicione a imagem correta
    price: "R$40,90"
  },
  // Adicione mais produtos aqui
];

function App() {
  return (
    <div className="App">
      {/* Para reaproveitar elementos */}
       <Outlet/>
      <header>
        <NavbarComponent />
      </header>
      <FooterComponent />
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header>
//         <NavbarComponent />
//       </header>
//       <div className="container-fluid mt-5">
//         <BannerComponent />
//         <div className="row">
//           {products.map((product, index) => (
//             <ProductCard
//               key={index}
//               product={product.product}
//               description={product.description}
//               image={product.image}
//               price={product.price}
//             />
//           ))}
//         </div>
//       </div>
//       {/* <FooterComponent /> */}
//     </div>
//   );
// }
//
//export default App;
