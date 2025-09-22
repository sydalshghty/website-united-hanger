import "../CSS/hangerUnited.css";
import imgBackground from "../images/home (30)_cleanup (2).png";
import { useEffect,useState } from "react";

function HangerUnited(){
    const [Data,setData] = useState([])
    const getAllSettings = async () => {
        await fetch("https://united-hanger-2025.up.railway.app//api/settings",{
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setData(data.settings))
    }
    useEffect(() => {
        getAllSettings();
    },[]);

    return(
        <div className="hanger-United">
            <div className="background-image">
                <img src={imgBackground} alt="img"/>
            </div>
            <div className="container">
                <div className="lorem-content">
                    <p>cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="hanger-Content">
                    <h3>why united hanger ?</h3>
                    <p className="p-one">
                        {Data.whyus}
                    </p>
                    <p className="p-two">
                        {`${Data.aboutus} ${Data.ourfactory}`}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HangerUnited;