import React, {useState, useContext, useEffect, useRef} from 'react'
import CarouselComp from "./components/Carousel";
import Slider from "./components/Slider";
import '@brainhubeu/react-carousel/lib/style.css';
import "./sass/main.scss";
import { ThemeContext } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ScrollToTop from './functionality/ScrollToTop';
import Footer from './components/Footer';
import { hydrate, render } from "react-dom";


function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  const appRef = useRef();

 const scrollToTop = ()=>{
   window.scrollTo(0,0);
  }

  return (
    <div className="App" style={{backgroundColor: theme.background}} ref={appRef}>
     <CarouselComp/>
     <Footer/>
     <ScrollToTop scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
