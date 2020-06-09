import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

export default class Liste extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <Fragment>
              <h1 className="display-5 my-3">Nos contact :</h1>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
