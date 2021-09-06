import React, { useContext , useEffect} from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import PDF from "../../downloads/mycv.pdf";
import {Link} from "react-router-dom";
import  fileDownload from "js-file-download";
import axios from "axios";

const About = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

//   const downloadPDF = ()=>{
//     function download(url= "../../downloads/mycv.pdf", filename= "resume") {
//         axios.get("./src/downloads/mycv.pdf", {
//           responseType: 'blob',
//         }).then(res => {
//           fileDownload(res.data, "resume");
//         });
//       }

//       download();
//   }

  return (
    <div className="page">
      <section id="quick-links" style={{ backgroundColor: theme.background }}>
          <div className="center-hrz">

          </div>
        <div className="center-hrz">
          <div className="social__container">
              <div className="center-hrz--col">
                <a href="https://docdro.id/rOzpzGJ" target="_blank" className="social__link" title="resume" style={{ color: theme.accent }}><i className="fas fa-download"></i></a>
                <p className="small-text white-text u-margin-top-tiny">resume</p>
              </div>
              <div className="center-hrz--col">
                <a href="https://github.com/douglasmasho" target="_blank" className="social__link" style={{ color: theme.accent }}><i className="fab fa-github"></i></a>
                <p className="small-text white-text u-margin-top-tiny">Gitub</p>
              </div>
              <div className="center-hrz--col">
                <a href="https://www.instagram.com/bytearc_/" target="_blank" className="social__link" style={{ color: theme.accent }}><i className="fab fa-instagram"></i></a>
                <p className="small-text white-text u-margin-top-tiny">Instagram</p>
              </div>
              <div className="center-hrz--col">
                <a href="https://www.linkedin.com/in/douglasmasho/" target="_blank" className="social__link" style={{ color: theme.accent }}><i className="fab fa-linkedin"></i></a>
                <p className="small-text white-text u-margin-top-tiny">LinkedIn</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
