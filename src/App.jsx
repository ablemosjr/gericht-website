import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
  </div>
);

export default App;