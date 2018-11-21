import React, { Component } from 'react'
import './App.css'
import HolidaysApp from '../dashboard/HolidaysApp'
import AppRouter from './AppRouter'
import AppNavigationBar from './AppNavigationBar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    )
  }
}

export default App
