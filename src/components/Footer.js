import React, { useEffect} from 'react';
import { useHistory } from 'react-router';
import Arc from "../assets/arc.svg";
import AOS from 'aos';
import "aos/dist/aos.css";
import { getAnalytics, logEvent } from "firebase/analytics";
const Footer = () => {
    const history = useHistory();

  const analytics = getAnalytics();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const navigateTo = (type)=>{
        switch(type){
            case "DEV": 
                history.push("/dev");
                break;
            case "DESIGN": 
                history.push("/design");
                break;   
            case "ME": 
                history.push("/");
                break;      
            default: 
        }
    }

    const emailEvent = ()=>{
        logEvent(analytics, "email-click", {name: "email_clicked"});
        
    }
    const phoneEvent = ()=>{
        logEvent(analytics, "phone-click", {name: "phone_clicked"});
        
    }
    return (
        <section id="footer">
           <div className="footer__container">
            <div className="footer__1">
                <div>
                <h2 className="white-text u-margin-bottom" onClick={()=>{navigateTo("ME")}}>Douglas <br /> Masho</h2>
                <ul className="footer__list footer__list--1 white-text">
                    <li onClick={()=>{navigateTo("DEV")}}>Developer</li> <br />
                    <li onClick={()=>{navigateTo("DESIGN")}}>Designer</li>
                </ul>
                </div>

            </div>
            <div className="footer__2">
               <div>
               <h2 className="u-margin-bottom">Contact <br /> Me</h2>
               <ul className="footer__list footer__list--2">
                    <li>
                        <div className="contactInfo">
                            <h5 className="footer__list__header">Email</h5>
                            <a href="mailto:dev@douglasmasho.ml" className="footer__list__link" onClick={emailEvent}>hi@douglasmasho.com</a>
                        </div>
                    </li> <br />
                    <li>
                       <div className="contactInfo">
                            <h5  className="footer__list__header">Phone</h5>
                            <a href="tel:(+264)81 625 6790" className="footer__list__link" onClick={phoneEvent}>(+264)81 625 6790</a>
                        </div>
                    </li> <br />
                </ul>
               </div>

            </div>
            <img src={Arc} alt="arclogo" className="footer__logo" data-aos="fade-up" data-aos-delay="200" data-aos-duration="300" data-aos-easing="ease-in-out"/>
        </div>
        </section>
        
    )
}

export default Footer
