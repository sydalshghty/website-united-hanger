import "../CSS/nav.css";
import logo from "../images/Vector Smart Object-ai (1)-svg (1).svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Nav(){
    const [isActive, setIsActive] = useState(false);
    const [isBars, setBars] = useState(true);

    const [colorLink,setColorLink] = useState("#ffffff");
    const location = useLocation();
    
    const handleBars = () => {
        setBars(!isBars)
    }

    const handleToggle = () => {
        setIsActive( !isActive )
    }

    const handleClick = () => {
        handleBars();
        handleToggle();
    }
    useEffect(() => {
        const updateColorLink = () => {
            if (window.innerWidth < 768) {
                if (location.pathname === "/home") {
                    setColorLink("#ffffff");
                } else {
                    setColorLink("#ffffff");
                }
            } else {
                if (location.pathname === "/home") {
                    setColorLink("#ffffff");
                } else if (location.pathname === "/inquiries") {
                    setColorLink("#09609a");
                }
                else if (location.pathname === "/products") {
                    setColorLink("#ffffff")
                }else if (location.pathname === "/inquiry-Form"){
                    setColorLink("#09609a")
                }
                 else {
                    setColorLink("#09609a");
                }
            }
        };
    
        updateColorLink();
    
        window.addEventListener('resize', updateColorLink);
    
        return () => {
            window.removeEventListener('resize', updateColorLink); 
        };
    }, [location]);
    
    return(
        <div className="nav">
            <div className="container">
            <div className="header-content">
                    <div className="img-logo">
                        <img src= {logo} alt="logo"/>
                    </div>
                    <ul className= {isActive ? "active" : ""}>
                        <li>
                            <Link style={{color: colorLink}} to={"/home"}>home</Link>
                        </li>
                        <li>
                            <Link style={{color: colorLink}} to={"products"}>products</Link>
                        </li>
                        <li>
                            <Link style={{color: colorLink}} to={"about"}>about</Link>
                        </li>
                        <li>
                            <Link style={{color: colorLink}} to={"contact"}>contact</Link>
                        </li>
                        <li>
                            <Link style={{color: colorLink}} to={"inquiries"}>inquiries</Link>
                        </li>
                    </ul>
                    <div className="icon-bars" onClick={handleClick}>
                        {isBars ? (
                            <FontAwesomeIcon icon={ faBars }/>
                        ) :
                        (
                            <FontAwesomeIcon icon={ faTimes }/>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;