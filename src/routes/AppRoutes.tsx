import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Home from "@/pages/Home.js";
import Chat from "@/pages/Chat.js";
import Login from "@/pages/Login.js";
import Register from "@/pages/Register.js";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
