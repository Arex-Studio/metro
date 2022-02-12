import CarosalView from "../components/Carosal"
import Header from "../components/Header"
import '../style/buying.css'

let Offplan = ()=>{
    return(
        <div className="buying ofplan">
             <Header title={"Offplan Latest Launches"}/>
            <div className="list">
            <CarosalView rent={true} expanding={false}/>
            </div>
        </div>
    )
}
export default Offplan