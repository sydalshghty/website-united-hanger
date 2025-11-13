import ourFactoryImg from "../images/our-factory-img.png";
import "../CSS/section-About-4.css";
function SectionAbout4() {
    return (
        <div className="section-about4">
            <div className="container">
                <h2>Our Factory</h2>
                <div className="all-images-factory">
                    <img src={ourFactoryImg} alt="img-factory" />
                    <img src={ourFactoryImg} alt="img-factory" />
                    <img src={ourFactoryImg} alt="img-factory" />
                    <img src={ourFactoryImg} alt="img-factory" />
                </div>
            </div>
        </div>
    )
}
export default SectionAbout4;