import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../styles/GoogleMapComponent.css"


const GoogleMapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  // To Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB9L7a9JBWMVQFgIJ95koL5bGitca-LOKU", 
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error getting location:", error),
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return isLoaded ? (
    
    <GoogleMap
      mapContainerClassName="map-container"
      center={currentLocation || { lat: 37.7749, lng: -122.4194 }} // Default to San Francisco
      zoom={15}
      
    >
      {currentLocation && <Marker position={currentLocation} />}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
};

export default GoogleMapComponent;
