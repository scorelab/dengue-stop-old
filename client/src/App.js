import React from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App" > 
    <Navbar bg="light" style={{alignItems:'center'}}>
    <Navbar.Brand  >Dengue Stop Admin Panel</Navbar.Brand>
  </Navbar>
    </div>
  );
}

export default App;
