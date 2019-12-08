import React, { Component } from "react";
import "./Friend.css";
import api from "../services/api"
import handle from "../services/handleError"

class Done extends Component {

    state = {
        showButton: false,
        name: "",
        friend: "",
        notFound: false,
        code: ""
    }
    toggleFriend = e => {
        this.setState({ showButton: !this.state.showButton })
    }

    async componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const code = params.get('code');
        this.setState({ code: code })

        this.findCode(code);
    }

    findCode = async (code) => {
        const [response, err] = await handle(api.post("access", { code: code }));
        if (err) {
            const { response } = err;
            if (response.status === 404) {
                this.setState({ notFound: true })
            }
            else alert(response.data.message)
        } else {
            console.log(response)
            this.setState({ notFound: false })
            this.setState({ name: response.data.name, friend: response.data.friend });
        }
    }

    handleCode = e => {
        this.setState({ code: e.target.value })
    }

    handleSubmitCode = async (e) => {
        if (this.state.code !== "") {
            this.findCode(this.state.code);
            this.props.history.push(`/friend?code=${this.state.code}`)
        } else {
            alert("Insira um código");
        }
    }
    render() {
        return (
            <div id="friend-wrapper">
                {this.state.notFound ?
                    <>
                        <h1>Sorteio não encontrado</h1>
                        <p>Não encontramos o sorteio para o código inserido, por favor tente novamente</p>
                        <div id="access-draw-container">
                            <input type="text" name="code" autoComplete="off" placeholder="Código" onChange={this.handleCode} value={this.state.code} />
                            <button onClick={this.handleSubmitCode} className="code-button">Acessar Sorteio</button>
                        </div>
                    </>
                    :
                    <>
                        <h1>Seu amigo secreto</h1>
                        <p>Olá <b>{this.state.name}</b>! Clique no botão abaixo para visualizar seu amigo secreto</p>
                        {this.state.showButton ? <button onClick={this.toggleFriend} className="show">{this.state.friend}</button> : <button onClick={this.toggleFriend} className="no-show">Visualizar amigo secreto</button>}
                    </>
                }
            </div>
        );
    }
}

export default Done;
