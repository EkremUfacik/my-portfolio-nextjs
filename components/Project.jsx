import React from "react";
import style from "../styles/Projects2.module.scss";
import { AiFillEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
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
        {project.tech.map((tech) => (
          <img src={`/assets/skillsImg/${tech}.png`} alt={tech} />
        ))}
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
            <Link href={project.live} target="_blank">
              <AiFillEye className={style["icon"]} />
            </Link>
            <div onClick={() => window.open(project.repo, "_blank")}>
              <FaGithub className={style["icon"]} />
            </div>
          </div>
          <div className={style["filter"]} />
        </div>
      </div>
      <p className={style["project-name"]}>{project.name}</p>
    </motion.div>
  );
};

export default Project;
