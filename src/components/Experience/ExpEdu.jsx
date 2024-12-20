import React, { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Clubs from "./Clubs";
import "./ExpEdu.css";

const ExpEdu = () => {
  const [tabValue, setTabValue] = useState("exp");
  return (
    <div className="expedu" id="expedu">
      <div className="expedu-content">
        <div className="expedu-content-title">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="expedu-content-description">
          <p className="section-desc">
            A glimpse into my academic and profesional experience, shaping my
            growth in the tech world.
          </p>
        </div>
        <div className="expedu-sections">
          <div className="tabs">
            <div
              className={
                tabValue === "exp" ? "exp-tab tab active" : "exp-tab tab"
              }
              onClick={() => setTabValue("exp")}
            >
              <p>Professional</p>
            </div>
            <div
              className={
                tabValue === "edu" ? "edu-tab tab active" : "edu-tab tab"
              }
              onClick={() => setTabValue("edu")}
            >
              <p>College</p>
            </div>
            {/* <div
              className={
                tabValue === "clubs" ? "clubs-tab tab active" : "clubs-tab tab"
              }
              onClick={() => setTabValue("clubs")}
            >
              <p>Clubs</p>
            </div> */}
          </div>
          <div className="exp-edu-details">
            {tabValue === "exp" ? (
              <Experience />
            ) : tabValue === "edu" ? (
              <Education />
            ) : (
              <Clubs />  // Add the conditional rendering for Clubs
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpEdu;
