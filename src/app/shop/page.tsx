"use client";
import React, { useState } from "react";
import { productsAPI, categoriesAPI } from "@/lib/api";
import { useApi } from "@/hooks/useApi";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const { data: categoriesData } = useApi(() => categoriesAPI.list());
  const { data: productsData, loading } = useApi(() => productsAPI.list('page_size=1000'));

  const categories = Array.isArray(categoriesData) ? categoriesData : (categoriesData?.results || []);
  const featuredProducts = productsData?.results || [];

  let filtered = selectedCategory === "all"
    ? featuredProducts
    : featuredProducts.filter((p: any) => p.category_name === selectedCategory || p.category === selectedCategory);

  if (sortBy === "low") filtered = [...filtered].sort((a: any, b: any) => Number(a.price) - Number(b.price));
  if (sortBy === "high") filtered = [...filtered].sort((a: any, b: any) => Number(b.price) - Number(a.price));
  if (sortBy === "name") filtered = [...filtered].sort((a: any, b: any) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <Link href="/" className="text-xs text-gray-400 hover:text-primary transition mb-1 inline-block">← হোম</Link>
            <h1 className="text-2xl font-bold text-gray-800">সব পণ্য</h1>
            <p className="text-sm text-gray-500 mt-0.5">{filtered.length}টি পণ্য পাওয়া গেছে</p>
          </div>

          <div className="flex gap-3 items-center">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            >
              <option value="all">সব ক্যাটাগরি</option>
              {categories.map((cat: any) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low">দাম: কম → বেশি</option>
              <option value="high">দাম: বেশি → কম</option>
              <option value="name">নাম অনুযায়ী</option>
            </select>
          </div>
        </div>

        {/* Products */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {filtered.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">কোনো পণ্য পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    </main>
  );
}
