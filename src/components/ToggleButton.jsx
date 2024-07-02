import { useTheme } from "../context/ThemeContext";

function ToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="toggle-button-wrapper">
      <img src="/icon-sun-dark.svg" />
      <button className="toggle-button" onClick={toggleTheme}>
        <svg
          width="48"
          height="28"
          viewBox="0 0 48 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="28" rx="14" fill="#A729F5" />
          <circle cx={isDarkMode ? "34" : "14"} cy="14" r="10" fill="white" />
        </svg>
      </button>
      <img src="/icon-moon-dark.svg" />
    </div>
  );
}

export default ToggleButton;

//migrate cx from 14 to 34
