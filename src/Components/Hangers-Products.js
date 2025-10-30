import bgProduct from "../images/Property 1=hover (2) (3).png";
import "../CSS/Hangers-Products.css";
import cartIcon from "../images/cart-product.svg";
import leftIcon from "../images/left-icon-product.svg";
import rightIcon from "../images/right-icon-product.svg";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
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

    // إعدادات السلايدر
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <div className="hangers-products">
            <h1>Hangers in the Spotlight</h1>

            {!allProducts.length ? (
                <h2 style={{ textAlign: "center", marginTop: "150px", color: "white" }}>Loading Products...</h2>
            ) : (
                <Slider {...settings} className="all-products">
                    {allProducts.map((product) => (
                        <Link to={`/products/${product.id}`}>
                            <div className="col-product" key={product.id}>
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

                                    <div className="col-image">
                                        <img
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

                                        <div className="bullets-hangers" style={{ display: "flex", gap: "8px" }}>
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
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default HangersProducts;

