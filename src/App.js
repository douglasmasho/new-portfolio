import React, {useState, useContext, useEffect} from 'react'
import CarouselComp from "./components/Carousel";
import Slider from "./components/Slider";
import '@brainhubeu/react-carousel/lib/style.css';
import "./sass/main.scss";
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="App" style={{backgroundColor: theme.background}}>
     <CarouselComp/>
    </div>
  );
}

export default App;
