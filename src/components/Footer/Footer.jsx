import React from "react";
import "./Footer.css"


export default function Footer(logoFooter) {
  return (
    <div className="ContainerFooter">
      <img className="Logo-Footer" src={logoFooter.img} alt="Logo Footer" />
      <p className="Copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
