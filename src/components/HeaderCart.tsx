"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HeaderCart() {
  const { cartCount, cartTotal } = useCart();

  return (
    <Link
      className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 border border-primary/10 px-3 py-2 rounded-xl transition-colors"
      href="/cart"
    >
      <div className="relative flex items-center">
        <span className="material-symbols-outlined text-primary text-[22px]">shopping_cart</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-secondary text-white text-[9px] font-bold min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full shadow-sm">
            {cartCount > 99 ? "99+" : cartCount}
          </span>
        )}
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[10px] text-gray-400 leading-tight">কার্ট</span>
        <span className="text-[12px] text-primary font-bold leading-tight">
          ৳{cartTotal.toFixed(0)}
        </span>
      </div>
    </Link>
  );
}
