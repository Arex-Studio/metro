import background from '../assets/hero.jpg'
import NavBar from '../components/Navbar'
let HeroSection = ()=>{
    return(
        <section className="hero">
            <img src={background} alt="" id="heroimg" />
            <NavBar/>
        </section>
    )
}
export default HeroSection