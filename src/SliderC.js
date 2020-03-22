import React from "react";

// css for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const SliderC = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='img-box'>
          <img
            src='http://development.truegaming.org/assets/Images/True-Gaming---Community-Banner.jpg'
            alt='img'
          />
        </div>
        <div className='img-box'>
          <img
            src='http://development.truegaming.org/assets/Images/True-Gaming---Community-Banner.jpg'
            alt='img'
          />
        </div>
        <div className='img-box'>
          <img
            src='http://development.truegaming.org/assets/Images/True-Gaming---Community-Banner.jpg'
            alt='img'
          />
        </div>
        <div className='img-box'>
          <img
            src='http://development.truegaming.org/assets/Images/True-Gaming---Community-Banner.jpg'
            alt='img'
          />
        </div>
        <div className='img-box'>
          <img
            src='http://development.truegaming.org/assets/Images/True-Gaming---Community-Banner.jpg'
            alt='img'
          />
        </div>
        <div className='img-box'>
          <img
            src='http://development.truegaming.org/assets/Images/True-Gaming---Community-Banner.jpg'
            alt='img'
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderC;
