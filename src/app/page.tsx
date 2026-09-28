import React from "react";
import HeroSlider from "@/components/HeroSlider";
import FeaturedCategories from "@/components/FeaturedCategories";
import TrendingProducts from "@/components/TrendingProducts";
import WhyProbashMart from "@/components/WhyProbashMart";

export default function Home() {
  return (
    <main className="w-full pt-[130px] md:pt-44 bg-surface min-h-screen pb-20 md:pb-0">
      <div className="flex flex-col w-full gap-8 lg:gap-12">
        {/* Premium Slider */}
        <HeroSlider />

        {/* Products directly below slider */}
        <div className="max-w-[1320px] mx-auto w-full px-4 md:px-8 space-y-12">
          <TrendingProducts />
          <FeaturedCategories />
        </div>

        {/* Keeping one clean section */}
        <div className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-[1320px] mx-auto w-full px-4 md:px-8">
            <WhyProbashMart />
          </div>
        </div>
      </div>
    </main>
  );
}
