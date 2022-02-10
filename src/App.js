import logo from './logo.svg';
import './App.css';
import HeroSection from './sections/HeroSection';
import Features from './sections/Feature';
import Buying from './sections/Buying';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Features/>
      <Buying/>
    </div>
  );
}

export default App;
