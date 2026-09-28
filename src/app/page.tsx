"use client";
import React from "react";
import HeroSlider from "@/components/HeroSlider";
import ProductSection from "@/components/ProductSection";
import CategoryBar from "@/components/CategoryBar";
import WhyProbashMart from "@/components/WhyProbashMart";
import { featuredProducts, categories } from "@/data/mockData";

export default function Home() {
  // Group products by category
  const fishProducts = featuredProducts.filter(p => p.category === "Frozen Fish").slice(0, 6);
  const spiceProducts = featuredProducts.filter(p => p.category === "Spices & Masala").slice(0, 6);
  const snackProducts = featuredProducts.filter(p => p.category === "Snacks & Biscuits").slice(0, 6);
  const sweetProducts = featuredProducts.filter(p => p.category === "Sweets & Desserts").slice(0, 6);
  const vegProducts = featuredProducts.filter(p => p.category === "Fresh Vegetables").slice(0, 6);
  const bestSellers = featuredProducts.filter(p => p.isBestSeller || ["p1","p2","p3","p4","p5","p6"].includes(p.id)).slice(0, 6);
  const flashDeals = featuredProducts.slice(0, 12);

  return (
    <main className="w-full pt-[116px] md:pt-[140px] bg-[#F5F7FA] min-h-screen pb-20 md:pb-0">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Category Bar */}
      <CategoryBar />

      {/* Product Sections */}
      <div className="max-w-[1320px] mx-auto w-full px-4 md:px-6 space-y-10 py-8">

        {/* Flash Deals */}
        <ProductSection
          title="ফ্ল্যাশ সেল"
          subtitle="সীমিত সময়ের অফার"
          icon="🔥"
          products={flashDeals}
          categoryLink="/deals"
          showDiscount
        />

        {/* Best Sellers */}
        <ProductSection
          title="সবচেয়ে বেশি বিক্রিত"
          subtitle="গ্রাহকদের প্রথম পছন্দ"
          icon="⭐"
          products={bestSellers}
          categoryLink="/shop"
        />

        {/* Frozen Fish */}
        <ProductSection
          title="ইলিশ ও মাছ"
          icon="🐟"
          products={fishProducts}
          categoryLink="/category/Frozen Fish"
        />

        {/* Spices */}
        <ProductSection
          title="মশলা ও মসল্লা"
          icon="🌶️"
          products={spiceProducts}
          categoryLink="/category/Spices %26 Masala"
        />

        {/* Snacks */}
        <ProductSection
          title="স্ন্যাকস ও চানাচুর"
          icon="🍿"
          products={snackProducts}
          categoryLink="/category/Snacks %26 Biscuits"
        />

        {/* Vegetables */}
        <ProductSection
          title="তাজা শাক-সবজি"
          icon="🥬"
          products={vegProducts}
          categoryLink="/category/Fresh Vegetables"
        />

        {/* Sweets */}
        <ProductSection
          title="মিষ্টি ও ডেজার্ট"
          icon="🍮"
          products={sweetProducts}
          categoryLink="/category/Sweets %26 Desserts"
        />
      </div>

      {/* Trust Section */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1320px] mx-auto w-full px-4 md:px-6">
          <WhyProbashMart />
        </div>
      </div>
    </main>
  );
}
