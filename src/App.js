import React from 'react';
import './App.css';
import MenuMaster from './Components/Commons/Header/index'
import Footer from './Components/Commons/Footer/index'
import Routers from './Route'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  if(window.location.pathname.search('admin') !== -1) {
    return (
      <Router>
        <Routers />
      </Router>
    )
  }else {
    return (
      <Router>
        <MenuMaster />
        <Routers />
        <Footer />
      </Router>
    );  
  }
}

export default App;
