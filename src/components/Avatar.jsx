
let Avatar = ({img,background="red"})=>{
    return(
        <div className="avatar" style={{background:background}}>
            <img src={img} />
        </div>
    )
}
export default Avatar