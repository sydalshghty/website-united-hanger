import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../CSS/plan.css";

const containerStyle = {
    width: "100%",
    height: "100%"
};

const center = {
    lat: 30.2946,
    lng: 31.7434
};

function Plan() {
    return (
        <div className="plan-content">
            <LoadScript googleMapsApiKey="AIzaSyBZGqjPW1kMKu1dODAtTbEq9GatyPJndzU">
                <div className='container-Map'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                        options={{
                            zoomControl: true,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </div>
            </LoadScript>
        </div>
    );
}

export default Plan;






























