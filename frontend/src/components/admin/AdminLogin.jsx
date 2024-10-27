import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from '../../services/authService';

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    const emailString = String(email); 
    const passwordString = String(password);
    try {
      await authService.adminLogin(emailString, passwordString);
      navigate("/adminDashboard");
      console.log("success login");
    } catch (err) {}
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default AdminLogin;