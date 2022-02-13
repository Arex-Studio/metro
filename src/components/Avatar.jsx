import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let Avatar = ({icon,background="red", onClick})=>{
    return(
        <div onClick={onClick} className="avatar" style={{background:background}}>
            <FontAwesomeIcon icon={icon} color={'white'}/>
        </div>
    )
}
export default Avatar