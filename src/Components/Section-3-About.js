import serviceIcon1 from "../images/icon-service-1 (2).svg";
import serviceIcon2 from "../images/service-icon-2 (2).svg";
import serviceIcon3 from "../images/service-icon-3.svg";
import serviceIcon4 from "../images/service-icon-4.svg";
import "../CSS/section-3-About.css";
import { useState } from "react";
function SectionAbout3() {
    const [allservices, setAllServices] = useState([
        {
            id: 1,
            title: "Customized Logo Printing",
            description: "Elevate your brand with precision logo printing in one or two colors. Our advanced printing technology ensures crisp, durable branding directly on the hanger a professional touch your customers will remember.",
            icon_image_path: serviceIcon1
        },
        {
            id: 2,
            title: "Versatile Hook Designs",
            description: "Select from multiple hook shapes designed for aesthetics and function. Whether modern, classic, or unique, we offer options to match your brand’s character and your customers’ preferences.",
            icon_image_path: serviceIcon2,
        },
        {
            id: 3,
            title: "360° Rotating Hooks",
            description: "Our hooks rotate a full 360 degrees for effortless handling and display, all while remaining securely attached. Engineered for durability, convenience, and a seamless retail experience.",
            icon_image_path: serviceIcon3,
        },
        {
            id: 4,
            title: "Tailored Color Matching",
            description: "Choose from a wide range of vibrant colors or request your own. We manufacture hangers in your brand’s exact shade to ensure perfect alignment with your identity and visual impact.",
            icon_image_path: serviceIcon4,
        }
    ]);

    console.log(setAllServices);

    return (
        <div className="section-about3">
            <div className="container">
                <h2>Our Services</h2>
                <>
                    <div className="our-services">
                        {allservices.map((service, index) => {
                            return (
                                <div className="col-service" key={service.id}>
                                    <div>
                                        <img src={service.icon_image_path} alt="service-icon" />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>
                                        {service.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </>
            </div>
        </div>
    )
}
export default SectionAbout3;