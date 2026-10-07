"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  badge?: string;
  showDiscount?: boolean;
}

export default function ProductCard({ product, badge, showDiscount }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden h-full">
      {/* Badge */}
      {(badge || product.isBestSeller) && (
        <span className="absolute top-2.5 left-0 z-10 text-[10px] font-bold px-2.5 py-1 rounded-r-lg shadow-sm bg-gradient-to-r from-primary to-emerald-600 text-white">
          {badge || "⭐ Best Seller"}
        </span>
      )}

      {/* Discount badge */}
      {showDiscount && (
        <span className="absolute top-2.5 left-0 z-10 text-[10px] font-bold px-2.5 py-1 rounded-r-lg shadow-sm bg-gradient-to-r from-red-500 to-orange-500 text-white">
          🔥 ২০% ছাড়
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={handleWishlist}
        className="absolute top-2.5 right-2.5 z-10 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all"
      >
        <Heart
          size={14}
          className={`transition-colors ${
            isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-300 group-hover:text-gray-400"
          }`}
        />
      </button>

      {/* Image */}
      <Link
        href={`/product/${product.slug || product.id}`}
        className="block aspect-square overflow-hidden bg-gray-50/50 p-4 flex items-center justify-center"
      >
        <img
          src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'}
          alt={product.name}
          className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </Link>

      {/* Info */}
      <div className="flex-1 flex flex-col p-3 pt-2 border-t border-gray-50">
        <Link href={`/product/${product.slug || product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-gray-800 text-[13px] leading-snug line-clamp-2 min-h-[36px]">
            {product.name}
          </h3>
        </Link>
        {product.weight && (
          <span className="text-[11px] text-gray-400 mt-0.5">{product.weight}</span>
        )}

        <div className="mt-auto pt-2 space-y-2">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-primary text-[15px]">
              ৳{Number(product.price).toFixed(2)}
            </span>
            {(showDiscount || product.compare_price) && (
              <span className="text-[11px] text-gray-400 line-through">
                ৳{product.compare_price ? Number(product.compare_price).toFixed(2) : (Number(product.price) * 1.2).toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 ${
              added
                ? "bg-emerald-500 text-white scale-95"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
            }`}
          >
            {added ? (
              <><CheckCircle size={13} /> যোগ হয়েছে</>
            ) : (
              <><ShoppingCart size={13} /> কার্টে যোগ</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
