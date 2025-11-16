import ourFactoryImg from "../images/Our Factory-new-img.jpg";
import "../CSS/ourfactory.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function OurFactory() {
    const [settings, setSettings] = useState([]);
    const getAllsettings = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/settings`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => setSettings(data.settings));
        }
        catch (error) {
            console.error("Error Not Found Data", error)
        }
    }
    useEffect(() => {
        getAllsettings();
    }, []);

    return (
        <div className="ourfactory-update-departament">
            <div className="container">
                <div className="content-information-ourfactory">
                    <h1>Our Factory</h1>
                    <p>{settings.ourfactory}</p>
                    <Link to={"/about"}>
                        <button>Explore more</button>
                    </Link>
                </div>
                <div className="content-image">
                    <div className="col-image" style={{ width: "422px", height: "597px", borderRadius: "12px", position: "relative" }}>
                        <img src={ourFactoryImg} alt="our factory img" style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "12px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurFactory;