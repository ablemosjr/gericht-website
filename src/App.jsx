import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
  </div>
);

export default App;