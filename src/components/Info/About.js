import React, { useContext , useEffect} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {useHistory} from "react-router-dom";
import {gsap, Power2 } from "gsap";
import MeMos from "../../assets/memos.jpg";
import WhatIDo from "../../assets/whatido.png";
import UnamLogo from "../../assets/unamlogo.svg";
import AOS from 'aos';
import "aos/dist/aos.css";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import EducationComponent from "./EducationComponent";
import {educationData} from "./educationData";
gsap.registerPlugin(ScrollTrigger);



const About = (props) => {
  const history = useHistory();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { theme, setTheme } = useContext(ThemeContext);
  
  const setSlide = (val)=>{
    setTheme(val);
  }
  
  useEffect(()=>{


    // gsap.from(".link-ind-container", 1,{
    //   x: -20,
    //   opacity: 0,
    //   ease: Power2.easeOut,
    //   stagger: 0.2,
    //   scrollTrigger:{
    //     trigger: ".social__container",
    //     start: "top 90%",
    //     end: "bottom 50%",
    //     toggleActions: "restart complete reverse reset"
    //   }
    //   // delay:0.2
    // }, 0.15, "Start")

 
  },[])

  const goToPage = (type)=>{
    switch(type){
      case "DEV": 
        setSlide(0);
         history.push("/dev");
         break;
      case "DESIGN": 
      setSlide(1);
         history.push("/design");
         break;
      default: 
    }
  }

  return (
    <div className="page" style={{backgroundColor: theme.background}}>
      <section id="quick-links" style={{ backgroundColor: theme.background }}>
          <div className="center-hrz">
 
          </div>
        <div className="center-hrz">
          <div className="social__container">
              <div className="center-hrz--col link-ind-container">
                <a href="https://docdro.id/hRpJIpm" target="_blank" rel="noreferrer" className="social__link" title="resume" style={{ color: theme.accent }}><i className="fas fa-download"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">resume</p>
              </div>
              <div className="center-hrz--col link-ind-container">
                <a href="https://github.com/douglasmasho" target="_blank" rel="noreferrer" className="social__link" style={{ color: theme.accent }}><i className="fab fa-github"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">Gitub</p>
              </div>
              <div className="center-hrz--col link-ind-container">
                <a href="https://www.instagram.com/bytearc_/" target="_blank" rel="noreferrer" className="social__link" style={{ color: theme.accent }}><i className="fab fa-instagram"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">Instagram</p>
              </div>
              <div className="center-hrz--col link-ind-container">
                <a href="https://www.linkedin.com/in/douglasmasho/" target="_blank" rel="noreferrer" className="social__link" style={{ color: theme.accent }}><i className="fab fa-linkedin"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">LinkedIn</p>
              </div>
          </div>
        </div>
      </section>
    <section id="about-me" className="u-margin-top-big" >
      <div className="center-hrz u-margin-bottom">
         <h3 className="header-text white-text" data-aos="zoom-out">About Me</h3>
      </div>

      <div className="center-hrz">
        <div  style={{ backgroundColor: "black", width: "100%" }} className="composition__bg composition__bg--about u-padding-top">
        </div>
      </div>

      <div className="composition__container u-padding-top">
            <div className="row composition__element composition__element--1 u-margin-bottom-big"> 
             <img id="c1" src={MeMos} alt="" className="composition__image" data-aos="zoom-out" data-aos-duration="800"/>
             <div id="ic1" className="composition__infoContainer">
              <h1 className="composition__header" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">Who <br />I am</h1>
              <p id="ct1" className="composition__text bigger-text white-text" data-aos="fade" data-aos-delay="300" data-aos-duration="800">My name is Douglas Mashonganyika. I'm an aspiring front-end developer who is detail-oriented and has a passion for problem-solving. My love for mathematics got me interested in web development and programming in general.</p>
             </div>       
            </div>
          
            <div className="row composition__element composition__element--2">
             <div id="ic2" className="composition__infoContainer">
              <h1  className="composition__header white-text" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">What <br />I do</h1>
              <p id="ct2" className="composition__text bigger-text white-text shadow-text" data-aos="fade" data-aos-delay="300" data-aos-duration="800">I do frontend web development with some backend in the mix. Apart from development, I work with UI/UX designs and prototypes in Adobe XD and Figma, and illustrations in Adobe illustrator.</p>
             </div>    
            <img src={WhatIDo} alt="" className="composition__image" id="ci2" data-aos="zoom-out" data-aos-duration="800"/>

            </div>
        </div>
    </section>

    <section id="education" className="u-margin-top-huge u-margin-bottom-big">
    <div className="center-hrz--col u-margin-bottom">
         <h3 className="header-text u-margin-bottom white-text" data-aos="zoom-out" data-aos-delay="400">Education</h3>
         {
           educationData.map((edu, index)=><EducationComponent key={index} eduObj={edu}/>)
         }
         {/* <div className="row education-container">
           <div className="education__logoContainer" style={{ backgroundColor: "black" }} data-aos="zoom-out" data-aos-delay="300" data-aos-duration="800">
             <img src={UnamLogo} alt="unam logo" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="800"/>
             <div className="center-hrz">
             <p className="bigger-text u-margin-top white-text" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800">University of namibia</p>
             </div>
           </div>
           <div className="education__infoContainer white-text" data-aos="fade-in" data-aos-delay="800" data-aos-duration="800">
              <h2>Bachelor of Science Hons. </h2>
              <p className="bigger-text light-text-1">Computer Science</p>
              <br />
              <p className="bigger-text">Feb 2021 - Present</p>
              <p className="bigger-text light-text-2">Duration: 4 Years</p>
           </div>
         </div> */}
      </div>
    </section>

    <section className="u-margin-bottom-big u-margin-top-huge">
      <div className="center-hrz">
      <h3 className="header-text u-margin-bottom white-text" data-aos="zoom-out" data-aos-delay="400">Portfolios</h3>
      </div>
      <p className="white-text bigger-text center-text u-margin-left u-margin-right u-margin-bottom">Click left for design portfolio, right for development protfolio</p>
      <div className="center-hrz">
        <div className="detour row" data-aos="fade">   
               <div className="detour--1" onClick={()=>{goToPage("DESIGN")}}>
                  <i className="fas fa-paint-brush detour__icon"></i>
                 
                  <div className="detour__description"><i className="fas fa-chevron-left "></i>Design</div>
                 
              </div>
            
                <div className="detour--2" onClick={()=>{goToPage("DEV")}}>
                  <i className="fas fa-code detour__icon"></i>
               
                  <div className="detour__description">Dev<i className="fas fa-chevron-right"></i></div>
               

              </div>
              

        </div>
      </div>

    </section>
    
    </div>
  );
};

export default About;
