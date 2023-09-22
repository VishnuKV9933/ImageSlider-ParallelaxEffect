import React, { useRef, useState } from 'react';
import './Slider.css'
import image1 from '../../ASSETS/annie-spratt-pDGNBK9A0sk-unsplash.jpg'
import image2 from '../../ASSETS/casey-horner-75_s8iWHKLs-unsplash.jpg'
import image3 from '../../ASSETS/casey-horner-IrvTUUn-pp0-unsplash.jpg'

import image4 from '../../ASSETS/clement-m-F_-0BxGuVvo-unsplash.jpg'

import image5 from '../../ASSETS/erik-mclean-2Wv9VnwzeeI-unsplash.jpg'
import {BiSolidRightArrowSquare,BiSolidLeftArrowSquare} from 'react-icons/bi'
import Image from '../Image/Image';

function Slider() {
   const currentref=useRef()
    const imageArray =[

        {src:image5,j:-400,i:-400},
        {src:image2,j:-200,i:-200},
        {src:image3,j:0,i:0},
        {src:image4,j:-200,i:200},
        {src:image1,j:-400,i:400},
       
    ]
    const [right, setright] = useState('');
    const [left, setLeft] = useState('');

 
    const MoveRight = () => {

        if(right=='changed'){
            setright('changeAgain')
        }else{

            setright('changed')
        }
       
      };

      const Moveleft = () => {

        if(left=='changed'){
            setLeft('changeAgain')
        }else{

            setLeft('changed')
        }
       
      };
    
  return (
    <div className='container'>
      <div className='slider'>

        {/* <img style={{ transform: `translateX(calc(-405px + ${i}%))   translateZ(calc(50px * ${j} * ${k}))` }} className='image1' src={image1} alt="" />
        <img style={{ transform: `translateX(calc(-250px + ${i}%))    translateZ(calc(100px * ${j} * ${k}))` }} className='image2' src={image2} alt="" />
        <img style={{ transform: `translateX(calc(0px + ${i}%))     translateZ(calc(200px * ${j} * ${k})) ` }}  className='image3' src={image3} alt="" />
        <img style={{ transform: `translateX(calc(205px + ${i}%))     translateZ(calc(100px * ${j} * ${k}))` }}  className='image4' src={image4} alt="" />
    <img style={{ transform: `translateX(calc(405px + ${i}%))  translateZ(calc(50px * ${j} * ${k}))` }}  className='image5' src={image5} alt="" /> */}
    
    {
        imageArray.map((elem,index)=>{
            return(
  
                <Image key={index} image={elem} right={right} left={left} index={index}/>
                )
            })
        }
      
        </div>
        <div className='button-container'>
        <div onClick={Moveleft}>
          <BiSolidLeftArrowSquare />
        </div>
        <div onClick={MoveRight}>
          <BiSolidRightArrowSquare />
        </div>
      </div>
    </div>
  );
}

export default Slider;