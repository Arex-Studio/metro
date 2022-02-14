
//<Dropdown className='cdrop' options={options} value={options[0]} />
import { useEffect, useState } from 'react'
import './selector.css'
import { emitCustomEvent ,useCustomEventListener} from 'react-custom-events';
let Selector = ({options,id})=>{
    let [open,setOpen] = useState(false)
    let [selectedValue,SetSelectedValue]= useState(options[0])
    
    let onValueSelected=(e)=>{
        //alert(e)
        SetSelectedValue(e)
    }

    let tiles = [<SelectorTile onSelectValue={onValueSelected}/>,<SelectorTile id={"ss"}/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>,<SelectorTile/>]
    useCustomEventListener(`val${id}`,e=>{
        console.log(e)
        SetSelectedValue(e)
    })
    return(
        <>
        <div className="selectorinterface">
            <div onClick={()=>setOpen(true)} className="selector">
                <div className="selectortile">
                    <label>{selectedValue}</label>
                </div>
               <div className="selectorbody">
                    {tiles}
               </div>
            </div>
        
        </div>
        </>
    )
}
let SelectorTile = ({id})=>{
    const event = new CustomEvent('onSelected',{data:'sample'})
    document.dispatchEvent(event)
    let [output,setOuput] = useState('')
    let handSelectedValue= ()=>{
           emitCustomEvent(`val${id}`,'owais'+Math.random())
            //alert('ss')
    }
    return(
        <div onClick={handSelectedValue} className="tile">
            <label onClick={handSelectedValue}>Item1</label>
        </div>
    )
}
export default Selector