import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './interface/Hearder'
import Liste from './contact/Liste'
import { Provider } from './context'
import AddContact from './contact/AddContact'

class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddContact/>
            <Liste />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;