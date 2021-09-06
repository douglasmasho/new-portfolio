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
import Navbar from './Navbar';
import {Route} from "react-router-dom"
import About from './Info/About';
import Dev from './Info/Dev';
import Design from './Info/Design';






const CarouselComp = () => {
  const {theme, setTheme} = useContext(ThemeContext);


  useEffect(()=>{
    document.addEventListener("mousemove", parralax);
    document.addEventListener("mousemove", parralax2);


    function parralax(e){
      document.querySelectorAll(".layer").forEach(layer=>{
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth = e.pageX*speed)/100;
        const y = (window.innerheight = e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }

    function parralax2(e){
      document.querySelectorAll(".layer2").forEach(layer=>{
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth = e.pageX*speed)/100;

        layer.style.transform = `translateX(${x}px)`
      })
    }
  },[])

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
      <>
        <div className="center-hrz--col" style={{position: "relative"}}>
        <Carousel className=" carousel__container center-hrz"
        value={theme.value}
        onChange={setTheme}
        animationSpeed ={800}

        >

            <img className="carousel__img layer" data-speed="-2" src={ImageTwo}/>   
            <img className="carousel__img layer" data-speed="-2" src={ImageOne}/>   
            <img className="carousel__img layer" data-speed="-2" src={ImageThree}/>   
            
        </Carousel>
        {textComp}
        <Navbar/>
        <div className="scroll-container center-hrz--col">
          <p class="small-text" style={{color: theme.accent}}>Scroll for more</p>
          <button className="scroll-down"><i className="lni lni-chevron-down" style={{color: theme.accent}}></i></button>
        </div>
        </div>
        <div>
        <Route component={About} exact path="/about"/>
        <Route component={About} exact path="/"/>
        <Route component={Dev} exact path="/dev"/>
        <Route component={Design} exact path="/design"/>
        </div>
        </>
    )
}

export default CarouselComp
