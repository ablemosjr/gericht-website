import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';

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
    <FindUs />
    <Footer />
  </div>
);

export default App;