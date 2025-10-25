import ourFactoryImg from "../images/c_Page_16 1.png";
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
                .then(data => setSettings(data.settings.ourfactory))
        }
        catch (error) {
            console.error("Error Not Found Data", error)
        }
    }
    useEffect(() => {
        getAllsettings();
    }, [])

    return (
        <div className="ourfactory-update-departament">
            <div className="container">
                <div className="content-information-ourfactory">
                    <h1>Our Factory</h1>
                    <p>{settings}</p>
                    <Link to={"/about"}>
                        <button>Explore more</button>
                    </Link>
                </div>
                <div className="col-image">
                    <img src={ourFactoryImg} alt="our factory img" />
                </div>
            </div>
        </div>
    )
}
export default OurFactory;