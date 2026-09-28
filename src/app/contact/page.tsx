"use client";
import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">যোগাযোগ করুন</h1>
        <p className="text-gray-500 text-center mb-10">আমাদের সাথে যোগাযোগ করুন, আমরা সবসময় আপনার পাশে!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-6">মেসেজ পাঠান</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম</label>
                <input type="text" className="w-full border border-gray-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm" placeholder="নাম লিখুন" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                <input type="email" className="w-full border border-gray-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">মেসেজ</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm resize-none" placeholder="আপনার মেসেজ লিখুন..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition shadow-sm">
                পাঠান
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <a href="https://wa.me/96894578538" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-5 rounded-2xl border border-green-100 flex items-start gap-4 hover:shadow-md transition group">
              <div className="bg-green-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">WhatsApp</h3>
                <p className="text-green-600 font-medium mt-1">+968 9457 8538</p>
                <p className="text-xs text-gray-500 mt-0.5">সরাসরি মেসেজ করুন</p>
              </div>
            </a>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">ইমেইল</h3>
                <p className="text-gray-600 mt-1">support@probashmart.com</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">ফোন</h3>
                <p className="text-gray-600 mt-1">+968 9457 8538</p>
                <p className="text-xs text-gray-500 mt-0.5">সকাল ৯টা - রাত ১০টা</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
