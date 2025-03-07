import "../CSS/footer-product-only.css";
import imgProduct from "../images/PRODUCT (15).png";
function FooterProductOnly(){
    return(
        <div className="footer-product-only">
            <img src= {imgProduct} alt="img-product" />
            <div className="footer-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
        </div>
    )
}
export default FooterProductOnly;