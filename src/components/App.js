import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemsData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemsData} />
    </div>
  );
}

export default App;
