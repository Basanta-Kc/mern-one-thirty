import "react-toastify/dist/ReactToastify.css";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  });

  const resetCart = () => setCart([]);

  const handleDelete = (id) => {
    const newCartItems = cart.filter((product) => !(product._id === id));
    setCart(newCartItems);
  };

  const handleIncrement = (index) => {
    cart[index].quantity++;
    setCart([...cart]);
  };

  const handleDecrement = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      handleDelete(cart[index]._id);
      return;
    }
    setCart([...cart]);
  };

  const addToCart = (product) => {
    // if the product exist in cart
    const productExist = cart.find(({ _id }) => _id === product._id);
    const newCartItems = [...cart];
    if (productExist) {
      productExist.quantity++;
    } else {
      newCartItems.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    setCart(newCartItems);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          resetCart,
          handleDecrement,
          handleIncrement,
          handleDelete,
          addToCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;

// logo ma click garda home page
// order page banauna paro, add order in navbar

// complete product with image
// stripe implementation
//
