import React from "react";

export default function TrendingProducts() {
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
          <div className="flex items-center gap-space-xs">
            <button className="w-10 h-10 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Trending 1: Ghee */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative aspect-square overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                হট সেলিং
              </span>
              <span className="absolute top-3 right-3 z-10 bg-secondary-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                খাঁটি দেশি
              </span>
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Ghee"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1Kd-DIOSd8NlC014M4pQWMnI8YN5AIWfURsJaYH0pdBZJhKWsZ0QARF2AWfH5h9rJWszdiHwDSCEvUhUFX_pMnK-5HwvR_pZa8_0RHwgZkaL2gJPiVi7rQthOMAfmcBmWRHPgBQDsfnzmFTgg647yER1FQR_ZsqVPz7gCV1fp44M6m9Afz8r9tGxXICv3NRNSiYBEOg2X0UhxLONLZguVO-UOhRj-Ylfcs8GcvsT-hxOIubLB9bYLQ"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  সিরাজগঞ্জের গাওয়া
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                  খাঁটি গাওয়া ঘি (৫০০ গ্রাম)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু ও দানাদার খাঁটি ঘি।
                </p>
              </div>
              <div className="mt-space-md">
                <div className="font-headline-lg text-headline-lg text-primary font-bold mb-space-sm">
                  ৳৭৮০
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <button className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                    <span>বিশদ দেখুন</span>
                  </button>
                  <button className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    <span>কার্ট</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Trending 2: Mustard Oil */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative aspect-square overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                হট সেলিং
              </span>
              <span className="absolute top-3 right-3 z-10 bg-secondary-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                খাঁটি দেশি
              </span>
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Mustard Oil"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCduxt6IVUHKPWj26_7q0pwhEnjmuPTYrCfj5ke8f9CxxVo84n0BdF2m1VMd5mpC_ud22qG7NmaYh1-56_Q4Rq4mLaujNEGlOYRE1uuE90UX0If1EMiDQk8K6r8SIXLjaKm9teInoTvvyxkeQWs763nNjjIkoFBJgMoXqLqSOF-VwSJh0EMVGCD7_XPryV2ghYEAyY3W7okFtZA9rPfuNYXxgRMOX353mZvo8HN2I0lwj_afxO4yW998A"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  ঘানি ভাঙা তেল
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                  পাহাড়ি হলুদ ও সরিষার তেল (১ লিটার)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  কাঠের ঘানিতে ভাঙা খাঁটি ঝাঁঝালো দেশি সরিষার তেল।
                </p>
              </div>
              <div className="mt-space-md">
                <div className="font-headline-lg text-headline-lg text-primary font-bold mb-space-sm">
                  ৳৩৪০
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <button className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                    <span>বিশদ দেখুন</span>
                  </button>
                  <button className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    <span>কার্ট</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Trending 3: Jamdani Saree */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative aspect-square overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                হেরিটেজ
              </span>
              <span className="absolute top-3 right-3 z-10 bg-secondary-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                খাঁটি দেশি
              </span>
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Jamdani Saree"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeHkghiulnhlicQeP7BpwQQECo7R28zHQ7PPPeRQ9ZykhEWbQ0pBWag6yyfCbvIr4UsIFHkPxxM_C_rm_taKbqeh1cMOhYVrITr8UmjP-Jjj7ayip9uxYJ3xs76sIexPV7OFuAt49_ev2FA4xv1Cc63cJORoRUP0590HIXrfpjPNtAvCPOSuj2L5iSWyO1bvophYtsJ96JSlO9JB48KWoC20HtEQdJFvRqQR27cJLShgY4ZpE8Z0NChQ"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  রূপগঞ্জ তাঁতিদের কাজ
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                  হাতে বোনা জামদানি শাড়ি
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  আভিজাত্য ও ঐতিহ্যের নিখুঁত হাতে বোনা শিল্পকর্ম।
                </p>
              </div>
              <div className="mt-space-md">
                <div className="font-headline-lg text-headline-lg text-primary font-bold mb-space-sm">
                  ৳৪,৫০০
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <button className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                    <span>বিশদ দেখুন</span>
                  </button>
                  <button className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    <span>কার্ট</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Trending 4: Earthenware */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="relative aspect-square overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                হট সেলিং
              </span>
              <span className="absolute top-3 right-3 z-10 bg-secondary-container text-on-surface font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                খাঁটি দেশি
              </span>
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Earthenware Toys"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChFyl64QhIZxDVk_cquX33__yLJv9TJDwCxcYupXwe_SXCLTeM-90aa9K--_-JabKrijrL86cpWzOcQSjyBzk0lla38k7fFMbuGFuAlhwpMMdoqIEC9_OUOCpXkAMet17OgD7vvNyGv-fTWy1n_-oFWRXM1rRU-QRUliMasJgBGEO7dsi1R7qxPXRZDaUfdfMAMOPEEWTjrdS8Vy7CdbNSF8tAkupalMeRL6Py5VTssSZ1ZtyesIoDSQ"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  কুটির শিল্প
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                  ঐতিহ্যবাহী মাটির পাত্র ও খেলনা সেট
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  নকশী আঁকা মাটির তৈজসপত্র ও দেশীয় হস্তশিল্প।
                </p>
              </div>
              <div className="mt-space-md">
                <div className="font-headline-lg text-headline-lg text-primary font-bold mb-space-sm">
                  ৳৬৫০
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <button className="bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                    <span>বিশদ দেখুন</span>
                  </button>
                  <button className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    <span>কার্ট</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
