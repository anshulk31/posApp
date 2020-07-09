import React, { Component} from 'react'

import PosContainer from './containers/PosContainer.js'
import Logo from './components/UI/Logo/Logo.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <Logo className="Logo" />
          Point of Sale App
        </header>
        <PosContainer/>
      </div>
    )
  }
}

export default App;
