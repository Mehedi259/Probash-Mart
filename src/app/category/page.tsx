"use client";
import React from "react";
import { featuredProducts, categories } from "@/data/mockData";
import Link from "next/link";
import { Grid3X3, ArrowRight } from "lucide-react";

export default function CategoryIndexPage() {
  // Get unique categories with product count
  const categoryStats = categories.map(cat => ({
    ...cat,
    count: featuredProducts.filter(p => p.category === cat.name).length
  }));

  const categoryImages: Record<string, string> = {
    "Fresh Vegetables": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
    "Frozen Fish": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
    "Meat & Poultry": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80",
    "Rice & Grains": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    "Spices & Masala": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    "Snacks & Biscuits": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&q=80",
    "Beverages": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    "Household": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    "Personal Care": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    "Sweets & Desserts": "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
  };

  return (
    <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <Grid3X3 className="text-primary" /> সব ক্যাটাগরি
          </h1>
          <p className="text-gray-500">আপনার পছন্দের ক্যাটাগরি বেছে নিন</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categoryStats.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${encodeURIComponent(cat.name)}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md overflow-hidden transition-all hover:-translate-y-0.5"
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = categoryImages[cat.name] || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <span className="text-4xl">🛒</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">{cat.name}</h3>
                {cat.count > 0 && (
                  <p className="text-xs text-gray-400 mt-0.5">{cat.count}+ পণ্য</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* All Products */}
        <div className="mt-8">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 w-full py-4 bg-white rounded-xl border border-gray-200 text-primary font-semibold hover:bg-gray-50 transition"
          >
            সব পণ্য দেখুন <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
