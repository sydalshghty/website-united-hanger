import Footerproducts from "./footer-Products";
import Modules from "./Modules";
import NavbarCategories from "./navbar-categories";
function Products() {
    return (
        <div className="products-departament">
            <NavbarCategories />
            <Modules />
            <Footerproducts />
        </div>
    )
}
export default Products;