import "../CSS/product-contain.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function ProductContain() {
    const [productData, setProductData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const { ProductID } = useParams();

    useEffect(() => {
        const getProductData = async () => {
            try {
                const response = await fetch(
                    `https://united-hanger-2025.up.railway.app/api/products/product/${ProductID}`
                );
                const data = await response.json();
                setProductData(data.product);
            } catch (error) {
                console.error("Error Not Found Data", error);
            }
        };

        getProductData();
    }, [ProductID]);


    const handleNext = () => {
        if (!productData?.images) return;
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false);
        }, 200); // مدة التلاشي
    };

    const handlePrev = () => {
        if (!productData?.images) return;
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1
            );
            setFade(false);
        }, 200);
    };

    const handleImageClick = (index) => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(false);
        }, 200);
    };

    return (
        <>
            {!productData ? (
                <h1 className="loading-data">Loading Data...</h1>
            ) : (
                <div className="product-contain">
                    <div className="container">
                        <div className="contain-product-1">
                            <h1 className="title-product">{productData.name}</h1>

                            {!productData.images ? (
                                <h3>Loading...</h3>
                            ) : (
                                <div className="contain-product-images">
                                    <div className="main-image-product">
                                        <div className="col-btn-icon"
                                            onClick={handlePrev}
                                        >
                                            <FaAngleLeft />
                                        </div>
                                        <img
                                            src={productData.images[currentIndex].image_path}
                                            alt="product-image"
                                            className={`product-img ${fade ? "fade" : ""}`}
                                        />
                                        <div className="col-btn-icon"
                                            onClick={handleNext}
                                        >
                                            <FaChevronRight />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="all-images-product">
                                {!productData.images ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <>
                                        {productData.images.map((img, index) => (
                                            <div
                                                className={`col-image ${index === currentIndex ? "active" : ""}`}
                                                key={img.id}
                                                onClick={() => handleImageClick(index)}
                                            >
                                                <img src={img.image_path} alt="product-img" />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="product-information">
                            <div className="all-colors">
                                <p>Colors</p>
                                {!productData.colors ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <div className="content-bullets-colors" style={{ display: "flex", gap: "20px" }}>
                                        {productData.colors.map((color) => (
                                            <ul key={color.id}>
                                                <li style={{ backgroundColor: color.hex_code }}></li>
                                            </ul>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="all-Sizes">
                                <p className="title-sizes">Sizes</p>
                                {!productData.sizes ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <div className="content-sizes">
                                        {productData.sizes.map((size) => (
                                            <div className="col-size" key={size.id}>
                                                <p>{size.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="raw-material-content">
                                <p className="title-material">Raw Materials</p>
                                {!productData.materials ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <div className="all-raw-materials">
                                        {productData.materials.map((material) => (
                                            <div className="raw-material" key={material.id}>
                                                <p>{material.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link to={"/inquiries"} style={{ textDecoration: "none" }}>
                                <div className="col-addTocart">
                                    <p>Order now</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductContain;
