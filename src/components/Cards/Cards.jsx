import React from 'react'
import Data from "../../data/logements.json"
import "./Cards.css"

export default function Cards() {
    return (
      <div className="ContainerCard">
        <div className="Background">
          {Data.map((Location) => {
            return (
              <a href={`/product/${Location.id}`} key={Location.id}>
                <div className="box">
                  <div className="box-content">
                    <p className="Title">{Location.title}</p>
                  </div>
                  <img className="Cover" src={Location.cover} alt="Location" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }