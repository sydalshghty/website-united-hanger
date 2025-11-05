import contactBG from "../images/contact-us-bg.jpg";
import "../CSS/contact-us-1.css";
function ContactUs1() {
    return (
        <div className="contact-us-1" style={{ position: "relative", width: "100%", height: "100%" }}>
            <img src={contactBG} alt="contact-bg1" />
            <div className="contact-us-1-content" style={{ position: "absolute", width: "100%", height: "100%", left: "50%", top: "40%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ fontSize: "70px", fontWeight: "600", color: "#FFFFFF" }} className="title-contact-us">Contact us</h1>
            </div>
        </div>
    )
}
export default ContactUs1;