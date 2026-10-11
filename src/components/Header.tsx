"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderCart from "./HeaderCart";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/shop", label: "সব পণ্য" },
  { href: "/category/Frozen Fish", label: "মাছ" },
  { href: "/category/Fresh Vegetables", label: "সবজি" },
  { href: "/category/Spices %26 Masala", label: "মশলা" },
  { href: "/category/Sweets %26 Desserts", label: "মিষ্টি" },
  { href: "/category/Snacks %26 Biscuits", label: "স্ন্যাকস" },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return (
      pathname === href ||
      pathname === decodeURIComponent(href) ||
      pathname.startsWith(href.split("?")[0])
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100">
      {/* Top bar */}
      <div className="h-14 md:h-[68px] max-w-[1320px] mx-auto px-4 md:px-6 flex items-center justify-between gap-3 md:gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 py-1"
          aria-label="হ্যালো প্রবাস মার্ট"
        >
          <img
            alt="হ্যালো প্রবাস মার্ট"
            className="h-8 sm:h-9 md:h-11 w-auto object-contain transition-transform hover:scale-[1.02]"
            src="/images/logo.png"
          />
          <span className="text-[10px] text-gray-400 font-medium hidden lg:inline-block border-l border-gray-200 pl-2.5 my-auto">
            খাঁটি পণ্যের বিশ্বস্ত ঠিকানা
          </span>
        </Link>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-[540px] items-center bg-gray-50 border border-gray-200 rounded-xl p-1 pl-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition"
        >
          <span className="material-symbols-outlined text-gray-400 mr-2 text-[20px]">
            search
          </span>
          <input
            className="bg-transparent w-full focus:outline-none text-sm text-gray-800 placeholder:text-gray-400"
            placeholder="পণ্য খুঁজুন (ইলিশ, মশলা, চাল, মিষ্টি...)"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-1 transition shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span>খুঁজুন</span>
          </button>
        </form>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <Link
            className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition px-1.5 py-1 rounded-lg hover:bg-gray-50"
            href="/track"
            title="অর্ডার ট্র্যাক"
          >
            <span className="material-symbols-outlined text-[22px] md:text-[20px] text-gray-500">
              local_shipping
            </span>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-[10px] text-gray-400 leading-tight">ট্র্যাকিং</span>
              <span className="text-[12px] font-semibold text-gray-700 leading-tight">
                অর্ডার ট্র্যাক
              </span>
            </div>
          </Link>

          <HeaderCart />

          <Link
            href="/profile"
            className="flex items-center gap-2 px-1 hover:opacity-90 transition"
            title="অ্যাকাউন্ট"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-[18px]">
                person
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] text-gray-400 leading-tight">অ্যাকাউন্ট</span>
              <span className="text-[12px] font-semibold text-gray-700 leading-tight">
                লগইন
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Search Row */}
      <div className="block md:hidden px-4 pb-2.5 pt-0.5">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1 pl-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition shadow-xs"
        >
          <span className="material-symbols-outlined text-gray-400 mr-2 text-[18px]">
            search
          </span>
          <input
            className="bg-transparent w-full focus:outline-none text-xs sm:text-sm text-gray-800 placeholder:text-gray-400"
            placeholder="পণ্য খুঁজুন (ইলিশ, মশলা, মিষ্টি...)"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition shrink-0"
          >
            <span>খুঁজুন</span>
          </button>
        </form>
      </div>

      {/* Desktop Navigation Sub-bar */}
      <div className="bg-gray-50 border-t border-gray-100 hidden md:block">
        <div className="max-w-[1320px] mx-auto px-6 flex items-center gap-0.5 py-0 overflow-x-auto custom-scrollbar">
          <Link
            href="/category"
            className="flex items-center gap-1.5 bg-primary text-white px-4 py-2.5 rounded-t-lg text-[13px] font-semibold shrink-0 hover:bg-primary/90 transition mr-1"
          >
            <span className="material-symbols-outlined text-[16px]">grid_view</span>
            ক্যাটাগরি
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 text-[13px] px-3 py-2.5 transition-all relative ${
                isActive(link.href)
                  ? "text-primary font-bold"
                  : "text-gray-600 hover:text-primary font-medium"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-primary rounded-t-full" />
              )}
            </Link>
          ))}
          <Link
            className="shrink-0 text-[13px] px-3 py-2.5 text-red-500 font-bold hover:text-red-600 transition"
            href="/deals"
          >
            🔥 অফার
          </Link>
        </div>
      </div>
    </header>
  );
}
