// App.js
import React from "react";


import { CartProvider } from "./context/CartProvider";
import { RouterProvider } from "./context/RouterProvider";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import { useRouter } from "./hooks/useRouter";

const AppContent = () => {
  const { currentPath } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white">   
      <main className="flex-1">
        {currentPath === '/' && <HomePage />}
        {currentPath === '/shop' && <ShopPage />}
        {currentPath === '/product' && <ProductPage />}
        {currentPath === '/cart' && <CartPage />}
        {currentPath === '/checkout' && <CheckoutPage />}
      </main>
    </div>
  );
};

function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <Header />
        <AppContent />
        <Footer />
      </CartProvider>
    </RouterProvider>
  );
}

export default App;
