// pages/CartPage.js
import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { navigate } = useRouter();
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some products to get started.</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  // const shipping = 0; // Free shipping

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                {/* Product Image */}
                <div className="w-full sm:w-32 h-48 sm:h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 p-2 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-base font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-2xl">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white py-4 font-bold text-lg hover:bg-gray-800 transition-colors mb-3"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full border-2 border-gray-300 py-4 font-semibold hover:border-black transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;