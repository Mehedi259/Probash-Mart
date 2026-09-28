import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img alt="ProbashMart" className="h-10 w-auto rounded-lg" src="/images/logo.jpg" />
              <span className="text-white font-bold text-lg">প্রবাসমার্ট</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              প্রবাসী ও দেশীয় গ্রাহকদের জন্য শতভাগ নিরাপদ ও খাঁটি দেশি পণ্যের বিশ্বস্ত প্রতিষ্ঠান।
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                <span>+968 9457 8538</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">mail</span>
                <span>support@probashmart.com</span>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">কাস্টমার সার্ভিস</h4>
            <div className="space-y-2.5 text-sm">
              <Link className="block hover:text-primary transition" href="/track">অর্ডার ট্র্যাকিং</Link>
              <Link className="block hover:text-primary transition" href="/returns">রিটার্ন ও রিফান্ড নীতি</Link>
              <Link className="block hover:text-primary transition" href="/shipping">শিপিং ও ডেলিভারি তথ্য</Link>
              <Link className="block hover:text-primary transition" href="/faq">সাধারণ জিজ্ঞাসা (FAQ)</Link>
              <Link className="block hover:text-primary transition" href="/contact">যোগাযোগ</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">জনপ্রিয় ক্যাটাগরি</h4>
            <div className="space-y-2.5 text-sm">
              <Link className="block hover:text-primary transition" href="/category/Frozen Fish">ইলিশ ও মাছ</Link>
              <Link className="block hover:text-primary transition" href="/category/Fresh Vegetables">তাজা শাক-সবজি</Link>
              <Link className="block hover:text-primary transition" href={"/category/Spices %26 Masala"}>মশলা ও মসল্লা</Link>
              <Link className="block hover:text-primary transition" href={"/category/Sweets %26 Desserts"}>মিষ্টি ও ডেজার্ট</Link>
              <Link className="block hover:text-primary transition" href={"/category/Snacks %26 Biscuits"}>স্ন্যাকস ও চানাচুর</Link>
              <Link className="block hover:text-primary transition" href="/shop">সব পণ্য দেখুন →</Link>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">পেমেন্ট ও নিরাপত্তা</h4>
            <p className="text-sm text-gray-400 mb-3">নিরাপদ পেমেন্ট গেটওয়ে:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["বিকাশ", "নগদ", "রকেট", "ভিসা", "মাস্টারকার্ড", "COD"].map(m => (
                <span key={m} className="bg-gray-800 px-2.5 py-1 rounded text-[11px] font-medium text-gray-300 border border-gray-700">
                  {m}
                </span>
              ))}
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[28px]">verified_user</span>
              <div>
                <p className="text-white font-bold text-xs">১০০% খাঁটি পণ্য</p>
                <p className="text-gray-400 text-[10px]">নিশ্চিত গ্যারান্টি</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© ২০২৬ প্রবাসমার্ট। সর্বস্বত্ব সংরক্ষিত।</span>
          <div className="flex gap-4">
            <Link className="hover:text-primary transition" href="/terms">শর্তাবলী</Link>
            <Link className="hover:text-primary transition" href="/privacy">গোপনীয়তা</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
