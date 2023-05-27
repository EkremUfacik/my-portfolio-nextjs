import React from "react";
import style from "../styles/Projects2.module.scss";
import reactlogo from "../public/assets/skillsImg/react.png";
import jslogo from "../public/assets/skillsImg/javascript.png";
import reduxlogo from "../public/assets/skillsImg/redux.png";
import tslogo from "../public/assets/skillsImg/typescript.png";
import djlogo from "../public/assets/skillsImg/django.png";
import { AiFillEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <motion.div
      id="projects"
      className={style["project"]}
      whileInView={{ opacity: [0, 1], x: [-100, 0] }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className={style["project-info"]}>
        <Image src={jslogo} alt="info" />
        {project.tech.includes("React") && (
          <Image src={reactlogo} alt="react" />
        )}
        {project.tech.includes("redux") && (
          <Image src={reduxlogo} alt="redux" />
        )}
        {project.tech.includes("ts") && <Image src={tslogo} alt="ts" />}
        {project.tech.includes("django") && <Image src={djlogo} alt="dj" />}
      </div>
      <div
        className={style["project-img"]}
        style={{
          backgroundImage: `url(${project.img.src})`,
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => window.open(project.live, "_blank")}
        >
          <div className={style["project-icons"]}>
            <a href={project.live} target="_blank" rel="noreferrer">
              <AiFillEye className={style["icon"]} />
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <FaGithub className={style["icon"]} />
            </a>
          </div>
          <div className={style["filter"]} />
        </div>
      </div>
      <p className={style["project-name"]}>{project.name}</p>
    </motion.div>
  );
};

export default Project;
