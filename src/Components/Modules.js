import "../CSS/Modules.css";
import cartIcon from "../images/cart-icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarCategories from "./navbar-categories";
function Modules() {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://united-hanger-2025.up.railway.app/api/v2/products/filter"
            );
            const data = await response.json();
            console.log("✅ All Products:", data.products);
            setAllProducts(data.products || []);
        } catch (error) {
            console.error("Error fetching all products", error);
        } finally {
            setLoading(false);
        }
    };

    const getProductsByCategory = async (categoryId) => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://united-hanger-2025.up.railway.app/api/v2/products/filter?category_id=${categoryId}`
            );
            const data = await response.json();
            console.log("✅ Products by Category:", data.products);
            setAllProducts(data.products || []);
        } catch (error) {
            console.error("Error filtering products", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    const handleCategoryChange = (categoryId) => {
        console.log("🟢 Selected Category ID:", categoryId);
        if (categoryId === "all") {
            getAllProducts();
        } else {
            getProductsByCategory(categoryId);
        }
    };
    console.log(allProducts);

    return (
        <div className="Modules-departament" style={{ minHeight: "60vh" }}>
            <NavbarCategories onCategoryChange={handleCategoryChange} />
            <div className="container">
                <div className="all-modules">
                    {loading ? (
                        <h1 className="loading-data" style={{ height: "40vh", width: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading Products...</h1>
                    ) : allProducts.length === 0 ? (
                        <h1 className="loading-data" style={{ display: "flex", width: "100%", height: "40vh", justifyContent: "center", alignItems: "center" }}>No Products Found</h1>
                    ) : (
                        allProducts.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id}>
                                <div className="col-product">
                                    <div className="img-product">
                                        <img
                                            src={product.images?.[0]?.image_path || "/fallback.png"}
                                            alt={product.name}
                                            style={{ objectFit: "contain" }}
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
                                                    key={`${product.id}-${color.id}`}
                                                    style={{ backgroundColor: color.hex_code }}
                                                ></li>
                                            ))}
                                        </div>

                                        <div className="all-material-product">
                                            {product.materials?.map((material) => (
                                                <p
                                                    className="col-material"
                                                    key={`${product.id}-${material.id}`}
                                                >
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






