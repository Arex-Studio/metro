import { useEffect, useState } from 'react'
import img from'../assets/apt.jpg'
import girl from '../assets/girl.png'

let CardImage = ({rent=false,expanded=true})=>{
    let [margin,setMargin] = useState('130%')
    let resize = ()=>{
        let width = window.innerWidth
        if(width < 400){
            setMargin('70%')
        }else if(width < 1500 && width > 400){
            setMargin('90%')
        }else{
            setMargin('130%')
        }
    }
    useEffect(()=>{
       // resize()
        window.addEventListener('resize',e=>{
         //   resize()
        })
    },[])
    return(
        <div className="cardimage">
            <div className="image">
                <img src={'https://axproperty.com/wp-content/uploads/2022/01/seven-plam-525x328.jpg'} alt="" />
                <div className="button">
                    <button style={{background:`${rent? '#25d366':'red'}`}}>{rent ? 'Rent':'Buy'}</button>
                    <button style={{background:'white', marginLeft:'5px',color:'black'}}>Apartments</button>
                    <div className="bottom pricing" style={{position:'absolute'}}>
                        <h3>128,676,278AED</h3>
                    </div>
                </div>
            </div>
            {expanded &&<div className="bar">
                <div className="left">
                    <div style={{background:'#007bff'}} className="image">
                    <img src={'https://metropolitan.realestate/wp-content/uploads/2021/09/Mariia-Voronina-204x300.png'} alt="" />
                    </div>
                    <div className="col">
                        <h5 style={{opacity:'0.7'}}>Listing by</h5>
                        <h3 style={{fontWeight:'bold'}}>John Doe</h3>
                    </div>
                </div>
            </div>}
            <h2 style={{color:'#333'}}>
                Green Square in Dubai Hills Estate                </h2>
            <h4>Seven Palm Residences Seven Residences, the new project of Seven Tides, is located at the prime location of Palm Ju </h4>
        </div>
    )
}
export default CardImage