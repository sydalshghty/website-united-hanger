import serviceImg from "../images/img-service.png";
import iconImg from "../images/icon-service (3).svg";
import bgService from "../images/Rectangle 39329 (2).png";
import "../CSS/unique-features.css";
function UniqueFeatures() {
    return (
        <div className="unique-features">
            <h1>Our Unique Features</h1>
            <div className="all-services">
                <div className="content-service">
                    <img src={bgService} alt="bg-service" className="bg-service" />
                    <div className="col-service-one">
                        <img src={serviceImg} alt="img-service" />
                        <img src={iconImg} alt="img-icon" />
                        <p>Customized Logo Printing</p>
                    </div>
                    <div className="col-service-two">
                        <img src={iconImg} alt="img-icon" />
                        <p>Elevate your brand with precision logo printing in one
                            or two colors. Our advanced printing technology ensures crisp,
                            durable branding directly on the hanger a professional touch your customers will remember.</p>
                    </div>
                </div>
                <div className="content-service">
                    <img src={bgService} alt="bg-service" className="bg-service" />
                    <div className="col-service-one">
                        <img src={serviceImg} alt="img-service" />
                        <img src={iconImg} alt="img-icon" />
                        <p>Customized Logo Printing</p>
                    </div>
                    <div className="col-service-two">
                        <img src={iconImg} alt="img-icon" />
                        <p>Elevate your brand with precision logo printing in one
                            or two colors. Our advanced printing technology ensures crisp,
                            durable branding directly on the hanger a professional touch your customers will remember.</p>
                    </div>
                </div>
                <div className="content-service">
                    <img src={bgService} alt="bg-service" className="bg-service" />
                    <div className="col-service-one">
                        <img src={serviceImg} alt="img-service" />
                        <img src={iconImg} alt="img-icon" />
                        <p>Customized Logo Printing</p>
                    </div>
                    <div className="col-service-two">
                        <img src={iconImg} alt="img-icon" />
                        <p>Elevate your brand with precision logo printing in one
                            or two colors. Our advanced printing technology ensures crisp,
                            durable branding directly on the hanger a professional touch your customers will remember.</p>
                    </div>
                </div>
                <div className="content-service">
                    <img src={bgService} alt="bg-service" className="bg-service" />
                    <div className="col-service-one">
                        <img src={serviceImg} alt="img-service" />
                        <img src={iconImg} alt="img-icon" />
                        <p>Customized Logo Printing</p>
                    </div>
                    <div className="col-service-two">
                        <img src={iconImg} alt="img-icon" />
                        <p>Elevate your brand with precision logo printing in one
                            or two colors. Our advanced printing technology ensures crisp,
                            durable branding directly on the hanger a professional touch your customers will remember.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UniqueFeatures;