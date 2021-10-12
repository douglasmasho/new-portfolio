import React, { useContext , useEffect} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import AOS from 'aos';
import "aos/dist/aos.css";
import CsharpIcon from "./../../assets/c-sharp.svg";
import ReduxIcon from "./../../assets/redux1.svg";
import JsonIcon from "./../../assets/json.svg";
import SocketIcon from "./../../assets/sockets1.svg";
import FirebaseIcon from "./../../assets/firebase.svg";
import SeeLogo from "./../../assets/seelogo.png";
import DripFtwr from "./../../assets/dripftwr.jpg"
import Tuterolive from "./../../assets/tuterolive.jpg"



const Dev = () => {
    const { theme} = useContext(ThemeContext);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div id="my-skills" className="u-margin-top-big" style={{backgroundColor: theme.backgroundColor}}>
            <div className="center-hrz u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">My Skills</h3>
            </div>
            <section id="languages" className="u-margin-top-big">
                <div className="center-hrz">
                    <h3 style={{backgroundColor: "white"}} className="sub-heading">Languages</h3>
                </div>

              
                <ul className="grid grid-4 skills-list" style={{color: theme.accent}}>
                    <li>
                        <i className="fab fa-html5 grid-4--child" data-aos="fade-left" data-aos-delay="0" data-aos-duration="700"></i>
                        <p className="normal-text">HTML5</p>
                    </li>
                    <li>
                        <i className="fab fa-css3-alt grid-4--child" data-aos="fade-left" data-aos-delay="100"  data-aos-duration="700"></i>
                        <p className="normal-text">CSS3</p>
                    </li>
                    <li>
                        <i className="fab fa-js-square grid-4--child" data-aos="fade-left" data-aos-delay="200"  data-aos-duration="700"></i>
                        <p className="normal-text">JavaScript</p>
                    </li>
                    <li>
                        <img src={CsharpIcon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="300"  data-aos-duration="700"/>
                        <p className="normal-text">C#</p>
                    </li>
                </ul>

            </section>

            <section id="stack" className="u-margin-top-big">
                <div className="center-hrz">
                    <h3 style={{backgroundColor: "white"}} className="sub-heading">Technologies/Frameworks/Libraries/Tools</h3>
                </div>

              
                <ul className="grid grid-4 skills-list" style={{color: theme.accent}}>
                    <li >
                        <i className="fab fa-sass grid-4--child" data-aos="fade-left" data-aos-delay="0" data-aos-duration="700"></i>
                        <p className="normal-text">SASS(SCSS)</p>
                    </li>
                    <li>
                        <i className="fab fa-react grid-4--child" data-aos="fade-left" data-aos-delay="100" data-aos-duration="700"></i>
                        <p className="normal-text">React</p>
                    </li>
                    <li>
                        <i className="fab fa-node-js grid-4--child" data-aos="fade-left" data-aos-delay="200" data-aos-duration="700"></i>
                        <p className="normal-text">NodeJS(Express)</p>
                    </li>
                    <li>
                        <img src={ReduxIcon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="300" data-aos-duration="700"/>
                        <p className="normal-text">Redux</p>
                    </li>
                    <li>
                        <img src={SocketIcon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="400" data-aos-duration="700"/>
                        <p className="normal-text">Socket.io</p>
                    </li>                 <li>
                        <img src={FirebaseIcon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="500" data-aos-duration="700"/>
                        <p className="normal-text">Firebase</p>
                    </li>                 <li>
                    <i className="fab fa-git grid-4--child" data-aos="fade-left" data-aos-delay="600" data-aos-duration="700"></i>
                        <p className="normal-text">Git</p>
                    </li>                 <li>
                        <img src={JsonIcon} alt="c# icon" className="grid-4--child" data-aos="fade-left" data-aos-delay="700" data-aos-duration="700"/>
                        <p className="normal-text">JSON</p>
                    </li>
                </ul>

            </section>

            <section id="skill-widget">
                <div style={{padding: "5rem"}}>
                <codersrank-widget username="douglasmasho" class="widgett" data-aos="zoom-in" data-aos-duration="500"></codersrank-widget>
                </div>
            </section>

            <section id="timeline" style={{padding: "10rem"}}>
            <div className="center-hrz u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Timeline</h3>
            </div>
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-item__info">
                            <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>SEE Namibia</h3>
                            <h4 className="timeline-item__info__position">Web Developer</h4>
                            <p className="timeline-item__info__time u-margin-bottom">MAY 2021 - SEPT 2021</p>
                            <p className="timeline-item__info__description white-text">Developing, updating, maintaining the organization's website and monitoring its traffic . Working with the graphic designer.</p>
                            <ul className="timeline-item__info__list u-margin-top">
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">React</li>
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">Redux</li>
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">Firebase</li>
                            </ul>
                        </div>
                        <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                            <div className="timeline-item__thumb__overlay">
                                <a href="https://github.com/douglasmasho/iamvoting" target="_blank"><i className="fab fa-github" title="View Github"></i></a>
                                <a href="https://seenamibia.org/" target="_blank"><i className="icon fas fa-eye" title="Website"></i></a>
                            </div>
                            <img src={SeeLogo} alt="seelogo" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" style={{padding: "10rem"}}>
            <div className="center-hrz u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">My work</h3>
            </div>
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-item__info">
                            <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>Drip FTWR</h3>
                            <h4 className="timeline-item__info__position">Ecommerce frontend</h4>
                            <p className="timeline-item__info__description white-text">This project is a frontend for an e-commerce shoe store.</p>
                            <ul className="timeline-item__info__list u-margin-top">
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">Gsap</li>
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">Jquery</li>
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">Local Storage</li>
                            </ul>
                        </div>
                        <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                            <div className="timeline-item__thumb__overlay">
                                <a href="https://github.com/douglasmasho/dripfootwear" target="_blank"><i className="fab fa-github" title="View Github"></i></a>
                                <a href="https://dripfootwear.netlify.app/" target="_blank"><i className="icon fas fa-eye" title="Demo"></i></a>
                            </div>
                            <img src={DripFtwr} alt="seelogo" />
                        </div>
                    </div>
                </div>
            {/*  */}
            <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-item__info">
                            <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>Tutero Live</h3>
                            <h4 className="timeline-item__info__position">Video Chat app</h4>
                            <p className="timeline-item__info__description white-text">A Video chat web app for online tutorials and even pair study sessions. This app comes with additional tools for collaboration on top of video chat.</p>
                            <ul className="timeline-item__info__list u-margin-top">
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">React</li>
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">WebRTC</li>
                                <li data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">Socket.io</li>
                            </ul>
                        </div>
                        <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                            <div className="timeline-item__thumb__overlay">
                                <a href="https://github.com/douglasmasho/Tutero" target="_blank"><i className="fab fa-github" title="View Github"></i></a>
                                <a href="https://tuterolive.herokuapp.com/" target="_blank"><i className="icon fas fa-eye" title="Demo"></i></a>
                            </div>
                            <img src={Tuterolive} alt="seelogo" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Dev
