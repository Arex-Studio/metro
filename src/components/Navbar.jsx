import logo from '../assets/logo.png'
import DropDown from './dropdown'
import navigations from '../data/navigation.json'
import Avatar from './Avatar'
import heart from '../assets/heart.PNG'
import wapp from '../assets/wapp.PNG'
let NavBar = ()=>{
    let set = [ <DropDown title={"Areas"} items={navigations.areas}/>,
                <DropDown title={"Projects"} items={navigations.projects}/>,
                <DropDown title={"Developers"} items={navigations.dev}/>,
                <DropDown title={"Services"} items={navigations.services}/>,
                <DropDown title={"About Us"} items={navigations.about}/>,
                <DropDown title={"EN"} items={navigations.lang}/>
              ]
    return(
        <nav>
            <img src={logo} alt="" />
            <div className="n1">
                <a href='/'>Buy</a>
                <a href='/'>Sell</a>
                 {set}
            </div>
            <div className="n2">
                <Avatar img={heart}/>
                <Avatar img={wapp} background="green"/>
                <h1>+971 317 27209</h1>
            </div>
        </nav>
    )
}
export default NavBar