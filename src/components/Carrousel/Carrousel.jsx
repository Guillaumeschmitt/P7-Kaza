import React, {useState} from 'react';
import "./Carrousel.css";
import CarrouselGauche from "../../assets/carrouselGauche.svg";
import CarrouselDroite from "../../assets/carrouselDroite.svg";

export default function Carrousel({ slides }) {
  
const [currentImage, setCurrentImage] = useState(0);

  const imageTotal = slides.length;

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? imageTotal - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === imageTotal - 1 ? 0 : currentImage + 1);
  };

  const ImagePrevious = <img src={CarrouselGauche} alt="Image precedente" />;

  

  const ImageNext = <img src={CarrouselDroite} alt="Image suivante" />;


  return (
    <div className='containerCarrousel'>

    
        
        {imageTotal > 1 && (
          <button onClick={nextImage} className="nextButton">
            {ImageNext}
          </button>
        )}
        
      {imageTotal > 1 && (
          <button onClick={previousImage} className="previousButton">
            {ImagePrevious}
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


