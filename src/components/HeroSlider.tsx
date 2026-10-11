"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero_slide_1.jpg",
    badge: "১০০% খাঁটি দেশি পণ্য",
    title: "দেশের স্বাদ,\nএখন আপনার দরজায়",
    subtitle: "মাছ, মশলা, মিষ্টি, সবজি — সবকিছু একসাথে। প্রবাসে বসেও উপভোগ করুন বাংলার আসল স্বাদ।",
    cta: "কেনাকাটা শুরু করুন",
    link: "/shop",
  },
  {
    id: 2,
    image: "/images/hero_slide_2.jpg",
    badge: "সরাসরি নদী থেকে",
    title: "পদ্মার তাজা ইলিশ\nবিশেষ মূল্যে",
    subtitle: "চাঁদপুরের খাঁটি ইলিশ, হিমায়িত করে আপনার কাছে পৌঁছে দিচ্ছি।",
    cta: "ইলিশ অর্ডার করুন",
    link: "/category/Frozen Fish",
  },
  {
    id: 3,
    image: "/images/hero_slide_3.jpg",
    badge: "ঘরোয়া মশলায় রান্না",
    title: "খাঁটি দেশি মশলা\nসরাসরি আপনার রান্নাঘরে",
    subtitle: "রাঁধুনি, প্রাণ সহ সেরা সব ব্র্যান্ডের মশলা এখন প্রবাসমার্টে।",
    cta: "মশলা কিনুন",
    link: "/category/Spices %26 Masala",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-[250px] sm:h-[320px] md:h-[420px] lg:h-[480px] w-full group">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-20 h-full max-w-[1320px] mx-auto px-5 sm:px-6 md:px-8 flex flex-col justify-center">
              <div className="max-w-lg">
                <span
                  className={`inline-block px-2.5 sm:px-3 py-1 mb-2 sm:mb-3 text-[10px] sm:text-xs font-bold tracking-wider text-white bg-primary/90 backdrop-blur-sm rounded-full shadow-md transition-all duration-500 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  {slide.badge}
                </span>
                <h1
                  className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-[1.2] whitespace-pre-line drop-shadow-md transition-all duration-700 delay-100 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`hidden sm:block text-xs sm:text-sm lg:text-base text-gray-200 mb-4 md:mb-6 leading-relaxed max-w-md transition-all duration-700 delay-200 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-bold text-gray-900 bg-white rounded-xl hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 delay-300 ${
                    index === current ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.cta}
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows (Desktop) */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/30 transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/30 transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white shadow-md"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
