import React from "react";
import imageObj from "../public/assets/skillsImg/pictures";
import style from "../styles/Skills.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className={style["app__skills"]}>
      <h2 className="app__head">My Skills</h2>
      <motion.div
        className={`${style["app__skills-logos"]} app__flex`}
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {imageObj.map((logo, index) => (
          <motion.div className={style["app__skills-logo"]} key={index}>
            <div className={`${style["img-div"]} app__flex`}>
              <Image src={logo.img} alt="logo" />
              <div className={style["logo-name"]}>{logo.name}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
