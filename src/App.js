import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="products/:productId" element={<SingleProduct />} />
//           <Route path="login" element={<Login setUser={setUser} />} />
//           <Route
//             path="dashboard"
//             element={
//               <ProtectedRoute user={user}>
//                 <Dashboard user={user} />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>Our Navbar</nav>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="products" element={<Products />} />
//           <Route path="products/:productId" element={<SingleProduct />} />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//       <footer>Our Footer</footer>
//     </BrowserRouter>
//   );
// }

export default App;
