import style from "../styles/Footer.module.scss";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${style["app__footer"]} app__flex `}>
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
