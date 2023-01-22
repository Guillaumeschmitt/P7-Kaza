import React from "react";
import Header from '../../components/Header/Header.jsx'
import Banner from "../../components/Banner/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Home.css';
import logoHeader from '../../assets/logo.png';
import logoFooter from '../../assets/logoFooter.png';

export default function Home() { 
  return (
    <div>
      <div className="containerAccueil">
      <Header img={logoHeader} />
      <div className="containerHome">
      <Banner title="Chez vous, partout et ailleurs"/>
      </div>
      <Cards />
      </div>
      <Footer img={logoFooter} />
    </div>
  );
}
