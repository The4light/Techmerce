// pages/ShopPage.js
import React, { useState } from 'react';
import { products } from '../data/Products';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Ergonomics', 'Organization', 'Comfort', 'Portable', 'Aesthetics'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">All Products</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Premium ergonomic and productivity gear to transform your workspace.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 sm:mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-6 py-2 font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;