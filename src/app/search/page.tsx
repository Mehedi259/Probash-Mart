"use client";
import React, { useMemo, Suspense } from "react";
import { featuredProducts } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const products = useMemo(() => {
    if (!query) return [];
    const lower = query.toLowerCase();
    return featuredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Search className="text-primary" /> সার্চ রেজাল্ট
          </h1>
          {query && (
            <p className="text-gray-500 mt-2">
              &quot;{query}&quot; — {products.length}টি পণ্য পাওয়া গেছে
            </p>
          )}
        </div>

        {!query ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <Search size={64} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500">উপরের সার্চ বারে আপনার পণ্যের নাম লিখুন</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col relative group overflow-hidden"
              >
                <button
                  onClick={() =>
                    isInWishlist(product.id)
                      ? removeFromWishlist(product.id)
                      : addToWishlist(product)
                  }
                  className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:text-primary transition z-10"
                >
                  <Heart
                    size={14}
                    className={
                      isInWishlist(product.id)
                        ? "fill-primary text-primary"
                        : "text-gray-300"
                    }
                  />
                </button>
                <Link
                  href={`/product/${product.id}`}
                  className="h-36 w-full flex items-center justify-center bg-white p-3 rounded-t-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between p-3 pt-2">
                  <div>
                    <Link
                      href={`/product/${product.id}`}
                      className="hover:text-primary transition"
                    >
                      <h3 className="font-semibold text-gray-800 text-xs leading-tight mb-0.5 line-clamp-2 min-h-[32px]">
                        {product.name}
                      </h3>
                    </Link>
                    {product.weight && (
                      <span className="text-[10px] text-gray-400">
                        {product.weight}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="font-bold text-sm text-primary">
                      ৳{product.price.toFixed(2)}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-primary hover:opacity-90 text-white font-medium py-1.5 rounded-lg flex items-center justify-center gap-1 transition text-xs"
                    >
                      <ShoppingCart size={12} /> কার্টে যোগ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <Search size={64} className="text-gray-200 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              কোনো পণ্য পাওয়া যায়নি
            </h2>
            <p className="text-gray-400 mb-6">
              &quot;{query}&quot; এর জন্য কোনো রেজাল্ট নেই
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              হোমে ফিরুন
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-44 flex items-center justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
