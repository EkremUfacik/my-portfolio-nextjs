"use client";

import style from "../styles/Header.module.scss";
import { motion } from "framer-motion";
import react from "public/assets/skillsImg/react.png";
import django from "public/assets/skillsImg/django.png";
import javascript from "public/assets/skillsImg/javascript.png";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import Image from "next/image";
import bgImage from "public/assets/profile1.png";
import { useEffect, useState } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0.5, 1],
    opacity: [0, 1],
    transition: {
      default: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 80,
        restDelta: 0.001,
      },
    },
  },
};

const Header = () => {
  // const [mount, setMount] = useState(false);

  // useEffect(() => {
  //   setMount(true);
  // }, []);

  // if (!mount) return null;

  return (
    <>
      <div id="top" className={style["navfix"]}></div>
      <motion.div
        id="home"
        className={style["app__header"]}
        whileInView={{
          opacity: [0, 1],
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={style["app__header-info"]}
        >
          <div className={style["app__header-badge"]}>
            <p className={style["welcome"]}>WELCOME TO MY WEBSITE</p>
            <h1>Hi, I am Ekrem</h1>
            <h2>Full Stack Developer</h2>
          </div>

          <ul className={`${style["app__header-social"]} app__flex`}>
            <li>
              <a
                href="https://www.linkedin.com/in/ekrem-ufacik/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://discord.com/channels/@me" target="_blank">
                <FaDiscord />
              </a>
            </li>
            <li>
              <a href="https://github.com/EkremUfacik" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          // transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className={style["app__header-circles"]}
        >
          <div className="app__flex">
            <Image src={javascript} alt="javascript" />
          </div>
          <div className="app__flex">
            <Image src={react} alt="react" />
          </div>
          <div className="app__flex">
            <Image src={django} alt="django" />
          </div>
        </motion.div>

        <div className={style["profile-img"]}>
          <Image src={bgImage} fill priority />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
