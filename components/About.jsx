import React from "react";
import about from "../styles/About.module.scss";

const About = () => {
  return (
    <div id="about" className={about.app__about}>
      <div>
        <h2 className="app__head">About me</h2>
        <h3>Full Stack Developer from Turkey</h3>
        <p>
          I am a graduate of Istanbul University, Faculty of Law. I received
          Full Stack Development and IT training in a Bootcamp. I have a year of
          Full-Stack experience. I worked with React on the Front-End; Python
          and Django on the Back-End.
        </p>
      </div>
    </div>
  );
};

export default About;
