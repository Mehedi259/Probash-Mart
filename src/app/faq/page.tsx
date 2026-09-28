import React from "react";
import { HelpCircle } from "lucide-react";

const faqs = [
  { q: "প্রবাসমার্ট কি?", a: "প্রবাসমার্ট হলো প্রবাসী বাংলাদেশীদের জন্য খাঁটি দেশি পণ্যের একটি বিশ্বস্ত অনলাইন শপ।" },
  { q: "অর্ডার করতে কতক্ষণ লাগে?", a: "আপনি ওয়েবসাইট থেকে পণ্য বেছে কার্টে যোগ করে ২-৩ মিনিটেই অর্ডার সম্পন্ন করতে পারবেন।" },
  { q: "ডেলিভারি কত দিনে পাবো?", a: "সাধারণত অর্ডারের ৩-৭ কার্যদিবসের মধ্যে ডেলিভারি সম্পন্ন হয়।" },
  { q: "পেমেন্ট কিভাবে করবো?", a: "বিকাশ, নগদ, রকেট, ক্রেডিট/ডেবিট কার্ড অথবা ক্যাশ অন ডেলিভারিতে পেমেন্ট করতে পারবেন।" },
  { q: "পণ্য রিটার্ন করতে পারবো?", a: "হ্যাঁ, ডেলিভারির ৭ দিনের মধ্যে পণ্যে কোনো সমস্যা থাকলে রিটার্ন করতে পারবেন।" },
  { q: "যোগাযোগ কিভাবে করবো?", a: "WhatsApp: +968 9457 8538 অথবা Email: support@probashmart.com" },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-8">
          <HelpCircle className="text-primary" /> সাধারণ জিজ্ঞাসা (FAQ)
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group" open={i === 0}>
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-800 text-sm hover:text-primary transition list-none">
                {faq.q}
                <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
