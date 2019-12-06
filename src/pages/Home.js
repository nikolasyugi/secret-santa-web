import React, { Component } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import api from "../services/api"
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {

    state = {
        drawName: "",
        participants: [{
            id: 1,
            name: "",
            email: ""
        },
        {
            id: 2,
            name: "",
            email: ""
        },
        {
            id: 3,
            name: "",
            email: ""
        }],
        code: ""
    }

    handleCode = e => {
        this.setState({ code: e.target.value })
    }

    handleAdd = () => {
        const id = this.state.participants[this.state.participants.length - 1].id + 1;
        const newParticipant = {
            id: id,
            name: "",
            email: ""
        }
        this.setState({ participants: [...this.state.participants, newParticipant] })
    }

    handleRemove = participant => {
        if (this.state.participants.length > 3) {
            const filtered = this.state.participants.filter(p => p.id !== participant.id);
            this.setState({ participants: filtered })
        } else {
            alert("Não é possível realizar um sorteio com menos de 3 pessoas")
        }

    }

    handleDrawName = e => {
        this.setState({ drawName: e.target.value })
    }

    handleChangeName = (e, participant) => {
        this.setState({
            participants: this.state.participants.map(p => {
                return Object.assign({}, p, {
                    name: p.id === participant.id ? e.target.value : p.name
                })
            })
        });
    }

    handleChangeEmail = (e, participant) => {
        this.setState({
            participants: this.state.participants.map(p => {
                return Object.assign({}, p, {
                    email: p.id === participant.id ? e.target.value : p.email
                })
            })
        });
    }

    handleSubmitCode = async () => {
        this.props.history.push(`/friend?code=${this.state.code}`)
    }

    handleSubmit = async () => {
        const body = {
            name: this.state.drawName,
            participants: this.state.participants
        }
        await api.post("draw", body);
    }

    render() {
        return (
            <div id="home-content">
                <h1>Acessar sorteio</h1>
                <div id="access-draw-container">
                    <input type="text" name="code" autoComplete="off" placeholder="Código" onChange={this.handleCode} />
                    {/* <Link to="/friend"> */}
                        <button onClick={this.handleSubmitCode}>Acessar Sorteio</button>
                    {/* </Link> */}
                </div>
                <h1>Novo sorteio</h1>
                <div id="make-draw">
                    <input type="text" name="drawName" autoComplete="off" placeholder="Nome do sorteio" onChange={this.handleDrawName} />
                    {this.state.participants.map(participant => (
                        <div className="participant-container" key={participant.id}>
                            <input className="name" name={`name${participant.id}`} type="name" placeholder={`Participante ${participant.id}`} onChange={(e) => this.handleChangeName(e, participant)} />
                            <input className="email" name={`email${participant.id}`} type="email" placeholder={`E-mail ${participant.id}`} onChange={(e) => this.handleChangeEmail(e, participant)} value={participant.email} />
                            <button className="add-button" onClick={this.handleAdd}><FontAwesomeIcon icon={faPlus} /></button>
                            <button className="remove-button" onClick={() => this.handleRemove(participant)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    ))}
                    <Link to="/done">
                        <button type="submit" id="draw-button" onClick={this.handleSubmit}>Sortear</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
