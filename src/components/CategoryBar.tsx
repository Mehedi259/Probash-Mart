"use client";
import React from "react";
import Link from "next/link";
import { categoriesAPI } from "@/lib/api";
import { useApi } from "@/hooks/useApi";

const categoryIcons: Record<string, string> = {
  "Fresh Vegetables": "🥬",
  "Frozen Fish": "🐟",
  "Meat & Poultry": "🍖",
  "Rice & Grains": "🌾",
  "Spices & Masala": "🌶️",
  "Snacks & Biscuits": "🍿",
  "Beverages": "🥤",
  "Household": "🏠",
  "Personal Care": "🧴",
  "Sweets & Desserts": "🍮",
  "Other": "📦",
};

export default function CategoryBar() {
  const { data } = useApi(() => categoriesAPI.list());
  const categories = Array.isArray(data) ? data : (data?.results || []);

  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-4">
        <div className="flex gap-3 overflow-x-auto custom-scrollbar pb-1">
          {categories.filter((c: any) => c.name !== "Other").map((cat: any) => (
            <Link
              key={cat.id}
              href={`/category/${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center gap-1.5 min-w-[72px] px-2 py-2 rounded-xl hover:bg-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm overflow-hidden">
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span>{categoryIcons[cat.name] || "📦"}</span>
                )}
              </div>
              <span className="text-[10px] font-medium text-gray-600 text-center leading-tight whitespace-nowrap">
                {cat.name === "Spices & Masala" ? "মশলা" :
                 cat.name === "Snacks & Biscuits" ? "স্ন্যাকস" :
                 cat.name === "Fresh Vegetables" ? "সবজি" :
                 cat.name === "Frozen Fish" ? "মাছ" :
                 cat.name === "Rice & Grains" ? "চাল" :
                 cat.name === "Sweets & Desserts" ? "মিষ্টি" :
                 cat.name === "Beverages" ? "পানীয়" :
                 cat.name === "Household" ? "গৃহস্থালি" :
                 cat.name === "Personal Care" ? "পরিচর্যা" :
                 cat.name === "Meat & Poultry" ? "মাংস" :
                 cat.name}
              </span>
            </Link>
          ))}
          <Link
            href="/shop"
            className="group flex flex-col items-center gap-1.5 min-w-[72px] px-2 py-2 rounded-xl hover:bg-secondary/5 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm">
              🛒
            </div>
            <span className="text-[10px] font-bold text-secondary text-center leading-tight whitespace-nowrap">
              সব পণ্য
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
