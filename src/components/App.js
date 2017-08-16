import React, { Component } from 'react'
import '../styles/App.css'
import Earthquakes from './Earthquakes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-header">
          <h1>
            Earthquakes <small>from the last hour</small>
          </h1>
        </div>
        <Earthquakes />
      </div>
    )
  }
}

export default App
