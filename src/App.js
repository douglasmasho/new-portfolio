import React, { useContext, useRef} from 'react'
import CarouselComp from "./components/Carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import "./sass/main.scss";
import { ThemeContext } from './contexts/ThemeContext';
import ScrollToTop from './functionality/ScrollToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//test comment

function App() {
  const {theme} = useContext(ThemeContext);
  const appRef = useRef();

 const scrollToTop = ()=>{
   window.scrollTo(0,0);
  }

  return (
    <div className="App" style={{backgroundColor: theme.background}} ref={appRef}>
    <Navbar/>
     <CarouselComp/>
     <Footer/>
     <ScrollToTop scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
