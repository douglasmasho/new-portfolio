import React, {useContext} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

const TimeLineItem = ({item}) => {
    const {theme} = useContext(ThemeContext);
    return (
    <div className="timeline-container">
        <div className="timeline-item">
            <div className="timeline-item__info">
                <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>{item.name}</h3>
                <h4 className="timeline-item__info__position">{item.tag}</h4>
                <p className="timeline-item__info__time u-margin-bottom">{item.time}</p>
                <p className="timeline-item__info__description white-text">{item.description}</p>
                <ul className="timeline-item__info__list u-margin-top">
                    {
                        item.techlist.map(item=><li key={item} data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">{item}</li>)
                    }
                </ul>
            </div>
            <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                <div className="timeline-item__thumb__overlay">
                    <a href={item.gitlink} target="_blank" rel="noreferrer"><i className="fab fa-github" title="View Github"></i></a>
                    <a href={item.demolink} target="_blank" rel="noreferrer"><i className="icon fas fa-eye" title="Demo"></i></a>
                </div>
                <img src={item.imgsrc} alt={`${item.name}logo`} />
            </div>
        </div>
</div>
    )
}

export default TimeLineItem;
