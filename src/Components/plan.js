/*import React from "react";
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

export default Plan;*/
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../CSS/plan.css";

const containerStyle = {
    width: "100%",
    height: "100%"
};

const locations = [
    {
        name: "Industrial zone c3, 10th of Ramadan City, Cairo",
        position: { lat: 30.2946, lng: 31.7434 }
    },
    {
        name: "Shadwan street , Difa’a district, Alkharj Road , Riyadh",
        position: { lat: 24.4079, lng: 47.1086 }
    },
    {
        name: "Contrada mulini 8, 21034 Cocquio, Trevisago (VA)",
        position: { lat: 45.8523, lng: 8.6965 }
    },
    {
        name: "Beyazit Grand Pazar, Divrikli Sok, 14/16 Istanbul",
        position: { lat: 41.0106, lng: 28.9680 }
    }
];

const center = locations[0].position;

function Plan() {
    return (
        <div className="plan-content">
            <LoadScript googleMapsApiKey="AIzaSyBZGqjPW1kMKu1dODAtTbEq9GatyPJndzU">
                <div className="container-Map">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={4.5}
                        options={{
                            zoomControl: true,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                    >
                        {locations.map((loc, index) => (
                            <Marker
                                key={index}
                                position={loc.position}
                                title={loc.name}
                            />
                        ))}
                    </GoogleMap>
                </div>
            </LoadScript>
        </div>
    );
}

export default Plan;































