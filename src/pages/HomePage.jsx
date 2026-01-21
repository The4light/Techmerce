// pages/HomePage.js
import React from 'react';
import { Heart, Package, Zap, Shield } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';
import { products } from '../data/Products';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Upgrade Your Desk.<br />
              Upgrade Your Focus.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Premium ergonomic and productivity gear designed for students,
              developers, and remote workers who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/shop')}
                className="bg-white text-black px-6 sm:px-8 py-3 font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Explore Products
              </button>
              <button
                onClick={() => navigate('/shop')}
                className="border border-white text-white px-6 sm:px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
              >
                View Categories →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Carefully curated collections designed to transform your workspace into a productivity haven.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Heart, title: 'Ergonomics', desc: 'Science-backed solutions for posture, comfort, and long-term health at your desk.' },
              { icon: Package, title: 'Desk Organization', desc: 'Minimalist systems to declutter your workspace and organize your essentials.' },
              { icon: Shield, title: 'Comfort & Health', desc: 'Products designed to reduce strain and create a healthier work environment.' },
              { icon: Zap, title: 'Portable Work Gear', desc: 'Lightweight, compact solutions for working anywhere with ease.' }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 border border-gray-200 hover:border-black transition-colors cursor-pointer">
                <cat.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Best Sellers</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Our most popular products, trusted by thousands of remote workers and professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/shop')}
              className="border-2 border-black px-6 sm:px-8 py-3 font-semibold hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { icon: Shield, title: 'Quality Guaranteed', desc: 'Every product is rigorously tested and backed by our lifetime quality guarantee.' },
              { icon: Zap, title: 'Fast Shipping', desc: 'Free shipping on all orders. Most items ship within 24 hours.' },
              { icon: Heart, title: 'Customer First', desc: '30-day money-back guarantee and a community that genuinely cares.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 border-2 border-black rounded-full">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;