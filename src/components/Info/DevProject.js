import React, {useContext} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";

const DevProject = ({project}) => {
    const {theme} = useContext(ThemeContext);

    return (
    <div className="timeline-container">
        <div className="timeline-item">
            <div className="timeline-item__info">
                <h3 className="timeline-item__info__name" data-aos="fade-right" data-aos-duration="1000" style={{color: theme.accent}}>{project.name}</h3>
                <h4 className="timeline-item__info__position">{project.tag}</h4>
                <p className="timeline-item__info__description white-text">{project.description}</p>
                <ul className="timeline-item__info__list u-margin-top">
                    {
                        project.techlist.map(item=><li key={item} data-aos="fade-right" data-aos-duration="500" data-aos-delay="0">{item}</li>)
                    }
                </ul>
            </div>
            <div className="timeline-item__thumb" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="500">
                <div className="timeline-item__thumb__overlay">
                    <a href={project.gitlink} target="_blank"><i className="fab fa-github" title="View Github"></i></a>
                    <a href={project.demolink} target="_blank"><i className="icon fas fa-eye" title="Demo"></i></a>
                </div>
                <img src={project.imgsrc} alt={`${project.name}logo`} />
            </div>
        </div>
</div>
    )
}

export default DevProject
