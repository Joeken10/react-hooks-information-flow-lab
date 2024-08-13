import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>ShopSter</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
