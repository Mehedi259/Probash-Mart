'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, ShoppingBag, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    const shipping = cartTotal > 0 ? 50 : 0;
    const total = cartTotal + shipping;

    setSubmittedData({ ...data, total, items: cart });
    setIsSubmitted(true);

    // Also trigger WhatsApp message for direct order confirmation
    let text = `*প্রবাসমার্ট নতুন অর্ডার!* 🛍️\n\n`;
    text += `*গ্রাহকের তথ্য:*\n`;
    text += `নাম: ${data.fullName}\n`;
    text += `মোবাইল: ${data.phone}\n`;
    text += `ঠিকানা: ${data.address}, ${data.city}\n\n`;
    
    text += `*অর্ডারকৃত পণ্যসমূহ:*\n`;
    cart.forEach(item => {
      text += `- ${item.quantity}x ${item.name} (৳${(item.price * item.quantity).toFixed(2)})\n`;
    });
    
    text += `\n*সাবটোটাল:* ৳${cartTotal.toFixed(2)}\n`;
    text += `*ডেলিভারি চার্জ:* ৳${shipping.toFixed(2)}\n`;
    text += `*সর্বমোট:* ৳${total.toFixed(2)}\n`;
    text += `*পেমেন্ট মাধ্যম:* ${data.payment}\n`;
    
    const encodedText = encodeURIComponent(text);
    
    // Clear cart after placing order
    if (clearCart) clearCart();

    // If user selected WhatsApp, redirect to WhatsApp after a small delay
    if (data.payment === "WhatsApp") {
      window.open(`https://wa.me/96894578538?text=${encodedText}`, '_blank');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
        <main className="flex-grow flex items-center justify-center p-4 pt-[112px] md:pt-[130px] pb-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md w-full">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={48} className="text-emerald-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">অর্ডার সফলভাবে গৃহীত হয়েছে!</h1>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              ধন্যবাদ! আপনার অর্ডারটি প্রক্রিয়াধীন রয়েছে। খুব শীঘ্রই আমাদের কাস্টমার সাপোর্ট থেকে আপনার সাথে যোগাযোগ করা হবে।
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-left mb-6 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-gray-400">গ্রাহক:</span>
                <span className="font-semibold text-gray-800">{submittedData?.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">মোবাইল:</span>
                <span className="font-semibold text-gray-800">{submittedData?.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">সর্বমোট:</span>
                <span className="font-bold text-primary">৳{submittedData?.total?.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/96894578538`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-xs"
              >
                <MessageCircle size={18} /> হোয়াটসঅ্যাপে যোগাযোগ করুন
              </a>
              <Link
                href="/"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition inline-block text-sm shadow-xs"
              >
                আরো কেনাকাটা করুন
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const shipping = cartTotal > 0 ? 50 : 0;
  const total = cartTotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      <main className="flex-grow container mx-auto px-4 py-8 pt-[112px] md:pt-[130px] pb-24 md:pb-16 max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
          <ShoppingBag className="text-primary" /> চেকআউট ও ডেলিভারি
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Form Section */}
          <div className="lg:w-2/3 bg-white p-5 sm:p-7 rounded-2xl shadow-xs border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800 mb-5 border-b border-gray-100 pb-3">
              ডেলিভারি তথ্য
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">আপনার নাম *</label>
                  <input required name="fullName" type="text" placeholder="পুরো নাম লিখুন" className="w-full border border-gray-200 rounded-xl py-2.5 px-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">মোবাইল নম্বর *</label>
                  <input required name="phone" type="tel" placeholder="01XXXXXXXXX বা ওমান নম্বর" className="w-full border border-gray-200 rounded-xl py-2.5 px-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">ইমেইল (ঐচ্ছিক)</label>
                <input name="email" type="email" placeholder="example@email.com" className="w-full border border-gray-200 rounded-xl py-2.5 px-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition" />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">পূর্ণ ঠিকানা *</label>
                <input required name="address" type="text" placeholder="বাড়ি নং, রোড নং, এলাকা / উইলিয়াত" className="w-full border border-gray-200 rounded-xl py-2.5 px-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">শহর / জেলা *</label>
                  <input required name="city" type="text" placeholder="যেমন: ঢাকা বা মাস্কাট" className="w-full border border-gray-200 rounded-xl py-2.5 px-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">পোস্ট কোড</label>
                  <input name="postalCode" type="text" placeholder="পোস্ট কোড (যদি থাকে)" className="w-full border border-gray-200 rounded-xl py-2.5 px-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition" />
                </div>
              </div>
              
              <h2 className="text-lg font-bold text-gray-800 mb-3 mt-7 border-b border-gray-100 pb-3">
                পেমেন্ট মাধ্যম বেছে নিন
              </h2>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3.5 border rounded-xl cursor-pointer hover:bg-orange-50/50 transition border-primary bg-orange-50/30">
                  <input type="radio" name="payment" value="Cash on Delivery" defaultChecked className="text-primary focus:ring-primary h-4 w-4" />
                  <div>
                    <span className="font-semibold text-sm text-gray-800 block">ক্যাশ অন ডেলিভারি (COD)</span>
                    <span className="text-xs text-gray-400">পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                  <input type="radio" name="payment" value="bKash / Nagad" className="text-primary focus:ring-primary h-4 w-4" />
                  <div>
                    <span className="font-semibold text-sm text-gray-800 block">বিকাশ / নগদ / রকেট</span>
                    <span className="text-xs text-gray-400">বাংলাদেশি মোবাইল ব্যাংকিংয়ের মাধ্যমে</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3.5 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                  <input type="radio" name="payment" value="WhatsApp" className="text-primary focus:ring-primary h-4 w-4" />
                  <div>
                    <span className="font-semibold text-sm text-gray-800 block">হোয়াটসঅ্যাপের মাধ্যমে অর্ডার ও পেমেন্ট</span>
                    <span className="text-xs text-gray-400">সরাসরি প্রতিনিধির সাথে কথা বলে অর্ডার সম্পন্ন করুন</span>
                  </div>
                </label>
              </div>

              <button 
                type="submit"
                disabled={cart.length === 0}
                className="w-full mt-6 bg-primary hover:bg-primary/90 disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl transition text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>অর্ডার নিশ্চিত করুন (৳{total.toFixed(2)})</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-gray-100 sticky top-28">
              <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-100 pb-3">
                অর্ডারের সারসংক্ষেপ
              </h2>
              
              <div className="space-y-3 mb-5 max-h-60 overflow-y-auto pr-1.5 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs sm:text-sm">
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <span className="text-gray-400 font-bold shrink-0">{item.quantity}x</span>
                      <span className="text-gray-700 truncate">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-900 shrink-0">৳{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-3.5 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>সাবটোটাল ({cartCount}টি)</span>
                  <span className="font-semibold text-gray-800">৳{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>ডেলিভারি চার্জ</span>
                  <span className="font-semibold text-gray-800">৳{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-black text-base pt-2 border-t border-gray-100 text-gray-900">
                  <span>সর্বমোট</span>
                  <span className="text-primary">৳{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-medium">
                <ShieldCheck size={18} className="shrink-0 text-emerald-600" />
                <span>নিরাপদ ও ১০০% শতভাগ খাঁটি পণ্যের গ্যারান্টি</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
