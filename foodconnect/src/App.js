import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Login, Home, Admin, Register  } from "./containers";
import Orders from "./containers/orders/orders";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </div>
  );
};

export default App;
