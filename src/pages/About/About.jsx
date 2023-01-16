import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import background from "../../assets/backgroundBannerAbout.png"
import logoFooter from '../../assets/logoFooter.png';
import style from "styled-components";
import './About.css'

export default function About() {
  const CollapseStyleLocation = style.div`
  width: 70%;
  height: auto;
  margin: 30px auto 0;
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;
  return (
    <div>
      <Header />
      <div className="ContainerBannerAbout">
        <img className='bannerImg' src={background} alt="image" />
      <CollapseStyleLocation>
      <Slide className="Fiabilité"
                title="Fiabilité"
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
      </CollapseStyleLocation>
      
      <CollapseStyleLocation>
       <Slide className="Respect"
              title="Respect"
              description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      </CollapseStyleLocation>

      <CollapseStyleLocation>
       <Slide className="Service"
       title="Service"
       description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
       </CollapseStyleLocation>

       <CollapseStyleLocation>
       <Slide className="Sécurité"
              title="Sécurité"
              description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </CollapseStyleLocation> 
        </div>
      <Footer img={logoFooter}/>
    
    </div>
  );
}
