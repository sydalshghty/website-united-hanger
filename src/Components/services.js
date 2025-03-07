import "../CSS/services.css";
import myImgOne from "../images/home (35) - Copy.png";


function Services(){
    return(
        <div className="services">
                <img className="img-product" src={myImgOne} alt="img" />
                <div className="services-content">
                    <div className="heading-services">
                        <h1>services</h1>
                    </div>
                    <div className="content-text">
                            <p>When it comes to creating unique and eye-catching hanger our
                            designers have got you covered. Bring us your idea and together
                            we'll make it into an reality.</p>
                        <ul>
                            <li className="li-one">Custom Colors</li>
                            <li className="li-two">Logo Printing</li>
                            <li className="li-three">Special Hooks</li>
                            <li className="li-four">Creative Designs</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default Services;