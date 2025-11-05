import "../CSS/inquiries.css";
import { useState, useEffect, useRef } from "react";
import Inquiryform from "./inquiry-Form";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { CgUnavailable } from "react-icons/cg";
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


  const isAddedRef = useRef(false);
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

    const updatedList = [...inquiriesList, newInquiry];
    setInquiriesList(updatedList);

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
    if (!orderDetails || !orderDetails.product || isAddedRef.current) return;
    isAddedRef.current = true;

    const product = orderDetails.product;
    const newInquiry = {
      id: Date.now(),
      productId: product.id,
      name: orderDetails.productName || product.name,
      sizeId:
        product.sizes?.find(
          (s) => `${s.value} ${s.unit}` === orderDetails.size
        )?.id || null,
      size: orderDetails.size || null,
      colorId:
        product.colors?.find((c) => c.name === orderDetails.color)?.id || null,
      color: orderDetails.color || null,
      materialId:
        product.materials?.find((m) => m.name === orderDetails.material)?.id ||
        null,
      material: orderDetails.material || null,
      quantity: 1,
      image: orderDetails.image || product.main_image || null,
      logo: "no",
    };

    setInquiriesList((prev) => {
      const exists = prev.some(
        (inq) =>
          inq.productId === newInquiry.productId &&
          inq.sizeId === newInquiry.sizeId &&
          inq.colorId === newInquiry.colorId &&
          inq.materialId === newInquiry.materialId
      );
      if (!exists) return [...prev, newInquiry];
      return prev;
    });
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

        {/* === Colors Section === */}
        <div className="col-Color" onClick={toggleColors}>
          <div className="color">
            <h3>{colorProduct}</h3>
            <p className="p-color"></p>
          </div>
        </div>

        <div className={`all-colors-product ${showColors ? "show" : ""}`}>
          {(() => {
            if (!selectProduct.id) {
              return <p style={{ padding: "10px", color: "#999" }}>Please select a product first</p>;
            }

            const selectedMaterial = MaterialsProduct.find(
              (m) => m.id === selectedMaterialId
            );

            // ✅ لو الخامة لا تدعم الألوان (no_color = true)
            if (selectedMaterial && selectedMaterial.no_color) {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px",
                    color: "#777",
                  }}
                >
                  <CgUnavailable style={{ color: "#ff4d4f", fontSize: "18px" }} />
                  <p>This material does not support colors.</p>
                </div>
              );
            }

            // ✅ لو الخامة تدعم الألوان، نعرضها بشكل طبيعي
            let availableColors = ColorsProduct;

            if (selectedMaterial && selectedMaterial.colors) {
              availableColors = ColorsProduct.filter((color) =>
                selectedMaterial.colors.some((c) => c.id === color.id)
              );
            }

            if (availableColors.length === 0) {
              return (
                <p style={{ padding: "10px", color: "#999" }}>
                  No colors available for this material
                </p>
              );
            }

            return availableColors.map((color) => (
              <div
                key={color.id}
                className={`white content-color ${selectedColorId === color.id ? "active-click" : ""
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
            ));
          })()}
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
          <div className="col-Yes-and-No" style={{ display: "flex", gap: "40px" }}>
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


          {inquiriesList.length === 0 ? (
            <div className="col-no-details">
            </div>
          ) : (
            inquiriesList.map((inq) => (
              <div key={inq.id} className="model-MH" style={{ paddingTop: "20px" }}>
                <p>model name: {inq.name}</p>
                <p>size: {inq.size}</p>
                <p>color: {inq.color}</p>
                <p>raw material: {inq.material}</p>
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



















