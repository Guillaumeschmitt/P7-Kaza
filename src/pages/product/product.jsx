import React from 'react';
import { useParams } from 'react-router-dom';
import style from "styled-components";
import "./product.css";
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import Error from '../Error/Error.jsx';
import Slide from '../../components/Slide/Slide.jsx';
import etoilePleine from '../../assets/star_rate-24px.svg';
import etoileVide from '../../assets/star_rate-empty-24px.svg';
import dataLogement from '../../data/logements.json';
import logoFooter from '../../assets/logoFooter.png';

const CollapseStyleLocation = style.div`
  width: 85%;
  height: auto;
  margin: 30px auto 0;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
  @media only screen and (min-width: 375px) and (max-width: 424px) {
    width: 100%;
  }
`;

export default function Product() {

  const ID = useParams();
  const logementId = dataLogement.find(
    (theAccomodation) => theAccomodation.id === ID.id
  );
  if (!logementId) {
    return <Error />;
  };
  const Tags = logementId.tags;
  const Equipements = logementId.equipments;
  const Rating = logementId.rating;
  const arrayRating = [];
  
  for (let i = 0; i < Rating; i++) {
    arrayRating.push(
      <img
        key={"pinkStar" + i}
        className="etoile"
        src={etoilePleine}
        alt="Pink Stars"
      />
    );
  }

  for (let a = arrayRating.length; a < 5; a++) {
    arrayRating.push(
      <img
        key={"greyStar" + a}
        className="stars"
        src={etoileVide}
        alt="Grey Stars"
      />
    );
  }

  return (
    <div>
      <Header />
      <div className="ContainerContent">
        <Carrousel slides={logementId.pictures} />

        <div className="contenuContainer">
          <div className="containerTitreLocationTags">
            {logementId && (
              <h1 className="TitreLogement"> {logementId.title}</h1>
            )}
            {logementId && (
              <p className="location">{logementId.location}</p>
            )}

            <div className="tags">
              {Tags.map((tag, eachTag) => (
                <button key={eachTag} className="tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="containerHostRating">
            <div key={logementId.host.name} className="host">
              <p className="name"> {logementId.host.name} </p>
              <img className="picture" src={logementId.host.picture} alt="host" />
            </div>
            <div className="rating">{arrayRating}</div>
          </div>
        </div>

        <div className="collapsesContainer">
          <div className="Collapses">
            <CollapseStyleLocation>
              <Slide
                title="Description"
                description={logementId.description}
              />
            </CollapseStyleLocation>

            <CollapseStyleLocation>
              <Slide
                className="Equipement"
                title="Equipements"
                description={Equipements.map((Equip) => (
                  <li key={Equip} style={{ listStyle: "none" }}>
                    {Equip}
                  </li>
                ))}
              />
            </CollapseStyleLocation>
          </div>
        </div>
      </div>
      <Footer img={logoFooter} />
    </div>
  )
}
