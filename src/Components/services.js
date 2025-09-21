import "../CSS/services.css";
import myImgOne from "../images/home (35) - Copy.png";
import { useState,useEffect } from "react";
function Services(){
    const [services,setService] = useState([]);

    const getAllServices = async () => {
        try{
            await fetch(`https://united-hanger-2025.up.railway.app/api/services/get_all`,{
            method: "GET"
        })
        .then((response) => response.json())
        .then(data => setService(data.services));
        }
        catch (error) {
            console.error("Error Not Found Data", error)
        }
    }

    useEffect(() => {
        getAllServices();
    },[])

    console.log(services);
    //src={myImgOne}
    return(
        <div className="services">
                <img className="img-product" src={myImgOne} alt="img" />
                <div className="services-content">
                    <div className="heading-services">
                        <h1>services</h1>
                    </div>
                    {!services ? "" : 
                        <>
                            <div className="content-text">
                                <p>{services.description}</p>
                                <ul>
                                    <li className="li-one" style={{zIndex: "10000"}}>{services.title}</li>
                                </ul>
                            </div>
                                
                        </>
                    }
                </div>
        </div>
    )
}
export default Services;