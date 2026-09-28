"use client";
import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { featuredProducts } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { ShoppingCart, Heart, ArrowLeft, Package, CheckCircle, Truck, RotateCcw, Plus, Minus, ZoomIn } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = featuredProducts.find((p) => p.id === id);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Image zoom state
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  if (!product) {
    return (
      <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA] flex items-center justify-center px-4">
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
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = featuredProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-5 flex-wrap">
          <Link href="/" className="hover:text-primary transition">হোম</Link>
          <span>/</span>
          <Link href={`/category/${encodeURIComponent(product.category)}`} className="hover:text-primary transition">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image with Zoom */}
          <div className="w-full lg:w-1/2">
            <div
              ref={imgRef}
              className="relative aspect-square bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-crosshair group"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-200"
                style={isZooming ? {
                  transform: "scale(2.5)",
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                } : {}}
              />
              {/* Zoom indicator */}
              <div className={`absolute bottom-3 right-3 bg-black/50 text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 transition-opacity ${isZooming ? "opacity-0" : "opacity-70"}`}>
                <ZoomIn size={12} /> হোভার করে জুম করুন
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {product.isBestSeller && (
              <span className="inline-block bg-gradient-to-r from-yellow-100 to-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full w-fit border border-amber-200">
                🏆 Best Seller
              </span>
            )}

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">{product.name}</h1>
              {product.weight && <p className="text-sm text-gray-400 mt-1">{product.weight}</p>}
              <p className="text-sm text-gray-500 mt-1.5">
                ক্যাটাগরি:{" "}
                <Link href={`/category/${encodeURIComponent(product.category)}`} className="text-primary hover:underline font-medium">
                  {product.category}
                </Link>
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">৳{product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-400 line-through">৳{(product.price * 1.15).toFixed(2)}</span>
              <span className="bg-red-100 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded-full">-15%</span>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-600 font-medium">স্টকে আছে</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">পরিমাণ:</span>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-gray-100 transition text-gray-600">
                  <Minus size={14} />
                </button>
                <span className="px-5 py-2.5 font-bold text-sm bg-white border-x border-gray-200">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-gray-100 transition text-gray-600">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-sm ${
                  added ? "bg-emerald-500 text-white scale-[0.98]" : "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md"
                }`}
              >
                {added ? <><CheckCircle size={18} /> যোগ হয়েছে!</> : <><ShoppingCart size={18} /> কার্টে যোগ করুন</>}
              </button>
              <button
                onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                className={`p-3.5 rounded-xl border-2 transition-all ${
                  isInWishlist(product.id) ? "border-red-200 bg-red-50 text-red-500" : "border-gray-200 hover:border-red-200 hover:bg-red-50 text-gray-400 hover:text-red-400"
                }`}
              >
                <Heart size={20} className={isInWishlist(product.id) ? "fill-current" : ""} />
              </button>
            </div>

            <Link
              href="/checkout"
              onClick={() => addToCart(product)}
              className="w-full border-2 border-primary text-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all text-sm"
            >
              এখনই অর্ডার করুন →
            </Link>

            {/* Trust */}
            <div className="space-y-2.5 pt-5 border-t border-gray-100">
              <div className="flex items-center gap-2.5 text-sm text-gray-500">
                <CheckCircle size={16} className="text-green-500 shrink-0" /> ১০০% আসল পণ্যের গ্যারান্টি
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-500">
                <Truck size={16} className="text-blue-500 shrink-0" /> সারাদেশে ক্যাশ অন ডেলিভারি
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-500">
                <RotateCcw size={16} className="text-orange-500 shrink-0" /> ৭ দিনের রিটার্ন পলিসি
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-5">একই ক্যাটাগরির পণ্য</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-4 flex flex-col group"
                >
                  <div className="aspect-square flex items-center justify-center mb-3 bg-gray-50/50 rounded-xl overflow-hidden p-2">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-700 line-clamp-2 mb-1">{p.name}</h3>
                  {p.weight && <span className="text-[10px] text-gray-400">{p.weight}</span>}
                  <div className="font-bold text-sm text-primary mt-auto pt-1">৳{p.price.toFixed(2)}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
