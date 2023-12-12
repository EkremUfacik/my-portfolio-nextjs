import about from "../styles/About.module.scss";

const About = () => {
  return (
    <div id="about" className={about.app__about}>
      <div>
        <h2 className="app__head">About me</h2>
        <h3>Full Stack Developer from Turkey</h3>
        <p>
          I am a graduate of Istanbul University, Faculty of Law. I received
          Full Stack Development and IT training in a Bootcamp. I have 2 years
          of Full-Stack experience. I working with React, Nextjs on the
          Front-End; Nodejs and Django on the Back-End.
        </p>
      </div>
    </div>
  );
};

export default About;
