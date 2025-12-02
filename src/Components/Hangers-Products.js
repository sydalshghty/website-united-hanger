import bgProduct from "../images/Property 1=hover (2) (3).png";
import "../CSS/Hangers-Products.css";
import cartIcon from "../images/cart-product.svg";
import leftIcon from "../images/left-icon-product.svg";
import rightIcon from "../images/right-icon-product.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function HangersProducts() {
    const [allProducts, setAllProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await fetch(
                `https://united-hanger-2025.up.railway.app/api/v2/products`
            );
            const data = await response.json();
            setAllProducts(data.products);
        } catch (error) {
            console.error("Error not found data", error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="hangers-products">
            <h1>Hangers in the Spotlight</h1>

            {!allProducts.length ? (
                <h2 style={{ textAlign: "center", marginTop: "150px", color: "white" }}>
                    Loading Products...
                </h2>
            ) : (
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    speed={1200}
                    spaceBetween={20}
                    slidesPerView={5}
                    autoplay={{
                        delay: 800,
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
                    {allProducts.map((product) => (
                        <SwiperSlide key={product.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Link to={`/products/${product.id}`}>
                                <div className="col-product">
                                    <img src={bgProduct} alt="bg-product" className="bg-product" />

                                    <div className="information-product">
                                        <div
                                            className="col-cart"
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                zIndex: 1000,
                                            }}
                                        >
                                            <img
                                                src={cartIcon}
                                                alt="cart-icon"
                                                className="cart-icon-product"
                                            />
                                        </div>

                                        <div className="col-image" style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                            <img
                                                style={{ objectFit: "contain" }}
                                                src={product.images[0]?.image_path}
                                                alt={product.name}
                                            />
                                        </div>

                                        <div className="all-btns">
                                            <img src={rightIcon} alt="right-icon" />
                                            <img src={leftIcon} alt="left-icon" />
                                        </div>

                                        <div className="content-text">
                                            <p className="title">{product.name}</p>

                                            <div
                                                className="bullets-hangers"
                                                style={{ display: "flex", gap: "8px" }}
                                            >
                                                {product.colors.map((color) => (
                                                    <span
                                                        key={color.id}
                                                        style={{
                                                            backgroundColor: color.code,
                                                        }}
                                                    ></span>
                                                ))}
                                            </div>

                                            <div className="all-hangers-materials">
                                                {product.materials.map((material) => (
                                                    <p
                                                        className="col-hangers-material"
                                                        key={material.id}
                                                    >
                                                        {material.name}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}

export default HangersProducts;


