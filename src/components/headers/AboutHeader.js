import React, {useState} from 'react';
import {useTransition, animated, useTrail} from "react-spring";


const AboutHeader = ({accent}) => {
    const [topWord, setTopWord] = useState(["D", "O", "U", "G", "L", "A", "S"]);
    const [bottomWord, setBottomWord] = useState([ "M", "A", "S", "H", "O"]);

    const transition = useTransition(topWord, {
        from: { opacity: 0, marginLeft:  -100, marginRight: 100, },
        enter: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        leave: { opacity: 0 },
        delay: 200,
    })

    const springs1 = useTrail(7, {
        from: { opacity: 0, marginLeft:  -100, marginRight: 100},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0},
        config: { tension: 180},
      });

    const springs = useTrail(7, {
        from: { opacity: 0, marginLeft:  100, marginRight: -100},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0,  scale: 1},
        config: { tension: 200},
      });

      const springs1p = useTrail(7, {
        from: { opacity: 0},
        to: { opacity: 1},
        config: { tension: 180},
      });

    const springsp = useTrail(7, {
        from: { opacity: 0,},
        to: { opacity: 1 },
        config: { tension: 200},
      });

    return (
        <>
        <div data-speed="10" style={{overflow: "hidden"}}>
            <div className="for-desktop">
            <h1 className="carousel__text carousel__text--1-test carousel__text--1-test--me" style={{color: accent}}>
            
            {springs1.map((style, index)=>{
                return <animated.div data-speed="5" style={style} key={index}>{topWord[index]}</animated.div>
            })}
        </h1>
      <h1 className="carousel__text carousel__text--2-test carousel__text--2-test--me"   style={{color: accent}}>
            {springs.map((style, index)=>{
                return <animated.div  data-speed="-2" style={style} key={index}>{bottomWord[index]}</animated.div>
            })}
        </h1>
            </div>

            <div className="for-phone">
            <h1 className="carousel__text carousel__text--1-test carousel__text--1-test--me" style={{color: accent}}>
            
            {springs1p.map((style, index)=>{
                return <animated.div data-speed="5" style={style} key={index}>{topWord[index]}</animated.div>
            })}
        </h1>
      <h1 className="carousel__text carousel__text--2-test carousel__text--2-test--me"   style={{color: accent}}>
            {springsp.map((style, index)=>{
                return <animated.div  data-speed="-2" style={style} key={index}>{bottomWord[index]}</animated.div>
            })}
        </h1>

            </div>
       
        </div>


        </>
    )
}

export default AboutHeader
