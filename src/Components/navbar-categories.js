import { Link } from "react-router-dom";
import "../CSS/navbar-categories.css";

function NavbarCategories() {
    return (
        <div className="navbar-categories">
            <li className="all-btn">
                <Link to={"#All"}>All</Link>
            </li>
        </div>
    )
}
export default NavbarCategories;
/*
<li className="btn-category">
                <Link to={"#Mens"}>Mens</Link>
            </li>
*/