import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Slider() {
  return (
  <OwlCarousel items={1}
                loop={true}
                nav={true}
                className='owl-theme'
  >
     <div className='item'>
        <h4>1</h4>
    </div>
    <div classNamw='item'>
        <h4>2</h4>
    </div>
    <div className='item'>
        <img src='images/s4.png'  alt=""/>
        <h4>3</h4>
    </div>
                </OwlCarousel>

  )
}
