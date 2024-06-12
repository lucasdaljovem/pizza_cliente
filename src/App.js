import React from 'react';
import NavbarComponent from './assets/navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerComponent from './assets/banner/BannerComponent';
import FooterComponent from './assets/footer/FooterComponent';
import ProductCard from './assets/produtos/ProductCard';
import products from './assets/produtos/produtos'; // Importe os produtos do novo arquivo
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent />
      </header>
      <div className='container-fluid mt-5'>
       {/* Para reaproveitar elementos */}
      <Outlet/>
      </div>
    </div>
  );
}
export default App;
//---------------------------------App.js breach cards-------------------------------------------------------------------------
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

// export default App;
