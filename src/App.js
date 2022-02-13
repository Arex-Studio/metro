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
import * as $ from 'jquery'
function App() {
  let [mobileNav,setMobileNav] = useState(false)
  useEffect(()=>{
    $(document).ready(function(){       
      var scroll_start = 0;
      var startchange = $('nav');
      var offset = startchange.offset();
       if (startchange.length){
      $(document).scroll(function() { 
         scroll_start = $(this).scrollTop();
         if(scroll_start > offset.top) {
             $("nav").css('background-color', '#fff');
             $(".nv").css("color","#FFD700")
             $(".barx").css("background-color","#FFD700")
             $('nav').css('box-shadow', 'rgba(0, 0, 0, 0.35) 0px 5px 15px');
          } else {
             $('nav').css('background-color', 'transparent');
             $('nav').css('box-shadow', 'none');
             $('.nv').css("color","white")
             $(".barx").css("background-color","white")
          }
      });
       }
   });
  },[])
  return (
    <div className="App">
       <HeroSection/>
      <MobileNavBar/>
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
