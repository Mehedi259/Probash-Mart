"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, cartTotal, cartCount, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB] flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md w-full text-center">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={48} className="text-gray-300" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">আপনার কার্ট খালি</h1>
          <p className="text-gray-500 mb-8">এখনো কোনো পণ্য কার্টে যোগ করেননি। আমাদের দারুণ সব পণ্য দেখুন!</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition"
          >
            কেনাকাটা শুরু করুন <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  const shipping = cartTotal > 0 ? 50 : 0;
  const total = cartTotal + shipping;

  return (
    <main className="min-h-screen pt-32 md:pt-44 pb-28 md:pb-16 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <ShoppingBag className="text-primary" /> আমার কার্ট ({cartCount}টি পণ্য)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex gap-4">
                <Link href={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2 mix-blend-multiply" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${item.id}`} className="hover:text-primary transition">
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1 line-clamp-2">{item.name}</h3>
                  </Link>
                  {item.weight && <p className="text-xs text-gray-400 mb-3">{item.weight}</p>}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 transition text-gray-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1.5 font-semibold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 transition text-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">৳{(item.price * item.quantity).toFixed(2)}</div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition mt-1 flex items-center gap-1 text-xs"
                      >
                        <Trash2 size={12} /> মুছুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b">অর্ডার সারসংক্ষেপ</h2>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>সাবটোটাল ({cartCount}টি)</span>
                  <span>৳{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>ডেলিভারি চার্জ</span>
                  <span>৳{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-3 border-t text-gray-800">
                  <span>মোট</span>
                  <span className="text-primary">৳{total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="w-full bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                অর্ডার করুন <ArrowRight size={18} />
              </Link>
              <Link
                href="/"
                className="w-full mt-3 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl flex items-center justify-center hover:bg-gray-50 transition text-sm"
              >
                কেনাকাটা চালিয়ে যান
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
