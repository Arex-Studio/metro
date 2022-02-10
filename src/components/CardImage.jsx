import img from'../assets/apt.jpg'
let CardImage = ()=>{
    return(
        <div className="cardimage">
            <div className="image">
                <img src={img} alt="" />
                <div className="button">
                    <button style={{background:'red'}}>Buy</button>
                    <button style={{background:'white', marginLeft:'5px',color:'black'}}>Apartments</button>
                    <div className="bottom" style={{position:'absolute', marginTop:'70%'}}>
                        <h3>128,676,278AED</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default CardImage