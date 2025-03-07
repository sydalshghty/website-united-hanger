import "../CSS/product-Only.css";
import backgroundproduct from "../images/PRODUCT (14).png";
import productImg from "../images/PRODUCT__1_-removebg-preview.png";

function ProductOnlyOne(){
    return(
        <div className="product-only-one">
            <img className="background-img" src= {backgroundproduct} alt="img-product"/>
            <div>
            <img className="product-img" src= {productImg} alt="img-product"/>
            </div>
        </div>
    )
}
export default ProductOnlyOne;