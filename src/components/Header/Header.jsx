import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import "./Header.css";
import logoHeader from '../../assets/logo.png';

export default function Header() {
  return (
    <div className="containerHeader">
      <div className="Header">
        <img className="Logo" src={logoHeader} alt="Logo Kasa" />
        <nav>
          <NavBar />
        </nav>
      </div>
    </div>
  );
}