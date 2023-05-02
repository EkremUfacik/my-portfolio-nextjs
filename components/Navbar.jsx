import React, { useState } from "react";
import style from "../styles/Navbar.module.scss";
import avatar from "../public/assets/avatar.jpg";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import SwitchButton from "./SwitchButton";
import { useThemeContext } from "../context/ThemeProvider";
import Image from "next/image";

const Navbar = () => {
  let navLinks = ["home", "about", "skills", "projects", "contact"];
  const [toggle, setToggle] = useState(false);
  const { theme } = useThemeContext();

  return (
    <nav
      className={`${style["app__navbar"]} app__flex`}
      style={{
        backgroundColor:
          theme === "light"
            ? "rgba(242, 242, 242, 0.355)"
            : "rgba(0, 0, 0, 0.301)",
      }}
    >
      <div className={`${style["app__navbar-logo"]} app__flex`}>
        <Link to="home" spy={true} smooth={true} offset={-200} duration={300}>
          <Image width={50} src={avatar} priority alt="avatar" />
        </Link>
      </div>
      <ul className={`${style["app__navbar-links"]} app__flex`}>
        {navLinks.map((item, index) => (
          <li
            className="app__flex"
            key={index}
            // onClick={() => setIsActive(index)}
          >
            <Link
              className={style["link"]}
              to={item}
              spy={true}
              smooth={true}
              offset={-200}
              duration={300}
            >
              {item}
              <div className="link-div" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="app__flex" style={{ gap: "2rem" }}>
        <SwitchButton />
        <div className={`${style["app__navbar-menu"]} app__flex`}>
          <FiMenu size={"1.5rem"} onClick={() => setToggle(true)} />

          <div
            className={style["app__navbar-menu-container"]}
            style={{
              right: toggle ? "0" : "-100%",
              backgroundColor:
                theme === "light"
                  ? "rgba(245, 245, 245, 0.897)"
                  : "rgba(7, 8, 19, 0.592)",
            }}
          >
            <FiX onClick={() => setToggle(false)} />
            <ul className={`${style["app__navbar-menu-links"]} app__flex`}>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    className={style["link"]}
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                    <div />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
