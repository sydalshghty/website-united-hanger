import { Link } from "react-router-dom";
import "../CSS/navbar-categories.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function NavbarCategories({ onCategoryChange = () => { } }) {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    //navbar-categories//
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
        onCategoryChange(categoryId);
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
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    autoplay={{ delay: 1000 }}
                    loop={true}
                    speed={2000}
                >
                    {categories.length > 0 &&
                        categories.map((category, index) => {
                            return (
                                <>
                                    <SwiperSlide key={category.id}
                                        className={`category-item ${activeCategory === category.id ? "active" : ""}`}
                                        onClick={() => handleCategoryClick(category.id)}
                                    >
                                        <Link to="#">{category.name}</Link>

                                    </SwiperSlide>
                                </>
                            )
                        })}
                </Swiper>
            </li>
        </div>
    );
}

export default NavbarCategories;





