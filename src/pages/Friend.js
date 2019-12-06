import React, { Component } from "react";
import "./Friend.css";
import api from "../services/api"

class Done extends Component {

    state = {
        showButton: false,
        name: "",
        friend: ""
    }
    toggleFriend = e => {
        this.setState({ showButton: !this.state.showButton })
    }

    async componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const code = params.get('code');
        const response = await api.post("access", { code: code });
        if (response.data.length > 0) {
            this.setState({ name: response.data[0].name, friend: response.data[0].friend })
        }
    }
    render() {
        return (
            <div id="friend-wrapper">
                <h1>Seu amigo secreto</h1>
                <p>Olá {this.state.name}! Clique no botão abaixo para visualizar seu amigo secreto</p>
                {this.state.showButton ? <button onClick={this.toggleFriend} className="show">{this.state.friend}</button> : <button onClick={this.toggleFriend} className="no-show">Visualizar amigo secreto</button>}
            </div>
        );
    }
}

export default Done;
