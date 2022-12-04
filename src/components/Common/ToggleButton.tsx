import { FiMoon, FiSun } from "react-icons/fi";

interface ToggleButtonProps {
  toggleTheme: any;
  theme: string;
}

const ToggleButton = ({ toggleTheme, theme }: ToggleButtonProps) => {

  return (
    <>
        {theme === "light-theme" ? (
          <button onClick={toggleTheme} className="fixed bottom-0 right-0 z-50">
            {" "}
            <FiSun  size={40} />
          </button>
        ) : (
          <button onClick={toggleTheme} className="fixed bottom-0 right-0 z-50">
            <FiMoon size={40} />
          </button>
        )}

      
    </>
  );
};

export default ToggleButton;
