import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../CSS/Whatsapp.css";

function WhatsApp() {
    const phoneNumber = "201114346777";

    return (
        <>
            <a
                href={`tel:+${phoneNumber}`}
                className="col-whatsapp phone"
                aria-label="Call us"
            >
                <FaPhoneAlt className="icon" />
                <span className="phone-number">+20 111 434 6777</span>
            </a>
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="col-whatsapp whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="icon" />
            </a>

        </>
    );
}

export default WhatsApp;


