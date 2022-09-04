import React, { useContext , useEffect} from 'react'
import { ThemeContext } from "../../contexts/ThemeContext";
import AOS from 'aos';
import "aos/dist/aos.css";
import Xdicon from "../../assets/xdicon.svg";
import PsIcon from "../../assets/ps.svg";
import AIicon from "../../assets/ai.svg";
import Figmaicon from "../../assets/figma.svg";
import GalleryItem from './GalleryItem';
import BugtrayItem from '../mockups/BugtrayItem';

const Desing = () => {
    const { theme} = useContext(ThemeContext);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div id="my-skills"  className="u-margin-top-big " style={{backgroundColor: theme.backgroundColor}}>
          <section className="u-margin-botton-big">
                <div className="center-hrz u-margin-bottom">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">My Skills</h3>
                </div>

                <ul className="grid grid-4 skills-list" style={{color: theme.accent}}>

                    <li>
                    <img src={AIicon} alt="AI icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="0"  data-aos-duration="700"/>
                        <p className="normal-text">Illustrator</p>
                    </li>
                    <li>
                        <img src={Xdicon} alt="XD icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="700"/>
                        <p className="normal-text">XD</p>
                    </li>
                    <li>
                        <img src={PsIcon} alt="PS icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="200"  data-aos-duration="700"/>
                        <p className="normal-text">Photoshop</p>
                    </li>
                    <li>
                        <img src={Figmaicon} alt="Figma icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="700"/>
                        <p className="normal-text">Figma</p>
                    </li>
                </ul>    
          </section>

          <div className="center-hrz u-margin-bottom u-margin-top-big">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">UI Designs</h3>
         </div>

          <section id="design-stack"  className="u-margin-top-big u-padding-bottom u-margin-bottom-big">
                <div className="center-hrz u-margin-bottom">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Bugtray</h3>
                </div>
                 <div data-aos="fade-in">
                    <BugtrayItem/>
                 </div>
                 <div>
                    <ul className="grid grid-2 skills-list" style={{color: theme.accent}}>
                    <li>
                        <a href="https://www.figma.com/file/4YGjD1O23pWagX9uioYLDG/Bugtrax?node-id=0%3A1" target="_blank">
                        <img src={Figmaicon} alt="Figma icon" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="700" className="u-margin-bottom-small"/>
                        </a>
                        <p className="normal-text">Figma Link</p>
                    </li>
                    <li>
                        <a href="https://bugtray-b4725.firebaseapp.com/" target="_blank" style={{color: theme.accent}}>
                        <i className="icon fas fa-eye u-margin-bottom-small" title="Demo" alt="Eye icon" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="700"></i>
                        </a>
                        <p className="normal-text">See website</p>
                    </li>
                    </ul>
                 </div>
          </section>


          <section id="design-stack"  className="u-margin-top-big u-padding-bottom u-margin-bottom-big">
                <div className="center-hrz u-margin-bottom">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Gallery</h3>
                </div>

                 <div data-aos="fade-in">
                   <GalleryItem />     
                 </div>
          </section>
        </div>
    )
}

export default Desing
