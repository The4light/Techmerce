// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">WORKSPACE</h3>
            <p className="text-sm text-gray-400">
              Premium ergonomic gear for focused work.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Ergonomics</li>
              <li>Organization</li>
              <li>Comfort</li>
              <li>Portable</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2026 WORKSPACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;