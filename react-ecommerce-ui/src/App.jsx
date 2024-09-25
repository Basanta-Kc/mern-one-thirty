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
import { useContext } from "react";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import { AuthContext } from "./context/AuthProvider";
import DashboardLayout from "./layout/DashBaordLayout";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import ProductForm from "./pages/dashboard/ProductForm";
import CartProvider from "./context/CartProvider";
import AuthProvider from "./context/AuthProvider";

const queryClient = new QueryClient();

export function ProtectedRoutes() {
  const { authUser } = useContext(AuthContext);
  if (authUser) return <Outlet />;
  return <Navigate to="/sign-in" />;
}

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
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
                  <Route
                    path="/dashboard/products/add"
                    element={<ProductForm />}
                  />
                  <Route
                    path="/dashboard/products/edit/:productId"
                    element={<ProductForm />}
                  />
                </Route>
                <Route path="*" element={<h1>Page not found</h1>} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;

// logo ma click garda home page
// order page banauna paro, add order in navbar

// complete product with image
// stripe implementation
//
