import logo from '../assets/logo2.png'
import DropDown from './dropdown'
import navigations from '../data/navigation.json'
import Avatar from './Avatar'
import heart from '../assets/heart.PNG'
import wapp from '../assets/wapp.PNG'
import Menubar from './menubar'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
let NavBar = ({onNavBarOpen})=>{
    let set = [ <DropDown title={"Areas"} items={navigations.areas}/>,
                <DropDown title={"Projects"} items={navigations.projects}/>,
                <DropDown title={"Developers"} items={navigations.dev}/>,
                <DropDown title={"Services"} items={navigations.services}/>,
                <DropDown title={"About Us"} items={navigations.about}/>,
                <DropDown title={"EN"} items={navigations.lang}/>
              ]
    return(
        <nav className='navbar'>
            <div className="img">
                <img  src={logo} alt="" />
            </div>
            <div className="n1">
                <a className='navitem nv' href='/'>Buy</a>
                <a className='navitem nv' href='/'>Sell</a>
                 {set}
            </div>
            <div className="n2">
                <Avatar icon={faHeart}/>
                <Avatar onClick={onNavBarOpen} icon={faWhatsapp} background="green"/>
                <h1 className='nv number'>+971 317 27209</h1>
            </div>
            <div className="n3">
                <Avatar icon={faHeart}/>
                <Avatar onClick={onNavBarOpen} icon={faWhatsapp} background="green"/>
             <Menubar onClick={onNavBarOpen}/>
            </div>
        </nav>
    )
}
export default NavBar