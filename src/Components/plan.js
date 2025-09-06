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
                 <LoadScript googleMapsApiKey="AIzaSyBZGqjPW1kMKu1dODAtTbEq9GatyPJndzU">
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


//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import "leaflet/dist/leaflet.css";

/*function Plan() {
  return (
    <div className="plan-content">
      <div className="container-Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-content">
        <h2>keep in touch</h2>
        <h2 className="head">Our Factory</h2>
      </div>
    </div>
  );
}


export default Plan;*/



























