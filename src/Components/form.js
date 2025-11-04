import "../CSS/form.css";
import { useState } from "react";
function Form() {
    /*  const [DataSettings, setDataSettings] = useState([]);
      const getAllSettings = async () => {
          try {
              await fetch("https://united-hanger-2025.up.railway.app//api/settings", {
                  method: "GET"
              })
                  .then(response => response.json())
                  .then(data => setDataSettings(data.settings))
          }
          catch (error) {
              console.error("Error Not Found Data", error)
          }
      }
      useEffect(() => {
          getAllSettings();
      }, []);*/

    //validation-Form
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    const SendMessage = async () => {
        try {
            await fetch(`https://united-hanger-2025.up.railway.app/api/questions/new`, {
                method: "Post",
                body: formData
            })
                .then((response) => response.json())
                .then(data => {
                    console.log(data);
                    alert("✅ Data has been sent successfully!")
                })
        }
        catch (error) {
            console.error("Error: Not Send Data", error)
            alert("❌ Failed to send data.")
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        SendMessage();
    }

    return (
        <div className="form-Departemant">
            <div className="form-content">
                <h2>We are at your service at any time , Feel free to ask questions ,
                    Happy to do business with you</h2>
                <form onSubmit={submitForm}>
                    <div className="input-content">
                        <input
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                            className="input-name"
                            type="text"
                            placeholder="Name"
                            name="Name" required
                        />
                        <input
                            onChange={(e) => {
                                setphone(e.target.value);
                            }}
                            className="input-number"
                            type="number"
                            placeholder="Contact Phone"
                            name="Phone" required />
                        <input
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                            className="input-email"
                            type="email"
                            placeholder="Email"
                            name="Email" required />
                    </div>
                    <textarea
                        required
                        onChange={(e) => {
                            setmessage(e.target.value);
                        }}
                        placeholder="Message"
                        name="Message" ></textarea>
                    <input className="submit-button" type="submit" value={"Submit"} />
                </form>
            </div>
        </div>
    )
}
export default Form;
