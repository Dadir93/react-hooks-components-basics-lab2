import React from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import Home from './Home'; // Import the Home component
import "./index.css";






function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
