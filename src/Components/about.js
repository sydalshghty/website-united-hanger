import myHangerImg from "../images/home (30)_cleanup (2).png";
import Services from "./services";
import { useRef } from "react";
import "../CSS/new-style-about.css";
import { useState, useEffect } from "react";

function About() {
    const [whyus, setWhyus] = useState("");
    const [aboutus, setAboutus] = useState("");

    const getWhyus = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/settings`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => {
                    setWhyus(data.settings.whyus);
                    setAboutus(data.settings.aboutus)
                })
        }
        catch (error) {
            console.error("Error not found data", error)
        }
    }
    useEffect(() => {
        getWhyus();
    }, []);

    const loremContent = useRef();
    if (loremContent.current) {
        loremContent.current.style.opacity = 0;
    }
    return (
        <>
            <div>
                <div className="hanger-United" style={{ width: "100%", height: "100vh", position: "relative" }}>
                    <div className="background-image" style={{ position: "absolute", width: "100%", height: "100%" }}>
                        <img src={myHangerImg} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className="container">
                        <div className="lorem-content" style={{ opacity: 0 }}>
                            <p>cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="hanger-Content" style={{ position: "absolute", zIndex: "100000", top: "20%", left: "50%", padding: "40px" }}>
                            <h3 style={{ fontSize: "35px", textTransform: "capitalize", marginBottom: "20px" }}>why united hanger ?</h3>
                            <p className="p-one" style={{ fontSize: "17px", lineHeight: "1.4" }}>
                                {whyus}
                            </p>
                            <p className="p-two" style={{ fontSize: "17px", lineHeight: "1.4" }}>
                                {aboutus}
                            </p>
                        </div>
                    </div>
                </div>
                <Services />
            </div>
        </>
    )
}
export default About;