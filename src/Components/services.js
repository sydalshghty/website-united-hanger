import "../CSS/services.css";
import myImgOne from "../images/home (35) - Copy.png";
import { useState, useEffect } from "react";
function Services() {
    const [services, setService] = useState([]);
    const getAllServices = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/services/get_all`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => setService(data.services));
        }
        catch (error) {
            console.error("Error Not Found Data", error)
        }
    }
    useEffect(() => {
        getAllServices();
    }, []);

    console.log(services)
    return (
        <div className="services" style={{ height: "100vh", position: "relative" }}>
            <img className="img-product" src={myImgOne} alt="img" />
            <div className="services-content" style={{ position: "absolute", bottom: 0 }}>
                <div className="heading-services">
                    <h1>services</h1>
                </div>
                {!services ? "" :
                    <>
                        <div className="content-text" style={{ height: "475px" }}>
                            <p></p>
                            <ul style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: "20px", width: "100%", margin: "0px" }}>
                                {services.map((service, index) => {
                                    return (
                                        <li className="li-one" style={{ zIndex: "10000" }} key={service.id}>{service.title}</li>
                                    )
                                })}
                            </ul>
                        </div>

                    </>
                }
            </div>
        </div>
    )
}
export default Services;