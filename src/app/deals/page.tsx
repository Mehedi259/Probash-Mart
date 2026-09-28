"use client";
import React from "react";
import { featuredProducts } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import { Tag } from "lucide-react";
import Link from "next/link";

export default function DealsPage() {
  // Show products as "deals" - take first 24 products with simulated discount
  const dealProducts = featuredProducts.slice(0, 24);

  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-primary transition mb-4 inline-block">← হোমে ফিরুন</Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Tag className="text-red-500" /> ধামাকা অফার
          </h1>
          <p className="text-gray-500 mt-1">সীমিত সময়ের জন্য বিশেষ ছাড়!</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} showDiscount />
          ))}
        </div>
      </div>
    </main>
  );
}
