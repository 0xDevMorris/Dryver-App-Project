import React from "react";
import "../styles/WhyDryver.css";
import rideSharingImage from "../assets/Airport-Fall.webp"; 

const WhyDryver = () => {
  return (
    <section className="why-dryver">
      <div className="text-content">
        <h2>Why Choose Dryver?</h2>
        <p>
          Dryver is your go-to ride-sharing platform, offering safe, affordable, and convenient rides anytime, anywhere.
          Whether you're commuting to work, heading out with friends, or need a quick trip, we've got you covered.
        </p>
        <h3>Our Services</h3>
        <ul>
          <li>🚗 Affordable and reliable rides</li>
          <li>🛡️ Safe and verified drivers</li>
          <li>📍 Real-time ride tracking</li>
          <li>💳 Multiple payment options</li>
        </ul>
      </div>
      <div className="image-content">
        <img src={rideSharingImage} alt="Ride Sharing" />
      </div>
    </section>
  );
};

export default WhyDryver;
