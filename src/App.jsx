import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RideBookingPage from "./pages/RideBookingPage";
import RideDetails from "./components/RideDetails";
import RideHistory from "./components/RideHistory";
import Pricing from "./components/Pricing";
import AuthPage from "./pages/AuthPage";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ride-booking" element={<RideBookingPage />} />
        <Route path="/details" element={<RideDetails />} />
        <Route path="/history" element={<RideHistory />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;