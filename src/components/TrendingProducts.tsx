"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "ghee-500",
    name: "খাঁটি গাওয়া ঘি (৫০০ গ্রাম)",
    brand: "সিরাজগঞ্জের গাওয়া",
    description: "ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু ও দানাদার খাঁটি ঘি।",
    price: 780,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP1Kd-DIOSd8NlC014M4pQWMnI8YN5AIWfURsJaYH0pdBZJhKWsZ0QARF2AWfH5h9rJWszdiHwDSCEvUhUFX_pMnK-5HwvR_pZa8_0RHwgZkaL2gJPiVi7rQthOMAfmcBmWRHPgBQDsfnzmFTgg647yER1FQR_ZsqVPz7gCV1fp44M6m9Afz8r9tGxXICv3NRNSiYBEOg2X0UhxLONLZguVO-UOhRj-Ylfcs8GcvsT-hxOIubLB9bYLQ",
    category: "khanti-deshi",
    badge: "হট সেলিং"
  },
  {
    id: "mustard-oil-1l",
    name: "পাহাড়ি হলুদ ও সরিষার তেল (১ লিটার)",
    brand: "ঘানি ভাঙা তেল",
    description: "কাঠের ঘানিতে ভাঙা খাঁটি ঝাঁঝালো দেশি সরিষার তেল।",
    price: 340,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCduxt6IVUHKPWj26_7q0pwhEnjmuPTYrCfj5ke8f9CxxVo84n0BdF2m1VMd5mpC_ud22qG7NmaYh1-56_Q4Rq4mLaujNEGlOYRE1uuE90UX0If1EMiDQk8K6r8SIXLjaKm9teInoTvvyxkeQWs763nNjjIkoFBJgMoXqLqSOF-VwSJh0EMVGCD7_XPryV2ghYEAyY3W7okFtZA9rPfuNYXxgRMOX353mZvo8HN2I0lwj_afxO4yW998A",
    category: "khanti-deshi",
    badge: "হট সেলিং"
  },
  {
    id: "jamdani-saree",
    name: "হাতে বোনা জামদানি শাড়ি",
    brand: "রূপগঞ্জ তাঁতিদের কাজ",
    description: "আভিজাত্য ও ঐতিহ্যের নিখুঁত হাতে বোনা শিল্পকর্ম।",
    price: 4500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeHkghiulnhlicQeP7BpwQQECo7R28zHQ7PPPeRQ9ZykhEWbQ0pBWag6yyfCbvIr4UsIFHkPxxM_C_rm_taKbqeh1cMOhYVrITr8UmjP-Jjj7ayip9uxYJ3xs76sIexPV7OFuAt49_ev2FA4xv1Cc63cJORoRUP0590HIXrfpjPNtAvCPOSuj2L5iSWyO1bvophYtsJ96JSlO9JB48KWoC20HtEQdJFvRqQR27cJLShgY4ZpE8Z0NChQ",
    category: "heritage",
    badge: "হেরিটেজ"
  },
  {
    id: "earthenware-toys",
    name: "ঐতিহ্যবাহী মাটির পাত্র ও খেলনা সেট",
    brand: "কুটির শিল্প",
    description: "নকশী আঁকা মাটির তৈজসপত্র ও দেশীয় হস্তশিল্প।",
    price: 650,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChFyl64QhIZxDVk_cquX33__yLJv9TJDwCxcYupXwe_SXCLTeM-90aa9K--_-JabKrijrL86cpWzOcQSjyBzk0lla38k7fFMbuGFuAlhwpMMdoqIEC9_OUOCpXkAMet17OgD7vvNyGv-fTWy1n_-oFWRXM1rRU-QRUliMasJgBGEO7dsi1R7qxPXRZDaUfdfMAMOPEEWTjrdS8Vy7CdbNSF8tAkupalMeRL6Py5VTssSZ1ZtyesIoDSQ",
    category: "khanti-deshi",
    badge: "হট সেলিং"
  }
];

export default function TrendingProducts() {
  const { addToCart } = useCart();

  return (
    <section className="w-full px-margin py-space-xl">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-bold uppercase">
              <span className="material-symbols-outlined text-[18px]">
                trending_up
              </span>
              <span>গ্রাহকদের প্রথম পছন্দ</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-1">
              সর্বাধিক বিক্রিত দেশি পণ্য
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {products.map((product) => (
            <div key={product.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <span className="absolute top-3 left-3 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                  {product.badge}
                </span>
                <Link href={`/product/${product.id}`}>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={product.name}
                    src={product.image}
                  />
                </Link>
              </div>
              <div className="p-space-md flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {product.brand}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {product.description}
                  </p>
                </div>
                <div className="mt-space-md">
                  <div className="font-headline-lg text-headline-lg text-primary font-bold mb-space-sm">
                    ৳{product.price}
                  </div>
                  <div className="grid grid-cols-2 gap-space-xs">
                    <Link href={`/product/${product.id}`} className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        visibility
                      </span>
                      <span>বিশদ দেখুন</span>
                    </Link>
                    <button 
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category
                      })}
                      className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                      <span>কার্ট</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
