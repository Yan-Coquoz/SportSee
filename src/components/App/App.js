import React from "react";
import Accueil from "../Accueil";
import Dashboard from "../Dashboard";
import "./App.scss";

/**
 * The App function returns a div with the className of App, which contains the Accueil component and a
 * div with the className of App__container, which contains the Dashboard component.
 * @returns A React component.
 */
const App = () => {
  return (
    <div className="App">
      <Accueil />
      <div className="App__container">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
