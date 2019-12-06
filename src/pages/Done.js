import React, { Component } from "react";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Done.css";
import { Link } from "react-router-dom";

class Done extends Component {

    render() {
        return (
            <div id="page-wrapper">
                <Link to="/">
                    <FontAwesomeIcon icon={faChevronLeft} className="back-chevron"></FontAwesomeIcon>
                </Link>
                <h1>Sorteio realizado com sucesso!</h1>
                <p>Um e-mail foi enviado aos participantes com instruções para descobrir a pessoa que cada um deve presentear.</p>
                <Link to="/" className="new-draw-link">
                    <button onClick={this.handleSubmitCode}>Novo Sorteio</button>
                </Link>
            </div>
        );
    }
}

export default Done;
