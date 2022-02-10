import img from'../assets/apt.jpg'
import girl from '../assets/girl.png'

let CardImage = ({rent=false,expanded=true})=>{
    return(
        <div className="cardimage">
            <div className="image">
                <img src={img} alt="" />
                <div className="button">
                    <button style={{background:`${rent? 'green':'red'}`}}>{rent ? 'Rent':'Buy'}</button>
                    <button style={{background:'white', marginLeft:'5px',color:'black'}}>Apartments</button>
                    <div className="bottom" style={{position:'absolute', marginTop:'70%'}}>
                        <h3>128,676,278AED</h3>
                    </div>
                </div>
            </div>
            {expanded &&<div className="bar">
                <div className="left">
                    <div className="image">
                    <img src={girl} alt="" />
                    </div>
                    <div className="col">
                        <h5>Listing by</h5>
                        <h3>John Doe</h3>
                    </div>
                </div>
            </div>}
            <h2>Rented , Perfect Example , for luxury life</h2>
            <h4>Sidra Villas II, Dubai</h4>
        </div>
    )
}
export default CardImage