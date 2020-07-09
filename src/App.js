import React, { Component} from 'react'

import Header from './components/UI/Header/index.js'
import PosContainer from './containers/PosContainer.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">Point of Sale App</header>
        <PosContainer/>
      </div>
    )
  }
}

export default App;
