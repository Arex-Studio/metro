let Header = ({title,showProperties = true})=>{
    return(
        <div className="headerx">
                <div className="titlex">
                    <h1>{title}</h1>
                    <div className="l"></div>
                </div>
                {showProperties && <button>Show All Properties</button>}
             </div>
    )
}
export default Header