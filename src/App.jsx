import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery } from './container';

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
    <Gallery />
  </div>
);

export default App;