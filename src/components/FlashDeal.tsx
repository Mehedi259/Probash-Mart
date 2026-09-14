import React from "react";
import CountdownTimer from "./CountdownTimer";

export default function FlashDeal() {
  return (
    <section className="w-full px-margin py-space-lg">
      <div className="max-w-[1320px] mx-auto bg-surface-container-low rounded-xl p-space-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg mb-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-surface flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[30px]">
                timer
              </span>
            </div>
            <div>
              <div className="flex items-center gap-space-xs">
                <span className="bg-error text-on-error font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold animate-pulse">
                  সীমিত সময়ের সুযোগ
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  প্রতিদিনের ফ্ল্যাশ সেল
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-0.5">
                আজকের বিশেষ ধামাকা অফার
              </h2>
            </div>
          </div>
          <CountdownTimer />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Deal Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                ১৬% ছাড়
              </span>
              <span className="absolute top-3 right-3 z-10 bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                চাঁদপুর নদী
              </span>
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Hilsa Fish"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqM4TWjs7sY2-dkmzh0UYq65breU9vNnyRJaAvWs92lViqsc0oeRQ9mB9ZNHcW3jiQ3jYX8qS6xIuXLtqq4uUMK7pppHEe0ex8QDa9ZuemwrkABiTu4yONXTSOt7i5L6OyBvDA9EaPhzTsifr9Wv64OY5dwDTttnqU7SnCKXJ7PGYeghU_gpEZkCGzUakZ1mCvWcBdX-cDS4jChfgL510493BzMrbMTTcr_5UlazDHLJ_nc8yOL1xEzw"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">
                    ৫.০
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    (১২০+ রিভিউ)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold line-clamp-2">
                  প্রিমিয়াম পদ্মার ইলিশ মাছ (১.২ কেজি)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  পদ্মা নদী থেকে সরাসরি সংগৃহীত তাজা স্বাদের গ্যারান্টি।
                </p>
              </div>
              <div className="mt-space-md pt-space-sm">
                <div className="flex items-baseline gap-space-xs mb-space-sm">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">
                    ৳১,৮৫০
                  </span>
                  <span className="font-body-sm text-body-sm text-outline line-through">
                    ৳২,২০০
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <button className="w-full bg-surface-container-high hover:bg-surface-container text-primary font-label-md text-label-md py-2 rounded-lg font-bold flex items-center justify-center gap-1 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      add_shopping_cart
                    </span>
                    <span>কার্ট</span>
                  </button>
                  <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-bold transition-colors">
                    এখনই কিনুন
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Deal Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                ১৭% ছাড়
              </span>
              <span className="absolute top-3 right-3 z-10 bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                সুন্দরবন
              </span>
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Sundarbans Honey"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_wJozoiilTCtwc41DJmjPTDEpbo6xE83aL3dfwOfSiJI10k-93CcYpsp8opB4p5CjKe5hOQi6zLdrDT7YhYrJ3Sd9nUDv3b4bKF02IWsrXy0_HTWygVSOFl8fbwz_I28CK_1P3d4APCuo8Bu39bowS1FYmSOGQvO02y_bu1Kgbnh4R0p-EZwR4Ecz3UB4RE8MAca0YecDZ2TASp0IgcrskJFERKl8J5q9IZBGlC-wADk3u1ZiClZFjA"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">
                    ৪.৯
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    (৯৫ রিভিউ)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold line-clamp-2">
                  সুন্দরবনের প্রাকৃতিক চাকের মধু (১ কেজি)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  শতভাগ নির্ভেজাল প্রাকৃতিক নির্যাস, কোনো প্রিজারভেটিভ নেই।
                </p>
              </div>
              <div className="mt-space-md pt-space-sm">
                <div className="flex items-baseline gap-space-xs mb-space-sm">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">
                    ৳৯৫০
                  </span>
                  <span className="font-body-sm text-body-sm text-outline line-through">
                    ৳১,১৫০
                  </span>
                </div>
                <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-bold flex items-center justify-center gap-space-xs transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    shopping_bag
                  </span>
                  <span>কার্টে যোগ করুন</span>
                </button>
              </div>
            </div>
          </div>
          {/* Deal Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                ১৭% ছাড়
              </span>
              <span className="absolute top-3 right-3 z-10 bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                রাজশাহী বাগান
              </span>
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Rajshahi Mangoes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdd45fxYaSxF4gHq7-dam2hOsW1VH-UDSUpHzQDYN65HUqiK9RcfK6Um3k7V_BOE3GCY5Tm2GPXmN1RKPfF__-_0jBq_e2K3ddDq6hAaYBiUBXY99N6y_m83uEqwYvsvIA2AeY3RQ6_nsgbw36FN0r2ll-nclKAV3Vrw9E3wqy_B5tTENFv6g2uUeaOsTgX8gHFdUCFr0SrjyGIIseO-gQ1AM_4XVo6i_XPCLhFgMtMoC_xSCwZ98W1Q"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">
                    ৪.৮
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    (৭৮ রিভিউ)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold line-clamp-2">
                  রাজশাহীর প্রিমিয়াম ফজলি ও ল্যাংড়া আম প্যাক (৫ কেজি)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  কেমিক্যালমুক্ত ও ডালে পাকা প্রাকৃতিক মিষ্টি সুবাস।
                </p>
              </div>
              <div className="mt-space-md pt-space-sm">
                <div className="flex items-baseline gap-space-xs mb-space-sm">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">
                    ৳১,২০০
                  </span>
                  <span className="font-body-sm text-body-sm text-outline line-through">
                    ৳১,৪৫০
                  </span>
                </div>
                <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-bold flex items-center justify-center gap-space-xs transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    shopping_bag
                  </span>
                  <span>কার্টে যোগ করুন</span>
                </button>
              </div>
            </div>
          </div>
          {/* Deal Card 4 */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
              <span className="absolute top-3 left-3 z-10 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                ১৫% ছাড়
              </span>
              <span className="absolute top-3 right-3 z-10 bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold shadow-sm">
                মদিনা শরিফ
              </span>
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt="Medina Dates"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDL8i3jLMNpEfTcfpGogJGEf7U4x82D4MVhDQdPCXyJQ6qomKDtyVuLnXUwZynXkqfCOY0gDXZjTuO1cRyx9VObcuN54QAUzlVtznkfTODB_4Et1bxSae1aPOi4UuJTEbE9nqcy7HNXgi50ncVc0FwMOHOpJkvIZB5aTuJ-ib-XBBNt-DZ50Sy-1tgPvyL7qidZD0WaeojgH74EK59Pj7xQ_IsDvQdoAcXIURfR0bCgJCyXwTcxgTPoA"
              />
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">
                    ৫.০
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    (১১০ রিভিউ)
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold line-clamp-2">
                  সৌদি মদিনার খাঁটি আজওয়া খেজুর (৫০০ গ্রাম)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  নরম, সুস্বাদু ও পুষ্টিগুণে ভরপুর প্রিমিয়াম গ্রেড খেজুর।
                </p>
              </div>
              <div className="mt-space-md pt-space-sm">
                <div className="flex items-baseline gap-space-xs mb-space-sm">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">
                    ৳৮৫০
                  </span>
                  <span className="font-body-sm text-body-sm text-outline line-through">
                    ৳১,০০০
                  </span>
                </div>
                <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg font-bold flex items-center justify-center gap-space-xs transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    shopping_bag
                  </span>
                  <span>কার্টে যোগ করুন</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
