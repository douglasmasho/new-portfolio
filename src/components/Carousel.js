import React, {useState, useContext, useEffect} from 'react'
import Carousel, { Dots,  arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageOne from "../assets/memos.jpg"
import ImageTwo from "../assets/design.jpg"
import ImageThree from "../assets/dev.jpg"
import ArrowLeft from "../assets/arrows_left.svg";
import ArrowRight from "../assets/arrows_right.svg";
import { ThemeContext } from '../contexts/ThemeContext';

const CarouselComp = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  useEffect(()=>{
    console.log(theme)
  })

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
       textComp = (<>
       <h1 class="carousel__text carousel__text--1" style={{color: theme.accent}}>I AM</h1>
       <h1 class="carousel__text carousel__text--2" style={{color: theme.accent}}>Douglas</h1>
                    </>)
       break;
    case "dev": 
       textComp = (<>
       <h1 class="carousel__text carousel__text--1" style={{color: theme.accent}}>I DO</h1>
       <h1 class="carousel__text carousel__text--2" style={{color: theme.accent}}>Dev</h1>
                    </>)
       break;
    case "design": 
       textComp = (<>
       <h1 class="carousel__text carousel__text--1" style={{color: theme.accent}}>I DO</h1>
       <h1 class="carousel__text carousel__text--2" style={{color: theme.accent}}>Design</h1>
                    </>)
       break;
    default: 
       textComp = (<>
       <h1 class="carousel__text carousel__text--1" style={{color: theme.accent}}>I AM</h1>
       <h1 class="carousel__text carousel__text--2" style={{color: theme.accent}}>Douglas</h1>
                    </>)
       break;
  }
    return (
        <div className="center-hrz" style={{position: "relative"}}>
        <Carousel className=" carousel__container center-hrz"
        value={theme.value}
        onChange={setTheme}
            plugins={[
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: <button className="carousel__arrow"><i class="fas fa-chevron-left" style={{color: theme.accent, display: displayPropLeft}}></i></button>,
                    arrowLeftDisabled:<button className="carousel__arrow"><i class="fas fa-chevron-left" style={{color: theme.accent, display: displayPropLeft}}></i></button>,
                    arrowRight: <button className="carousel__arrow"><i class="fas fa-chevron-right" style={{color: theme.accent, display: displayPropRight}}></i></button>,
                    arrowRightDisabled: <button className="carousel__arrow"><i class="fas fa-chevron-right" style={{color: theme.accent, display: displayPropRight}}></i></button>,
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
