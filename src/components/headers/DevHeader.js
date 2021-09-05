import React, {useEffect, useState} from 'react';
import { useTransition, animation, animated, useTrail } from 'react-spring'


const DevHeader = ({accent}) => {
    const [topWord, setTopWord] = useState(["I ", "D", "O"]);
    const [bottomWord, setBottomWord] = useState(["D", "E", "V", "."]);

    const transition = useTransition(topWord, {
        from: { opacity: 0, marginLeft:  100, marginRight: -100},
        enter: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        leave: { opacity: 0 },
        delay: 200,
    })

    const springs1 = useTrail(4, {
        from: { opacity: 0, marginLeft:  100, marginRight: -100},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0 },
        config: { tension: 150 },
      });

    const springs = useTrail(4, {
        from: { opacity: 0, marginLeft:  -100, marginRight: 100},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        config: { mass: 3},
      });

    return (
        <>
          {/* <h1 className="carousel__text carousel__text--1" style={{color: accent}}>
               {springs1.map((style, index)=>{
                  return <animated.div style={style} key={index}>{topWord[index]}</animated.div>
               })}
          </h1> */}
          <h1 className="carousel__text carousel__text--2-test" style={{color: accent}}>
              {springs.map((style, index)=>{
                  return <animated.div className="layer" data-speed="5" style={style} key={index}>{bottomWord[index]}</animated.div>
              })}
          </h1>

        </>
    )
}

export default DevHeader
