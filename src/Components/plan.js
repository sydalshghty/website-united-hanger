import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../CSS/plan.css";

const containerStyle = {
    width: "100%",
    height: "100%"
}

const center = {
    lat: 53.54,
    lng: 10
}
function Plan() {

    return(
        <div className="plan-content">
                 <LoadScript googleMapsApiKey="AIzaSyBWB1JR4gnnhypAmwDFckN0anoRUTH5SAY">
                    <div className='container-Map'>
                        <GoogleMap
                             mapContainerStyle={containerStyle}
                            center={center}
                             zoom={10}
                        >
                        <Marker position={center} />
                        </GoogleMap>
                    </div>
                </LoadScript>
            <div className="text-content">
                <h2>keep in touch</h2>
                <h2 className="head">Our Factory</h2>
            </div>
        </div>
    )
}
export default Plan;