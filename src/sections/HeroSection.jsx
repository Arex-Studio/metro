import background from '../assets/hero.jpg'
import NavBar from '../components/Navbar'
import TransparentBox from '../components/TransparentBox'
import '../style/hero.css'
let HeroSection = ({onNavBarOpen})=>{
    return(
        <section className="hero">
            <img src={background} alt="" id="heroimg" />
            <NavBar onNavBarOpen={onNavBarOpen}/>
            <TransparentBox/>
        </section>
    )
}
export default HeroSection