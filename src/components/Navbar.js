import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const setSlide = (val)=>{
        setTheme(val)
    }
    return (
        <div className="navbar" style={{backgroundColor: theme.accent}}>
            <button onClick={()=>{
                setSlide(1)
            }}>About</button>
            <button onClick={()=>{
                setSlide(2)
            }}>Dev</button>
            <button onClick={()=>{
                setSlide(0)
            }}>Design</button>
        </div>
    )
}

export default Navbar
