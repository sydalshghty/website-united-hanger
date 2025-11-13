//import ourFactoryImg from "../images/our-factory-img.png";
import aboutFactory1 from "../images/about-factory-img1.jpg";
import aboutFactory2 from "../images/about-factory-img-2.jpg";
import aboutFactory3 from "../images/about-factory-img-3.jpg";
import aboutFactory4 from "../images/about-factory-img-4.jpg";
import aboutFactory5 from "../images/about-factory-img-5.jpg"
import "../CSS/section-About-4.css";
function SectionAbout4() {
    return (
        <div className="section-about4">
            <div className="container">
                <h2>Our Factory</h2>
                <div className="all-images-factory">
                    <img src={aboutFactory1} alt="img-factory" />
                    <img src={aboutFactory2} alt="img-factory" />
                    <img src={aboutFactory3} alt="img-factory" />
                    <img src={aboutFactory4} alt="img-factory" />
                    <img src={aboutFactory5} alt="img-factory" />
                </div>
            </div>
        </div>
    )
}
export default SectionAbout4;