import '../style/mobilenav.css'
import lf from '../assets/lf.svg'
import wapp from '../assets/wapp.PNG'
import Avatar from '../components/Avatar'
let MobileNavBar = ()=>{
    return (
        <div className="mobilenav">
            <nav>
                <div className="logo"><img src={lf} alt="" /></div>
                <div className="option">
                    <Avatar background='white' img={wapp}/>
                    <Avatar background='white' img={wapp}/>
                </div>
            </nav>
            <div className="body">
                <li>Buy</li>
                <li>Sell</li>
                <li>Rent</li>
                <li>Areas</li>
                <li>Projects</li>
                <li>Developers</li>
                <li>Services</li>
                <li>About Us</li>
                <li>EN</li>
            </div>
        </div>
    )
}
export default MobileNavBar