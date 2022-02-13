import CarosalView from "../components/Carosal"
import Header from "../components/Header"
import '../style/buying.css'
import rightArrow from '../assets/arrow.PNG'
let Renting = ()=>{
    return(
        <div className="buying r">
             <Header title={"Renting Properties in Dubai"}/>
             <div className="list">
                
                <CarosalView rent={true}/>
            </div>
        </div>
    )
}
export default Renting