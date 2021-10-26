import React, { useContext , useEffect} from 'react'
import { ThemeContext } from "../../contexts/ThemeContext";
import AOS from 'aos';
import "aos/dist/aos.css";
import Xdicon from "../../assets/xdicon.svg";
import PsIcon from "../../assets/ps.svg";
import AIicon from "../../assets/ai.svg";
import Figmaicon from "../../assets/figma.svg";
import GalleryItem from './GalleryItem';

const Desing = () => {
    const { theme} = useContext(ThemeContext);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div id="my-skills"  className="u-margin-top-big" style={{backgroundColor: theme.backgroundColor}}>
          <section>
                <div className="center-hrz u-margin-bottom">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">My Skills</h3>
                </div>

                <ul className="grid grid-4 skills-list" style={{color: theme.accent}}>

                    <li>
                    <img src={AIicon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="0"  data-aos-duration="700"/>
                        <p className="normal-text">Illustrator</p>
                    </li>
                    <li>
                        <img src={Xdicon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="700"/>
                        <p className="normal-text">XD</p>
                    </li>
                    <li>
                        <img src={PsIcon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="200"  data-aos-duration="700"/>
                        <p className="normal-text">Photoshop</p>
                    </li>
                    <li>
                        <img src={Figmaicon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="300"  data-aos-duration="700"/>
                        <p className="normal-text">Figma</p>
                    </li>
                </ul>

                
          </section>


          <section id="desing-stack"  className="u-margin-top-big">
                <div className="center-hrz u-margin-bottom">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Gallery</h3>
                </div>

                <GalleryItem/>
                
          </section>
        </div>
    )
}

export default Desing
