import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import image from '../assets/logo.png'
import CardImage from "./CardImage";
/*
<Carousel responsive={responsive}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px caro"
            
            >
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
                
    </Carousel>
*/
let CarosalView = ({rent=false,expanding = true})=>{
    let [toShow,setShow] = useState(4)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: toShow,
        slidesToScroll: 1
      };
    useEffect(()=>{
      if(window.innerWidth < 1200 && window.innerWidth > 800){
        setShow(2)
      }else if(window.innerWidth < 800){
        setShow(1)
      }else{
        setShow(4)
      }
      window.addEventListener('resize',e=>{

        if(window.innerWidth < 1200 && window.innerWidth > 800){
          setShow(2)
        }else if(window.innerWidth < 800){
          setShow(1)
        }else{
          setShow(4)
        }
      })
    },[])
    return(
        <div className="carosalview">
            <Slider {...settings}>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
            <CardImage rent={rent} expanded={expanding}/>
              </Slider>
        </div>
    )
}
export default CarosalView