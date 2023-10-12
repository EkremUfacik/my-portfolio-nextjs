"use client";

import { useState } from "react";
import style from "../styles/Certificates.module.scss";
import certificatesList from "public/assets/certificates/certificates";
import { motion } from "framer-motion";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const Certificates = () => {
  const [current, setCurrent] = useState(4);

  const handlePrev = () => {
    current === 0
      ? setCurrent(certificatesList.length - 1)
      : setCurrent((curr) => curr - 1);
  };

  const handleNext = () => {
    current === certificatesList.length - 1
      ? setCurrent(0)
      : setCurrent((curr) => curr + 1);
  };

  return (
    <div className={style.app__certificates}>
      <h2 style={{ textAlign: "center", padding: "1rem 0" }}>-Certificates-</h2>
      <motion.div
        className={style["app__certificates-contain"]}
        whileInView={{ opacity: [0, 1], y: [-100, 0] }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {certificatesList.map((item, index) => (
          <motion.div
            key={index}
            className={
              index === current
                ? style["certificate-active"]
                : style["certificate"]
            }
            style={{ backgroundImage: `url(${item.img.src})` }}
          ></motion.div>
        ))}

        <div className={`${style["prev"]} app__flex`} onClick={handlePrev}>
          <FcPrevious />
        </div>
        <div className={`${style["next"]} app__flex`} onClick={handleNext}>
          <FcNext />
        </div>
      </motion.div>

      <div className={style.dots}>
        {certificatesList.map((item, index) => (
          <div
            className={style.dot}
            style={{
              opacity: current === index ? "0.9" : null,
              scale: current === index ? "1.2" : null,
            }}
            key={index}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
