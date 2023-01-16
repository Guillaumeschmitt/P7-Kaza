import React from 'react';
import './Banner.css';
import BannerImage from '../../assets/backgroundBanner.png';

export default function Banner({title}) {
  return (
    <div className='ContainerBanner'>
        <img className='bannerImg' src={BannerImage} alt="image" />
        {title && (
            <h1 className='bannerTitle'>{title}</h1>
        )}
    </div>
  );
};
