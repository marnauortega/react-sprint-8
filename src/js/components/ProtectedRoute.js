import { Navigate } from "react-router-dom";

function ProtectedRoute({ logged, redirectPath = "/", children }) {
  if (!logged) return <Navigate to={redirectPath} replace />;

  return children;
}

export default ProtectedRoute;
