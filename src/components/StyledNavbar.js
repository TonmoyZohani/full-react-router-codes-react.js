import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "grey",
    };
  };

  return (
    <nav className="navbar">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="/login" style={navLinkStyles}>
        Login
      </NavLink>
      <NavLink to="/dashboard" style={navLinkStyles}>
        Dashboard
      </NavLink>
    </nav>
  );
};

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink
//         to="/"
//         className={({ isActive }) => (isActive ? "link active" : "link")}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         className={({ isActive }) => (isActive ? "link active" : "link")}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/products"
//         className={({ isActive }) => (isActive ? "link active" : "link")}
//       >
//         Products
//       </NavLink>
//       <NavLink
//         to="/login"
//         className={({ isActive }) => (isActive ? "link active" : "link")}
//       >
//         Login
//       </NavLink>
//     </nav>
//   );
// };
// export default Navbar;

// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/products">Products</NavLink>
//     </nav>
//   );
// };

export default Navbar;
