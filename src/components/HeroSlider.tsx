"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDszwcOx9rkpPchJi9VTVjEXTcg2B5xhNx1BdqQVo9Tr91N0448eq9du9ZUp_NFkuMt7kf2T0whG6ct5GQmlEfRLxIsuk69huaeXPYI9FGX7XFoUWFfp4A7gB63N1lUxhA4du3MdqmDHYeIDQlMNcQSOKHILSeIu5_z_sA0IiLm_uXk3zNBcIPhuI4IOxolClw4nkNDdzOwZ7NvuFrgtpogHvDEwJ082A8iVuHocJH0UX1E-agrbG1a7w",
    badge: "১০০% রাসায়নিকমুক্ত",
    title: "আপনার পছন্দের পণ্য,\nএখন হাতের নাগালে",
    subtitle: "দেশি ও মানসম্মত পণ্য কিনুন সহজেই। প্রবাস ও দেশের প্রতিটি পরিবারের জন্য শতভাগ আসল ও সেরা মানের নিশ্চয়তা।",
    cta: "কেনাকাটা শুরু করুন",
    link: "/products"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGPEaDMFD0Lul-J6uYWPvCRxwf-CDPeB7V0Izo30oHY3uMyFh-m6UfIc-pFBphnm2L4Dtwd_qOTWHDpNUiGBBjC1U-xCJDCORwaTCrPYSI7h8fsMdy5JANTvHrvIWhjuOVJRmt4_qsYqv4MfOdGp3-dXSOQ-amhtGsEgvTU-io0tqEff8D4J_UbmBv0QbYaTOsGWJi2VZHSu79bAiu5-_0sCQ9P2iOHVbZPCd6Kv75kAU-_1nV6XM8fQ",
    badge: "তাজা সংগ্রহ",
    title: "পদ্মার তাজা ইলিশ\nবিশেষ ডিসকাউন্টে",
    subtitle: "সরাসরি নদী থেকে সংগৃহীত। আজই অর্ডার করুন এবং উপভোগ করুন খাঁটি স্বাদ।",
    cta: "অর্ডার দিন",
    link: "/category/fish"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="w-full relative bg-surface-container overflow-hidden lg:mt-0">
      <div className="relative h-[250px] md:h-[400px] lg:h-[500px] w-full group">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            
            <div className="relative z-20 h-full max-w-[1320px] mx-auto px-6 flex flex-col justify-center">
              <div className="max-w-xl">
                <span className="hidden md:inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white bg-primary rounded-full">
                  {slide.badge}
                </span>
                <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="hidden md:block text-lg text-gray-200 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3.5 text-sm md:text-base font-semibold text-primary transition-all duration-200 bg-white border border-transparent rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-xl mt-2 md:mt-0"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors hidden md:block opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors hidden md:block opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-6 md:w-8 bg-primary" : "w-1.5 md:w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
