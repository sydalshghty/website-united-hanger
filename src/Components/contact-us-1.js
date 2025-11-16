import contactBG from "../images/contact-us-bg.jpg";
import "../CSS/contact-us-1.css";
function ContactUs1() {
    return (
        <div className="contact-us-1" style={{ position: "relative", width: "100%", height: "100%" }}>
            <img src={contactBG} alt="contact-bg1" />
            <div className="contact-us-1-content"
                style={{
                    position: "absolute", width: "100%", height: "100%",
                    left: "50%", top: "35%",
                    transform: "translate(-50%, -50%)",
                    display: "flex", flexDirection: "column",
                    justifyContent: "center", alignItems: "center", gap: "16px"
                }}>
                <h1 style={{ fontSize: "96px", fontWeight: "700", color: "#1660A5" }}
                    className="title-contact-us"
                >Contact UNITED HANGER</h1>
                <p style={{ fontSize: "32px", fontWeight: "400", color: "#FFFFFF" }}>We craft premium hangers with precision, innovation and sustainability.</p>
            </div>
        </div>
    )
}
export default ContactUs1;