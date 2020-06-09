import React, { Component } from "react";

import uuid from "uuid";

import { Consumer } from "../../context";

export default class AddContact extends Component {
  state = {
    nom: "",
    email: "",
    tel: "",
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (dispatch, event) => {
    event.preventDefault();

    const newContact = {
      id: uuid(),
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      nom: "",
      email: "",
      tel: "",
    });

    this.props.history.push("/liste");
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card mb-3">
              <div className="card-header">Ajouter un Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                      required
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un nom ..."
                      name="nom"
                      value={this.state.nom}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      required
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Entrez un Email ..."
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel">Téléphone :</label>
                    <input
                      required
                      type="number"
                      className="form-control form-control-lg"
                      placeholder="Téléphone ..."
                      name="tel"
                      value={this.state.tel}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Ajouter un Contact"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
