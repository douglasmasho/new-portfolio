import React, {useState, useContext, useEffect, useRef} from 'react'
import CarouselComp from "./components/Carousel";
import Slider from "./components/Slider";
import '@brainhubeu/react-carousel/lib/style.css';
import "./sass/main.scss";
import { ThemeContext } from './contexts/ThemeContext';
import Navbar from 'components/Navbar';
import ScrollToTop from 'functionality/ScrollToTop';


function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  const appRef = useRef();

 const scrollToTop = ()=>{
   window.scrollTo(0,0);
  }

  return (
    <div className="App" style={{backgroundColor: theme.background}} ref={appRef}>
     <CarouselComp/>
     <ScrollToTop scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
