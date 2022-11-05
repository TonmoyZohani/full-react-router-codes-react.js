import { Link, Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
