import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../CSS/Whatsapp.css";

function WhatsApp() {
    const phoneNumber = "201114346777";

    // نكشف هل المستخدم فاتح من موبايل
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            {isMobile ? (
                <a
                    href={`tel:+${phoneNumber}`}
                    className="col-whatsapp phone"
                    aria-label="Call us"
                >
                    <FaPhoneAlt className="icon" />
                    <span className="phone-number">+20 111 434 6777</span>
                </a>
            ) : (
                <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-whatsapp"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp className="icon" />
                </a>
            )}
        </>
    );
}

export default WhatsApp;

