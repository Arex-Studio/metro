import Selector from "./Selector"

let TransparentBox = ()=>{
    return(
        <div className="transparent">
            <h1>Find Property in Dubai</h1>
            <div className="row1">
                <Selector options={['Buy']}/>
                <Selector options={['Completion Status']}/>
                <div className="inputfield">
                    <input type="text" placeholder="Location, Community , City"/>
                </div>
                <div className="button">
                    <div className="fill"></div>
                    <h2>Find</h2>
                </div>
            </div>
            <div className="row1">
                <Selector options={['Buy']}/>
                <Selector options={['Completion Status']}/>
                <div className="inputfield">
                    <input type="text" placeholder="Location, Community , City"/>
                </div>
                <div className="button">
                    <div className="fill"></div>
                    <h2>Find</h2>
                </div>
            </div>
        </div>
    )
}
export default TransparentBox