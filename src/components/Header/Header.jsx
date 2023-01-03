import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <header>
      <img src={logo} alt='Logo kaza'/>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about" element={<About />}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}
