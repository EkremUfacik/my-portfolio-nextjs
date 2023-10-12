import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import style from "../styles/SwitchButton.module.scss";
import { useTheme } from "next-themes";

const SwitchButton = () => {
  const { theme, setTheme } = useTheme();

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
          backgroundColor: theme === "light" ? "#5b6770" : "black",
          cursor: "pointer",
        }}
      >
        <MdDarkMode className={style["dark"]} />
        <BsSun className={style["sun"]} />
        <div className={style["ball"]}></div>
      </label>
    </div>
  );
};

export default SwitchButton;
