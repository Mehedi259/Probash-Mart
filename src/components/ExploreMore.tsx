'use client';

import React from 'react';
import { categoriesAPI } from '@/lib/api';
import { useApi } from '@/hooks/useApi';
import { Leaf } from 'lucide-react';
import Link from 'next/link';

export default function ExploreMore() {
  const { data } = useApi(() => categoriesAPI.list());
  const categories = Array.isArray(data) ? data : (data?.results || []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 mb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Leaf className="text-primary" size={24} />
          Shop by Category
        </h2>
        <p className="text-gray-500 text-sm mt-1">Everything You Need, All in One Place</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.slice(0, 6).map((item: any, index: number) => (
          <Link href={`/category/${item.slug || item.name.toLowerCase()}`} key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer group border border-gray-100 block">
            <div className="h-32 w-full overflow-hidden bg-gray-50">
              <img src={item.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-3 text-center">
              <h4 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h4>
              <span className="text-xs text-gray-500 group-hover:text-primary transition inline-block">Shop Now →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
