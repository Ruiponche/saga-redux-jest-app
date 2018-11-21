import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HolidaysApp from '../dashboard/HolidaysApp'
import SavingsApp from '../dashboard/SavingsApp'
import AppNavigationBar from './AppNavigationBar'

const AppRouter = () => (
  <Router>
    <div>
      <AppNavigationBar />
      <Route path="/holidays" component={HolidaysApp} />
      <Route path="/savings" component={SavingsApp} />
    </div>
  </Router>
)

export default AppRouter
