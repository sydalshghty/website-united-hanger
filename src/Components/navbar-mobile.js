import "../CSS/navbar-mobile.css";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NavbarMobile({ onCloseMobileNavbar }) {
    return (
        <div className="all-navbar-opacity">
            <div className="navbar-mobile">
                <div className="col-menu">
                    <p>Menu</p>
                    <FaXmark className="close-icon" onClick={onCloseMobileNavbar} />
                </div>
                <div className="all-navbar-links">
                    <li>
                        <Link to={"/home"}>home</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>products</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>about</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>contact</Link>
                    </li>
                    <li>
                        <Link to={"/inquiries"}>inquiries</Link>
                    </li>
                </div>
            </div>
        </div>
    )
}
export default NavbarMobile;