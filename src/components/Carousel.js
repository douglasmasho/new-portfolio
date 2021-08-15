import React, {useState, useContext, useEffect} from 'react'
import Carousel, { Dots,  arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageOne from "../assets/memos.jpg"
import ImageTwo from "../assets/design.jpg"
import ImageThree from "../assets/dev.jpg"
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
        <div className="center-hrz" style={{position: "relative"}}>
        <Carousel className=" carousel__container center-hrz"
        value={theme.value}
        onChange={setTheme}
        animationSpeed ={900}
            plugins={[
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button className="carousel__arrow"><i className="fas fa-chevron-left" style={{color: theme.accent, display: displayPropLeft}}></i></button>,
                    arrowLeftDisabled:<button className="carousel__arrow"><i className="fas fa-chevron-left" style={{color: theme.accent, display: displayPropLeft}}></i></button>,
                    arrowRight: <button className="carousel__arrow"><i className="fas fa-chevron-right" style={{color: theme.accent, display: displayPropRight}}></i></button>,
                    arrowRightDisabled: <button className="carousel__arrow"><i className="fas fa-chevron-right" style={{color: theme.accent, display: displayPropRight}}></i></button>,
                    addArrowClickHandler: true,
                  }
                }
              ]}
        >

            <div className="carousel__item" style={{backgroundImage: `url(${ImageTwo})`}}>
            </div>
            <div className="carousel__item" style={{backgroundImage: `url(${ImageOne})`}}>
            </div>
            <div className="carousel__item" style={{backgroundImage: `url(${ImageThree})`}}>   
            </div>
        </Carousel>
        {textComp}
        </div>
    )
}

export default CarouselComp
