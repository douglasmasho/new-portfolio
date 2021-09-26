import React, { useContext , useEffect} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import AOS from 'aos';
import "aos/dist/aos.css";

const Dev = () => {
    const { theme} = useContext(ThemeContext);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <section id="my-skills" className="u-margin-top-big" style={{backgroundColor: theme.backgroundColor}}>
            <div className="center-hrz u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">My Skills</h3>
            </div>
            <div className="center-hrz">
                <h3 style={{backgroundColor: theme.accent}} className="sub-heading">Languages</h3>
            </div>

            <div className="center-hrz">
                <h3 style={{backgroundColor: theme.accent}} className="sub-heading">Languages</h3>
            </div>

            <div className="center-hrz">
                <h3 style={{backgroundColor: theme.accent}} className="sub-heading">Languages</h3>
            </div>
        </section>
    )
}

export default Dev
