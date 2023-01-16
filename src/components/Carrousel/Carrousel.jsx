import React, {useState} from 'react';
import "./Carrousel.css";
import CarrouselGauche from "../../assets/carrouselGauche.svg";
import CarrouselDroite from "../../assets/carrouselDroite.svg";

export default function Carrousel({ slides }) {
  const [currentImage, setCurrentImage] = useState(0);
  const imageTotal = slides.lenght;
  const ImagePrevious = <img src={CarrouselGauche} alt="Image précédente" />;
  const ImageNext = <img src={CarrouselDroite} alt="Image Suivante" />;

  const nextImage = () => {
    setCurrentImage(currentImage === imageTotal - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageTotal -1 : currentImage -1);
  }


  return (
    <div className='containerCarrousel'>
     <div className="containerArrow">
        {imageTotal > 1 && (
          <button onClick={previousImage} className="previousButton">
            {ImagePrevious}
          </button>
        )}

        {imageTotal > 1 && (
          <button onClick={nextImage} className="nextButton">
            {ImageNext}
          </button>
        )}
      </div>

      {slides.map((slide, index) => {
        return (
          <div key={index} className="SliderImage">
            {index === currentImage && (
              <img className="imageSlide" src={slide} alt="Slider" />
            )}
          </div>
        );
      })}

      {imageTotal > 1 && (
        <div className="counterContainer">
          {" "}
          <p className="counter">
            {currentImage+1} / {imageTotal}
          </p>
        </div>
      )}
      <p>{ImageNext}</p>
    </div>
  )
}
