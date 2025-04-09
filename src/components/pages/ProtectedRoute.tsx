import { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) return false; // No user data in localStorage → User is NOT logged in

  try {
    const parsedUser = JSON.parse(user);
    const allowedRoles = ["Admin", "User", "Manager", "Guest"];
    return parsedUser?.role && allowedRoles.includes(parsedUser.role);
  } catch (error) {
    return false; // If parsing fails, treat as unauthenticated
  }
};

// Strictly enforce authentication check
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
