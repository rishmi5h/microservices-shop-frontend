import { createContext } from 'react';

interface CartContextType {
  addToCart: (product: Product) => void;
  cart: CartItem[];
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  cart: [],
  removeFromCart: () => {},
});

export default CartContext;
