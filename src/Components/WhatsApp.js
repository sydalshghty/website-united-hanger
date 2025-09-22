import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../CSS/Whatsapp.css";
function WhatsApp() {
    return(
        <Link to={"https://wa.me/201114346777"} target="_blank">
            <div className="col-whatsapp">
                <FaWhatsapp className="icon"/>
            </div>
        </Link>
    )
}
export default WhatsApp;