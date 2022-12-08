import { FiMoon, FiSun } from "react-icons/fi";

interface ToggleButtonProps {
  toggleTheme: any;
  theme: string;
}

const ToggleButton = ({ toggleTheme, theme }: ToggleButtonProps) => {
  return (
    <>
      {theme === "light-theme" ? (
        <button onClick={toggleTheme} className="">
          <FiSun />
          <span> Light Mode</span>
        </button>
      ) : (
        <button onClick={toggleTheme} className="">
          <FiMoon size={40} />
          <span>Dark Mode </span>
        </button>
      )}
    </>
  );
};

export default ToggleButton;
