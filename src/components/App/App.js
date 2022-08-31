import React from "react";
import Accueil from "../../pages/Accueil";
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import Dashboard from "../../pages/Dashboard";
import Error from "../../pages/Error";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

/**
 * The App function returns a div with the className of App, which contains the Accueil component and a
 * div with the className of App__container, which contains the Dashboard component.
 *
 * @return  {React.ReactElement}
 */
const App = () => {
  return (
    <div className="App">
      <HorizontalNav />
      <VerticalNav />
      <div className="App__container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="user" element={<Dashboard />} />
          <Route path="user">
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="error" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
