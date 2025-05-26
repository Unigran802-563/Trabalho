
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // ou outro método de autenticação
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
