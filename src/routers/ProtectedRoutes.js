import { useNavigate } from "react-router-dom";
import useAuth from "../custom-hook/useAuth";

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return currentUser ? children : navigate("/login");
};

export default ProtectedRoutes;
