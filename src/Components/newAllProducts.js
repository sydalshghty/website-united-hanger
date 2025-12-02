import productimgone from "../images/products (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../CSS/newAllProducts.css"
import { Link } from "react-router-dom";
function NewAllProducts() {
    const navigate = useNavigate();
    const goToProduct = () => {
        navigate("/product")
    }
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        try {
            await fetch("https://united-hanger-2025.up.railway.app//api/products", {
                method: "GET",
            })
                .then((response) => response.json())
                .then(data => setProducts(data.products))
        }
        catch (error) {
            console.error("Error Not Found Data", error)
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="newProducts-Departament">
            <img className="background" src={productimgone} alt="background-img" />
            <div className="content-products">
                {products.map((product, index) => {
                    return (
                        <div className="col-product" key={product.id}>
                            <div className="col-image">
                                <img src={product.images[0].image_path} alt="img-product" style={{ objectFit: "contain" }} />
                            </div>
                            <div className="product-text">
                                <h5 className="heading-one">{product.name}</h5>
                                <div className="all-Raw">
                                    <span className="raw-material">raw material:</span>
                                    {product.materials.map((material, index) => {
                                        return (
                                            <div key={material.id} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
                                                <p>{`${material.name}.`}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="icon-product">
                                    <h5>MORE DETAILES</h5>
                                    <div>
                                        <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "#09609a" }}>
                                            <FontAwesomeIcon
                                                onClick={goToProduct}
                                                className="icon-right" icon={faArrowRight} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default NewAllProducts;