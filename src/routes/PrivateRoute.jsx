import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();
  if (user && user.email) {
    return children;
  }
  //  navigate to the login page if the user is not authenticated
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
