"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HeaderCart() {
  const { cartCount, cartTotal } = useCart();
  
  return (
    <Link
      className="flex items-center gap-space-sm bg-surface-container-low hover:bg-surface-container px-space-md py-space-sm rounded-lg transition-colors border border-gray-100"
      href="/checkout"
    >
      <div className="relative flex items-center">
        <span className="material-symbols-outlined text-primary text-[24px]">
          shopping_cart
        </span>
        <span className="absolute -top-2 -right-2 bg-secondary text-on-secondary font-label-sm text-[10px] px-1.5 py-0.5 rounded-full font-bold">
          {cartCount}
        </span>
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
          My Cart
        </span>
        <span className="font-label-md text-label-md text-primary font-bold">
          ৳{cartTotal.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}
