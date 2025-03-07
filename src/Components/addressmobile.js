import "../CSS/addressmobile.css";
import { useNavigate } from "react-router-dom";
function Addressmobile() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/inquiry-Form")
    }
    return(
    <div className="address-content-mobile">
        <div className="address-mobile-one">
            <h2 className="head">Our Factory</h2>
            <p>Address: VG/C3 Industrial zone,</p>
            <p>10th of Ramadan City, Cairo, Egypt</p>
            <p>Phone: +20 111 43 777 - +20 112 21 13 999</p>
            <p onClick={handleClick}>Email: info@unitedhanger.com</p>
        </div>
        <div className="address-mobile-two">
            <h2 className="head">Business Hours</h2>
            <p>Saturday - Wedensday - 9am to 5pm</p>
            <p>Thursday - 9am to 2pm</p>
            <p>Friday - Closed</p>
        </div>
    </div>
    )
}
export default Addressmobile;