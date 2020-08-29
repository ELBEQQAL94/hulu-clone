import React from 'react';

// requests
import requests from './services/requests';

// Components
import {
  Header,
  Navbar
} from './components';


// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
