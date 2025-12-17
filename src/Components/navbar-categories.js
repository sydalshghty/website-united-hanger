import "../CSS/navbar-categories.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

function NavbarCategories({ onCategoryChange = () => { } }) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const categoryIdFromUrl = searchParams.get("category_id") || "all";

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");

    // Get Categories
    const getAllCategories = async () => {
        try {
            const response = await fetch(
                "https://united-hanger-2025.up.railway.app/api/categories/get_all"
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

    // 🔴 أهم سطر
    useEffect(() => {
        setActiveCategory(categoryIdFromUrl);
    }, [categoryIdFromUrl]);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);

        if (categoryId === "all") {
            navigate("/products");
            onCategoryChange("all");
        } else {
            navigate(`/products?category_id=${categoryId}`);
            onCategoryChange(categoryId);
        }
    };
    //upload new changes
    return (
        <div className="navbar-categories">
            <li className="all-btn" style={{ display: "flex", gap: "30px" }}>
                {/* All */}
                <div
                    className={`category-item ${activeCategory === "all" ? "active" : ""
                        }`}
                    onClick={() => handleCategoryClick("all")}
                >
                    <Link>
                        All</Link>
                </div>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    autoplay={{ delay: 1000 }}
                    loop={true}
                    speed={2000}
                >
                    {categories.map((category) => (
                        <SwiperSlide
                            key={category.id}
                            className={`category-item ${String(activeCategory) === String(category.id) ? "active" : ""
                                }`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <Link>
                                {category.name}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </li>
        </div>
    );
}

export default NavbarCategories;






