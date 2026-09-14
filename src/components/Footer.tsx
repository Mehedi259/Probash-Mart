import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-space-xl pb-space-lg text-on-surface shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1320px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <img
                alt="ProbashMart Logo"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGlSFimrbEhMkUKxgE1bGjbFOBGxZs3-Jwn81z1XR-yxuTjrJqFgCqfO-Kn6lv8z9lDYwQkmSlgXKtapXDsSDbYNF2YD_1nZzSHlbswv2vd3oN7XXl8uUh3UiCYRqKEb2JfV4cib4-btEmDtloTkFPK4jjUgoTThr2q3psnEd8IGtai_FnIMUH4aCDwq_kgzUXdAwy4U-yKJunDV374tTQmtrd0frD5cPfn-Tq2aRu_Fr2nWURGOWveA"
              />
              <span className="font-headline-sm text-headline-sm text-primary">
                প্রবাসমার্ট
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              প্রবাসী ও দেশীয় গ্রাহকদের জন্য শতভাগ নিরাপদ ও খাঁটি দেশি পণ্যের
              বিশ্বস্ত প্রতিষ্ঠান।
            </p>
            <div className="flex flex-col gap-space-xs mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  call
                </span>
                <span>০৯৬১২-৩৪৫৬৭৮ (সকাল ৯টা - রাত ১০টা)</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  mail
                </span>
                <span>support@probashmart.com</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  location_on
                </span>
                <span>হাউস-১২, রোড-০৫, ধানমন্ডি, ঢাকা-১২০৫</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              কাস্টমার সার্ভিস
            </h4>
            <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" href="/track">
                অর্ডার ট্র্যাকিং
              </Link>
              <Link className="hover:text-primary transition-colors" href="/returns">
                রিটার্ন ও রিফান্ড নীতি
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href="/shipping"
              >
                শিপিং ও ডেলিভারি তথ্য
              </Link>
              <Link className="hover:text-primary transition-colors" href="/faq">
                সাধারণ জিজ্ঞাসা (FAQ)
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href="/support"
              >
                হেল্প ও সাপোর্ট সেন্টার
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              জনপ্রিয় ক্যাটাগরি
            </h4>
            <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <Link
                className="hover:text-primary transition-colors"
                href="/category/hilsa"
              >
                চাঁদপুরের পদ্মার ইলিশ
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href="/category/honey"
              >
                সুন্দরবনের খাঁটি মধু ও ঘি
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href="/category/mangoes"
              >
                রাজশাহীর হিমসাগর ও ল্যাংড়া আম
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href="/category/dates"
              >
                মদিনার প্রিমিয়াম আজওয়া খেজুর
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href="/category/heritage"
              >
                জামদানি শাড়ি ও কুটির শিল্প
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
              পেমেন্টের মাধ্যমসমূহ
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-xs">
              নিরাপদ ও সহজ পেমেন্ট গেটওয়ে দিয়ে কেনাকাটা করুন:
            </p>
            <div className="flex flex-wrap gap-space-xs">
              <span className="bg-surface-container px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface font-semibold">
                বিকাশ
              </span>
              <span className="bg-surface-container px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface font-semibold">
                নগদ
              </span>
              <span className="bg-surface-container px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface font-semibold">
                রকেট
              </span>
              <span className="bg-surface-container px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface font-semibold">
                ভিসা কার্ড
              </span>
              <span className="bg-surface-container px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface font-semibold">
                মাস্টারকার্ড
              </span>
              <span className="bg-surface-container px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface font-semibold">
                ক্যাশ অন ডেলিভারি
              </span>
            </div>
            <div className="mt-space-md p-space-sm bg-surface-container-high rounded-lg flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">
                verified_user
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  ১০০% খাঁটি পণ্য নিশ্চিত
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  প্রবাসীদের নির্ভরযোগ্য শপ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <span>© ২০২৫ প্রবাসমার্ট লিমিটেড। সর্বস্বত্ব সংরক্ষিত। দেশি পণ্যে আস্থা।</span>
          <div className="flex items-center gap-space-md">
            <Link className="hover:text-primary transition-colors" href="/terms">
              শর্তাবলী
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/privacy"
            >
              গোপনীয়তা নীতি
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
