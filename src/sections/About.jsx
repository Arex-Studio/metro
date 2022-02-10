import '../style/buying.css'
import Header from "../components/Header"
import '../style/about.css'
import InfoCard from '../components/InfoCard'
let About = ()=>{

    return (
        <div className="buying about">
            <Header title={"About Us"} showProperties={false}/>
            <p>Metropolitan Group was established in 2008, and Metropolitan Premium Properties takes pride in providing our local and overseas clients with the highest possible level of service, advice, support and assistance with all their property requirement</p>
            <div className="container">
                <div className="crow">
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className="crow">
                    <InfoCard/>
                    <InfoCard/>
                </div>
            </div>
        </div>
    )
}
export default About