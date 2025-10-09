/*import "../CSS/inquiries.css";
import { useState, useEffect, useRef } from "react";
import Inquiryform from "./inquiry-Form";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Inquiries() {
  const location = useLocation();
  const orderDetails = location.state;

  console.log(orderDetails);

  const [showForm, setShowForm] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [logoPrint, setLogoPrint] = useState("no");
  const fileInputRef = useRef(null);
  const [logoFile, setLogoFile] = useState(null);

  const handleDivClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
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
  const SizesProduct = selectProduct?.sizes || [];
  const ColorsProduct = selectProduct?.colors || [];
  const MaterialsProduct = selectProduct?.materials || [];

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedSizeId, setSelectedSizeID] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedMaterialId, setSelectedMaterialId] = useState(null);

  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColor] = useState(false);

  const [nameProduct, setNameProduct] = useState("hanger name");
  const [sizeProduct, setSizeProduct] = useState("size");
  const [colorProduct, setColorProduct] = useState("color");
  const [materialProduct, setMaterialProduct] = useState("raw materials");
  const [quantity, setQuantity] = useState(1);

  const [inquiriesList, setInquiriesList] = useState([]);

  // ✅ استقبال بيانات المنتج من صفحة Product لما يضغط "Order Now"
  useEffect(() => {
    if (orderDetails && orderDetails.product) {
      const product = orderDetails.product;
      setSelectProduct(product);
      setSelectedProductId(product.id);
      setNameProduct(product.name);
    }
  }, [orderDetails]);

  const handleAddInquiry = () => {
    if (!selectProduct.id || !selectedSizeId || !selectedMaterialId || !quantity) {
      alert("Please select all data before adding the inquiry");
      return;
    }

    const exists = inquiriesList.some(
      (inq) =>
        inq.productId === selectProduct.id &&
        inq.sizeId === selectedSizeId &&
        inq.colorId === selectedColorId &&
        inq.materialId === selectedMaterialId &&
        inq.logo === logoPrint
    );

    if (exists) {
      alert("This inquiry has already been added!");
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
      image: selectProduct?.main_image || null, // ✅ الصورة الأساسية للمنتج
      logoFile: logoFile
        ? {
            name: logoFile.name,
            url: URL.createObjectURL(logoFile),
          }
        : null,
    };

    setInquiriesList([...inquiriesList, newInquiry]);
    setLogoFile(null);
  };

  const [showQunatity, setShowQuantity] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const toggleSizes = () => {
    if (!selectProduct.id) {
      alert("Please select a product first");
      return;
    }
    setShowSizes(!showSizes);
  };

  const toggleColors = () => {
    if (!selectProduct.id) {
      alert("Please select a product first");
      return;
    }
    setShowColor(!showColors);
  };

  const toggleMaterials = () => {
    if (!selectProduct.id) {
      alert("Please select a product first");
      return;
    }
    setShowMaterial(!showMaterial);
  };

  useEffect(() => {
  if (orderDetails) {
    setSelectProduct(orderDetails.product);
    setNameProduct(orderDetails.productName || orderDetails.product?.name || "hanger name");
    setSizeProduct(orderDetails.size || "size");
    setColorProduct(orderDetails.color || "color");
    setMaterialProduct(orderDetails.material || "raw materials");
  }
}, [orderDetails]);


  return (
    <div className="inquiries-departemant">
      <div className="hanger-Name">
        <div className="col-icon-Left">
          <div>
            <Link to={"/Home"}>
              <FaArrowLeft className="icon" />
            </Link>
          </div>
        </div>
        <div className="col-one" onClick={() => setShowModel(!showModel)}>
          <h3>{nameProduct}</h3>
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
                setShowModel(false);
              }}
            >
              {product.name}
            </p>
          ))}
        </div>

        <div className="col-Size">
          <div className="new-col-size" onClick={toggleSizes}>
            <h3>{sizeProduct}</h3>
            <p className="p-size icon-size"></p>
          </div>
        </div>

        <div className={`All-sizes-Product ${showSizes ? "show" : ""}`}>
          {SizesProduct.map((item) => (
            <div
              key={item.id}
              className={`col-sizes ${
                selectedSizeId === item.id ? "active-click" : ""
              }`}
              style={{ padding: "15px", color: "#afb0af" }}
              onClick={() => {
                setSelectedSizeID(item.id);
                setSizeProduct(`${item.value} ${item.unit}`);
                setShowSizes(false);
              }}
            >
              <p>
                {item.value} {item.unit}
              </p>
            </div>
          ))}
        </div>

        <div className="col-Color" onClick={toggleColors}>
          <div className="color">
            <h3>{colorProduct}</h3>
            <p className="p-color"></p>
          </div>
        </div>

        <div className={`all-colors-product ${showColors ? "show" : ""}`}>
          {ColorsProduct.map((color) => (
            <div
              key={color.id}
              className={`white content-color ${
                selectedColorId === color.id ? "active-click" : ""
              }`}
              onClick={() => {
                setSelectedColorId(color.id);
                setColorProduct(color.name);
                setShowColor(false);
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

        <div className="col-materials" onClick={toggleMaterials}>
          <div>
            <h3>{materialProduct}</h3>
            <p className="p-materials"></p>
          </div>
        </div>

        <div className={`all-materials ${showMaterial ? "show" : ""}`}>
          {MaterialsProduct.map((item) => (
            <div
              key={item.id}
              className={selectedMaterialId === item.id ? "active-click" : ""}
              onClick={() => {
                setSelectedMaterialId(item.id);
                setMaterialProduct(item.name);
                setShowMaterial(false);
              }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div
          className="col-materials col-quantity"
          onClick={() => setShowQuantity(!showQunatity)}
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
          <h3>logo printing: {logoPrint}</h3>
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

            {logoPrint === "yes" && (
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
            )}
          </div>
        </div>

        <div
          className="add-inquiry"
          onClick={() => {
            handleAddInquiry();
            handleSubmit();
          }}
        >
          <p disabled={loading}>{loading ? "Sending..." : "Add Inquiry"}</p>
        </div>
      </div>

      <div className="inquiries-Details">
        <div className="content-Details">
          <div className="heading">
            <h3>inquiries details</h3>
          </div>

          <div>
            {inquiriesList.length === 0 ? (
              <div className="col-no-details">
                <p style={{ color: "#777", padding: "10px" }}>
                  No inquiries added yet.
                </p>
              </div>
            ) : (
              inquiriesList.map((inq) => (
                <div key={inq.id} className="model-MH" style={{ paddingTop: "20px" }}>
                  <p>model name: {inq.name}</p>
                  <p>size: {inq.size}</p>
                  <p>color: {inq.color}</p>
                  <p>raw material: {inq.material}</p>
                  <p>logo print: {inq.logo}</p>
                  <p>quantity: {inq.quantity}</p>

                  {inq.image && (
                    <div style={{ marginTop: "10px" }}>
                      <p>Product image:</p>
                      <img
                        src={inq.image}
                        alt={inq.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  )}

                  {inq.logoFile && (
                    <div style={{ marginTop: "10px" }}>
                      <p>Logo:</p>
                      <img
                        src={inq.logoFile.url}
                        alt={inq.logoFile.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div
          className="send-inquiry"
          onClick={() => setShowForm(true)}
          style={{ cursor: "pointer" }}
        >
          <p>send inquiry</p>
        </div>

        {showForm && (
          <div className="popup-overlay">
            <div className="popup-content">
              <Inquiryform
                onClose={() => setShowForm(false)}
                inquiriesList={inquiriesList}
                logoFile={logoFile}
                onSendSuccess={() => {
                  setInquiriesList([]);
                  setSelectProduct({});
                  setSelectedProductId(null);
                  setSelectedSizeID(null);
                  setSelectedColorId(null);
                  setSelectedMaterialId(null);
                  setNameProduct("hanger name");
                  setSizeProduct("size");
                  setColorProduct("color");
                  setMaterialProduct("raw materials");
                  setQuantity(1);
                  setLogoFile(null);
                  setLogoPrint("no");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inquiries;*/


import "../CSS/inquiries.css";
import { useState, useEffect, useRef } from "react";
import Inquiryform from "./inquiry-Form";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Inquiries() {
  const location = useLocation();
  const orderDetails = location.state;

  console.log(orderDetails);

  const [showForm, setShowForm] = useState(false);
  const [showMaterial, setShowMaterial] = useState(false);
  const [logoPrint, setLogoPrint] = useState("no");
  const fileInputRef = useRef(null);
  const [logoFile, setLogoFile] = useState(null);

  const handleDivClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
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
  const SizesProduct = selectProduct?.sizes || [];
  const ColorsProduct = selectProduct?.colors || [];
  const MaterialsProduct = selectProduct?.materials || [];

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedSizeId, setSelectedSizeID] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedMaterialId, setSelectedMaterialId] = useState(null);

  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColor] = useState(false);

  const [nameProduct, setNameProduct] = useState("hanger name");
  const [sizeProduct, setSizeProduct] = useState("size");
  const [colorProduct, setColorProduct] = useState("color");
  const [materialProduct, setMaterialProduct] = useState("raw materials");
  const [quantity, setQuantity] = useState(1);

  const [inquiriesList, setInquiriesList] = useState([]);

  // ✅ استقبال بيانات المنتج من صفحة Product لما يضغط "Order Now"
  useEffect(() => {
    if (orderDetails && orderDetails.product) {
      const product = orderDetails.product;
      setSelectProduct(product);
      setSelectedProductId(product.id);
      setNameProduct(product.name);
    }
  }, [orderDetails]);

 /* const handleAddInquiry = () => {
    if (!selectProduct.id || !selectedSizeId || !selectedMaterialId || !quantity) {
      alert("Please select all data before adding the inquiry");
      return;
    }

    const exists = inquiriesList.some(
      (inq) =>
        inq.productId === selectProduct.id &&
        inq.sizeId === selectedSizeId &&
        inq.colorId === selectedColorId &&
        inq.materialId === selectedMaterialId &&
        inq.logo === logoPrint
    );

    if (exists) {
      alert("This inquiry has already been added!");
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
      image: selectProduct?.main_image || null, // ✅ الصورة الأساسية للمنتج
      logoFile: logoFile
        ? {
            name: logoFile.name,
            url: URL.createObjectURL(logoFile),
          }
        : null,
    };

    setInquiriesList([...inquiriesList, newInquiry]);
    setLogoFile(null);
  };*/

  const handleAddInquiry = () => {
  if (!selectProduct.id || !selectedSizeId || !selectedMaterialId || !quantity) {
    alert("Please select all data before adding the inquiry");
    return;
  }

  const exists = inquiriesList.some(
    (inq) =>
      inq.productId === selectProduct.id &&
      inq.sizeId === selectedSizeId &&
      inq.colorId === selectedColorId &&
      inq.materialId === selectedMaterialId &&
      inq.logo === logoPrint
  );

  if (exists) {
    alert("This inquiry has already been added!");
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
    image: selectProduct?.main_image || null,
    logoFile: logoFile
      ? {
          name: logoFile.name,
          url: URL.createObjectURL(logoFile),
        }
      : null,
  };

  // ✅ تحديث القائمة فورًا
  const updatedList = [...inquiriesList, newInquiry];
  setInquiriesList(updatedList);

  // ✅ إخفاء "No inquiries added yet" تلقائيًا
  if (updatedList.length > 0) {
    const noDetails = document.querySelector(".col-no-details");
    if (noDetails) {
      noDetails.style.display = "none";
    }
  }

  setLogoFile(null);
};


  const [showQunatity, setShowQuantity] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const toggleSizes = () => {
    if (!selectProduct.id) {
      alert("Please select a product first");
      return;
    }
    setShowSizes(!showSizes);
  };

  const toggleColors = () => {
    if (!selectProduct.id) {
      alert("Please select a product first");
      return;
    }
    setShowColor(!showColors);
  };

  const toggleMaterials = () => {
    if (!selectProduct.id) {
      alert("Please select a product first");
      return;
    }
    setShowMaterial(!showMaterial);
  };

  useEffect(() => {
    if (orderDetails) {
      setSelectProduct(orderDetails.product);
      setNameProduct(orderDetails.productName || orderDetails.product?.name || "hanger name");
      setSizeProduct(orderDetails.size || "size");
      setColorProduct(orderDetails.color || "color");
      setMaterialProduct(orderDetails.material || "raw materials");
    }
  }, [orderDetails]);

  return (
    <div className="inquiries-departemant">
      <div className="hanger-Name">
        <div className="col-icon-Left">
          <div>
            <Link to={"/Home"}>
              <FaArrowLeft className="icon" />
            </Link>
          </div>
        </div>
        <div className="col-one" onClick={() => setShowModel(!showModel)}>
          <h3>{nameProduct}</h3>
          <p></p>
        </div>
        <div className={`All-Names-Products ${showModel ? "show" : ""}`}>
          {AllProducts.map((product) => (
            <p
              key={product.id}
              className={`product-name ${selectedProductId === product.id ? "active-click" : ""}`}
              onClick={() => {
                setSelectProduct(product);
                setSelectedProductId(product.id);
                setNameProduct(product.name);
                setShowModel(false);
              }}
            >
              {product.name}
            </p>
          ))}
        </div>

        <div className="col-Size">
          <div className="new-col-size" onClick={toggleSizes}>
            <h3>{sizeProduct}</h3>
            <p className="p-size icon-size"></p>
          </div>
        </div>

        <div className={`All-sizes-Product ${showSizes ? "show" : ""}`}>
          {SizesProduct.map((item) => (
            <div
              key={item.id}
              className={`col-sizes ${selectedSizeId === item.id ? "active-click" : ""}`}
              style={{ padding: "15px", color: "#afb0af" }}
              onClick={() => {
                setSelectedSizeID(item.id);
                setSizeProduct(`${item.value} ${item.unit}`);
                setShowSizes(false);
              }}
            >
              <p>
                {item.value} {item.unit}
              </p>
            </div>
          ))}
        </div>

        <div className="col-Color" onClick={toggleColors}>
          <div className="color">
            <h3>{colorProduct}</h3>
            <p className="p-color"></p>
          </div>
        </div>

        <div className={`all-colors-product ${showColors ? "show" : ""}`}>
          {ColorsProduct.map((color) => (
            <div
              key={color.id}
              className={`white content-color ${selectedColorId === color.id ? "active-click" : ""}`}
              onClick={() => {
                setSelectedColorId(color.id);
                setColorProduct(color.name);
                setShowColor(false);
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

        <div className="col-materials" onClick={toggleMaterials}>
          <div>
            <h3>{materialProduct}</h3>
            <p className="p-materials"></p>
          </div>
        </div>

        <div className={`all-materials ${showMaterial ? "show" : ""}`}>
          {MaterialsProduct.map((item) => (
            <div
              key={item.id}
              className={selectedMaterialId === item.id ? "active-click" : ""}
              onClick={() => {
                setSelectedMaterialId(item.id);
                setMaterialProduct(item.name);
                setShowMaterial(false);
              }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div
          className="col-materials col-quantity"
          onClick={() => setShowQuantity(!showQunatity)}
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
          <h3>logo printing: {logoPrint}</h3>
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

            {logoPrint === "yes" && (
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
            )}
          </div>
        </div>

        <div
          className="add-inquiry"
          onClick={() => {
            handleAddInquiry();
            handleSubmit();
          }}
        >
          <p disabled={loading}>{loading ? "Sending..." : "Add Inquiry"}</p>
        </div>
      </div>

      <div className="inquiries-Details">
        <div className="content-Details">
          <div className="heading">
            <h3>inquiries details</h3>
          </div>

          {/* ✅ عرض بيانات المنتج المرسل من صفحة المنتج */}
          {orderDetails && orderDetails.product && (
            <div className="model-MH" style={{ paddingTop: "20px" }}>
              <p>model name: {orderDetails.product.name}</p>
              <p>size: {orderDetails.size || "size"}</p>
              <p>color: {orderDetails.color || "color"}</p>
              <p>raw material: {orderDetails.material || "raw materials"}</p>

              {orderDetails.product.main_image && (
                <div style={{ marginTop: "10px" }}>
                  <p>Product image:</p>
                  <img
                    src={orderDetails.product.main_image}
                    alt={orderDetails.product.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      marginTop: "5px",
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {/* ✅ الكود الأصلي لعرض الاستعلامات */}
          <div>
            {inquiriesList.length === 0 ? (
              <div className="col-no-details">
                <p style={{ color: "#777", padding: "10px" }}>
                  No inquiries added yet.
                </p>
              </div>
            ) : (
              inquiriesList.map((inq) => (
                <div key={inq.id} className="model-MH" style={{ paddingTop: "20px" }}>
                  <p>model name: {inq.name}</p>
                  <p>size: {inq.size}</p>
                  <p>color: {inq.color}</p>
                  <p>raw material: {inq.material}</p>
                  <p>logo print: {inq.logo}</p>
                  <p>quantity: {inq.quantity}</p>

                  {inq.image && (
                    <div style={{ marginTop: "10px" }}>
                      <p>Product image:</p>
                      <img
                        src={inq.image}
                        alt={inq.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  )}

                  {inq.logoFile && (
                    <div style={{ marginTop: "10px" }}>
                      <p>Logo:</p>
                      <img
                        src={inq.logoFile.url}
                        alt={inq.logoFile.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div
          className="send-inquiry"
          onClick={() => setShowForm(true)}
          style={{ cursor: "pointer" }}
        >
          <p>send inquiry</p>
        </div>

        {showForm && (
          <div className="popup-overlay">
            <div className="popup-content">
              <Inquiryform
                onClose={() => setShowForm(false)}
                inquiriesList={inquiriesList}
                logoFile={logoFile}
                onSendSuccess={() => {
                  setInquiriesList([]);
                  setSelectProduct({});
                  setSelectedProductId(null);
                  setSelectedSizeID(null);
                  setSelectedColorId(null);
                  setSelectedMaterialId(null);
                  setNameProduct("hanger name");
                  setSizeProduct("size");
                  setColorProduct("color");
                  setMaterialProduct("raw materials");
                  setQuantity(1);
                  setLogoFile(null);
                  setLogoPrint("no");
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inquiries;



















