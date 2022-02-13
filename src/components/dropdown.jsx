import { useEffect } from "react"

let DropDown = ({title,items})=>{
    let dropItems = []
    items.forEach((i,j)=>{
        dropItems.push(<a  className='navitem' key={j} href="">{i}<div className="line"></div></a>)
    })
    useEffect(()=>{
        
    },[])
    return(
        <div className="drop">
            <div className="title">
                <label className="nv" htmlFor="">{title}</label>
                <div className="opened nv">^</div>
                <div className="closed nv">^</div>
            </div>
            <div className="menu">
            {dropItems}
            </div>
        </div>
    )
}
export default DropDown