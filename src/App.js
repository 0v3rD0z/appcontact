import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Components/interface/Hearder";
import Liste from "./Components/contact/Liste";
import AddContact from "./Components/contact/AddContact";
import APropos from "./Components/pages/APropos";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Erreur from "./Components/pages/Erreur";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Headers />
            <div className="container">
              {/* <AddContact/> */}
              <Switch>
                <Route exact path="/liste" component={Liste} />
                <Route exact path="/ajouter" component={AddContact} />
                <Route exact path="/apropos" component={APropos} />
                <Route exact path="/" component={Liste} />
                <Route component={Erreur} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
