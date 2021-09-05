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
               linkOneRef.current.style.textDecoration = "underline";
               linkTwoRef.current.style.textDecoration = "none";
               linkThreeRef.current.style.textDecoration = "none";
               break;
            case 1: 
            linkOneRef.current.style.textDecoration = "none";
            linkTwoRef.current.style.textDecoration = "underline";
            linkThreeRef.current.style.textDecoration = "none";
               break;
            case 2: 
               linkOneRef.current.style.textDecoration = "none";
               linkTwoRef.current.style.textDecoration = "none";
               linkThreeRef.current.style.textDecoration = "underline";
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


        </div>
    )
}

export default Navbar
