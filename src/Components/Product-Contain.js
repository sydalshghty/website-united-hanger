import "../CSS/product-contain.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCart2 } from "react-icons/bs";

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
                    `https://united-hanger-2025.up.railway.app/api/v2/products/product/${ProductID}`
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
        if (!selectedColor && !selectedSize && !selectedMaterial) {
            toast.error("Please select product details before adding to cart");
            return;
        }

        const selectedColorObj = productData.colors?.find(c => c.id === selectedColor);
        const selectedSizeObj = productData.sizes?.find(s => s.id === selectedSize);
        const selectedMaterialObj = productData.materials?.find(m => m.id === selectedMaterial);

        const selectedData = {
            productName: productData.name,
            image: productData.main_image || productData.images[0]?.image_path,
            color: selectedColorObj ? selectedColorObj.name : null,
            size: selectedSizeObj ? `${selectedSizeObj.value} ${selectedSizeObj.unit}` : null,
            material: selectedMaterialObj ? selectedMaterialObj.name : null,
            product: productData,
        };

        console.log("🛒 بيانات الطلب:", selectedData);
        navigate("/inquiries", { state: selectedData });
    };


    const handleSelectColor = (color) => {
        setSelectedColor(color.id);
    };

    const sizeMessage = (size) => {
        console.log(size)
    }

    const materialMessage = (material) => {
        console.log(material)
    }

    return (
        <>
            {!productData ? (
                <h1 className="loading-data">Loading Data...</h1>
            ) : (
                <div className="product-contain">
                    <div className="container">
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
                        <div className="product-information" id="product-information">
                            <div className="all-colors" id="all-colors-product">
                                <p>Colors</p>
                                <div className="content-bullets-colors" style={{ display: "flex", gap: "20px" }}>
                                    {productData.colors.map((color) => (
                                        <div key={color.id}>
                                            <span
                                                style={{ backgroundColor: color.hex_code, width: "35px", height: "35px", display: "block" }}
                                                className={`btn-color-product ${selectedColor === color.id ? "click" : ""}`}
                                                onClick={() => handleSelectColor(color)}
                                            ></span>
                                        </div>
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
                                            onClick={() =>
                                                setSelectedSize(size.id)
                                            }
                                        >
                                            <p onClick={() => {
                                                sizeMessage(size);
                                            }}>{size.value}</p>
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
                                            <p onClick={() => {
                                                materialMessage(material);
                                            }}>{material.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-addTocart" onClick={handleOrderNow}>
                                <BsCart2 style={{ fontSize: "25px", color: "#fff" }} />
                                <p>add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <ToastContainer position="top-right" autoClose={3000} style={{ marginTop: "100px" }} />
            </div>
        </>
    );
}

export default ProductContain;

