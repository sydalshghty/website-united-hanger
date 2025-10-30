import { Link } from "react-router-dom";
import "../CSS/new-footer.css";
function NewFooter() {
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
                <div className="col-egypt div-one">
                    <h3>EGYPT</h3>
                    <div>
                        <img src={"/location-icon.svg"} alt="location-img" />
                        <p>Industrial zone c3,
                            10th of Ramadan City, Cairo</p>
                    </div>
                    <div>
                        <img src={"/phone-icon.svg"} alt="phone-img" />
                        <p>+20 112 21 13 999
                            /
                            +20 111 43 46 777</p>
                    </div>
                    <div>
                        <img src={"/mail-icon.svg"} alt="email-img" />
                        <Link to={"mailto:ksasales@unitedhanger.com"}>ksasales@unitedhanger.com</Link>
                    </div>
                </div>
                <div className="col-saudiaArabia div-one">
                    <h3>SAUDI ARABIA</h3>
                    <div>
                        <img src={"/location-icon.svg"} alt="location-img" />
                        <p>Shadwan street , Difa’a district,
                            Alkharj Road , Riyadh</p>
                    </div>
                    <div>
                        <img src={"/phone-icon.svg"} alt="phone-img" />
                        <p>+966 555 122 319</p>
                    </div>
                    <div>
                        <img src={"/mail-icon.svg"} alt="email-img" />
                        <Link to={"mailto:ksasales@unitedhanger.com"}>ksasales@unitedhanger.com</Link>
                    </div>
                </div>
                <div className="col-Italy div-one">
                    <h3>ITALY</h3>
                    <div>
                        <img src={"/location-icon.svg"} alt="location-img" />
                        <p>Contrada mulini 8,
                            21034 Cocquio, Trevisago (VA)</p>
                    </div>
                    <div>
                        <img src={"/phone-icon.svg"} alt="phone-img" />
                        <p>+39 349 6729646
                            /
                            +39 033 21580586</p>
                    </div>
                    <div>
                        <img src={"/mail-icon.svg"} alt="email-img" />
                        <Link to={"mailto:mhkhankan@unitedhanger.com"}>mhkhankan@unitedhanger.com</Link>
                    </div>
                </div>
                <div className="col-Turkey div-one">
                    <h3>TURKEY</h3>
                    <div>
                        <img src={"/location-icon.svg"} alt="location-img" />
                        <p>Beyazit Grand Pazar, Divrikli Sok,
                            14/16 Istanbul</p>
                    </div>
                    <div>
                        <img src={"/phone-icon.svg"} alt="phone-img" />
                        <p>+90 539 556 05 29</p>
                    </div>
                    <div>
                        <img src={"/mail-icon.svg"} alt="email-img" />
                        <Link to={"mailto:tursales@unitedhanger.com"}>tursales@unitedhanger.com</Link>
                    </div>
                </div>
            </div>
            <div className="copyright-col">
                <p>Copyright © 2025 United Hanger. Commercial Registration No. 1010701348. (United Hanger Company) VAT Number 310916821400003. All rights reserved </p>
            </div>
        </div>
    )
}
export default NewFooter;