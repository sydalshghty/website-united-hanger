import "../CSS/hangerUnited.css";
import imgBackground from "../images/home (30)_cleanup (2).png";
import { useEffect, useState } from "react";

function HangerUnited() {
    const [Data, setData] = useState([])

    const getAllSettings = async () => {
        try {
            await fetch("https://united-hanger-2025.up.railway.app/api/settings", {
                method: "GET"
            })
                .then(response => response.json())
                .then(data => setData(data.settings));
        } catch (error) {
            console.error("Error Not Found Data", error);
        }
    };


    useEffect(() => {
        getAllSettings();
    }, []);

    return (
        <div className="hanger-United about-united-hanger" style={{ width: "100%", height: "100vh", position: "relative" }}>
            <div className="background-image" style={{ position: "absolute", width: "100%", height: "100%" }}>
                <img src={imgBackground} alt="img" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="container">
                <div className="lorem-content">
                    <p>cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="hanger-Content">
                    <h3>why united hanger ?</h3>
                    <p className="p-one">
                        {Data.whyus}
                    </p>
                    <p className="p-two">
                        {`${Data.aboutus} ${Data.ourfactory}`}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HangerUnited;