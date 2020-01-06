import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import LogoSection from './Components/LogoSection/LogoSection';
import './App.css';

function App() {
  return (
      <React.Fragment>
          <Navigation />
          <Main />
          <LogoSection />
      </React.Fragment>

  );
}

export default App;
