import React, {useState} from 'react'
import Carousel, { Dots,  arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageOne from "../assets/memos.jpg"
import ImageTwo from "../assets/dev.jpg"
import ArrowLeft from "../assets/arrows_left.svg";
import ArrowRight from "../assets/arrows_right.svg";



const CarouselComp = () => {
    const [value, setValue] = useState();
    const onChange = ()=>{

    }
    return (
        <div className="center-hrz">
        <Carousel className=" carousel__container center-hrz"
            plugins={[
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button className="carousel__arrow"><img src={ArrowLeft} alt="" /></button>,
                    arrowLeftDisabled:<button className="carousel__arrow"><img src={ArrowLeft} alt="" /></button>,
                    arrowRight: <button className="carousel__arrow"><img src={ArrowRight} alt="" /></button>,
                    arrowRightDisabled: <button className="carousel__arrow"><img src={ArrowRight} alt="" /></button>,
                    addArrowClickHandler: true,
                  }
                }
              ]}
        
        >
            <div className="carousel__item" style={{backgroundImage: `url(${ImageOne})`}}>
               
            </div>
            <div className="carousel__item" style={{backgroundImage: `url(${ImageTwo})`}}>
                
            </div>
        </Carousel>
        </div>
    )
}

export default CarouselComp
