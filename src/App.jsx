import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
  </div>
);

export default App;