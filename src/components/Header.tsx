import Link from "next/link";
import React from "react";
import HeaderCart from "./HeaderCart";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-md shrink-0">
          <img
            alt="ProbashMart Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlSFimrbEhMkUKxgE1bGjbFOBGxZs3-Jwn81z1XR-yxuTjrJqFgCqfO-Kn6lv8z9lDYwQkmSlgXKtapXDsSDbYNF2YD_1nZzSHlbswv2vd3oN7XXl8uUh3UiCYRqKEb2JfV4cib4-btEmDtloTkFPK4jjUgoTThr2q3psnEd8IGtai_FnIMUH4aCDwq_kgzUXdAwy4U-yKJunDV374tTQmtrd0frD5cPfn-Tq2aRu_Fr2nWURGOWveA"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              প্রবাসমার্ট
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              খাঁটি পণ্যের বিশ্বস্ত ঠিকানা
            </span>
          </div>
        </div>
        <div className="flex-1 max-w-[580px] hidden md:flex items-center bg-surface-container-low rounded-lg p-1 pl-space-md">
          <span className="material-symbols-outlined text-outline mr-space-sm">
            search
          </span>
          <input
            className="bg-transparent w-full focus:outline-none font-body-md text-body-md text-on-surface placeholder:text-outline"
            placeholder="পণ্য খুঁজুন (যেমন: ইলিশ, খাঁটি মধু, সুন্দরবনের ঘি)..."
            type="text"
          />
          <button className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg flex items-center gap-space-xs transition-colors shrink-0">
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span>খুঁজুন</span>
          </button>
        </div>
        <div className="flex items-center gap-space-lg shrink-0">
          <Link
            className="hidden lg:flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors"
            href="/support"
          >
            <span className="material-symbols-outlined text-[20px]">
              support_agent
            </span>
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                সহায়তা
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                হেল্প ডেস্ক
              </span>
            </div>
          </Link>
          <Link
            className="hidden xl:flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors"
            href="/track"
          >
            <span className="material-symbols-outlined text-[20px]">
              local_shipping
            </span>
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                ট্র্যাকিং
              </span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                অর্ডার ট্র্যাক
              </span>
            </div>
          </Link>
          <HeaderCart />
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                স্বাগতম
              </span>
              <Link
                className="font-label-md text-label-md text-on-surface font-semibold hover:text-primary transition-colors"
                href="/login"
              >
                লগইন / সাইন আপ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-low shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1320px] mx-auto px-margin flex items-center justify-between gap-gutter">
          <div className="flex items-center bg-primary text-on-primary px-space-md py-2.5 rounded-t-lg font-label-lg text-label-lg gap-space-sm cursor-pointer hover:bg-primary-container transition-colors shrink-0">
            <span className="material-symbols-outlined text-[20px]">
              grid_view
            </span>
            <span>সব ক্যাটাগরি</span>
            <span className="material-symbols-outlined text-[16px]">
              expand_more
            </span>
          </div>
          <nav className="flex-1 flex items-center overflow-x-auto gap-space-lg py-2.5 custom-scrollbar">
            <Link
              className="shrink-0 transition-colors py-1 text-primary font-bold border-b-2 border-primary"
              href="/"
            >
              হোম
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/products"
            >
              সব পণ্য
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/category/fish"
            >
              ইলিশ ও মাছ
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/category/fruits"
            >
              আম ও মৌসুমি ফল
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/category/honey"
            >
              খাঁটি মধু ও ঘি
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/category/dates"
            >
              খেজুর ও ড্রাই ফ্রুটস
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/category/heritage"
            >
              হাতে তৈরি ঐতিহ্য
            </Link>
            <Link
              className="shrink-0 font-label-md text-label-md text-secondary font-bold hover:text-secondary-container transition-colors py-1"
              href="/offers"
            >
              ধামাকা অফার
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
