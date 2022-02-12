
//<Dropdown className='cdrop' options={options} value={options[0]} />
import { useState } from 'react'
import './selector.css'
let Selector = ({options})=>{
    let [open,setOpen] = useState(false)
    let tiles = [<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>]
    return(
        <>
        <div className="selectorinterface">
            <div onClick={()=>setOpen(true)} className="selector">
                <div className="selectortile">
                    <label>{options[0]}</label>
                </div>
               <div className="selectorbody">
                    {tiles}
               </div>
            </div>
        
        </div>
        </>
    )
}
let SelectorTile = ()=>{
    return(
        <div className="tile">
            <label>Item1</label>
        </div>
    )
}
export default Selector