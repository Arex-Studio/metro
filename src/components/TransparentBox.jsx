import Selector from "./Selector"
import {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
let TransparentBox = ()=>{
   useEffect(()=>{
        alert(window.innerWidth)
   },[])
    return(
        <div className="transparent">
            <h1>Find Property in Dubai</h1>
            <div className="items">
                <div className="block1">
                    <div id="selector">
                        <Selector id="b" options={['Buy']}/>
                    </div>
                    <div id="selector">
                        <Selector id="c" options={['Completion Status']}/>
                    </div>
                </div>
                <div className="block2">
                    <Search/>
                </div>
            </div>
            <div className="items">
                <div className="block3">
                    <div id="selector">
                        <Selector options={['Select Property Type']}/>
                    </div>

                </div>
                <div className="block4">
                     <div className="multi">
                         <div id="selector">
                             <Selector options={["Min Area"]}/>
                         </div>
                         <div id="selector">
                             <Selector options={["Max Area"]}/>
                         </div>
                         <div id="selector">
                             <Selector options={["Min BedRooms"]}/>
                         </div>
                         <div id="selector">
                             <Selector options={["Max BedRooms"]}/>
                         </div>
                         <div id="selector">
                             <Selector options={["Min. Price"]}/>
                         </div>
                         <div id="selector">
                             <Selector options={["Max. Price"]}/>
                         </div>
                        
                     </div>
                </div>
                <div className="block5">
                    <div onClick={()=>alert('ss')} className="bfind">
                        <div className="fill"></div>
                        <h2>Find</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
let Search = ()=>{
    return(
        <div className="search">
        <div className="inputfield">
            <FontAwesomeIcon icon={faSearch} color={'#FFD700'}/>
                    <input style={{marginLeft:'5px'}} type="text" placeholder="Location, Community , City"/>
                </div>
                <div className="findBtn">
                    <div className="fill"></div>
                    <h2>Find</h2>
                </div>
        </div>
    )
}
export default TransparentBox