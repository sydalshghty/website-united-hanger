import "../CSS/products-home.css";
import productsImg from "../images/products (4).png";
function ProductsHome() {
    return (
        <div className="products-home">
            <img src={productsImg} alt="products-img" />
        </div>
    )
}
export default ProductsHome;