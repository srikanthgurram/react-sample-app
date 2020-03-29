import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavBar'
import MainPageIntro from './components/MainPageIntro'
import Subscription from './components/Subscriptions'

function App() {
  return (
    <div className="App">
      <TopNavbar appName="My React App"></TopNavbar>
      <MainPageIntro></MainPageIntro>
      <Subscription></Subscription>
    </div>
  );
}

export default App;

