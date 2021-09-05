import React, {useEffect, useState} from 'react';
import {useTransition, animation, animated, useTrail} from "react-spring"

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
        to: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        config: { tension: 250},
      });

    const springs = useTrail(7, {
        from: { opacity: 0, marginLeft:  100, marginRight: -100, scale: 0.5},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0,  scale: 1},
        config: { tension: 200},
      });

    return (
        <>
        <div data-speed="10">
        <h1 className="carousel__text carousel__text--1-test carousel__text--1-test--me" style={{color: accent}}>
              {springs1.map((style, index)=>{
                  return <animated.div style={style} key={index}>{topWord[index]}</animated.div>
              })}
          </h1>
        <h1 className="carousel__text carousel__text--2-test carousel__text--2-test--me"   style={{color: accent}}>
              {springs.map((style, index)=>{
                  return <animated.div style={style} key={index}>{bottomWord[index]}</animated.div>
              })}
          </h1>
        </div>


        </>
    )
}

export default AboutHeader
