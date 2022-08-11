import React from "react";
import HorizontalNav from "../HorizontalNav";
import VerticalNav from "../VerticalNav";
import Header from "../Header";
import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <HorizontalNav />
            <VerticalNav />
            <Header />
        </div>
    );
};

export default App;
