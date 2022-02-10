import CarosalView from "../components/Carosal"
import Header from "../components/Header"
import '../style/buying.css'

let Renting = ()=>{
    return(
        <div className="buying">
             <Header title={"Renting Properties in Dubai"}/>
            <div className="list">
            <CarosalView rent={true}/>
            </div>
        </div>
    )
}
export default Renting