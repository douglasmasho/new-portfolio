import React,{useContext, useRef, useEffect, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {Link} from "react-router-dom"


const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const [underlined, setUnderlined] = useState();
    const linkOneRef = useRef();
    const linkTwoRef = useRef();
    const linkThreeRef = useRef();

    const setSlide = (val)=>{
        setTheme(val);
        setUnderlined(val)
    }

    useEffect(()=>{
        switch(theme.value){
            case 0: 
            //    linkOneRef.current.style.backgroundColor = "white";
               linkTwoRef.current.style.backgroundColor = "transparent";
               linkThreeRef.current.style.backgroundColor = "transparent";

               linkOneRef.current.style.color = theme.accent;
               linkTwoRef.current.style.color = "white";
               linkThreeRef.current.style.color = "white";
               break;
            case 1: 
            linkOneRef.current.style.backgroundColor = "transparent";
            // linkTwoRef.current.style.backgroundColor = "white";
            linkThreeRef.current.style.backgroundColor = "transparent";

            linkOneRef.current.style.color = "white";
            linkTwoRef.current.style.color = theme.accent;
            linkThreeRef.current.style.color = "white";
               break;
            case 2: 
               linkOneRef.current.style.backgroundColor = "transparent";
               linkTwoRef.current.style.backgroundColor = "transparent";
            //    linkThreeRef.current.style.backgroundColor = "white";

               linkOneRef.current.style.color = "white";
               linkTwoRef.current.style.color = "white";
               linkThreeRef.current.style.color = theme.accent;
               break;
        }
    })
    
    return (
        <div className="navbar" style={{backgroundColor: theme.background}}>
            <Link to="/design" ref={linkOneRef} className="navbar__link" onClick={()=>{
                setSlide(0)
            }}>Design</Link>
            <Link to="/about" ref={linkTwoRef} className="navbar__link" onClick={()=>{
                setSlide(1)
            }}>About</Link>
            <Link to="/dev" ref={linkThreeRef} className="navbar__link" onClick={()=>{
                setSlide(2)
            }}>Dev</Link>
            <a href="#" className="navbar__link" id="navbar__contact">Contact</a>
        </div>
    )
}

export default Navbar
