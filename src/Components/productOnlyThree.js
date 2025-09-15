import "../CSS/productOnly-3.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect,useCallback} from "react";
import { useParams } from "react-router-dom";

function ProductOnlyThree() {
    const [Material,setMaterial] = useState([]);

    const {ProductID} = useParams();

    const getProductInformation = useCallback(async () => {
        await fetch(`https://united-hanger-2025.up.railway.app/api/products/product/${ProductID}`,{
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setMaterial(data.product.images))
    },[ProductID])

    useEffect(() => {
        getProductInformation()
    },[getProductInformation])

    console.log(Material);

    const AllImgesProduct = []
    AllImgesProduct.push(Material.map((img,index) => {
        return img.image_path
    }));

    console.log(AllImgesProduct[0][0]);

    const mainImgProduct = AllImgesProduct[0][0];
    const imgOne = AllImgesProduct[0][0];
    const imgTwo = AllImgesProduct[0][1];
    const imgThree = AllImgesProduct[0][2];
    const imgFour = AllImgesProduct[0][3];
    

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