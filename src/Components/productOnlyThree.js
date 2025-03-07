import "../CSS/productOnly-3.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import mainImgProduct from "../images/PRODUCT (16).png";
import imgOne from "../images/PRODUCT (13)_LE_auto_x2_LE_auto_x2.webp";
import imgTwo from "../images/PRODUCT (9)_LE_auto_x2_LE_auto_x2.webp";
import imgThree from "../images/PRODUCT (10) (1)_LE_auto_x2_LE_auto_x2.webp";
import imgFour from "../images/PRODUCT (11) (1)_LE_auto_x2_LE_auto_x2.webp";
import { useState } from "react";
function ProductOnlyThree() {
    
    const allImagesProduct = [
        mainImgProduct,
        imgOne,
        imgTwo,
        imgThree,
        imgFour
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex === 4) {
            return false;
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex === 0) {
            return false;
        } else{
            setCurrentIndex(currentIndex - 1);
        }
    }
    return(
        <div className="product-only-three">
            <div className="content-products">
                <div className="product-img-one">
                    <img src={allImagesProduct[currentIndex]} alt="product-img-one"/>
                </div>
                <div className="product-img-two">
                    <img src={imgOne} alt="product-one"/>
                    <img src={imgTwo} alt="product-two"/>
                    <img src={imgThree} alt="product-three"/>
                    <img src={imgFour} alt="product-four"/>
                </div>
            </div>
            <div className="button-icons">
                <FontAwesomeIcon onClick={handlePrev} className="icon-left" icon={faArrowLeft}/>
                <FontAwesomeIcon onClick={handleNext} className="icon-right" icon={faArrowRight}/>
            </div>
        </div>
    )
}
export default ProductOnlyThree;