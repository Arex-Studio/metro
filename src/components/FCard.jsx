let FCard = ({image,title,desc})=>{
    return(
        <div className="card">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}
export default FCard