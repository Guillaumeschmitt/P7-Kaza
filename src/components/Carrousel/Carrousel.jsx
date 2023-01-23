import React, {useState} from 'react';
import "./Carrousel.css";
import CarrouselGauche from "../../assets/carrouselGauche.svg";
import CarrouselDroite from "../../assets/carrouselDroite.svg";
import CarrouselGaucheMobile from "../../assets/carrouselGaucheMobile.svg";
import CarrouselDroiteMobile from "../../assets/carrouselDroiteMobile.svg";


export default function Carrousel({ slides }) {
  
const [currentImage, setCurrentImage] = useState(0);

  const imageTotal = slides.length;

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageTotal - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === imageTotal - 1 ? 0 : currentImage + 1);
  };

  const Previous = <img src={CarrouselGauche} alt="precedente" />;

  const Next = <img src={CarrouselDroite} alt="suivante" />;

  const PreviousMobile = <img src={CarrouselGaucheMobile} alt="precedente" />;

  const NextMobile = <img src={CarrouselDroiteMobile} alt="suivante" />;

  return (
    <div className='containerCarrousel'>

    
        
        {imageTotal > 1 && (
          <button onClick={nextImage} className="nextButton">
            {Next}
          </button>
        )}
        
        {imageTotal > 1 && (
          <button onClick={nextImage} className="nextButtonMobile">
            {NextMobile}
          </button>
        )}

        {imageTotal > 1 && (
          <button onClick={previousImage} className="previousButton">
            {Previous}
          </button>
        )}

        {imageTotal > 1 && (
          <button onClick={previousImage} className="previousButtonMobile">
            {PreviousMobile}
          </button>
        )}


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
    </div>
  )
}


