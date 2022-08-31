import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Error = () => {
  localStorage.removeItem("error");
  return (
    <div className="error">
      <h1>404</h1>
      <div className="error__retour">
        <Link to={"/"}>Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default Error;
