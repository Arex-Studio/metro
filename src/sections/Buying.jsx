import CarosalView from "../components/Carosal"
import Header from "../components/Header"
import '../style/buying.css'

let Buying = ()=>{
    return(
        <div className="buying b">
            <Header title={"Buying Properties in Dubai"}/>
            <div className="list">
            <CarosalView/>
            </div>
        </div>
    )
}
export default Buying