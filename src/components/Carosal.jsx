import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from '../assets/logo.png'
import CardImage from "./CardImage";
let CarosalView = ()=>{
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
    return(
        <div className="carosalview">
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
            <CardImage/>
            <CardImage/>
            <CardImage/>
            <CardImage/>
            <CardImage/>
                
    </Carousel>
        </div>
    )
}
export default CarosalView