import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-24 md:pb-8">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-sm hover:opacity-95 transition">
              <img alt="হ্যালো প্রবাস মার্ট" className="h-9 w-auto object-contain" src="/images/logo.png" />
            </Link>
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
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                <span>মাস্কাট, ওমান ও ঢাকা, বাংলাদেশ</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link className="hover:text-primary transition" href="/shop">সব পণ্য</Link></li>
              <li><Link className="hover:text-primary transition" href="/deals">আজকের অফার</Link></li>
              <li><Link className="hover:text-primary transition" href="/category">ক্যাটাগরি সমূহ</Link></li>
              <li><Link className="hover:text-primary transition" href="/track">অর্ডার ট্র্যাকিং</Link></li>
              <li><Link className="hover:text-primary transition" href="/profile">আমার অ্যাকাউন্ট</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">গ্রাহক সেবা</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link className="hover:text-primary transition" href="/faq">সাধারণ জিজ্ঞাসা (FAQ)</Link></li>
              <li><Link className="hover:text-primary transition" href="/shipping">শিপিং ও ডেলিভারি নীতি</Link></li>
              <li><Link className="hover:text-primary transition" href="/returns">রিটার্ন ও রিফান্ড নীতি</Link></li>
              <li><Link className="hover:text-primary transition" href="/privacy">গোপনীয়তা নীতি</Link></li>
              <li><Link className="hover:text-primary transition" href="/terms">ব্যবহারের শর্তাবলী</Link></li>
              <li><Link className="hover:text-primary transition" href="/contact">যোগাযোগ করুন</Link></li>
            </ul>
          </div>

          {/* Trust / Payment */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">কেনাকাটায় নিরাপত্তা</h4>
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
