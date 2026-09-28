"use client";
import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { featuredProducts } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { ShoppingCart, Heart, ArrowLeft, Package, CheckCircle, Truck, RotateCcw, Plus, Minus } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const product = featuredProducts.find((p) => p.id === id);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md w-full text-center">
          <Package size={64} className="text-gray-200 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-gray-700 mb-2">পণ্য পাওয়া যায়নি</h1>
          <Link href="/" className="inline-flex items-center gap-2 mt-4 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            <ArrowLeft size={16} /> হোমে ফিরুন
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = featuredProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-primary transition">হোম</Link>
          <span>/</span>
          <Link href={`/category/${encodeURIComponent(product.category)}`} className="hover:text-primary transition">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[150px]">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain p-8 mix-blend-multiply"
              />
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {product.isBestSeller && (
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full w-fit">
                🏆 Best Seller
              </span>
            )}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">{product.name}</h1>
              {product.weight && <p className="text-sm text-gray-400 mt-1">{product.weight}</p>}
              <p className="text-sm text-gray-500 mt-1">ক্যাটাগরি: <Link href={`/category/${encodeURIComponent(product.category)}`} className="text-primary hover:underline">{product.category}</Link></p>
            </div>

            <div className="text-3xl font-bold text-primary">
              ৳{product.price.toFixed(2)}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">পরিমাণ:</span>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 font-bold text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition ${
                  added ? "bg-green-500 text-white" : "bg-primary text-white hover:opacity-90"
                }`}
              >
                {added ? (
                  <><CheckCircle size={18} /> যোগ হয়েছে!</>
                ) : (
                  <><ShoppingCart size={18} /> কার্টে যোগ করুন</>
                )}
              </button>
              <button
                onClick={() =>
                  isInWishlist(product.id)
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className={`p-3 rounded-xl border transition ${
                  isInWishlist(product.id)
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-gray-200 hover:bg-gray-50 text-gray-400"
                }`}
              >
                <Heart size={20} className={isInWishlist(product.id) ? "fill-current" : ""} />
              </button>
            </div>

            <Link
              href="/checkout"
              onClick={() => addToCart(product)}
              className="w-full border-2 border-primary text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition"
            >
              এখনই অর্ডার করুন
            </Link>

            {/* Trust badges */}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle size={16} className="text-green-500" />
                ১০০% আসল পণ্যের গ্যারান্টি
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Truck size={16} className="text-blue-500" />
                সারাদেশে ক্যাশ অন ডেলিভারি
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <RotateCcw size={16} className="text-orange-500" />
                ৭ দিনের রিটার্ন পলিসি
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">একই ক্যাটাগরির পণ্য</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-4 flex flex-col group"
                >
                  <div className="h-28 flex items-center justify-center mb-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-700 line-clamp-2 mb-1">{p.name}</h3>
                  {p.weight && <span className="text-[10px] text-gray-400">{p.weight}</span>}
                  <div className="font-bold text-sm text-primary mt-1">৳{p.price.toFixed(2)}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
