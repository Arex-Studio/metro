
let Avatar = ({img,background="red", onClick})=>{
    return(
        <div onClick={onClick} className="avatar" style={{background:background}}>
            <img src={img} />
        </div>
    )
}
export default Avatar