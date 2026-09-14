import Link from "next/link";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="w-full px-margin py-space-lg">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-surface-container shadow-md min-h-[440px] flex flex-col justify-end p-space-xl">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDszwcOx9rkpPchJi9VTVjEXTcg2B5xhNx1BdqQVo9Tr91N0448eq9du9ZUp_NFkuMt7kf2T0whG6ct5GQmlEfRLxIsuk69huaeXPYI9FGX7XFoUWFfp4A7gB63N1lUxhA4du3MdqmDHYeIDQlMNcQSOKHILSeIu5_z_sA0IiLm_uXk3zNBcIPhuI4IOxolClw4nkNDdzOwZ7NvuFrgtpogHvDEwJ082A8iVuHocJH0UX1E-agrbG1a7w')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/75 to-transparent"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/30 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col max-w-[620px] text-inverse-on-surface">
            <div className="inline-flex items-center gap-space-xs bg-secondary px-space-md py-1 rounded-full text-on-secondary font-label-sm text-label-sm w-fit shadow-sm mb-space-sm">
              <span className="material-symbols-outlined text-[15px]">eco</span>
              <span>১০০% রাসায়নিকমুক্ত খাঁটি দেশি পণ্য</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-inverse-on-surface leading-tight tracking-tight mb-space-sm">
              আপনার পছন্দের পণ্য,
              <br />
              এখন হাতের নাগালে
            </h1>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/90 mb-space-lg">
              দেশি ও মানসম্মত পণ্য কিনুন সহজেই। প্রবাস ও দেশের প্রতিটি পরিবারের জন্য
              শতভাগ আসল ও সেরা মানের নিশ্চয়তা।
            </p>
            <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs mb-space-lg text-inverse-on-surface/95 font-label-md text-label-md">
              <span className="inline-flex items-center gap-1 bg-surface-container-lowest/15 backdrop-blur-md px-space-sm py-1 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                  check_circle
                </span>
                পদ্মার তাজা ইলিশ
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-container-lowest/15 backdrop-blur-md px-space-sm py-1 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                  check_circle
                </span>
                সুন্দরবনের খাঁটি মধু
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-container-lowest/15 backdrop-blur-md px-space-sm py-1 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                  check_circle
                </span>
                চাঁপাইনবাবগঞ্জের আম
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-container-lowest/15 backdrop-blur-md px-space-sm py-1 rounded-lg">
                <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                  check_circle
                </span>
                দ্রুততম হোম ডেলিভারি
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md">
              <Link
                className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-xl py-3 rounded-xl flex items-center gap-space-xs shadow-md transition-all"
                href="/products"
              >
                <span className="material-symbols-outlined text-[20px]">
                  shopping_cart
                </span>
                <span>কেনাকাটা শুরু করুন</span>
              </Link>
              <Link
                className="bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-secondary font-label-lg text-label-lg px-space-lg py-3 rounded-xl flex items-center gap-space-xs shadow-md transition-all"
                href="/offers"
              >
                <span className="material-symbols-outlined text-[20px]">
                  local_fire_department
                </span>
                <span>আজকের অফার দেখুন</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-space-md">
          <div className="relative flex-1 rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex items-center p-space-md group">
            <div className="flex-1 pr-space-md z-10">
              <span className="text-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                তাজা সংগ্রহ
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                পদ্মার তাজা ইলিশ
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                বিশেষ ডিসকাউন্টে সরাসরি নদী থেকে
              </p>
              <Link
                className="mt-space-sm inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold group-hover:gap-space-sm transition-all"
                href="/category/hilsa"
              >
                <span>অর্ডার দিন</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Fresh Hilsa fish"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGPEaDMFD0Lul-J6uYWPvCRxwf-CDPeB7V0Izo30oHY3uMyFh-m6UfIc-pFBphnm2L4Dtwd_qOTWHDpNUiGBBjC1U-xCJDCORwaTCrPYSI7h8fsMdy5JANTvHrvIWhjuOVJRmt4_qsYqv4MfOdGp3-dXSOQ-amhtGsEgvTU-io0tqEff8D4J_UbmBv0QbYaTOsGWJi2VZHSu79bAiu5-_0sCQ9P2iOHVbZPCd6Kv75kAU-_1nV6XM8fQ"
              />
            </div>
          </div>
          <div className="relative flex-1 rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex items-center p-space-md group">
            <div className="flex-1 pr-space-md z-10">
              <span className="text-primary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                ১০০% প্রাকৃতিক
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                সুন্দরবনের কাঁচা মধু
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                মৌয়ালদের হাত থেকে সরাসরি সংগৃহীত
              </p>
              <Link
                className="mt-space-sm inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold group-hover:gap-space-sm transition-all"
                href="/category/honey"
              >
                <span>সংগ্রহ করুন</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Sundarbans Honey"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIu_0NZeZNMMsupRf7mhzjbWsUuFmycP9dwi5eugNaUtKfvMLct-b1mLiRp3wdCumgIXFdUsvjHsInT2_-kCIvuIElXLvZa8TVgYmTdEyGaxdvleD41EarW-TQlm88-UBnXIvPbqZpdJ8HsHjxPzTW3h8H6m9J90DkTqnOiU0qnHmBVTaWyKhNsITHXq3KN9AyCf-MpKsRL8WG998Q2SnLvpu38tLbbagxndvt-fQwUes-JcuGp2z0EA"
              />
            </div>
          </div>
          <div className="relative flex-1 rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex items-center p-space-md group">
            <div className="flex-1 pr-space-md z-10">
              <span className="text-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                প্রিমিয়াম বাছাই
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                প্রিমিয়াম খেজুর কালেকশন
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                রমজান ও স্বাস্থ্যকর পুষ্টিকর ডায়েট
              </p>
              <Link
                className="mt-space-sm inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold group-hover:gap-space-sm transition-all"
                href="/category/dates"
              >
                <span>তালিকা দেখুন</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 shadow-inner">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Premium Dates"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD6rG-KC70BFHdhGsZayxB8bJu7HhhxBMS9Uom-xcCBbznpxdvUEc237sGiw4LGoP01DM1SGlbZZdn1b7VJ5G0r7_pbB73kVkSdYnCNrzb_y94297GOMxfjQp6dVwliZK3qBzq6BlfDANs4Oy1LrbdZuQnSoV73DHNbULQA5uOEdgw_FWLZohAzfl-P3dp5FgB9ZE4e0WEb0dEIU6tsyEbZhRMHhUemlJgX_dnaobP5RP9NF3bnPcO3w"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
