import { Link } from "react-router-dom";
import iconRight from "../images/chevron-right (5).svg";
import tophangers from "../images/Top-Hangers.svg";
import bottomhangers from "../images/bottom-Hangers (2).svg";
import blankethangers from "../images/blanket-Hangers.svg";
import babywearhangers from "../images/babywear-Hangers (2).svg";
import "../CSS/Line-products.css";
function LineProducts() {
    const allproducts = [
        { id: 1, img: tophangers, title: "Top Hangers" },
        { id: 2, img: bottomhangers, title: "Bottom Hangers" },
        { id: 3, img: blankethangers, title: "Blanket Hangers" },
        { id: 4, img: babywearhangers, title: "Babywear Hangers" }
    ]


    return (
        <div className="line-products-departament">
            <h1>Discover Our Premium Line Products</h1>
            <div className="all-line-products">
                {allproducts.map((product, index) => {
                    return (
                        <div className="col-product" key={product.id}>
                            <img src={product.img} alt="img-product" />
                            <p>{product.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="see-all-products">
                <div>
                    <Link to={"/products"}>See all products</Link>
                    <Link to={"/products"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={iconRight} alt="icon-left" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default LineProducts;