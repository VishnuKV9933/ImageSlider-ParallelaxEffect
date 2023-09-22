import React, { useEffect, useImperativeHandle, useState } from 'react';
import './Image.css'
function Image({image,right,left,index}) {



    const [i, setI] = useState(image.i);
    const [j, setJ] = useState(image.j);
    const [count, setCount] = useState(index+1);
    const mid=3

    useEffect(()=>{
        if(right){
            console.log('right');
            setI(i+200)

          if(count >= mid){
            setJ(j-200)
            console.log(j);
          }else{
            setJ(j+200)
          }
            setCount(count+1)
        }
    },[right])


      useEffect(()=>{
        if(left){
            console.log('right');
            
            if(count > mid){
                setJ(j+200)
                console.log(index);
                setI(i-200)
            }else{
                setI(i-200)
              setJ(j-200)
            //   console.log(j);
          }
            setCount(count-1)
        }
    },[left])

 
  return (
    
      
    <div style={{ transform: `translateX(calc(${i}px )) translateZ(calc(${j}px  ))` }}  className='image'>
      <img className='image-size' src={image.src} alt="" />
    </div>
  );
}

export default Image;