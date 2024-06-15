import React from "react";
import BannerComponent from "../banner/BannerComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import SobreComponent from "../sobre/SobreComponent";

import './Home.css'

const Home = () => {
  return(
    <div className="Home">
    <header>
        <NavbarComponent/>
    </header>
    <div className="container-fluid mt-5">
       <BannerComponent />
       <div>
        <br></br>
        <SobreComponent /> 
       </div>
    </div>
    </div>


    )
};

export default Home;