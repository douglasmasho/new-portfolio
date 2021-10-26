import React,{useState}  from 'react';
import { galleryData } from './galleryData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const GalleryItem = () => {
    const [current, setCurrent] = useState(0);
    const length = galleryData.length;

    const nextSlide = ()=>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    console.log(current)

    if(!Array.isArray(galleryData) || galleryData.length <= 0){
        return null;
    }
    return (
        <div>
              <div className="slider">
                  <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                  <FaArrowAltCircleRight className="right-arrow"  onClick={nextSlide  }/>

                {galleryData.map((el, index)=>{
                    return (

                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {
                               index === current && (
                                   <div className="center-hrz">
                                     <img src={el.image} alt="design image" className="slider__image"/>
                                   </div>
                               ) 
                            }
                        </div>
                    )
                })}
              </div>

            
        </div>
    )
}

export default GalleryItem
