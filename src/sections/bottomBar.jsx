import { faCoffee, faSearch,facebook, faPhone } from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faYoutube,faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './bottom.css'
let BottomBar = ()=>{
    return(
        <div className="bottombar">
            <div className="left">
                <FontAwesomeIcon icon={faPhone} color={'white'} size={'2x'}/>
                +923146243325
            </div>
            <div className="right">
                <FontAwesomeIcon icon={faWhatsapp} color={'white'} size={'2x'}/>
            </div>
        </div>
    )
}
export default BottomBar