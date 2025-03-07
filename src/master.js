import Containhome from "./contain-home";
import Nav from "./Components/nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./Components/products";
import About from "./Components/about";
import Inquiries from "./Components/inquiries";
import Contact from "./Components/contact";
import ProductOnly from "./Components/product-Only";
import Inquiryform from "./Components/inquiry-Form";
function Master(){
    return(
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Containhome />} />
            <Route path="products" element= {<Products/>}/>
            <Route path="about" element= {<About/>}/>
            <Route path="contact" element= {<Contact/>}/>
            <Route path="inquiries" element= {<Inquiries/>} />
            <Route path="product" element= {<ProductOnly/>} />
            <Route path="inquiry-Form" element = {<Inquiryform/>}/>
        </Routes>
        </>
    )
}
export default Master;