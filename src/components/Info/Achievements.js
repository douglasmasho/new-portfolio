import React, { useContext , useEffect} from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import AOS from 'aos';
import "aos/dist/aos.css";
import { achievementsData } from './achievementsdata';
import Achievementitem from './AchievementItem';


const Achievements = () => {
    const { theme} = useContext(ThemeContext);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div id="my-skills" className="u-margin-top-big" style={{backgroundColor: theme.backgroundColor}}>


            <section id="timeline" style={{padding: "10rem"}}>
            <div className="center-hrz--col u-margin-bottom">
                <h3 className="header-text" style={{color: theme.accent}} data-aos="zoom-out">Certificates</h3>
            </div>
            {achievementsData.map(item=>(
                <Achievementitem item={item}/>
            ))}
            </section>

        </div>
    )
}

export default Achievements