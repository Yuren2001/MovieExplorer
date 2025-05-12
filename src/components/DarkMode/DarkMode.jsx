import React, { useEffect, useState } from "react";
import "./DarkMode.css";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get saved theme from localStorage or default to false
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
    localStorage.setItem("darkMode", darkMode); // Save preference
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="Sun" className="sun" />
        <img src={Moon} alt="Moon" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
