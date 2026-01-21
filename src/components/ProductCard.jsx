// components/ProductCard.js
import React from 'react';
import { useRouter } from '../hooks/useRouter';


const ProductCard = ({ product }) => {
  const { navigate } = useRouter();

  return (
    <div
      onClick={() => navigate('/product', { id: product.id })}
      className="group cursor-pointer bg-white border border-gray-200 hover:border-black transition-all"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1 text-sm sm:text-base line-clamp-2">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <p className="text-lg sm:text-xl font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;