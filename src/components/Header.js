import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import brazil from "../assets/brazil.svg"
import usa from "../assets/usa.svg"

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <div className="logo-content">
                        <FontAwesomeIcon size="3x" icon={faUserSecret} />
                        <span>Amigo secreto</span>
                    </div>
                </Link>
                <div className="flags">
                    <img src={brazil} alt="PT-BR" />
                    <img src={usa} alt="EN-US" />
                </div>
            </div>
        </header>
    );
}