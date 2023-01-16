import React from "react";
import logoHeader from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img src={logoHeader} alt='Logo kaza'/>
      <nav>
      <NavLink
            to="/"
            className={({ isactive }) => {
                return isactive ? "activeLink" : "";
            }}
        >
            Accueil
        </NavLink>

        <NavLink
            to="/About"
            className={({ isactive }) => {
                return isactive ? "activeLink" : "";
            }}
        >
            A propos
        </NavLink>
      </nav>
    </header>
  );
}
