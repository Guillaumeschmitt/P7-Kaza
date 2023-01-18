import React from "react";
import { NavLink } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logoFooter from '../../assets/logoFooter.png';
import './Error.css'

export default function Error() {
  return (
    <div>
      <Header />
      <div className="containerError">
        <h1 className="erreur404">404</h1>
        <h2 className="oups">Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to="/" className="retour">
            Retourner sur la page d’accueil
        </NavLink>
      </div>
      <Footer img={logoFooter}/>
    </div>
  );
}
