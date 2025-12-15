import { Link } from "react-router-dom";
import iconRight from "../images/chevron-right (5).svg";
import "../CSS/Line-products.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function LineProducts() {
    const [categories, setCategories] = useState([]);
    const getAllCategories = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app//api/categories/get_all`, {
                method: "GET"
            })
                .then((response) => response.json())
                .then(data => setCategories(data.categories))
        }
        catch (error) {
            console.error("Error not found data", error)
        }
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    //console.log(categories);

    return (
        <div className="line-products-departament">
            <h1>Discover Our Premium Line Products</h1>
            <div className="all-line-products">
                {categories.length === 0 ?
                    ""
                    :
                    <>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={categories.length > 4}
                            speed={1200}
                            spaceBetween={20}
                            slidesPerView={4}
                            autoplay={{
                                delay: 1800,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                992: { slidesPerView: 2 },
                                1100: { slidesPerView: 3 },
                                1440: { slidesPerView: 4 },
                            }}
                            className="all-products"
                        >
                            {categories.filter(category => category.image_path).map((category, index) => {
                                return (
                                    <SwiperSlide key={category.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Link to={`/products?category_id=${category.id}`}
                                            style={{ textDecoration: "none", color: "inherit" }}>
                                            <div className="col-product" style={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                                                <div className="col-image-category">
                                                    <img src={category.image_path} alt="img-product" style={{ objectFit: "contain" }} />
                                                </div>
                                                <p>{category.name}</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
                }
            </div>
            <div className="see-all-products">
                <div>
                    <Link to={"/products"}>See all products</Link>
                    <Link to={"/products"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={iconRight} alt="icon-left" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default LineProducts;