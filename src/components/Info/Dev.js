import React, { useContext , useEffect} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import AOS from 'aos';
import "aos/dist/aos.css";
import CsharpIcon from "./../../assets/c-sharp.svg";
import ReduxIcon from "./../../assets/redux1.svg";
import JsonIcon from "./../../assets/json.svg";
import SocketIcon from "./../../assets/sockets1.svg";
import FirebaseIcon from "./../../assets/firebase.svg";
import FlutterIcon from "./../../assets/flutter.svg";
import DartIcon from "./../../assets/dart.svg";

import { devData } from './projectsdata';
import DevProject from './DevProject';
import { timelineData } from './timelinedata';
import TimeLineItem from './TimelineItem';
import { freelancearr } from './freelancedata';
import FreelanceProject from './FreelanceProject';

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

              
                <ul className="grid grid-5 skills-list" style={{color: theme.accent}}>
                    <li>
                        <i className="fab fa-html5 grid-5--child" data-aos="fade-right" data-aos-delay="0" data-aos-duration="700"></i>
                        <p className="normal-text">HTML5</p>
                    </li>
                    <li>
                        <i className="fab fa-css3-alt grid-5--child" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="700"></i>
                        <p className="normal-text">CSS3</p>
                    </li>
                    <li>
                        <i className="fab fa-js-square grid-5--child" data-aos="fade-right" data-aos-delay="200"  data-aos-duration="700"></i>
                        <p className="normal-text">JavaScript</p>
                    </li>
                    <li>
                        <img src={CsharpIcon} alt="c# icon" className="grid-5--child" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="700"/>
                        <p className="normal-text">C#</p>
                    </li>
                    <li>
                        <img src={DartIcon} alt="dart icon" className="grid-5--child" data-aos="fade-right" data-aos-delay="300"  data-aos-duration="700"/>
                        <p className="normal-text">Dart</p>
                    </li>
                </ul>

            </section>

            <section id="stack" className="u-margin-top-big">
                <div className="center-hrz">
                    <h3 style={{backgroundColor: "white"}} className="sub-heading">Technologies/Frameworks/Libraries/Tools</h3>
                </div>

              
                <ul className="grid grid-4 skills-list" style={{color: theme.accent}}>
                    <li >
                        <i className="fab fa-sass grid-4--child" data-aos="fade-right" data-aos-delay="0" data-aos-duration="700"></i>
                        <p className="normal-text">SASS</p>
                    </li>
                    <li>
                        <i className="fab fa-react grid-4--child" data-aos="fade-right" data-aos-delay="100" data-aos-duration="700"></i>
                        <p className="normal-text">React</p>
                    </li>
                    <li>
                        <i className="fab fa-react grid-4--child" data-aos="fade-right" data-aos-delay="100" data-aos-duration="700"></i>
                        <p className="normal-text">React Native</p>
                    </li>
                    <li>
                    <img src={FlutterIcon} alt="flutter icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="700" data-aos-duration="700"/>
                        <p className="normal-text">Flutter</p>
                    </li>
                    <li>
                        <i className="fab fa-node-js grid-4--child" data-aos="fade-right" data-aos-delay="200" data-aos-duration="700"></i>
                        <p className="normal-text">NodeJS</p>
                    </li>
                    <li>
                        <img src={ReduxIcon} alt="c# icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="300" data-aos-duration="700"/>
                        <p className="normal-text">Redux</p>
                    </li>
                    <li>
                        <img src={SocketIcon} alt="c# icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="400" data-aos-duration="700"/>
                        <p className="normal-text">Socket.io</p>
                    </li>                 <li>
                        <img src={FirebaseIcon} alt="c# icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="500" data-aos-duration="700"/>
                        <p className="normal-text">Firebase</p>
                    </li>                 <li>
                    <i className="fab fa-git grid-4--child" data-aos="fade-right" data-aos-delay="600" data-aos-duration="700"></i>
                        <p className="normal-text">Git</p>
                    </li>                 <li>
                        <img src={JsonIcon} alt="c# icon" className="grid-4--child" data-aos="fade-right" data-aos-delay="700" data-aos-duration="700"/>
                        <p className="normal-text">JSON</p>
                    </li>
                </ul>

            </section>

            <section id="skill-widget">
                <div style={{padding: "5rem"}}>
                <codersrank-widget username="douglasmasho" class="widgett"  data-aos-duration="500"></codersrank-widget>
                </div>
                <div className="center-hrz" >
                <codersrank-skills-chart username="douglasmasho" class="widgett"  data-aos-duration="500" style={{width: "80vw"}} labels="true" tooltip="true" legend="true" skills="Javascript, CSS, Scss, HTML, C#, JSON, TypeScript"></codersrank-skills-chart>
                </div>
            </section>

            <section id="timeline" style={{padding: "10rem"}}>
            <div className="center-hrz--col u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Timeline</h3>
                <h4 className="bigger-text white-text light-text-1 center-text">Hover/tap Thumbnail to view demo and source</h4>
            </div>
            {timelineData.map(item=>(
                <TimeLineItem item={item}/>
            ))}
            </section>

            <section id="work" style={{padding: "10rem"}}>
            <div className="center-hrz u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">My work</h3>
            </div>
            {
                devData.map(data=>(
                    <DevProject project={data}/>
                ))
            }
            </section>

            <section id="freelance work" style={{padding: "10rem"}}>
                <div className="center-hrz u-margin-bottom">
                    <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Freelance work</h3>
                </div>

                <div>
                    {
                        freelancearr.map(project=>(
                            <FreelanceProject project={project}/>
                        ))
                    }
                </div>
            </section>

        </div>
    )
}

export default Dev