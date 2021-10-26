import React, {useContext} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";


const FreelanceProject = ({project}) => {
    const {theme} = useContext(ThemeContext);

    return (
    <div className="timeline-container timeline-container--reverse">
        <div className="timeline-item">
            <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                <div className="timeline-item__thumb__overlay">
                    <a href={project.link} target="_blank"><i className="icon fas fa-eye" title="Demo"></i></a>
                </div>
                <img src={project.imgsrc} alt={`${project.name}logo`} />
            </div>
            <div className="timeline-item__info timeline-item__info--reverse">
                <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>{project.name}</h3>
                <h4 className="timeline-item__info__position">{project.tag}</h4>
            </div>
        </div>
</div>
    )
}

export default FreelanceProject;
