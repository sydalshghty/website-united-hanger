import { Link } from "react-router-dom";
import "../CSS/navbar-categories.css";
import { useState, useEffect } from "react";

function NavbarCategories({ onCategoryChange = () => { } }) {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");

    const getAllCategories = async () => {
        try {
            const response = await fetch(
                `https://united-hanger-2025.up.railway.app/api/categories/get_all`
            );
            const data = await response.json();
            setCategories(data.categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        onCategoryChange(categoryId); // 🔥 نبلغ الأب بالتغيير
    };

    return (
        <div className="navbar-categories">
            <li className="all-btn" style={{ display: "flex", gap: "30px" }}>
                <div
                    className={`category-item ${activeCategory === "all" ? "active" : ""}`}
                    onClick={() => handleCategoryClick("all")}
                >
                    <Link to="#">All</Link>
                </div>

                {categories.length > 0 &&
                    categories.map((category) => (
                        <div
                            key={category.id}
                            className={`category-item ${activeCategory === category.id ? "active" : ""}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <Link to="#">{category.name}</Link>
                        </div>
                    ))}
            </li>
        </div>
    );
}

export default NavbarCategories;


