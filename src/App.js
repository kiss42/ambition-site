import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [entered, setEntered] = useState(false);

  return entered
    ? React.createElement(
        React.Fragment,
        null,
        React.createElement(Hero),
        React.createElement(About),
        React.createElement(Footer)
      )
    : React.createElement(LandingPage, { onEnter: () => setEntered(true) });
}

export default App;
