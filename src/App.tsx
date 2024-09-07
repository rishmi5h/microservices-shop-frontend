import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { CartProvider } from './context/CartContext.tsx';
import Cart from './pages/Cart.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Orders from './pages/Orders.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import Profile from './pages/Profile.tsx';
import Register from './pages/Register.tsx';
import Shop from './pages/Shop.tsx';
import Wishlist from './pages/Wishlist.tsx';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container mx-auto flex-grow px-4 py-8">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Shop />} path="/shop" />
              <Route element={<ProductDetails />} path="/product/:id" />
              <Route element={<Cart />} path="/cart" />
              <Route element={<Wishlist />} path="/wishlist" />
              <Route element={<Login />} path="/login" />
              <Route element={<Register />} path="/register" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<Orders />} path="/orders" />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
