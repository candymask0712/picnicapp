import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Weather</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Population</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
