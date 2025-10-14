import "../CSS/nav.css";
import logo from "../images/logo-united-hanger.svg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

function Nav() {
    const [shownav, setshownav] = useState(false);
    const [bars, setbars] = useState(true);

    return (
        <>
            <div className="navbar-departament">
                <div className="content-navbar">
                    <img src={logo} alt="united-hanger" className="logo-united-hanger" />
                    <div className="col-search">
                        <input type="text" placeholder="Search" />
                        <IoSearch className="search-icon" />
                    </div>
                    <ul className={`${shownav ? "show" : ""}`}>
                        <li>
                            <Link to={"home"}>home</Link>
                        </li>
                        <li>
                            <Link to={"products"}>products</Link>
                        </li>
                        <li>
                            <Link to={"about"}>about</Link>
                        </li>
                        <li>
                            <Link to={"contact"}>contact</Link>
                        </li>
                        <li>
                            <Link to={"inquiries"}>inquiries</Link>
                        </li>
                    </ul>
                    {bars ?
                        <FaBars className="bars-icon" onClick={() => {
                            setshownav(true);
                            setbars(false)
                        }} />
                        :
                        <FaXmark className="bars-icon"
                            onClick={() => {
                                setshownav(false);
                                setbars(true)
                            }}
                        />
                    }
                </div>
            </div>
        </>
    )
}
export default Nav;





