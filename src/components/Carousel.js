import React, {useState, useContext, useEffect} from 'react'
import Carousel, { Dots,  arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageOne from "../assets/coder.svg"
import ImageTwo from "../assets/Group 61.svg"
import ImageThree from "../assets/Group 60.svg"
import ArrowLeft from "../assets/arrows_left.svg";
import ArrowRight from "../assets/arrows_right.svg";
import { ThemeContext } from '../contexts/ThemeContext';
import AboutHeader from './headers/AboutHeader';
import DesignHeader from './headers/DesignHeader';
import DevHeader from './headers/DevHeader';


const CarouselComp = () => {
  const {theme, setTheme} = useContext(ThemeContext);




  let displayPropLeft;
  switch(theme.value){
    case 0: 
      displayPropLeft = "none"
      break;
      default: 
     displayPropLeft = "block"
      break;
  }
  let displayPropRight;
  switch(theme.value){
    case 2: 
      displayPropRight = "none"
      break;
      default: 
     displayPropRight = "block"
      break;
  }
  let textComp;
  switch(theme.id){
    case "about": 
       textComp = <AboutHeader accent={theme.accent}/>
       break;
    case "dev": 
       textComp = <DevHeader accent={theme.accent}/>
       break;
    case "design": 
       textComp = <DesignHeader accent={theme.accent}/>
       break;
    default: 
       textComp = <AboutHeader accent={theme.accent}/>
       break;
  }
    return (
        <div className="center-hrz--col" style={{position: "relative"}}>
        <Carousel className=" carousel__container center-hrz"
        value={theme.value}
        onChange={setTheme}
        animationSpeed ={800}
            plugins={[
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button className="carousel__arrow"><i className="lni lni-chevron-left" style={{color: theme.accent, display: displayPropLeft}}></i></button>,
                    arrowLeftDisabled:<button className="carousel__arrow"><i className="lni lni-chevron-left" style={{color: theme.accent, display: displayPropLeft}}></i></button>,
                    arrowRight: <button className="carousel__arrow"><i className="lni lni-chevron-right" style={{color: theme.accent, display: displayPropRight}}></i></button>,
                    arrowRightDisabled: <button className="carousel__arrow"><i className="lni lni-chevron-right" style={{color: theme.accent, display: displayPropRight}}></i></button>,
                    addArrowClickHandler: true,
                  }
                }
              ]}
        >

            <img className="carousel__img layer" data-speed="-10" src={ImageTwo}/>   
            <img className="carousel__img layer" data-speed="-10" src={ImageOne}/>   
            <img className="carousel__img layer" data-speed="-10" src={ImageThree}/>   
            
        </Carousel>
        {textComp}
        <div className="scroll-container center-hrz--col">
          <p class="small-text" style={{color: theme.accent}}>Scroll for more</p>
          <button className="scroll-down"><i className="lni lni-chevron-down" style={{color: theme.accent}}></i></button>
          <div>

          </div>
        </div>
        </div>
    )
}

export default CarouselComp
