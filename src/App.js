import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import LogoSection from './Components/LogoSection/LogoSection';
import SoftwareInfo from './Components/SoftwareInfo/SoftwareInfo';
import './App.css';

function App() {
  return (
      <React.Fragment>
          <Navigation />
          <Main />
          <LogoSection />
          <SoftwareInfo />
      </React.Fragment>

  );
}

export default App;
