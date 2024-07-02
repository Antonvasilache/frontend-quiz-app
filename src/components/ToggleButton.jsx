import { useTheme } from "../context/ThemeContext";

function ToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="toggle-button-wrapper">
      {isDarkMode ? (
        <img src="/icon-sun-light.svg" />
      ) : (
        <img src="/icon-sun-dark.svg" />
      )}
      <button
        className={`toggle-button ${
          isDarkMode ? "toggle-button-dark-theme" : ""
        }`}
        onClick={toggleTheme}
      >
        <svg
          width="48"
          height="28"
          viewBox="0 0 48 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="28" rx="14" fill="#A729F5" />
          <g className="toggle-circle">
            <circle cx="14" cy="14" r="10" fill="white" />
          </g>
        </svg>
      </button>
      {isDarkMode ? (
        <img src="/icon-moon-light.svg" />
      ) : (
        <img src="/icon-moon-dark.svg" />
      )}
    </div>
  );
}

export default ToggleButton;

//migrate cx from 14 to 34
