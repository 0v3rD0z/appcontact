import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Contact extends Component {
  state = {
    show: false
  };

  montrerContact = () => {
    this.setState({
      show: !this.state.show
    });
    console.log(this.state.show);
  };

  supprimeContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3 text-center">
              <h4 onClick={this.montrerContact} style={{ cursor: "pointer" }}>
                {this.props.nom}&nbsp;
                <i
                  className="fas fa-angle-down"
                  onClick={this.montrerContact}
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fas fa-trash"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={() =>
                    this.supprimeContact(this.props.id, value.dispatch)
                  }
                ></i>
              </h4>
              {this.state.show ? (
                <ul className="card card-body mb-3">
                  <li className="list-group-item">
                    Email : {this.props.email}
                  </li>
                  <li className="list-group-item">
                    Téléphone : {this.props.tel}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
