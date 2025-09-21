import "../CSS/addressmobile.css";
import { useState,useEffect } from "react";
function Addressmobile() {
     const [DataSettings,setDataSettings] = useState([]);
    
        const getAllSettings = async () => {
            await fetch("https://united-hanger-2025.up.railway.app//api/settings",{
                method: "GET"
            })
            .then(response => response.json())
            .then(data => setDataSettings(data.settings))
        }
    
        useEffect(() => {
            getAllSettings();
        },[]);

    return(
    <div className="address-content-mobile">
        <div className="address-mobile-one">
            <h2 className="head">Our Factory</h2>
                {!DataSettings ? "" :
                        <div className="content-our-factory-mobile">
                            <p>
                                {DataSettings.ourfactory}
                            </p>
                        </div>
            }
            <p>Phone: +20 111 43 777 - +20 112 21 13 999</p>
            <a href="mailto:info@unitedhanger.com" style={{textDecoration: "none", color: "white", fontSize: "15px"}}>Email: info@unitedhanger.com</a>
        </div>
        <div className="address-mobile-two">
            <h2 className="head">Business Hours</h2>
            {!DataSettings ? "" :
                        <div className="content-new-business">
                            <p>
                                {DataSettings.businesshours}
                            </p>
                        </div>
                    }
        </div>
    </div>
    )
}
export default Addressmobile;