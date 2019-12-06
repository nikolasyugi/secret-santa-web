import React, { Component } from "react";

import "./Done.css";

class Done extends Component {

    render() {
        return (
            <div id="page-wrapper">
                <h1>Parabéns!</h1>
                <p>O seu sorteio foi realizado e um e-mail foi enviado aos participantes.</p>
                <button onClick={this.handleSubmitCode}>Novo Sorteio</button>
            </div>
        );
    }
}

export default Done;
