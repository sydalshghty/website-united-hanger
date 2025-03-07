import myHangerImg from "../images/home (30)_cleanup (2).png";
import Services from "./services";
import { useRef } from "react";
function About(){
    const loremContent = useRef();
    if(loremContent.current){
        loremContent.current.style.opacity = 0;
    }
    return(
        <>
          <div className="hanger-United">
            <div className="background-image">
                <img src={myHangerImg} alt="img"/>
            </div>
            <div className="container">
                <div className="lorem-content" style={{opacity: 0}}>
                    <p>cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="hanger-Content">
                    <h3>why united hanger ?</h3>
                    <p className="p-one">
                   Located in the vibrant heart of egypt, united hanger has been a cornerstone of the clothing industry since its establishment in 2020. We specialize in crafting premium plastic clothes hangers tailored to the diverse needs of clothing manufacturers worldwide.
                    </p>
                        <p className="p-two">
                                At united hanger company, we pride ourselves on delivering exceptional quality and innovation. Our state-of-the-art production facilities boast cutting-edge injection molding technology, ensuring that each hanger meets the highest standards of durability & functionality. With a huge daily production capacity, we are committed to meeting the demands of our customers with efficiency and precision. Our extensive product range caters to various sectors of the clothing industry, including babywear, kid's wear, teenage wear, lingerie, men's and women's wear. Whether it's delicate intimates or tailored suits, our hangers provide the perfect showcase for every garment. In addition to our superior products, we offer personalized logo printing services, allowing our clients to showcase their brand with pride and distinction. Our dedication to quality and style is reflected in our logo and embodied in our slogan.
                    </p>
                </div>
            </div>
        </div>
        <Services/>
        </>
    )
}
export default About;