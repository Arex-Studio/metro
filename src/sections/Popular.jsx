import CarosalView from "../components/Carosal"
import Header from "../components/Header"
import '../style/buying.css'
import '../style/popular.css'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
let Popular = ()=>{
    return(
        <div className="buying">
             <Header title={"Popular Areas in Dubai"}/>
             <div className="rowA">
                 <div className="img first">
                     <img src={g1} alt="" />
                     <div className="detail">
                        <h1>Dubai Marina</h1>
                        <h4>Price from 64,000 AED</h4>
                     </div>
                 </div>
                 <div className="img">
                     <img src={g2} alt="" />
                     <div className="detail">
                        <h1>Downtown</h1>
                        <h4>Price from 64,000 AED</h4>
                     </div>
                 </div>
                 <div className="img">
                     <img src={g3} alt="" />
                     <div className="detail">
                        <h1>Palm</h1>
                        <h4>Price from 64,000 AED</h4>
                     </div>
                 </div>
                 <div className="img">
                     <img src={g1} alt="" />
                 </div>
                 <div className="img">
                     <img src={g4} alt="" />
                 </div>
                 <div className="img">
                     <img src={g3} alt="" />
                 </div>
                 <div className="img">
                     <img src={g1} alt="" />
                 </div>
                
                 
             </div>
        </div>
    )
}
export default Popular