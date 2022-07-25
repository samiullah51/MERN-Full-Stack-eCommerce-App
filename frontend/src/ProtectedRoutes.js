import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Signin from "./pages/Signin";

const useAuth = () => {
  const user = useSelector((state) => state.user.user);

  return user;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Signin />;
};

export default ProtectedRoutes;
