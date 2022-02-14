import * as $ from 'jquery'
let Menubar = ({onClick})=>{
    let isHover = ()=>{
        $('#mobilenavbar').css('display','block')
    }
    let HoverOUt = ()=> $('#mobilenavbar').css('display','none')
    return(
        <div onClick={onClick} onMouseEnter={isHover} className="menubar">
            <div className="bar barx"></div>
            <div className="bar barx"></div>
            <div className="bar barx"></div>
            <div id="mobilenavbar">
                <button onPointerEnter={HoverOUt}>Hello</button>
            </div>
        </div>
    )
}
export default Menubar