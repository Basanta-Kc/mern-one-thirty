import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import HomeLayout from "./layout/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState, useEffect, useContext } from "react";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashBaordLayout";
import DashboardProducts from "./pages/dashboard/DashboardProducts";

export const AuthContext = createContext();
const queryClient = new QueryClient();

export function ProtectedRoutes() {
  const { authUser } = useContext(AuthContext);
  if (authUser) return <Outlet />;
  return <Navigate to="/sign-in" />;
}

function App() {
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem("authUser"));
  });

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <ToastContainer />
      <AuthContext.Provider value={{ setAuthUser, authUser, cart, setCart }}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/orders" element={<Orders />} />
                </Route>
              </Route>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              <Route element={<DashboardLayout />}>
                <Route
                  path="/dashboard/products"
                  element={<DashboardProducts />}
                />
                <Route
                  path="/dashboard/users"
                  element={<h2>users table similar to product</h2>}
                />
              </Route>

              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;

// logo ma click garda home page
// order page banauna paro, add order in navbar
