import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js'

const Slider = () => {
    const { carouselFragment,
        slideToPrevItem,
        slideToNextItem, } = useSpringCarousel({
            withLoop: true,
        items: [
          {
            id: 'item-1',
            renderItem: <div style={{backgroundColor: "red", width: "100%"}}>My item 1</div>,
          },
          {
            id: 'item-2',
            renderItem: <div style={{backgroundColor: "blue" , width: "100%"}}>My item 2</div>,
          },
          {
            id: 'item-3',
            renderItem: <div style={{backgroundColor: "yellow" , width: "100%"}}>My item 3</div>,
          }
        ]
      })
    
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
            <button style={{
               position: "absolute",
               zIndex: 5,
               left: "30px" 
            }}  onClick={slideToPrevItem}>Prev</button>


            <button 
            style={{
                position: "absolute",
                zIndex: 5,
                right: "30px" 
             }}  onClick={slideToNextItem}>Next</button>
            {carouselFragment}
        </div>
    )
}

export default Slider
