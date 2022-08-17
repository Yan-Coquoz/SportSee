import React from "react";
import Accueil from "../Accueil";
import Dashboard from "../Dashboard";
import "./App.scss";

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
