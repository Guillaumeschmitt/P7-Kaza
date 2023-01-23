import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import background from "../../assets/backgroundBannerAbout.png"
import logoFooter from '../../assets/logoFooter.png';
import './About.css'

export default function About() {
  return (
    <div>
       <div className="ContainerBannerAbout">
      <Header className="HeaderAbout"/>
      <div className="ContainerAbout">
        <img className='bannerImg' src={background} alt="" />
        <div className="SlideAbout">
      <div className="CollapseStyleLocation">
      <Slide className="Fiabilité"
                title="Fiabilité"
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
      </div>
      
      <div className="CollapseStyleLocation">
       <Slide className="Respect"
              title="Respect"
              description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      </div>

      <div className="CollapseStyleLocation">
       <Slide className="Service"
       title="Service"
       description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
       </div>

       <div className="CollapseStyleLocation">
       <Slide className="Sécurité"
              title="Sécurité"
              description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div> 
        </div>
        </div>
        </div>
      <Footer img={logoFooter}/>
    
    </div>
  );
}
