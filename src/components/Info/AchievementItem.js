import React, {useContext} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

const Achievementitem = ({item}) => {
    const {theme} = useContext(ThemeContext);
    return (
    <div className="timeline-container-a">
        <div className="timeline-item">
            <div className="timeline-item__info">
                <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>{item.name}</h3>
                <h4 className="timeline-item__info__position">{item.tag}</h4>
                <p className="timeline-item__info__time u-margin-bottom">{item.time}</p>
                
            </div>
            <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                <img src={item.imgsrc} alt={`${item.name}`} />
            </div>
        </div>
</div>
    )
}

export default Achievementitem;
