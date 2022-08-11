import React from "react";

import "./style.scss";

const Header = () => {
    // écrire le code ici
    return (
        <div className="header-container">
            <h1 className="header-container__accueil">
                Bonjour prénom_de_la_personne
            </h1>
            <h3 className="header-container__commentaire">Commentaires ...</h3>
        </div>
    );
};

export default Header;
