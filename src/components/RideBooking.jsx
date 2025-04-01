
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // To Import location icon
import GoogleMapComponent from "./GoogleMapComponent";
import "../styles/RideBooking.css"; 

const RideBooking = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [fare, setFare] = useState(0);

  // To set location marker in the map
  const handlePickupChange = (e) => {
    setPickup(e.target.value);
    setPickupCoords({ lat: 37.7749, lng: -122.4194 });
  };

  const handleDropoffChange = (e) => {
    setDropoff(e.target.value);
    setDropoffCoords({ lat: 37.7849, lng: -122.4094 });
  }; // getting error beacuse of my API, would fix later 

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // Show loading spinner

    // To generate a random ride fare amount
    const estimatedFare = (Math.random() * (30 - 10) + 10).toFixed(2);

    setTimeout(() => {
      setFare(estimatedFare);
      setLoading(false); // to hide loading spinner
      setShowPopup(true); // to show confirmation popup
    }, 2000);
  };

  return (
    <div className="ride-booking-container">
      <div className="ride-booking">
        <h2>Request a Ride</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          {/* Pickup Location */}
          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={handlePickupChange}
              required
            />
          </div>

          {/* Drop-off Location */}
          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              placeholder="Enter drop-off location"
              value={dropoff}
              onChange={handleDropoffChange}
              required
            />
          </div>

          {/* Submit Button with Loading State */}
          <button type="submit" className="request-btn" disabled={loading}>
            {loading ? "Booking..." : "Request Ride"}
          </button>
        </form>

        {/* Confirmation Popup */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Ride Confirmed!</h3>
              <p>
                Your ride from <strong>{pickup}</strong> to{" "}
                <strong>{dropoff}</strong> has been booked!
              </p>
              <p>
                <strong>Estimated Fare:</strong> ${fare}
              </p>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}

        {/* Google Map with Pickup & Drop-off Markers */}
        <div className="map-container">
          <GoogleMapComponent
            pickupLocation={pickupCoords}
            dropoffLocation={dropoffCoords}
          />
        </div>
      </div>
    </div>
  );
};

export default RideBooking;
