import "../CSS/inquiries.css";
import { useState, useEffect, useRef } from "react";
import Inquiryform from "./inquiry-Form"; 

function Inquiries() {
  const [showForm, setShowForm] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [logoPrint, setLogoPrint] = useState("no"); 
  const fileInputRef = useRef(null);
  const [logoFile, setLogoFile] = useState(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log("تم رفع الصورة:", file.name);
    setLogoFile(file); 
  }
};

  const [showModel, setShowModel] = useState(false);
  const [AllProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        "https://united-hanger-2025.up.railway.app/api/products"
      );
      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error("Error: Not Found Data", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const [selectProduct, setSelectProduct] = useState({});
  const SizesProduct = selectProduct.sizes;
  const ColorsProduct = selectProduct.colors;
  const MaterialsProduct = selectProduct.materials;

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedSizeId, setSelectedSizeID] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedMaterialId, setSelectedMaterialId] = useState(null);

  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColor] = useState(false);

  const [nameProduct, setNameProduct] = useState("mh");
  const [sizeProduct, setSizeProduct] = useState("26 cm");
  const [colorProduct, setColorProduct] = useState("white");
  const [materialProduct, setMaterialProduct] = useState("pp");
  const [quantity, setQuantity] = useState(1); 
  const [inquiriesList, setInquiriesList] = useState([]);

  const handleAddInquiry = () => {
  if (!selectProduct.id || !selectedSizeId || !selectedMaterialId || !quantity) {
    alert("Please select all data before adding the inquiry");
    return;
  }

  const newInquiry = {
    id: Date.now(),
    productId: selectProduct.id,
    name: nameProduct,
    sizeId: selectedSizeId,
    size: sizeProduct,
    colorId: selectedColorId,
    color: colorProduct,
    materialId: selectedMaterialId,
    material: materialProduct,
    logo: logoPrint,
    quantity: quantity,
  };

  setInquiriesList([...inquiriesList, newInquiry]);
};

  const [showQunatity, setShowQuantity] = useState(false);

  return (
    <div className="inquiries-departemant">
      <div className="hanger-Name">
        <div
          className="col-one"
          onClick={() => {
            setShowModel(!showModel);
          }}
        >
          <h3>hanger name</h3>
          <p></p>
        </div>
        <div className={`All-Names-Products ${showModel ? "show" : ""}`}>
          {AllProducts.map((product) => (
            <p
              key={product.id}
              className={`product-name ${
                selectedProductId === product.id ? "active-click" : ""
              }`}
              onClick={() => {
                setSelectProduct(product);
                setSelectedProductId(product.id);
                setNameProduct(product.name);
              }}
            >
              {product.name}
            </p>
          ))}
        </div>
        <div className="col-Size">
          <div
            className="new-col-size"
            onClick={() => setShowSizes(!showSizes)}
          >
            <h3>size</h3>
            <p className="p-size icon-size"></p>
          </div>
        </div>
        <div className={`All-sizes-Product ${showSizes ? "show" : ""}`}>
          {SizesProduct &&
            SizesProduct.map((item) => (
              <div
                key={item.id}
                className={`col-size ${
                  selectedSizeId === item.id ? "active-click" : ""
                }`}
                onClick={() => {
                  setSelectedSizeID(item.id);
                  setSizeProduct(`${item.value} ${item.unit}`);
                }}
              >
                <p>
                  {item.value} {item.unit}
                </p>
              </div>
            ))}
        </div>
        <div className="col-Color" onClick={() => setShowColor(!showColors)}>
          <div className="color">
            <h3>color</h3>
            <p className="p-color"></p>
          </div>
        </div>
        <div className={`all-colors-product ${showColors ? "show" : ""}`}>
          {ColorsProduct &&
            ColorsProduct.map((color) => (
              <div
                key={color.id}
                className={`white content-color ${
                  selectedColorId === color.id ? "active-click" : ""
                }`}
                onClick={() => {
                  setSelectedColorId(color.id);
                  setColorProduct(color.name);
                }}
              >
                <p className="paragraph color-name">{color.name}</p>
                <p
                  className="icon icon-color"
                  style={{ backgroundColor: color.hex_code }}
                ></p>
              </div>
            ))}
        </div>
        <div
          className="col-materials"
          onClick={() => {
            setShowMaterial(!showMaterial);
          }}
        >
          <div>
            <h3>raw materials</h3>
            <p className="p-materials"></p>
          </div>
        </div>
        <div className={`all-materials ${showMaterial ? "show" : ""}`}>
          {MaterialsProduct &&
            MaterialsProduct.map((item) => (
              <div
                key={item.id}
                className={selectedMaterialId === item.id ? "active-click" : ""}
                onClick={() => {
                  setSelectedMaterialId(item.id);
                  setMaterialProduct(item.name);
                }}
              >
                <p>{item.name}</p>
              </div>
            ))}
        </div>
        <div
          className="col-materials col-quantity"
          onClick={() => {
            setShowQuantity(!showQunatity);
          }}
        >
          <div>
            <h3>quantity</h3>
            <p className="p-materials p-quantity"></p>
          </div>
        </div>
        <div className="col-quantity">
          <input
            type="number"
            placeholder="Enter Quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={`${showQunatity ? "show" : ""}`}
          />
        </div>
        <div className="col-logo">
          <h3>logo printing</h3>
          <div className="col-Yes-and-No">
            <div className="no">
              <p
                className={`icon ${logoPrint === "no" ? "click-no" : ""}`}
                onClick={() => setLogoPrint("no")}
              ></p>
              <p className="paragraph">no</p>
            </div>
            <div className="yes">
              <p
                className={`icon ${logoPrint === "yes" ? "click-yes" : ""}`}
                onClick={() => setLogoPrint("yes")}
              ></p>
              <p className="paragraph">yes</p>
            </div>

            <div className="upload-logo" onClick={handleDivClick}>
              <p className="paragraph">upload logo</p>
              <div>
                <p className="icon"></p>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="add-inquiry" onClick={handleAddInquiry}>
          <p>add inquiry</p>
        </div>
      </div>
      <div className="inquiries-Details">
        <div className="content-Details">
          <div className="heading">
            <h3>inquiries details</h3>
          </div>
          <div>
            {inquiriesList.length === 0 ? (
              <>
                <div className="model-MH">
                  <p>model name: mh</p>
                  <p>size: 26 cm</p>
                  <p>color: white</p>
                  <p>raw material: AA</p>
                  <p>logo print: no</p>
                  <p>quantity: 1</p>
                </div>
                <div className="model-RH">
                  <p>model name: rh</p>
                  <p>size: 36 cm</p>
                  <p>color: black</p>
                  <p>raw material: pp</p>
                  <p>quantity: 1</p>
                  <p>logo print: yes</p>
                </div>
              </>
            ) : (
              inquiriesList.map((inq) => (
                <div
                  key={inq.id}
                  className="model-MH"
                  style={{ paddingTop: "20px" }}
                >
                  <p>model name: {inq.name}</p>
                  <p>size: {inq.size}</p>
                  <p>color: {inq.color}</p>
                  <p>raw material: {inq.material}</p>
                  <p>logo print: {inq.logo}</p>
                  <p>quantity: {inq.quantity}</p>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="send-inquiry" onClick={() => setShowForm(true)} style={{cursor: "pointer"}}>
          <p>send inquiry</p>
        </div>
        {showForm && (
          <div className="popup-overlay">
            <div className="popup-content">
              <Inquiryform
                onClose={() => setShowForm(false)}
                inquiriesList={inquiriesList}
                logoFile={logoFile}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Inquiries;








