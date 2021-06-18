import { BrowserRouter as Router, Route } from 'react-router-dom';

import LocationSensorData from './components/LocationSensorData/LocationSensorData';

import Jangl from './pages/Jangl/Jangl';

import NavbarComponent from './components/Navbar';
import WitHero from './components/WitHero/WitHero';
import How from './components/How/How';
// import Madan from './pages/Madan/Madan';

function App() {
  const rndInt = Math.floor(Math.random() * 6) + 1;
  console.log('random', rndInt);
  return (
    <>
      <Router>
        <NavbarComponent />
        <Route exact path="/">
          {/* <HeroSection /> */}
          <WitHero />
          <LocationSensorData />
          <How />
          {/* <ProjectList /> */}
        </Route>

        <Route path="/place1">
          <Jangl />
        </Route>

        <Route path="/place2">
          <Jangl />
        </Route>
      </Router>
    </>
  );
}

export default App;
