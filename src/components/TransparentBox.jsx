import Selector from "./Selector"

let TransparentBox = ()=>{
    return(
        <div className="transparent">
            <h1>Find Property in Dubai</h1>
            <div className="items">
                <div className="block1">
                    <div id="selector">
                        <Selector options={'test'}/>
                    </div>
                    <div id="selector">
                        <Selector options={'test'}/>
                    </div>
                </div>
                <div className="block2">
                    <Search/>
                </div>
            </div>
            <div className="items">
                <div className="block3">
                    <div id="selector">
                        <Selector options={'test'}/>
                    </div>

                </div>
                <div className="block4">
                     <div className="multi">
                         <Selector options={"ss"}/>
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
                    <input type="text" placeholder="Location, Community , City"/>
                </div>
                <div className="findBtn">
                    <div className="fill"></div>
                    <h2>Find</h2>
                </div>
        </div>
    )
}
export default TransparentBox