import React from "react";
import style from "../styles/Footer.module.scss";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeProvider";
import Link from "next/link";

const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <footer
      className={`${style["app__footer"]} app__flex ${
        theme === "light" ? "" : "footer-dark"
      }`}
      // style={{
      //   backgroundColor:
      //     theme === "light" ? "$footerLightBg" : "rgba(8, 11, 28, 0.66)",
      // }}
    >
      <ul className={`${style["app__footer-social"]} app__flex`}>
        <li>
          <Link
            href="https://www.linkedin.com/in/ekrem-ufacik/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </li>
        <li>
          <Link href="https://discord.com/channels/@me" target="_blank">
            <FaDiscord />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/EkremUfacik" target="_blank">
            <FaGithub />
          </Link>
        </li>
      </ul>

      <div>© 2023 eU</div>
    </footer>
  );
};

export default Footer;
