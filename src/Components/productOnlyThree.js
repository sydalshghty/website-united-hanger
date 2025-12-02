import "../CSS/productOnly-3.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
function ProductOnlyThree() {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ProductID } = useParams();

    const getProductInformation = useCallback(async () => {
        try {
            const response = await fetch(`https://united-hanger-2025.up.railway.app/api/products/product/${ProductID}`);
            const data = await response.json();
            if (data.product && data.product.images) {
                setImages(data.product.images.map(img => img.image_path));
            }
        } catch (err) {
            console.error("Error fetching product:", err);
        }
    }, [ProductID]);

    useEffect(() => {
        getProductInformation();
    }, [getProductInformation]);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="product-only-three">
                <div className="content-products">
                    {/* الصورة الرئيسية */}
                    <div className="product-img-one">
                        {images.length > 0 && (
                            <img src={images[currentIndex]} alt="main-product" style={{ cursor: "pointer", objectFit: "contain" }} />
                        )}
                    </div>

                    {/* الصور المصغرة */}
                    <div className="product-img-two">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`product-${index}`}
                                className={currentIndex === index ? "active-thumbnail" : ""}
                                style={{ cursor: "pointer", objectFit: "contain" }}
                                onClick={() => handleThumbnailClick(index)

                                }
                            />
                        ))}
                    </div>
                </div>

                {/* أزرار التنقل */}
                <div className="button-icons">
                    <FontAwesomeIcon onClick={handlePrev} className="icon-left" icon={faArrowLeft} />
                    <FontAwesomeIcon onClick={handleNext} className="icon-right" icon={faArrowRight} />
                </div>
            </div>
        </>
    );
}

export default ProductOnlyThree;
