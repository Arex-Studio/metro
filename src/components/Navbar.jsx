import logo from '../assets/logo.png'
import DropDown from './dropdown'
import navigations from '../data/navigation.json'
let NavBar = ()=>{
    let set = [ <DropDown title={"Areas"} items={navigations.areas}/>,
                <DropDown title={"Projects"} items={['hello','sss','ss']}/>,
                <DropDown title={"Developers"} items={['hello','sss','ss']}/>,
                <DropDown title={"Services"} items={['hello','sss','ss']}/>,
                <DropDown title={"About Us"} items={['hello','sss','ss']}/>,
                <DropDown title={"EN"} items={['hello','sss','ss']}/>
              ]
    return(
        <nav>
            <img src={logo} alt="" />
            <div className="n1">
                <a href='/'>Buy</a>
                <a href='/'>Sell</a>
                 {set}
            </div>
        </nav>
    )
}
export default NavBar