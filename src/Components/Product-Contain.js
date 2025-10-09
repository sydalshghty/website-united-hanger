/*import "../CSS/product-contain.css";
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

    const [selectedSize,setSelectedSize] = useState(false);
    const [selectedmaterial,setSelectedMaterial] = useState(false);


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
                                                <li style={{ backgroundColor: color.hex_code }} className="btn-color-product"></li>
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
                                            <div
                                                key={size.id}
                                                className={`col-size ${selectedSize === size.id ? "click" : ""}`}
                                                onClick={() => setSelectedSize(size.id)}
                                            >
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
                                            <div className={`raw-material ${selectedmaterial === material.id ? "click" : ""}`} key={material.id}
                                            onClick={() => setSelectedMaterial(material.id)}
                                            >
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

export default ProductContain;*/

import "../CSS/product-contain.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function ProductContain() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const { ProductID } = useParams();

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

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
        }, 200);
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

    const handleOrderNow = () => {
    const selectedData = {
        productName: productData.name,
        image: productData.images[currentIndex]?.image_path,
        color: productData.colors?.find(c => c.id === selectedColor)?.hex_code || null,
        size: productData.sizes?.find(s => s.id === selectedSize)?.value || null,
        material: productData.materials?.find(m => m.id === selectedMaterial)?.name || null,
        product: productData,
    };

    console.log("🛒 بيانات الطلب:", selectedData);

    // ⬅️ بدل console، هنبعتها لصفحة Inquiries
    navigate("/inquiries", { state: selectedData });
};

    return (
        <>
            {!productData ? (
                <h1 className="loading-data">Loading Data...</h1>
            ) : (
                <div className="product-contain">
                    <div className="container">
                        {/* القسم الخاص بالصور */}
                        <div className="contain-product-1">
                            <h1 className="title-product">{productData.name}</h1>

                            <div className="contain-product-images">
                                <div className="main-image-product">
                                    <div className="col-btn-icon" onClick={handlePrev}>
                                        <FaAngleLeft />
                                    </div>
                                    <img
                                        src={productData.images[currentIndex].image_path}
                                        alt="product-image"
                                        className={`product-img ${fade ? "fade" : ""}`}
                                    />
                                    <div className="col-btn-icon" onClick={handleNext}>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>

                            <div className="all-images-product">
                                {productData.images.map((img, index) => (
                                    <div
                                        className={`col-image ${index === currentIndex ? "active" : ""}`}
                                        key={img.id}
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <img src={img.image_path} alt="product-img" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* القسم الخاص بالمواصفات */}
                        <div className="product-information">
                            <div className="all-colors">
                                <p>Colors</p>
                                <div className="content-bullets-colors" style={{ display: "flex", gap: "20px" }}>
                                    {productData.colors.map((color) => (
                                        <ul key={color.id}>
                                            <li
                                                style={{ backgroundColor: color.hex_code }}
                                                className={`btn-color-product ${selectedColor === color.id ? "click" : ""}`}
                                                onClick={() => setSelectedColor(color.id)}
                                            ></li>
                                        </ul>
                                    ))}
                                </div>
                            </div>

                            <div className="all-Sizes">
                                <p className="title-sizes">Sizes</p>
                                <div className="content-sizes">
                                    {productData.sizes.map((size) => (
                                        <div
                                            key={size.id}
                                            className={`col-size ${selectedSize === size.id ? "click" : ""}`}
                                            onClick={() => setSelectedSize(size.id)}
                                        >
                                            <p>{size.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="raw-material-content">
                                <p className="title-material">Raw Materials</p>
                                <div className="all-raw-materials">
                                    {productData.materials.map((material) => (
                                        <div
                                            key={material.id}
                                            className={`raw-material ${selectedMaterial === material.id ? "click" : ""}`}
                                            onClick={() => setSelectedMaterial(material.id)}
                                        >
                                            <p>{material.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-addTocart" onClick={handleOrderNow}>
                                <p>Order now</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductContain;

