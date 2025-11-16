import { Link } from "react-router-dom";
import "../CSS/new-footer.css";
import { useState, useEffect } from "react";

function NewFooter() {
    const [allLocations, setAllLocations] = useState([]);
    const getAllLocations = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/locations`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => setAllLocations(data.locations));
        }
        catch (error) {
            console.error("Error not found data")
        }
    }

    useEffect(() => {
        getAllLocations();
    }, []);

    return (
        <div className="new-footer-departament">
            <div className="content-footer">
                <div className="col-logo">
                    <img src={"/logo-united-hanger.svg"} alt="logo" style={{ cursor: "pointer" }} />
                    <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#0C0D0D", letterSpacing: "0.5px" }}>(United Hanger Company) </h3>
                    <p style={{ fontSize: "20px", fontWeight: "600", color: "#0C0D0D", letterSpacing: "0.5px" }}>Download our app</p>
                    <img src={"/google-play.svg"} alt="google-play" style={{ cursor: "pointer" }} />
                </div>
                <div className="col-company" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <label style={{ fontSize: "20px", fontWeight: "bold", color: "#0C0D0D" }}>Company</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <li className="li-link">
                            <Link to={"/home"}>Home</Link>
                        </li>
                        <li className="li-link">
                            <Link to={"/products"}>Products</Link>
                        </li>
                        <li className="li-link">
                            <Link to={"/inquiries"}>Inquiries</Link>
                        </li>
                        <li className="li-link">
                            <Link to={"/about"}>About Us</Link>
                        </li>
                        <li className="li-link">
                            <Link to={"/contact"}>Contact Us</Link>
                        </li>
                    </div>
                </div>
                {allLocations.length === 0 ?
                    <h2 style={{ width: "70%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "35px" }}>Loading data...</h2>
                    :
                    <>
                        {allLocations.map((location, index) => {
                            return (
                                <div className="col-egypt div-one" key={location.id}>
                                    <h3>{location.country_name}</h3>
                                    <div>
                                        <img src={"/location-icon.svg"} alt="location-img" />
                                        <p>{location.name}</p>
                                    </div>
                                    <div>
                                        <img src={"/phone-icon.svg"} alt="phone-img" />
                                        <p>{location.phones}</p>
                                    </div>
                                    <div>
                                        <img src={"/mail-icon.svg"} alt="email-img" />
                                        <Link to={`mailto:${location.emails}`}>{location.emails}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
            <div className="copyright-col">
                <p>Copyright © 2025 United Hanger. Commercial Registration No. 1010701348. (United Hanger Company) VAT Number 310916821400003. All rights reserved </p>
            </div>
        </div>
    )
}
export default NewFooter;