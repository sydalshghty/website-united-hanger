import "../CSS/Modules.css";
import cartIcon from "../images/cart-icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Modules() {
    const [allproducts, setAllProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await fetch("https://united-hanger-2025.up.railway.app/api/products");
            const data = await response.json();
            setAllProducts(data.products || []);
        } catch (error) {
            console.error("Error Not Found Data", error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="Modules-departament">
            <div className="container">
                <div className="all-modules">
                    {allproducts.length === 0 ? (
                        <h1 className="loading-data">Loading Products...</h1>
                    ) : (
                        allproducts.map((product) => (
                            <Link to={`/products/${product.id}`}>
                                <div className="col-product" key={product.id}>
                                    <div className="img-product">
                                        <img
                                            src={product.images?.[0]?.image_path || "/fallback.png"}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="col-cart">
                                        <img src={cartIcon} alt="cart-icon" />
                                    </div>
                                    <div className="content-information">
                                        <p className="p-title">{product.name}</p>

                                        <div className="all-colors">
                                            {product.colors?.map((color) => (
                                                <li
                                                    key={color.id}
                                                    style={{ backgroundColor: color.hex_code }}
                                                ></li>
                                            ))}
                                        </div>

                                        <div className="all-material-product">
                                            {product.materials?.map((material) => (
                                                <p className="col-material" key={material.id}>
                                                    {material.name}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modules;
