import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access");

  // If no token found → redirect to /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise show the protected content
  return children;
}
