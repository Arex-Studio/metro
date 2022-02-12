
//<Dropdown className='cdrop' options={options} value={options[0]} />
import { useState } from 'react'
import './selector.css'
let Selector = ({options})=>{
    let [open,setOpen] = useState(false)
    return(
        <>
        <div className="selectorinterface">
            <div onClick={()=>setOpen(true)} className="selector">
                <div className="selectortile">
                    <label>{options[0]}</label>
                </div>
               <div className="selectorbody"></div>
            </div>
        
        </div>
        </>
    )
}
export default Selector