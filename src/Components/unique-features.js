import bgService from "../images/Rectangle 39329 (2).png";
import "../CSS/unique-features.css";
import { useState, useEffect } from "react";
function UniqueFeatures() {
    const [services, setServices] = useState([]);
    const getAllServices = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/services/get_all`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => setServices(data.services))
        }
        catch (error) {
            console.error("Error not found data", error)
        }
    }
    useEffect(() => {
        getAllServices();
    }, [])

    return (
        <div className="unique-features">
            <h1>Our Unique Features</h1>
            <div className="all-services">
                {!services ?
                    ""
                    :
                    <>
                        {services.map((service, index) => {
                            return (
                                <div className="content-service" key={service.id}>
                                    <img src={bgService} alt="bg-service" className="bg-service" />
                                    <div className="col-service-one">
                                        <img src={service.image_path} alt="img-service" style={{ marginBottom: "20px", objectFit: "contain" }} />
                                        <img src={service.icon_image_path} alt="img-icon" style={{ objectFit: "contain" }} />
                                        <p>{service.title}</p>
                                    </div>
                                    <div className="col-service-two">
                                        <img src={service.icon_image_path} alt="img-icon" style={{ objectFit: "contain" }} />
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        </div>
    )
}
export default UniqueFeatures;