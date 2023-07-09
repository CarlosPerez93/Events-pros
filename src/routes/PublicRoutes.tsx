import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../views/public/login/Login";
import { Register } from "../views/public/register/Register";

export const PublicRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
};
