import "../CSS/product-contain.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCart2 } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";

function ProductContain() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const { ProductID } = useParams();

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [showColors, setShowColors] = useState(true);

    // display images state
    const [displayImages, setDisplayImages] = useState([]);

    useEffect(() => {
        const getProductData = async () => {
            try {
                const response = await fetch(
                    `https://united-hanger-2025.up.railway.app/api/v2/products/product/${ProductID}`
                );
                const data = await response.json();

                if (!data.product) return;

                let images = data.product.images || [];

                images = [...images].sort((a, b) => a.image_type - b.image_type);

                const mainImage = images.find(img => img.image_type === 0);

                const mainImageIndex = mainImage
                    ? images.findIndex(img => img.id === mainImage.id)
                    : 0;

                setProductData({
                    ...data.product,
                    images: images,
                });

                setCurrentIndex(mainImageIndex);
                setDisplayImages(images); // initialize displayImages

            } catch (error) {
                console.error("Error Not Found Data", error);
            }
        };

        getProductData();
    }, [ProductID]);

    const handleNext = () => {
        if (!displayImages?.length) return;
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
            );
            setFade(false);
        }, 200);
    };

    const handlePrev = () => {
        if (!displayImages?.length) return;
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
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

    const handleSelectColor = (color) => {
        setSelectedColor(color.id);
    };

    const handleSelectMaterial = (material) => {
        setSelectedMaterial(material.id);
        if (material.no_color) {
            setShowColors(false);
            setSelectedColor(null);
        } else {
            setShowColors(true);
        }

        console.log("✅ Selected Material:", material);
    };

    const handleOrderNow = () => {
        if (!selectedMaterial) {
            toast.error("Please select a material");
            return;
        }

        if (showColors && !selectedColor) {
            toast.error("Please select a color");
            return;
        }

        if (!selectedSize) {
            toast.error("Please select a size");
            return;
        }

        const selectedColorObj = productData.colors?.find(c => c.id === selectedColor);
        const selectedSizeObj = productData.sizes?.find(s => s.id === selectedSize);
        const selectedMaterialObj = productData.materials?.find(m => m.id === selectedMaterial);

        const selectedData = {
            productName: productData.name,
            image: productData.main_image || productData.images[0]?.image_path,
            color: selectedColorObj ? selectedColorObj.name : "No Color",
            size: selectedSizeObj ? `${selectedSizeObj.value} ${selectedSizeObj.unit}` : null,
            material: selectedMaterialObj ? selectedMaterialObj.name : null,
            product: productData,
        };

        console.log("🛒 بيانات الطلب:", selectedData);
        navigate("/inquiries", { state: selectedData });
    };

    // popup image
    const [popupImage, setPopupImage] = useState(null);
    const handlePopupImage = (imagePath) => {
        setPopupImage(imagePath);
    };

    // control bar
    const [checked, setChecked] = useState(false);

    const handleSizeClick = (size) => {
        setSelectedSize(size.id);

        if (checked && size.images_with_bar?.length) {
            setDisplayImages(size.images_with_bar);
            setCurrentIndex(0);
        } else if (!checked && size.images_without_bar?.length) {
            setDisplayImages(size.images_without_bar);
            setCurrentIndex(0);
        }
    };

    return (
        <>
            {!productData ? (
                <h1 className="loading-data" style={{ fontSize: "35px", color: "#BDBDBD", height: "65vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading Product Data...</h1>
            ) : (
                <div className="product-contain">
                    <div className="container">
                        <div className="contain-product-1">
                            <h1 className="title-product" style={{ textTransform: "capitalize" }}>{productData.name}</h1>
                            <div className="contain-product-images">
                                <div className="main-image-product">
                                    <div className="col-btn-icon" onClick={handlePrev}>
                                        <FaAngleLeft />
                                    </div>
                                    <img
                                        src={displayImages[currentIndex]?.image_path}
                                        alt="product-image"
                                        className={`product-img ${fade ? "fade" : ""}`}
                                        style={{ objectFit: "contain" }}
                                    />
                                    <div className="col-btn-icon" onClick={handleNext}>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="all-images-product">
                                {displayImages.map((img, index) => (
                                    <div
                                        className={`col-image ${index === currentIndex ? "active" : ""}`}
                                        key={img.id}
                                        onClick={() => {
                                            handlePopupImage(img.image_path)
                                            handleImageClick(index)
                                        }}
                                    >
                                        <img src={img.image_path} alt="product-img" style={{ objectFit: "contain" }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product-information" id="product-information" style={{ gap: 25 }}>
                            <div className="all-colors" id="all-colors-product">
                                <p>Colors</p>
                                {showColors ? (
                                    <div
                                        className="content-bullets-colors"
                                        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
                                    >
                                        {productData.colors.map((color) => (
                                            <div key={color.id}>
                                                <span
                                                    style={{
                                                        backgroundColor: color.hex_code,
                                                        width: "35px",
                                                        height: "35px",
                                                        display: "block",
                                                        borderRadius: "50%",
                                                        border: "1px solid #ccc",
                                                        cursor: "pointer",
                                                    }}
                                                    className={`btn-color-product ${selectedColor === color.id ? "click" : ""
                                                        }`}
                                                    onClick={() => handleSelectColor(color)}
                                                ></span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div
                                        className="no-colors-message"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            marginTop: "10px",
                                            color: "#777",
                                            fontSize: "15px",
                                            background: "#f7f7f7",
                                            borderRadius: "8px",
                                            width: "fit-content",
                                        }}
                                    >
                                        <CgUnavailable style={{ color: "#ff4d4f", fontSize: "40px" }} />
                                        <p style={{ margin: 0, fontSize: "17px" }}>This material does not support colors.</p>
                                    </div>
                                )}
                            </div>
                            <div style={{ height: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                                <input
                                    style={{ width: "25px", height: "20px" }}
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => {
                                        const newChecked = !checked;
                                        setChecked(newChecked);

                                        if (!selectedSize) return;

                                        const sizeObj = productData.sizes.find(s => s.id === selectedSize);

                                        if (newChecked && sizeObj?.images_with_bar?.length) {
                                            setDisplayImages(sizeObj.images_with_bar);
                                            setCurrentIndex(0);
                                        } else if (!newChecked && sizeObj?.images_without_bar?.length) {
                                            setDisplayImages(sizeObj.images_without_bar);
                                            setCurrentIndex(0);
                                        }
                                    }}
                                />
                                {checked ?
                                    <span style={{ textTransform: "capitalize", fontSize: "20px" }}>has bar</span>
                                    :
                                    <span style={{ textTransform: "capitalize", fontSize: "20px" }}>no bar</span>
                                }
                            </div>
                            <div className="all-Sizes">
                                <p className="title-sizes">Sizes</p>
                                <div className="content-sizes">
                                    {productData.sizes.map((size) => (
                                        <div
                                            key={size.id}
                                            className={`col-size ${selectedSize === size.id ? "click" : ""}`}
                                            onClick={() => handleSizeClick(size)}
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
                                            onClick={() => handleSelectMaterial(material)}
                                        >
                                            <p>{material.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {productData.description === "" ? "" :
                                <p className="description-product" style={{ textTransform: "capitalize" }}>{productData.description}</p>
                            }
                            <div className="col-addTocart" onClick={handleOrderNow}>
                                <BsCart2 style={{ fontSize: "25px", color: "#fff" }} />
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer position="top-right" autoClose={3000} style={{ marginTop: "100px" }} />
            {popupImage && (
                <div
                    className="image-popup-overlay"
                    onClick={() => setPopupImage(null)}
                >
                    <img src={popupImage} alt="Popup" className="image-popup" />
                </div>
            )}
        </>
    );
}

export default ProductContain;









