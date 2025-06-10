// PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // Will replace with real auth check later
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;