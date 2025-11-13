import "../CSS/nav.css";
import logo from "../images/UH Logo (2).svg";
import homeLogo from "../images/UH Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Nav() {
    const [shownav, setshownav] = useState(false);
    const [bars, setbars] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === "/home" || location.pathname === "/";

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const handleNavbar = () => {
        setshownav(false);
        setbars(true);
    };

    return (
        <div className="new-fixed-navbar" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "110px", zIndex: "9999999999999999999999999" }}>
            <div
                className={`navbar-departament ${isHome ? (scrolled ? "scrolled" : "home-nav") : ""}`}
            >
                <div className="content-navbar">
                    <img src={logo} alt="united-hanger" className="logo-united-hanger main-logo" style={{ cursor: "pointer" }} />
                    <img src={homeLogo} alt="united-hanger" className="logo-united-hanger home-logo" style={{ cursor: "pointer" }} />
                    <div className="col-search">
                        <input type="text" placeholder="Search" />
                        <IoSearch className="search-icon" />
                    </div>
                    <ul className={`${shownav ? "show" : ""}`}>
                        <li><Link to="home" onClick={() => {
                            handleNavbar();
                        }}>home</Link></li>
                        <li><Link to="products" onClick={() => {
                            handleNavbar();
                        }}
                        >products</Link></li>
                        <li><Link to="about" onClick={() => {
                            handleNavbar();
                        }}
                        >about</Link></li>
                        <li><Link to="contact" onClick={() => {
                            handleNavbar();
                        }}
                        >contact</Link></li>
                        <li><Link to="inquiries" onClick={() => {
                            handleNavbar();
                        }}
                        >inquiries</Link></li>
                    </ul>
                    {bars ? (
                        <FaBars
                            className="bars-icon"
                            onClick={() => {
                                setshownav(true);
                                setbars(false);
                            }}
                        />
                    ) : (
                        <FaXmark
                            className="bars-icon"
                            onClick={() => {
                                setshownav(false);
                                setbars(true);
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Nav;




