"use client";
import React from "react";
import { useParams } from "next/navigation";
import { featuredProducts } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const slug = decodeURIComponent(params.slug as string);

  const products = featuredProducts.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-8">
        <div className="mb-6">
          <Link href="/" className="text-xs text-gray-400 hover:text-primary transition mb-1 inline-block">← হোম</Link>
          <h1 className="text-2xl font-bold text-gray-800">{slug}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{products.length}টি পণ্য পাওয়া গেছে</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-400 text-lg mb-4">এই ক্যাটাগরিতে কোনো পণ্য নেই</p>
            <Link href="/shop" className="text-primary font-semibold hover:underline">সব পণ্য দেখুন →</Link>
          </div>
        )}
      </div>
    </main>
  );
}
