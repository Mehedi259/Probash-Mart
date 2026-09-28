"use client";
import React from "react";
import { featuredProducts } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = query.trim()
    ? featuredProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (p.weight && p.weight.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-8">
        <div className="mb-6">
          <Link href="/" className="text-xs text-gray-400 hover:text-primary transition mb-1 inline-block">← হোম</Link>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Search size={24} className="text-primary" />
            {query ? `"${query}" এর ফলাফল` : "পণ্য খুঁজুন"}
          </h1>
          {query && <p className="text-sm text-gray-500 mt-0.5">{results.length}টি পণ্য পাওয়া গেছে</p>}
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <Search size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">কোনো পণ্য পাওয়া যায়নি</p>
            <p className="text-sm text-gray-400 mb-4">অন্য কিছু দিয়ে খুঁজে দেখুন</p>
            <Link href="/shop" className="text-primary font-semibold hover:underline">সব পণ্য দেখুন →</Link>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <Search size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500">উপরের সার্চ বারে পণ্যের নাম লিখে খুঁজুন</p>
          </div>
        )}
      </div>
    </main>
  );
}
