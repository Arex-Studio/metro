import logo from './logo.svg';
import './App.css';
import HeroSection from './sections/HeroSection';
import Features from './sections/Feature';
import Buying from './sections/Buying';
import Renting from './sections/Renting';
import Offplan from './sections/Offplan';
import Popular from './sections/Popular';
import About from './sections/About';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Features/>
      <Buying/>
      <Renting/>
      <Offplan/>
      <Popular/>
      <About/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
