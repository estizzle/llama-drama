import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="start-menu-container">
      <h1 className="title">llama Drama</h1>
      <button id="start-btn" onClick={() => navigate("/gamestart/1")}>Start Adventure</button>
    </div>
  );
};

export default Menu;
