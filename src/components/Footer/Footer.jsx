import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logoFooter.png';

export default function Footer() {
  return (
    <Footer>
      <Link className="lien-footer">
        <h1>Page footer</h1>
        <img src={logo} alt='Logo kaza'/>
      </Link>
    </Footer>
  );
}
