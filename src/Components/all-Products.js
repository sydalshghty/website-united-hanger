import "../CSS/all-Products.css";
import productimgone from "../images/products (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
//import catalogImgOne from "../images/Cataloge-images-7__4_-removebg-preview.png";
//import catalogImgTwo from "../images/Cataloge-images-7__5_-removebg-preview.png";
//import catalogImgThree from "../images/Cataloge-images-7__6_-removebg-preview.png";
//import catalogImgFour from "../images/Cataloge-images-7__7_-removebg-preview.png";
import { useState,useEffect } from "react";
function AllProducts(){

    const navigate = useNavigate();

    const goToProduct = () => {
        navigate("/product")
    }
    const [products,setProducts] = useState([]);

    const getAllProducts = async () => {
       await  fetch("https://united-hanger-2025.up.railway.app//api/products",{
        method: "GET",
       }).then((response) => response.json())
       .then(data => setProducts(data.products))
    };

    useEffect(() => {
        getAllProducts();
    },[]);

    console.log(products);

    return(
        <div className="all-Products">
            <img className="background-products" src= {productimgone} alt="img-product-one"/>
            <div className="content-products">
                {products.map((product,index) => {
                    return(
                        <div className="col-product" key={product.id}>
                            <div className="col-image">
                                <img src= {product.images[0].image_path} alt="img-product"/>
                            </div>
                            <div className="product-text">
                                <h5 className="heading-one">{product.name}</h5>
                                    <div className="all-Raw">
                                        <span>raw material:</span>
                                        {product.materials.map((material,index) => {
                                            return(
                                                <div key={material.id} style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px"}}>
                                                <p>{`${material.name}.`}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                <div className="icon-product">
                                    <h5>MORE DETAILES</h5>
                                    <div>
                                        <FontAwesomeIcon
                                        onClick={goToProduct}
                                        className="icon-right"icon={faArrowRight}/>
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
export default AllProducts;