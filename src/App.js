import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { getMovie as getMovieAction } from './redux/actions/moviesActions';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { getMovie } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.props.getMovie}>GET MOVIE!!</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getMovie: getMovieAction
}

export default connect(null, mapDispatchToProps)(App);
