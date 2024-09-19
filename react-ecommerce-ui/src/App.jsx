import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import HomeLayout from "./layout/HomeLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";

export const AuthContext = createContext();
const queryClient = new QueryClient();

function App() {
  const [authUser, setAuthUser] = useState(() => {
    return JSON.parse(localStorage.getItem("authUser"));
  });

  const [cart, setCart] = useState([]);
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
              </Route>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
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
