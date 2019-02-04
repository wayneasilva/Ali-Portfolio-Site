import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Radium from 'radium';
import Navbar from './Navbar/Navbar';
import MainPage from './MainPage/MainPage';
import ViewDisplay from './ViewDisplay/ViewDisplay';
// import VideoView from './VideographyView/VideographyView';
// import PhotoView from './PhotographyView/PhotographyView';
// import EditingView from './EditingView/EditingView';
// import ContactView from './ContactView/ContactView';

// const MainPage = () => (
//   <div>
//     <Navbar />
//     <ViewDisplay />
//   </div>
// );

class App extends Component {

  state = {
    
  }

  render() {
    const style = {
      // backgroundColor: '#394b6b',

    }

    return (
      <Router>
        <div style={style} className="App">
          <Route path="/" render={() => <MainPage />} />
        </div>
      </Router>
    );
  }
}

export default Radium(App);
