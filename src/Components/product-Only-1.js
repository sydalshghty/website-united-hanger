import "../CSS/product-Only.css";
//import backgroundproduct from "/public/images/PRODUCT.png";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
function ProductOnlyOne(){
    const [Product,setProduct] = useState([]);

    const {ProductID} = useParams();
    
    const getALLMaterial = useCallback(async () => {
        await fetch(`https://united-hanger-2025.up.railway.app//api/products/product/${ProductID}`,{
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setProduct(data.product.images))
    },[ProductID])

    useEffect(() => {
        getALLMaterial();
    },[getALLMaterial]);

    const getALLImages = [];
    getALLImages.push(Product.map((img,index) => {
        return img.image_path
    }))

    return(
        <div className="product-only-one">
            <img className="background-img" src={"/images/PRODUCT.png"} alt="background-img"/>
            <div>
            <img className="product-img" src= {getALLImages[0][0]} alt="img-product"/>
            </div>
        </div>
    )
}
export default ProductOnlyOne;