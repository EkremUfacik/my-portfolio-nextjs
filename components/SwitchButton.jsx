import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import style from "../styles/SwitchButton.module.scss";
import { useTheme } from "next-themes";

const SwitchButton = () => {
  const { theme, setTheme } = useTheme("light");

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <input
        type="checkbox"
        className={style["checkbox"]}
        id="checkbox"
        onChange={handleChange}
      />
      <label
        htmlFor="checkbox"
        className={style["label"]}
        style={{
          backgroundColor: theme === "dark" ? "#5b6770" : "black",
          cursor: "pointer",
        }}
      >
        <BsSun className={style["sun"]} />
        <MdDarkMode className={style["dark"]} />
        <div
          className={style["ball"]}
          style={{ transform: theme == "dark" ? "translateX(14px)" : "" }}
        ></div>
      </label>
    </div>
  );
};

export default SwitchButton;
