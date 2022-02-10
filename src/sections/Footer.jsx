import '../style/footer.css'
import logo from '../assets/lf.svg'
let Footer = ()=>{
    return(
        <div className="footer">
            <div className="news">
                <h1>Our newsletter</h1>
                <label>Sign up for our weekly newsletter for market updates</label>
                <div className="inputs">
                    <input placeholder='Enter your email' type="text" />
                    <button>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="links">
                <div className="col1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li>Buy</li>
                        <li>Rent</li>
                        <li>Areas</li>
                        <li>About Us</li>
                        <li>Join Us</li>
                        <li>Media</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="col2">
                    <ul>
                        <li>Buying Property</li>
                        <li>Sell your Property</li>
                        <li>Rent your property</li>
                        <li>Mortages</li>
                        <li>Short term rentals</li>
                        <li>Citizenship programs</li>
                    </ul>
                </div>
                <div className="col3">
                    <ul>
                        <li>Property Handover Services</li>
                        <li>Legal Services in the UAE</li>
                        <li>Properties in Abu Dhabi</li>
                        <li>Properties in Austria</li>
                        <li>Properties in Cyprus</li>
                        <li>Properties in UK</li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default Footer