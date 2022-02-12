import background from '../assets/hero.jpg'
import NavBar from '../components/Navbar'
import TransparentBox from '../components/TransparentBox'
import '../style/hero.css'
let HeroSection = ({onNavBarOpen})=>{
    return(
        <section style={{backgroundImage: `url(https://axproperty.com/wp-content/uploads/2020/10/1e902e8d-fbb2-47dc-93cc-70163e717dbc.jpg)`}} className="hero">
            <NavBar onNavBarOpen={onNavBarOpen}/>
            <TransparentBox/>
        </section>
    )
}
export default HeroSection