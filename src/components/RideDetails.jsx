
import React from "react";
import "../styles/RideDetails.css";

const RideDetails = () => {
  return (
    <div className="ride-details">
      <h2>Ride in Progress</h2>
      <div className="ride-info">
        <p>
          <strong>Driver:</strong> John Doe
        </p>
        <p>
          <strong>Car:</strong> Toyota Prius (Black)
        </p>
        <p>
          <strong>Estimated Arrival:</strong> 5 min
        </p>
      </div>
      <button className="cancel-btn">Cancel Ride</button>
    </div>
  );
};

export default RideDetails;
