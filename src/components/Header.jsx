let Header = ({title,showProperties = true})=>{
    return(
        <div className="header">
                <div className="title">
                    <h1>{title}</h1>
                    <div className="line"></div>
                </div>
                {showProperties && <button>Show All Properties</button>}
             </div>
    )
}
export default Header