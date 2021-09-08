import React, { useContext , useEffect} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PDF from "../../downloads/mycv.pdf";
import {Link} from "react-router-dom";
import  fileDownload from "js-file-download";
import axios from "axios";
import { TimelineLite, gsap, Power3, Power2 } from "gsap";
import MeMos from "../../assets/memos.jpg"

import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  let t1 = new TimelineLite();

  useEffect(()=>{
    // t1.from("", {
    //   x: -15,
    //   opacity: 0,
    //   ease: Power2.easeOut,
    //   delay:0.2
    // }, "Start")

    gsap.from(".link-ind-container", 1,{
      x: -20,
      opacity: 0,
      ease: Power2.easeOut,
      stagger: 0.2,
      scrollTrigger:{
        trigger: ".social__container",
        start: "top 90%",
        end: "bottom 50%",
        toggleActions: "restart complete reverse reset"
      }
      // delay:0.2
    }, 0.15, "Start")

    // gsap.from(".link-ind-container", {
    //         x: -20,
    //   opacity: 0,
    //   ease: Power2.easeOut,
    //   // delay:0.2
    // })
  },[])

  return (
    <div className="page">
      <section id="quick-links" style={{ backgroundColor: theme.background }}>
          <div className="center-hrz">
 
          </div>
        <div className="center-hrz">
          <div className="social__container">
              <div className="center-hrz--col link-ind-container">
                <a href="https://docdro.id/rOzpzGJ" target="_blank" className="social__link" title="resume" style={{ color: theme.accent }}><i className="fas fa-download"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">resume</p>
              </div>
              <div className="center-hrz--col link-ind-container">
                <a href="https://github.com/douglasmasho" target="_blank" className="social__link" style={{ color: theme.accent }}><i className="fab fa-github"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">Gitub</p>
              </div>
              <div className="center-hrz--col link-ind-container">
                <a href="https://www.instagram.com/bytearc_/" target="_blank" className="social__link" style={{ color: theme.accent }}><i className="fab fa-instagram"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">Instagram</p>
              </div>
              <div className="center-hrz--col link-ind-container">
                <a href="https://www.linkedin.com/in/douglasmasho/" target="_blank" className="social__link" style={{ color: theme.accent }}><i className="fab fa-linkedin"></i></a>
                <p className=" small-text white-text u-margin-top-tiny">LinkedIn</p>
              </div>
          </div>
        </div>
      </section>
    <section id="about-me" className="u-margin-top-big">
      <div className="center-hrz u-margin-bottom">
         <h3 className="header-text">About Me</h3>
      </div>

      <div className="center-hrz">
        <div  style={{ backgroundColor: theme.background }} className="composition__bg">
          <div className="composition__container">
            <div className="row composition__element"> 
             <img src={MeMos} alt="" className="composition__image"/>
             <div>
              <h1 className="composition__header">Who <br />I am</h1>
              <p className="composition__text bigger-text">I do frontend web development with some backend in the mix. Apart from development, I work with UI/UX designs and prototypes in Adobe XD and Figma, and illustrations in Adobe illustrator.</p>
             </div>       
            </div>
          
            <div className="composition__element composition__element--2">

            </div>
          </div>
        </div>
      </div>

    </section>
    </div>
  );
};

export default About;
