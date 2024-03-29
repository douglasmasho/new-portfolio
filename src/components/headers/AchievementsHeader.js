import React,  {useState} from 'react'
import { useTransition,  animated, useTrail } from 'react-spring'

const AchievmentsHeader = ({accent}) => {
    const [topWord, setTopWord] = useState(["I ", "D", "O"]);
    const [bottomWord, setBottomWord] = useState(["A", "W", "A", "R", "D", "S"]);

    const transition = useTransition(topWord, {
        from: { opacity: 0, marginLeft:  100, marginRight: -100},
        enter: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        leave: { opacity: 0 },
        delay: 200,
    })

    const springs1 = useTrail(3, {
        from: { opacity: 0, marginLeft:  100, marginRight: -100},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        config: { tension: 150 },
      });

    const springs = useTrail(7, {
        from: { opacity: 0, marginLeft:  -100, marginRight: 100},
        to: { opacity: 1 , marginLeft: 0, marginRight: 0,},
        config: { tension: 250},
      });

    return (
        <>
        <h1 className="carousel__text carousel__text--2-test carousel__text--2-test--design" style={{color: accent}}>
              {springs.map((style, index)=>{
                  return <animated.div  data-speed="5" style={style} key={index}>{bottomWord[index]}</animated.div>
              })}
          </h1>
        </>
    )
}

export default AchievmentsHeader
