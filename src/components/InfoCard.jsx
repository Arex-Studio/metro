import a1 from '../assets/a1.PNG'
let InfoCard = ()=>{
    return(
        <div className="infocard">
            <div className="column1">
                <h3>120,000</h3>
                <h5>cutomers</h5>
                <p>private clients and the Real Estate market professionals</p>
            </div>
            <div className="column2">
                <img src={a1} alt="" />
            </div>
        </div>
    )
}
export default InfoCard