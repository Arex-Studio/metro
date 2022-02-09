import FCard from '../components/FCard'
import f1 from '../assets/f1.svg'
import f2 from '../assets/f2.svg'
import f3 from '../assets/f3.svg'
import f4 from '../assets/f4.svg'
import '../style/feature.css'
let Features = ()=>{
    return(
        <div className="feature">
            <div className="fr1">
                <div className="bline"></div>
                <h1>Our Advantages</h1>
                <div className="bline"></div>
            </div>
            <div className="fr2">
                <FCard image={f1} title="AED 10 Billion" desc={"The total amount of real estate sold by us"}/>
                <FCard image={f2} title="15+ Languages" desc={"The total amount of real estate sold by us"}/>
                <FCard image={f3} title="10 Offices" desc={"The total amount of real estate sold by us"}/>
                <FCard image={f4} title="Top Selling Partner with UAE Developers" desc={"The total amount of real estate sold by us"}/>
            </div>
        </div>
    )
}
export default Features