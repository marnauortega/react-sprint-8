import { Navigate } from "react-router-dom";

function ProtectedRoute({ logged, redirectPath = "/", children }) {
  console.log(logged);
  if (!logged) return <Navigate to={redirectPath} replace />;

  return children;
}

export default ProtectedRoute;
