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
                <h1>Parabéns!</h1>
                <p>O seu sorteio foi realizado e um e-mail foi enviado aos participantes.</p>
                <Link to="/" className="new-draw-link">
                    <button onClick={this.handleSubmitCode}>Novo Sorteio</button>
                </Link>
            </div>
        );
    }
}

export default Done;
