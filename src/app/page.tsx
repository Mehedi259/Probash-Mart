import React from "react";
import HeroBanner from "@/components/HeroBanner";
import TrustBadges from "@/components/TrustBadges";
import FeaturedCategories from "@/components/FeaturedCategories";
import FlashDeal from "@/components/FlashDeal";
import TrendingProducts from "@/components/TrendingProducts";
import WhyProbashMart from "@/components/WhyProbashMart";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="w-full pt-44 bg-surface min-h-[calc(100vh-380px)]">
      <div className="flex flex-col w-full">
        {/* Top Trust & Notification Banner */}
        <section className="w-full bg-surface-container-low py-space-sm px-margin">
          <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-space-sm text-body-sm text-on-surface-variant font-body-sm">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed">
                <span className="material-symbols-outlined text-[14px]">
                  bolt
                </span>
              </span>
              <span className="font-label-md text-label-md text-primary font-bold">
                আজকের বিশেষ চমক:
              </span>
              <span>
                প্রথম অর্ডারে ফ্রি হোম ডেলিভারি পেতে কুপন ব্যবহার করুন{" "}
                <strong className="text-secondary tracking-wide">
                  PROBASH100
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-space-lg">
              <span className="inline-flex items-center gap-space-xs text-primary font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                ৬৪ জেলায় দ্রুত ক্যাশ অন ডেলিভারি
              </span>
            </div>
          </div>
        </section>

        {/* 1. Hero Banner & Highlight Deals Bento Section */}
        <HeroBanner />

        {/* 2. Key Trust Badges Strip (৪টি বিশেষ সুবিধা) */}
        <TrustBadges />

        {/* 3. Featured Categories (ক্যাটাগরি অনুযায়ী কেনাকাটা করুন) */}
        <FeaturedCategories />

        {/* 4. Flash Deal / আজকের বিশেষ অফার (কাউন্টডাউন টাইমার সহ) */}
        <FlashDeal />

        {/* 5. Trending / সর্বাধিক বিক্রিত দেশি পণ্য (Best Selling Products) */}
        <TrendingProducts />

        {/* 6. Special Feature Section: "কেন প্রবাসমার্ট সেরা?" (Why ProbashMart?) */}
        <WhyProbashMart />

        {/* 7. Customer Testimonials / ক্রেতাদের সন্তুষ্টির অভিজ্ঞতা */}
        <Testimonials />

        {/* 8. Mobile App / Newsletter Banner */}
        <Newsletter />
      </div>
    </main>
  );
}
