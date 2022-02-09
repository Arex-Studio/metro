import background from '../assets/hero.jpg'
import NavBar from '../components/Navbar'
import TransparentBox from '../components/TransparentBox'
import '../style/hero.css'
let HeroSection = ()=>{
    return(
        <section className="hero">
            <img src={background} alt="" id="heroimg" />
            <NavBar/>
            <TransparentBox/>
        </section>
    )
}
export default HeroSection