import Switch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <FaMoon />

      <Switch
        onChange={toggleTheme}
        checked={theme === "light"}
        offColor="#111827"
        onColor="#00ffd5"
        checkedIcon={false}
        uncheckedIcon={false}
        height={22}
        width={48}
      />

      <FaSun />
    </div>
  );
};

export default ThemeToggle;