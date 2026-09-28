"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

const productDB: Record<string, any> = {
  "ghee-500": {
    id: "ghee-500",
    name: "খাঁটি গাওয়া ঘি (৫০০ গ্রাম)",
    brand: "সিরাজগঞ্জের গাওয়া",
    description: "ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু ও দানাদার খাঁটি ঘি। ১০০% নির্ভেজাল এবং স্বাস্থ্যসম্মত। সরাসরি গ্রাম থেকে সংগৃহীত।",
    price: 780,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP1Kd-DIOSd8NlC014M4pQWMnI8YN5AIWfURsJaYH0pdBZJhKWsZ0QARF2AWfH5h9rJWszdiHwDSCEvUhUFX_pMnK-5HwvR_pZa8_0RHwgZkaL2gJPiVi7rQthOMAfmcBmWRHPgBQDsfnzmFTgg647yER1FQR_ZsqVPz7gCV1fp44M6m9Afz8r9tGxXICv3NRNSiYBEOg2X0UhxLONLZguVO-UOhRj-Ylfcs8GcvsT-hxOIubLB9bYLQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDszwcOx9rkpPchJi9VTVjEXTcg2B5xhNx1BdqQVo9Tr91N0448eq9du9ZUp_NFkuMt7kf2T0whG6ct5GQmlEfRLxIsuk69huaeXPYI9FGX7XFoUWFfp4A7gB63N1lUxhA4du3MdqmDHYeIDQlMNcQSOKHILSeIu5_z_sA0IiLm_uXk3zNBcIPhuI4IOxolClw4nkNDdzOwZ7NvuFrgtpogHvDEwJ082A8iVuHocJH0UX1E-agrbG1a7w"
    ],
    category: "khanti-deshi",
  },
  "mustard-oil-1l": {
    id: "mustard-oil-1l",
    name: "পাহাড়ি হলুদ ও সরিষার তেল (১ লিটার)",
    brand: "ঘানি ভাঙা তেল",
    description: "কাঠের ঘানিতে ভাঙা খাঁটি ঝাঁঝালো দেশি সরিষার তেল। পাহাড়ি সরিষা থেকে তৈরি। কোন রাসায়নিক মিশ্রিত নেই।",
    price: 340,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCduxt6IVUHKPWj26_7q0pwhEnjmuPTYrCfj5ke8f9CxxVo84n0BdF2m1VMd5mpC_ud22qG7NmaYh1-56_Q4Rq4mLaujNEGlOYRE1uuE90UX0If1EMiDQk8K6r8SIXLjaKm9teInoTvvyxkeQWs763nNjjIkoFBJgMoXqLqSOF-VwSJh0EMVGCD7_XPryV2ghYEAyY3W7okFtZA9rPfuNYXxgRMOX353mZvo8HN2I0lwj_afxO4yW998A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGPEaDMFD0Lul-J6uYWPvCRxwf-CDPeB7V0Izo30oHY3uMyFh-m6UfIc-pFBphnm2L4Dtwd_qOTWHDpNUiGBBjC1U-xCJDCORwaTCrPYSI7h8fsMdy5JANTvHrvIWhjuOVJRmt4_qsYqv4MfOdGp3-dXSOQ-amhtGsEgvTU-io0tqEff8D4J_UbmBv0QbYaTOsGWJi2VZHSu79bAiu5-_0sCQ9P2iOHVbZPCd6Kv75kAU-_1nV6XM8fQ"
    ],
    category: "khanti-deshi",
  },
  "jamdani-saree": {
    id: "jamdani-saree",
    name: "হাতে বোনা জামদানি শাড়ি",
    brand: "রূপগঞ্জ তাঁতিদের কাজ",
    description: "আভিজাত্য ও ঐতিহ্যের নিখুঁত হাতে বোনা শিল্পকর্ম। নিখুঁত সুতোর কাজ ও আকর্ষণীয় রং। বিশেষ উৎসবের জন্য।",
    price: 4500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeHkghiulnhlicQeP7BpwQQECo7R28zHQ7PPPeRQ9ZykhEWbQ0pBWag6yyfCbvIr4UsIFHkPxxM_C_rm_taKbqeh1cMOhYVrITr8UmjP-Jjj7ayip9uxYJ3xs76sIexPV7OFuAt49_ev2FA4xv1Cc63cJORoRUP0590HIXrfpjPNtAvCPOSuj2L5iSWyO1bvophYtsJ96JSlO9JB48KWoC20HtEQdJFvRqQR27cJLShgY4ZpE8Z0NChQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDszwcOx9rkpPchJi9VTVjEXTcg2B5xhNx1BdqQVo9Tr91N0448eq9du9ZUp_NFkuMt7kf2T0whG6ct5GQmlEfRLxIsuk69huaeXPYI9FGX7XFoUWFfp4A7gB63N1lUxhA4du3MdqmDHYeIDQlMNcQSOKHILSeIu5_z_sA0IiLm_uXk3zNBcIPhuI4IOxolClw4nkNDdzOwZ7NvuFrgtpogHvDEwJ082A8iVuHocJH0UX1E-agrbG1a7w"
    ],
    category: "heritage",
  },
  "earthenware-toys": {
    id: "earthenware-toys",
    name: "ঐতিহ্যবাহী মাটির পাত্র ও খেলনা সেট",
    brand: "কুটির শিল্প",
    description: "নকশী আঁকা মাটির তৈজসপত্র ও দেশীয় হস্তশিল্প। আপনার ঘর সাজাতে দারুণ একটি আকর্ষণ।",
    price: 650,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChFyl64QhIZxDVk_cquX33__yLJv9TJDwCxcYupXwe_SXCLTeM-90aa9K--_-JabKrijrL86cpWzOcQSjyBzk0lla38k7fFMbuGFuAlhwpMMdoqIEC9_OUOCpXkAMet17OgD7vvNyGv-fTWy1n_-oFWRXM1rRU-QRUliMasJgBGEO7dsi1R7qxPXRZDaUfdfMAMOPEEWTjrdS8Vy7CdbNSF8tAkupalMeRL6Py5VTssSZ1ZtyesIoDSQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGPEaDMFD0Lul-J6uYWPvCRxwf-CDPeB7V0Izo30oHY3uMyFh-m6UfIc-pFBphnm2L4Dtwd_qOTWHDpNUiGBBjC1U-xCJDCORwaTCrPYSI7h8fsMdy5JANTvHrvIWhjuOVJRmt4_qsYqv4MfOdGp3-dXSOQ-amhtGsEgvTU-io0tqEff8D4J_UbmBv0QbYaTOsGWJi2VZHSu79bAiu5-_0sCQ9P2iOHVbZPCd6Kv75kAU-_1nV6XM8fQ"
    ],
    category: "khanti-deshi",
  }
};

export default function ProductDetails() {
  const params = useParams();
  const id = params.id as string;
  const product = productDB[id] || productDB["ghee-500"]; // Fallback for demo
  
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ display: 'none', backgroundPosition: '0% 0%' });
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${mainImage})`,
      backgroundSize: '200%' // Zoom level
    });
  };

  return (
    <main className="w-full pt-32 lg:pt-44 bg-surface min-h-screen pb-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Images Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div 
              className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-crosshair group"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' })}
            >
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
              
              {/* Zoom Lens Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  ...zoomStyle,
                  backgroundColor: 'white',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
              {product.images.map((img: string, idx: number) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Details Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-500 font-medium">{product.brand}</p>
            </div>
            
            <div className="text-3xl font-bold text-primary">
              ৳{product.price}
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description}
            </p>
            
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >-</button>
                <span className="px-4 font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >+</button>
              </div>
              
              <button 
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: mainImage,
                      category: product.category
                    });
                  }
                }}
                className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined">add_shopping_cart</span>
                কার্টে যোগ করুন
              </button>
            </div>
            
            <div className="mt-8 border-t border-gray-100 pt-6 space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">verified</span>
                <span>১০০% আসল পণ্যের গ্যারান্টি</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">local_shipping</span>
                <span>সারাদেশে ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">assignment_return</span>
                <span>৭ দিনের সহজ রিটার্ন পলিসি</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
