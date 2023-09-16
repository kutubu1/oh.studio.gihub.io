
import React from 'react'
import imgOne from '../Assetz/imageOne.jpeg';
import imgTwo from '../Assetz/asset 1.jpeg';
import imgThree from '../Assetz/asset 2.jpeg';
import imgFour from '../Assetz/asset 3.jpeg';
import imgFive from '../Assetz/asset 4.jpeg';
import imgSix from '../Assetz/asset 5.jpeg';
import imgSev from '../Assetz/asset 6.jpeg';
import imgEight from '../Assetz/asset 7.jpeg';
import imgNine from '../Assetz/asset 8.jpeg';
import imgTen from '../Assetz/asset 10.svg';


export const Gallery = () => {
  return (
    <div className='gallery-container'>
        <div className="gallery-wrapper">
            <div className="gallery-One justify-center mt-4 p-5 sm:flex md:flex lg:flex xl:flex">
            <img src={imgOne} alt='image one' className='imageOne w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            <img src={imgTwo} alt='image two' className='imageTwo w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            </div>
            <div className="gallery-two justify-center sm:flex  md:flex lg:flex xl:flex mt-4 p-5">
            <img src={imgThree} alt='image three' className='imageThree w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            <img src={imgFour} alt='image four' className='imageFour w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            </div>
            <div className="gallery-three justify-center sm:flex md:flex lg:flex xl:flex mt-4 p-5">
            <img src={imgFive} alt='image five' className='imageFive w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            <img src={imgSix} alt='image six' className='imageSix w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg '/>
            </div>
            <div className="gallery-three justify-center sm:flex md:flex lg:flex xl:flex mt-4 p-5">
            <img src={imgSev} alt='image Seven' className='imageSeven w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            <img src={imgEight} alt='image Eight' className='imageEight w-1/2 m-2 p-7 hover:scale-105 translate-x-3 rounded-lg'/>
            </div>
            
        </div>

    </div>
  )
}
