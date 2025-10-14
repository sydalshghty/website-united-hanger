import "../CSS/all-Products.css";
import productimgone from "../images/products (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarCategories from "./navbar-categories";

function AllProducts() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://united-hanger-2025.up.railway.app/api/v2/products/filter"
            );
            const data = await response.json();
            console.log("✅ All Products:", data.products);
            setProducts(data.products || []);
        } catch (error) {
            console.error("❌ Error fetching all products:", error);
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
            console.log("✅ Products by Category:", data);
            setProducts(data.products || []);
        } catch (error) {
            console.error("❌ Error filtering products:", error);
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

    const goToProduct = () => {
        navigate("/product");
    };

    return (
        <>
            {/* ✅ NavbarCategories */}
            <NavbarCategories onCategoryChange={handleCategoryChange} />

            <div className="all-Products">
                <img
                    className="background-products"
                    src={productimgone}
                    alt="img-product-one"
                />

                {loading ? (
                    <p style={{ textAlign: "center", marginTop: "40px" }}>Loading products...</p>
                ) : (
                    <div className="content-products">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div className="col-product" key={product.id}>
                                    <div className="col-image">
                                        <img
                                            src={product.images?.[0]?.image_path || ""}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="product-text">
                                        <h5 className="heading-one">{product.name}</h5>
                                        <div className="all-Raw">
                                            <span>raw material:</span>
                                            {product.materials?.map((material) => (
                                                <div
                                                    key={`${product.id}-${material.id}`} // ✅ مفتاح فريد لكل عنصر
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginTop: "30px",
                                                    }}
                                                >
                                                    <p>{`${material.name}.`}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="icon-product">
                                            <h5>MORE DETAILS</h5>
                                            <div>
                                                <FontAwesomeIcon
                                                    onClick={goToProduct}
                                                    className="icon-right"
                                                    icon={faArrowRight}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: "center", marginTop: "40px" }}>No products found</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default AllProducts;





