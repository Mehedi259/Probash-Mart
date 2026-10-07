"use client";
import Link from "next/link";
import React from "react";
import { categoriesAPI } from "@/lib/api";
import { useApi } from "@/hooks/useApi";

const categoryMeta: Record<string, { bn: string; image: string; count: string }> = {
  "Frozen Fish": { bn: "ইলিশ ও মাছ", image: "/images/Hilsa.webp", count: "২৪টি পণ্য" },
  "Fresh Vegetables": { bn: "তাজা শাক-সবজি", image: "/images/Bottle Gourd (Lau).jpg", count: "১৮টি পণ্য" },
  "Spices & Masala": { bn: "মশলা ও সামগ্রী", image: "/images/PRAN Garam Masala.jpeg", count: "৩৬টি পণ্য" },
  "Snacks & Biscuits": { bn: "স্ন্যাকস ও চানাচুর", image: "/images/Ruchi Chanachur - Classic.jpeg", count: "২০টি পণ্য" },
  "Sweets & Desserts": { bn: "মিষ্টি ও ডেজার্ট", image: "/images/Pran Rasmalai.jpeg", count: "১৫টি পণ্য" },
  "Rice & Grains": { bn: "চাল ও শস্য", image: "/images/explore_rice.jpg", count: "১০টি পণ্য" },
  "Beverages": { bn: "পানীয়", image: "/images/explore_snacks.jpg", count: "৮টি পণ্য" },
  "Household": { bn: "গৃহস্থালি", image: "/images/explore_household.jpg", count: "১২টি পণ্য" },
};

export default function FeaturedCategories() {
  const { data } = useApi(() => categoriesAPI.list());
  const categories = Array.isArray(data) ? data : (data?.results || []);

  const displayCats = categories.filter((c: any) => c.name !== "Other" && c.name !== "Personal Care").slice(0, 7);

  return (
    <section className="w-full py-8">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-5">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">পণ্য সম্ভার</span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-0.5">ক্যাটাগরি অনুযায়ী কেনাকাটা</h2>
          </div>
          <Link className="hidden sm:flex items-center gap-1 text-sm text-primary font-semibold hover:underline" href="/category">
            সব দেখুন →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {displayCats.map((cat: any) => {
            const meta = categoryMeta[cat.name];
            return (
              <Link
                key={cat.id}
                className="group flex flex-col items-center text-center p-3 rounded-2xl bg-white hover:bg-primary/5 transition-all shadow-sm hover:shadow-md border border-gray-50"
                href={`/category/${encodeURIComponent(cat.slug || cat.name.toLowerCase())}`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 mb-2 shadow-inner group-hover:scale-110 transition-transform">
                  {meta?.image ? (
                    <img className="w-full h-full object-cover" alt={cat.name} src={meta.image} />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-xl">📦</div>
                  )}
                </div>
                <span className="font-semibold text-gray-800 text-xs leading-tight">
                  {meta?.bn || cat.name}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5">{meta?.count || ""}</span>
              </Link>
            );
          })}
          {/* Offers */}
          <Link
            className="group flex flex-col items-center text-center p-3 rounded-2xl bg-gradient-to-b from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all shadow-sm hover:shadow-md border border-orange-100"
            href="/deals"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-inner group-hover:scale-110 transition-transform text-2xl">
              🔥
            </div>
            <span className="font-bold text-red-600 text-xs leading-tight">অফার জোন</span>
            <span className="text-[10px] text-red-400 mt-0.5">৫০+ ডিল</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
