import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Radium from 'radium';
import Navbar from './Navbar/Navbar';
import ViewDisplay from './ViewDisplay/ViewDisplay';

class App extends Component {

  state = {
    
  }

  render() {
    const style = {
      display: 'flex',
      flexdirection: 'row'
    }

    return (
      <Router>
        <div style={style} className="App">
          <Navbar />
          <ViewDisplay mViewHandler={this.portItemViewHandler} />
        </div>
      </Router>
    );
  }
}

export default Radium(App);
