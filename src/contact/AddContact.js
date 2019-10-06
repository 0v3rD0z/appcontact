import React, { Component } from 'react'
import { Consumer } from '../context'
import uuid from 'uuid'

export default class AddContact extends Component {

  state = {
    nom: '',
    email: '',
    tel: '',
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value })

  onSubmit = (dispatch, event) => {
    event.preventDefault()
    //console.log(this.state)
    const newContact = {
      id: uuid(),
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel,
    }

    dispatch({ type: 'ADD_CONTACT', payload: newContact })

    this.setState({
      nom: '',
      email: '',
      tel: '',
    })
  }

  render() {

    return (
      <Consumer>
        {value => {
          return (
            <div className="card mb-3 text-center">
              <div className="card-header">Ajouter un contact</div>
              <div className="card-body">

                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                  <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un nom..."
                      name="nom"
                      defaultValue={this.state.nom}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un Email..."
                      name="email"
                      defaultValue={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel">Tel :</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Entrez un téléphone..."
                      name="tel"
                      defaultValue={this.state.tel}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Ajouter un contact"
                    onChange={this.onChange}
                    className="btn btn-block btn-primary"
                  />
                </form>

              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
