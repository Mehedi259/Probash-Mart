import React from "react";
import { Truck } from "lucide-react";

export default function ShippingPage() {
  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-6">
          <Truck className="text-primary" /> শিপিং ও ডেলিভারি
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">ডেলিভারি সময়</h2>
            <p>সাধারণত অর্ডার কনফার্ম হওয়ার ৩-৭ কার্যদিবসের মধ্যে ডেলিভারি করা হয়।</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">শিপিং চার্জ</h2>
            <p>প্রতিটি অর্ডারে ৳৫০ শিপিং চার্জ প্রযোজ্য। বিশেষ প্রমোশনে ফ্রি শিপিং পেতে পারেন।</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">ট্র্যাকিং</h2>
            <p>অর্ডার শিপমেন্টের পর আপনাকে একটি ট্র্যাকিং আইডি দেওয়া হবে। এটি দিয়ে আমাদের অর্ডার ট্র্যাক পেজে অর্ডারের অবস্থান দেখতে পারবেন।</p>
          </section>
        </div>
      </div>
    </main>
  );
}
