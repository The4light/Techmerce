// components/Header.js
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const { navigate } = useRouter();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => navigate('/')}
            className="text-xl sm:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            WORKSPACE
          </button>
          
          <nav className="flex items-center gap-4 sm:gap-8">
            <button
              onClick={() => navigate('/')}
              className="text-sm sm:text-base text-gray-700 hover:text-black transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="text-sm sm:text-base text-gray-700 hover:text-black transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;