"use client";
import React, { useMemo } from "react";
import HeroSlider from "@/components/HeroSlider";
import ProductSection from "@/components/ProductSection";
import CategoryBar from "@/components/CategoryBar";
import WhyProbashMart from "@/components/WhyProbashMart";
import { productsAPI, categoriesAPI } from "@/lib/api";
import { useApi } from "@/hooks/useApi";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: categoriesData, loading: categoriesLoading } = useApi(() => categoriesAPI.list());
  const { data: productsData, loading: productsLoading } = useApi(() => productsAPI.list('page_size=100'));

  const categories = Array.isArray(categoriesData) ? categoriesData : (categoriesData?.results || []);
  const featuredProducts = productsData?.results || [];

  // Group products by category dynamically
  const getProductsByCategory = (catName: string) => 
    featuredProducts.filter((p: any) => p.category_name === catName).slice(0, 6);

  const fishProducts = getProductsByCategory("Frozen Fish");
  const spiceProducts = getProductsByCategory("Spices & Masala");
  const snackProducts = getProductsByCategory("Snacks & Biscuits");
  const sweetProducts = getProductsByCategory("Sweets & Desserts");
  const vegProducts = getProductsByCategory("Fresh Vegetables");
  
  const bestSellers = featuredProducts.filter((p: any) => p.is_best_seller).slice(0, 6);
  const flashDeals = featuredProducts.filter((p: any) => p.is_flash_deal || p.discount_percentage > 0).slice(0, 12);

  if (productsLoading || categoriesLoading) {
    return (
      <main className="w-full pt-[116px] md:pt-[140px] bg-[#F5F7FA] min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </main>
    );
  }

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
