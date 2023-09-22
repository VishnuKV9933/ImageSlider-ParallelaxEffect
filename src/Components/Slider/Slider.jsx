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
    const imageArray =[

        {src:image5,j:-400,i:-400},
        {src:image2,j:-200,i:-200},
        {src:image3,j:0,i:0},
        {src:image4,j:-200,i:200},
        {src:image1,j:-400,i:400},
       
    ]
    const [right, setright] = useState('');
    const [left, setLeft] = useState('');
    const [leftBlock, setLeftBlock] = useState(2);
    const [rightBlock, setRightBlock] = useState(2);


 
    const MoveRight = () => {

        if (rightBlock <= 5 && leftBlock > 0) {
        if(right=='changed'){
            setright('changeAgain')
        }else{

            setright('changed')
        }
            setRightBlock(rightBlock + 1);
            setLeftBlock(leftBlock - 1);
            console.log("block");
          }
      };

      const Moveleft = () => {
          
          if(rightBlock>0 && leftBlock<=5){
        if(left=='changed'){
            setLeft('changeAgain')
        }else{

            setLeft('changed')
        }


            setRightBlock(rightBlock-1)
            setLeftBlock(leftBlock+1)
        }
       
      };
    
  return (
    <div className='container'>
      <div className='slider'>

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