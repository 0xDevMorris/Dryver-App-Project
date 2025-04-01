import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import "../styles/Auth.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <AuthForm isLogin={isLogin} />
      <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an Account" : "Already have an account? Log In"}
      </button>
    </div>
  );
};

export default AuthPage;
