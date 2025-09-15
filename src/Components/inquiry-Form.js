import "../CSS/inquiry-Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Inquiryform({ onClose, inquiriesList, logoFile }) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      const data = {
        client: {
          name: clientName,
          email: clientEmail,
          phone: clientPhone,
        },
        inquiries: inquiriesList.map((inq) => ({
          product_id: inq.productId, 
          size_id: inq.sizeId,
          color_id: inq.colorId || null,
          material_id: inq.materialId,
          quantity: inq.quantity,
          custom_color_code: inq.customColor || null,
        })),
      };

      formData.append("data", JSON.stringify(data));

      if (logoFile) {
        formData.append("logo_1", logoFile);
      }

      const response = await fetch(
        "https://united-hanger-2025.up.railway.app/api/inquiries/new",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok) {
        alert("Inquiry sent successfully✅");
        onClose();
      } else {
        alert("Error:" + (result.message || "server error"));
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      alert("Failed to send inquiry ❌");
    }
  };

  return (
    <div className="inquiry-Form">
      <form onSubmit={handleSubmit}>
        <FontAwesomeIcon onClick={onClose} className="icon-Mark" icon={faTimes} />
        <div className="all-Inputs">
          <div className="input-Name">
            <label>full name</label>
            <input
              type="text"
              name="Full-Name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>
          <div className="input-Email">
            <label>email</label>
            <input
              type="email"
              name="Email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-Phone">
            <label>phone</label>
            <input
              type="number"
              name="Phone"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-Submit">
            <input type="submit" value={"submit"} />
          </div>
          <div className="text-Content">
            <p>
              after submit your inquiry, we will contact you to confirm your
              order. Thank you for your business.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inquiryform;

