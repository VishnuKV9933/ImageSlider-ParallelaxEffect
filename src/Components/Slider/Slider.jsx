import React, { useState } from 'react';
import './Slider.css'
import image1 from '../../ASSETS/annie-spratt-pDGNBK9A0sk-unsplash.jpg'
import image2 from '../../ASSETS/casey-horner-75_s8iWHKLs-unsplash.jpg'
import image3 from '../../ASSETS/casey-horner-IrvTUUn-pp0-unsplash.jpg'

import image4 from '../../ASSETS/clement-m-F_-0BxGuVvo-unsplash.jpg'

import image5 from '../../ASSETS/erik-mclean-2Wv9VnwzeeI-unsplash.jpg'
import {BiSolidRightArrowSquare,BiSolidLeftArrowSquare} from 'react-icons/bi'

function Slider() {
    // const i=2
    // const j=-400
    const [i, setI] = useState(0);
    const [j, setJ] = useState(1);
  return (
    <div className='container'>
      
      <div className='slider'>
      {/* <img style={{ transform: `translateX(calc(105 * -${i}%)) translateZ(${j}px)` }} className='image1' src={image1} alt="" /> */}
        <img style={{ transform: `translateX(calc(-405px + ${i}%))    translateZ(calc(200px * -${j}))` }} className='image1' src={image1} alt="" />
        <img style={{ transform: `translateX(calc(-205px + ${i}%))    translateZ(calc(100px * -${j}))` }} className='image2' src={image2} alt="" />
        <img style={{ transform: `translateX(calc(0px + ${i}%))     translateZ(calc(0px * ${j})) ` }}  className='image3' src={image3} alt="" />
        <img style={{ transform: `translateX(calc(205px + ${i}%))     translateZ(calc(100px * -${j}))` }}  className='image4' src={image4} alt="" />
        <img style={{ transform: `translateX(calc(405px + ${i}%))  translateZ(calc(200px * -${j}))` }}  className='image5' src={image5} alt="" />
      </div>
      <div className='button-container'>
        <div
        onClick={()=>{
            setI(i-100)
            setJ(j-1)
        }}
        >
<BiSolidLeftArrowSquare/>
        </div>
        <div
        onClick={()=>{
            setI(i+100)
            setJ(j+1)
        }}
        >

<BiSolidRightArrowSquare/>
        </div>

      </div>
    </div>
  );
}

export default Slider;