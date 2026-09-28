"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderCart from "./HeaderCart";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 md:h-20 max-w-[1320px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <img
            alt="ProbashMart Logo"
            className="h-7 md:h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlSFimrbEhMkUKxgE1bGjbFOBGxZs3-Jwn81z1XR-yxuTjrJqFgCqfO-Kn6lv8z9lDYwQkmSlgXKtapXDsSDbYNF2YD_1nZzSHlbswv2vd3oN7XXl8uUh3UiCYRqKEb2JfV4cib4-btEmDtloTkFPK4jjUgoTThr2q3psnEd8IGtai_FnIMUH4aCDwq_kgzUXdAwy4U-yKJunDV374tTQmtrd0frD5cPfn-Tq2aRu_Fr2nWURGOWveA"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight text-sm md:text-base font-bold">
              প্রবাসমার্ট
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden md:block text-xs">
              খাঁটি পণ্যের বিশ্বস্ত ঠিকানা
            </span>
          </div>
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-[580px] flex items-center bg-gray-100 rounded-xl p-1 pl-4">
          <span className="material-symbols-outlined text-gray-400 mr-2 text-[20px]">search</span>
          <input
            className="bg-transparent w-full focus:outline-none text-sm text-gray-800 placeholder:text-gray-400"
            placeholder="পণ্য খুঁজুন..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary hover:opacity-90 text-white text-sm font-semibold px-3 py-2 rounded-lg flex items-center gap-1 transition shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span className="hidden sm:inline">খুঁজুন</span>
          </button>
        </form>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* Track order - desktop only */}
          <Link
            className="hidden xl:flex items-center gap-1 text-gray-500 hover:text-primary transition"
            href="/track"
          >
            <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-400">ট্র্যাকিং</span>
              <span className="text-xs font-semibold text-gray-700">অর্ডার ট্র্যাক</span>
            </div>
          </Link>

          {/* Cart */}
          <HeaderCart />

          {/* Account */}
          <Link href="/profile" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] text-gray-400">অ্যাকাউন্ট</span>
              <span className="text-xs font-semibold text-gray-700 hover:text-primary transition">লগইন</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Nav bar */}
      <div className="bg-white border-t border-gray-100 shadow-sm hidden md:block">
        <div className="max-w-[1320px] mx-auto px-8 flex items-center gap-6 py-2.5 overflow-x-auto custom-scrollbar">
          <Link href="/category" className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shrink-0 hover:opacity-90 transition">
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            সব ক্যাটাগরি
          </Link>
          <Link className="shrink-0 text-sm text-primary font-bold border-b-2 border-primary py-1" href="/">হোম</Link>
          <Link className="shrink-0 text-sm text-gray-600 hover:text-gray-900 transition py-1" href="/shop">সব পণ্য</Link>
          <Link className="shrink-0 text-sm text-gray-600 hover:text-gray-900 transition py-1" href="/category/Frozen Fish">ইলিশ ও মাছ</Link>
          <Link className="shrink-0 text-sm text-gray-600 hover:text-gray-900 transition py-1" href="/category/Fresh Vegetables">সবজি</Link>
          <Link className="shrink-0 text-sm text-gray-600 hover:text-gray-900 transition py-1" href="/category/Spices %26 Masala">মশলা</Link>
          <Link className="shrink-0 text-sm text-gray-600 hover:text-gray-900 transition py-1" href="/category/Sweets %26 Desserts">মিষ্টি</Link>
          <Link className="shrink-0 text-sm text-gray-600 hover:text-gray-900 transition py-1" href="/category/Snacks %26 Biscuits">স্ন্যাকস</Link>
          <Link className="shrink-0 text-sm text-secondary font-bold hover:opacity-80 transition py-1" href="/deals">ধামাকা অফার</Link>
        </div>
      </div>
    </header>
  );
}
