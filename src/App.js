import logo from './logo.svg';
import './App.css';
import './cta.css'
import HeroSection from './sections/HeroSection';
import Features from './sections/Feature';
import Buying from './sections/Buying';
import Renting from './sections/Renting';
import Offplan from './sections/Offplan';
import Popular from './sections/Popular';
import About from './sections/About';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import { useEffect, useState } from 'react';
import MobileNavBar from './sections/MobileNavbar';

function App() {
  let [mobileNav,setMobileNav] = useState(false)
  useEffect(()=>{
   
  })
  return (
    <div className="App">
      {!mobileNav && <HeroSection onNavBarOpen={()=>setMobileNav(true)}/>}
      {mobileNav && <MobileNavBar onClose={()=>setMobileNav(false)}/>}
      {!mobileNav && <Features/>}
      <div className='spacer'></div>
      {!mobileNav  && <Buying/>}
      {!mobileNav   && <Renting/>}
      {!mobileNav  && <Offplan/>}
      {!mobileNav  && <Popular/>}
      {!mobileNav  && <About/>}
      {!mobileNav  && <CTA/>}
      {!mobileNav  && <Footer/>}
    </div>
  );
}

export default App;
