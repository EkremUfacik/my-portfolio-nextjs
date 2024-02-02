import about from "../styles/About.module.scss";

const About = () => {
  return (
    <div id="about" className={about.app__about}>
      <div>
        <h2 className="app__head">About me</h2>
        <h3>Full Stack Developer from Turkey</h3>
        <p>
          After one and half years of attorney experience, ITF, Frontend and
          Backend development training was guided by 2 years of IT experience.
          Ongoing training and self-development in the field of IT. Worked with
          React and Next.js on the Front-End; Node.js and Django on the
          Back-End.
        </p>
      </div>
    </div>
  );
};

export default About;
