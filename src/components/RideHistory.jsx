import React from "react";
import "../styles/RideHistory.css";

const RideHistory = () => {
  const rides = [
    {
      date: "March 29, 2025",
      pickup: "Downtown",
      dropoff: "Airport",
      fare: "$15.00",
    },
    {
      date: "March 30, 2025",
      pickup: "Mall",
      dropoff: "Hotel",
      fare: "$10.50",
    },
  ];

  return (
    <div className="ride-history">
      <h2>Ride History</h2>
      <ul>
        {rides.map((ride, index) => (
          <li key={index}>
            <p>
              <strong>{ride.date}</strong>
            </p>
            <p>
              {ride.pickup} → {ride.dropoff}
            </p>
            <p>
              <strong>Fare:</strong> {ride.fare}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideHistory;
