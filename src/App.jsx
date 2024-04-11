import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu } from './container';

import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
  </div>
);

export default App;