
const EducationComponent = ({eduObj}) => {
    return ( 
        
        <div className="row education-container u-margin-top">
           <div className="education__logoContainer" style={{ backgroundColor: "black" }} data-aos="zoom-out" data-aos-delay="300" data-aos-duration="800">
             <img src={eduObj.logo} alt="institution logo" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="800"/>
             <div className="center-hrz">
             <p className="bigger-text u-margin-top white-text" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800">{eduObj.institution}</p>
             </div>
           </div>
           <div className="education__infoContainer white-text" data-aos="fade-in" data-aos-delay="800" data-aos-duration="800">
              <h2>{eduObj.qualType}</h2>
              <p className="bigger-text light-text-1">{eduObj.major}</p>
              <br />
              <p className="bigger-text">{eduObj.interval}</p>
              <p className="bigger-text light-text-2">{eduObj.duration}</p>
           </div>
         </div>
    );
}
 
export default EducationComponent;