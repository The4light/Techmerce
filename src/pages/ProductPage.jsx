// pages/ProductPage.js
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';
import { useCart } from '../hooks/useCart';
import { products } from '../data/Products';

const ProductPage = () => {
  const { params } = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600">
          Shop / {product.name}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="flex text-yellow-400 text-sm sm:text-base">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            {product.features && (
              <div className="mb-6 sm:mb-8">
                <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-4 sm:mb-6">
              <label className="block font-semibold mb-2 text-sm sm:text-base">Quantity</label>
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                >
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-lg sm:text-xl font-semibold w-8 sm:w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 sm:py-4 font-bold text-base sm:text-lg transition-colors ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 space-y-2 text-xs sm:text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span>✓</span> Free shipping on all orders
              </p>
              <p className="flex items-center gap-2">
                <span>✓</span> 30-day money-back guarantee
              </p>
              <p className="flex items-center gap-2">
                <span>✓</span> Lifetime quality guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                name: 'Sarah M.', 
                role: 'Software Developer', 
                text: 'Absolutely transformed my workspace. Worth every penny.', 
                rating: 5 
              },
              { 
                name: 'James K.', 
                role: 'Remote Designer', 
                text: 'Quality is exceptional. My back pain is gone after just two weeks.', 
                rating: 5 
              },
              { 
                name: 'Emily R.', 
                role: 'Student', 
                text: 'Great product, fast shipping, excellent customer service.', 
                rating: 4 
              }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-gray-200 p-4 sm:p-6">
                <div className="flex text-yellow-400 mb-2 text-sm sm:text-base">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  "{review.text}"
                </p>
                <p className="font-semibold text-sm sm:text-base">{review.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{review.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;