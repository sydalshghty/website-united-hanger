import whoweAreBG from "../images/who-we-are-.png";
import "../CSS/Section-2-About-us.css";
import { useState, useEffect } from "react";
function SectionAboutus2() {
    const [allsetteings, setAllSettings] = useState([]);
    const getAllSetteings = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/settings`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => setAllSettings(data.settings));
        }
        catch (error) {
            console.error("Error not found data", error)
        }
    }
    useEffect(() => {
        getAllSetteings();
    }, []);

    return (
        <div className="section-about-2">
            <div className="container">
                <div className="content-about-2">
                    <h2>Who We Are?</h2>
                    {!allsetteings ?
                        ""
                        :
                        <>
                            <p className="p-one">
                                {`${allsetteings.whous1 || ""}`}
                            </p>
                            <p className="p-two">
                                {`${allsetteings.whous2 || ""}`}
                            </p>
                            <p className="p-three">
                                {`${allsetteings.whous3 || ""}`}
                            </p>
                            <p className="p-four">
                                {`${allsetteings.whous4 || ""}`}
                            </p>
                        </>
                    }
                </div>
                <div className="image-about-2">
                    <img src={whoweAreBG} alt="img" />
                </div>
            </div>
        </div>
    )
}
export default SectionAboutus2;