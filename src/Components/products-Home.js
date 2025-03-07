import "../CSS/products-home.css";
import productsImg from "../images/products (4).png";
import { useState } from "react";
function ProductsHome() {
    const [hovered, setHovered] = useState(false);
    return(
        <div className="products-home">
            <img src= {productsImg} alt="products-img"/>
            <div className="container">
                <p className={`p-hangers ${hovered ? "hovered" : ""}`}
                    >
                    top hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >
                    bOTTOM hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >JACKET & SUIT hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >KIDSWEAR hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >BABYWEAR hangers</p>
                <p className="p-one p-access"
                    onMouseEnter={() => {
                        setHovered(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                    }}
                >aCCESSORIES</p>
            </div>
        </div>
    )
}
export default ProductsHome;