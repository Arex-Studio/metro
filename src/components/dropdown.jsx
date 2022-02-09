import { useEffect } from "react"

let DropDown = ({title,items})=>{
    let dropItems = []
    items.forEach((i,j)=>{
        dropItems.push(<a key={j} href="">{i}<div className="line"></div></a>)
    })
    useEffect(()=>{
        
    },[])
    return(
        <div className="drop">
            <div className="title">
                <label htmlFor="">{title}</label>
                <div className="opened">^</div>
                <div className="closed">^</div>
            </div>
            <div className="menu">
            {dropItems}
            </div>
        </div>
    )
}
export default DropDown