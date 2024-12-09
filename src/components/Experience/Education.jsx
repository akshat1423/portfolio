// import React from "react";
// import { educationData } from "../../constants/eduConstant";
// import "./ExpEdu.css";

// const Education = () => {
//   return (
//     <div className="education" id="education">
//       {educationData.map((eduItem, index) => {
//         return (
//           <div key={index} className="education-item">
//             <img className="college-logo" src={eduItem.image} alt="TCS" />
//             <div className="vertical-line" />
//             <div className="education-content">
//               <span>{eduItem.year}</span>
//               <div className="title">
//                 <h3>{eduItem.institution}</h3>
//               </div>
//               <div className="degree">
//                 <p>Majors: {eduItem.degree}</p>
                
//               </div>
//               <div className="degree">
//                 <p>Dual Minors: {eduItem.minordegree}</p>
//                 </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Education;

import React from "react";
import { experienceData } from "../../constants/expeduConstant";
import "./ExpEdu.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      {experienceData.map((expItem, index) => {
        return (
          <div key={index} className="experience-item">
            <img className="company-logo" src={expItem.image} alt="TCS" />
            <div className="vertical-line" />
            <div className="experience-content">
              <span>{expItem.year}</span>
              <div className="title">
                <h3>{expItem.title}</h3>
              </div>
              <div className="company">
              <a href={expItem.link} target="_blank" rel="noopener noreferrer">
                <p>{expItem.company} <u>(Official Website)</u></p>
              </a>
            </div>
              <div className="role">
                <p>{expItem.role1}</p>
              </div>
              <div className="role">
                <p>{expItem.role2}</p>
              </div>
              <div className="role">
                <p>{expItem.role3}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
