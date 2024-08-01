import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("accessToken"); // Ambil access_token dari localStorage atau sumber lainnya
  const isAuthenticated = accessToken ? true : false; // Lakukan pengecekan autentikasi berdasarkan access_token

  // Jika terotentikasi, kembalikan outlet yang akan merender elemen-elemen child
  // Jika tidak, kembalikan elemen yang akan melakukan navigasi ke halaman login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login-admin" />;
};

export default PrivateRoute;
