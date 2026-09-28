import React from "react";
import { RotateCcw } from "lucide-react";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-6">
          <RotateCcw className="text-primary" /> রিটার্ন ও রিফান্ড নীতি
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">রিটার্ন পলিসি</h2>
            <p>পণ্য ডেলিভারির ৭ দিনের মধ্যে রিটার্ন গ্রহণযোগ্য। পণ্যে কোনো ত্রুটি, ভুল পণ্য অথবা মেয়াদোত্তীর্ণ হলে সম্পূর্ণ রিফান্ড পাবেন।</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">রিফান্ড প্রক্রিয়া</h2>
            <p>রিটার্ন অনুমোদনের ৩-৫ কার্যদিবসের মধ্যে আপনার পেমেন্ট পদ্ধতিতে রিফান্ড করা হবে।</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">যোগাযোগ</h2>
            <p>রিটার্নের জন্য WhatsApp: +968 9457 8538 অথবা Email: support@probashmart.com এ যোগাযোগ করুন।</p>
          </section>
        </div>
      </div>
    </main>
  );
}
