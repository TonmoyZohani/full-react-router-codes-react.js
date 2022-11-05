import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  console.log(user, children);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
