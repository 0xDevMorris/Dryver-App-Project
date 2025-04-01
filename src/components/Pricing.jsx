import React from "react";
import "../styles/Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <h2>Pricing</h2>
      <p>Estimated fares based on distance:</p>
      <ul>
        <li><strong>Short Distance:</strong> $5 - $10</li>
        <li><strong>Medium Distance:</strong> $10 - $20</li>
        <li><strong>Long Distance:</strong> $20+</li>
      </ul>
    </div>
  );
};

export default Pricing;
