import '../style/cta.css'
import cta from '../assets/cta.jpg'
let CTA = ()=>{
    return (
        <div className="ctax">
            <img src={cta} alt="" />
            <div className="column">
                <div className="innerheader">
                     <h1>What is Your Property Real Value? </h1>
                     <div className="line"></div>
                </div>
                <p>If you are looking to put your property on the market for sale or rent, our experienced secondary market advisors will be happy to help you.
Metropolitan Premium Properties is one of the largest & trusted leading Real Estate Companies in UAE, with offices in Dubai & Abu Dhabi offering variety of properties for sale & rent, off-plan & ready. We have the local knowledge and will give you’re the most comprehensive advice on the real value of your current or prospect property.

Our evaluation specialists will make an extensive calculation, taking into account a plethora of criteria, such as location, prospective of the area development, rental potential, facilities and recreational attractions, etc.
If you are thinking about investing in Dubai, we will be delighted to guide you through the whole process from start to finish, so you can relax and let us take care of all the formalities and paperwork that is associated with purchasing a property in the UAE. Let us make this process easy and pleasant for you</p>
            <div className="button">
                <button>Request Valuation</button>
            </div>
            </div>
        </div>
    )
}
export default CTA