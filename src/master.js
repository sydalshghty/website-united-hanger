import Nav from "./Components/nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./Components/products";
import Inquiries from "./Components/inquiries";
import ProductOnly from "./Components/product-Only";
import Inquiryform from "./Components/inquiry-Form";
import WhatsApp from "./Components/WhatsApp";
import HomePage from "./pages/Home-page";
import ContactUSPage from "./pages/Contact-Us-Page";
import AboutPage from "./pages/About-Page";
function Master() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="products" element={<Products />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactUSPage />} />
                <Route path="inquiries" element={<Inquiries />} />
                <Route path="product" element={<ProductOnly />} />
                <Route path="inquiry-Form" element={<Inquiryform />} />
                <Route path="products/:ProductID" element={<ProductOnly />} />
            </Routes>
            <WhatsApp />
        </>
    )
}
export default Master;