import background from '../assets/hero.jpg'
import NavBar from '../components/Navbar'
import TransparentBox from '../components/TransparentBox'
import '../style/hero.css'
let HeroSection = ({onNavBarOpen})=>{
    return(
        <section style={{backgroundImage: `url(https://metropolitan.realestate/wp-content/uploads/2021/11/mpp-header.jpg)`}} className="hero">
            <NavBar onNavBarOpen={onNavBarOpen}/>
            <TransparentBox/>
        </section>
    )
}
export default HeroSection