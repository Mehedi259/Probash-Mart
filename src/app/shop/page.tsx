"use client";
import React from "react";
import { featuredProducts } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { ShoppingCart, Heart, Package } from "lucide-react";

export default function ShopPage() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  return (
    <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <Package className="text-primary" /> সব পণ্য
          </h1>
          <p className="text-gray-500">{featuredProducts.length}+ প্রিমিয়াম দেশি পণ্য</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col relative group overflow-hidden"
            >
              {product.isBestSeller && (
                <span className="absolute top-2 left-0 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-r-md z-10 text-gray-800">
                  Best Seller
                </span>
              )}
              <button
                onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition z-10"
              >
                <Heart size={14} className={isInWishlist(product.id) ? "fill-primary text-primary" : "text-gray-300"} />
              </button>
              <Link href={`/product/${product.id}`} className="h-36 w-full flex items-center justify-center bg-white p-3 rounded-t-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="flex-1 flex flex-col justify-between p-3 pt-2">
                <div>
                  <Link href={`/product/${product.id}`} className="hover:text-primary transition">
                    <h3 className="font-semibold text-gray-800 text-xs leading-tight mb-0.5 line-clamp-2 min-h-[32px]">{product.name}</h3>
                  </Link>
                  {product.weight && <span className="text-[10px] text-gray-400">{product.weight}</span>}
                </div>
                <div className="mt-2 space-y-2">
                  <div className="font-bold text-sm text-primary">৳{product.price.toFixed(2)}</div>
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
      </div>
    </main>
  );
}
