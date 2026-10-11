'use client';

import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    setError('');
    setOrderData(null);

    try {
      let cleanId = orderId.trim();
      const encodedId = encodeURIComponent(cleanId);
      
      const res = await fetch(`/api/v1/orders/track/${encodedId}/`);
      
      if (!res.ok) {
        if (res.status === 404) {
          setError('অর্ডার নম্বরটি পাওয়া যায়নি। অনুগ্রহ করে সঠিক অর্ডার নম্বর দিয়ে আবার চেষ্টা করুন।');
        } else {
          setError('সার্ভার থেকে অর্ডারের তথ্য লোড করা যায়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।');
        }
      } else {
        const data = await res.json();
        setOrderData(data);
      }
    } catch (err) {
      console.error(err);
      setError('একটি সমস্যা হয়েছে। অনুগ্রহ করে ইন্টারনেট সংযোগ চেক করে আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const getStatusStep = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s === 'pending' || s === 'placed') return 1;
    if (s === 'processing' || s === 'confirmed') return 2;
    if (s === 'shipped' || s === 'on_the_way') return 3;
    if (s === 'delivered') return 4;
    return 1;
  };

  const renderTimeline = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s === 'cancelled') {
      return (
        <div className="flex flex-col items-center justify-center py-8 text-red-500">
          <XCircle size={56} className="mb-3" />
          <h3 className="text-xl font-bold">অর্ডার বাতিল হয়েছে</h3>
          <p className="text-gray-500 mt-1 text-sm text-center">এই অর্ডারটি বাতিল করা হয়েছে এবং ডেলিভারি করা হবে না।</p>
        </div>
      );
    }

    const currentStep = getStatusStep(status);
    const steps = [
      { id: 1, label: 'অর্ডার গৃহীত', icon: Clock },
      { id: 2, label: 'প্রসেসিং', icon: Package },
      { id: 3, label: 'ডেলিভারিতে আছে', icon: Truck },
      { id: 4, label: 'ডেলিভার্ড', icon: CheckCircle2 },
    ];

    return (
      <div className="py-6">
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full hidden md:block"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full hidden md:block transition-all duration-500"
            style={{ width: `${Math.max(0, (currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep >= step.id;
              const isCurrent = currentStep === step.id;
              
              return (
                <div key={step.id} className="flex md:flex-col items-center gap-3 md:gap-2">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center border-3 transition-colors duration-300 z-10 shrink-0 ${isActive ? 'bg-primary border-orange-100 text-white shadow-sm' : 'bg-white border-gray-200 text-gray-400'}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-left md:text-center">
                    <p className={`text-sm font-bold ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>{step.label}</p>
                    {isCurrent && <p className="text-[11px] text-primary font-semibold">বর্তমান অবস্থা</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA]">
      <main className="flex-grow container mx-auto px-4 py-8 pt-[112px] md:pt-[130px] pb-24 md:pb-16 flex flex-col items-center">
        <div className="text-center mb-8 max-w-xl mx-auto">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            লাইভ অর্ডার ট্র্যাকিং
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">আপনার অর্ডার ট্র্যাক করুন</h1>
          <p className="text-sm text-gray-500">আপনার পার্সেলটি এখন কোথায় আছে তা জানতে অর্ডার নম্বরটি লিখুন।</p>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xs border border-gray-100 p-5 md:p-8 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2.5 max-w-lg mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="অর্ডার নম্বর (যেমন: #ORD-1234)" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition disabled:opacity-70 whitespace-nowrap text-sm shadow-xs"
            >
              {loading ? 'খোঁজা হচ্ছে...' : 'ট্র্যাক করুন'}
            </button>
          </form>

          {error && (
            <div className="mt-5 p-3.5 bg-red-50 text-red-600 rounded-xl text-center text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          {orderData && (
            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">অর্ডার নম্বর</p>
                  <h2 className="text-xl font-bold text-gray-900">{orderData.id || orderData.order_number || orderId}</h2>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs text-gray-400 mb-0.5">মোট মূল্য</p>
                  <p className="text-xl font-bold text-primary">৳{parseFloat(orderData.amount || orderData.total_amount || 0).toFixed(2)}</p>
                </div>
              </div>

              {renderTimeline(orderData.status || 'pending')}

              <div className="mt-6 bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 text-sm">অর্ডারের বিবরণ</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs block mb-0.5">গ্রাহকের নাম</span>
                    <span className="font-medium text-gray-800">{orderData.customer_name || '—'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs block mb-0.5">পেমেন্ট মাধ্যম</span>
                    <span className="font-medium text-gray-800">{orderData.payment_method || 'Cash on Delivery'}</span>
                  </div>
                  {orderData.created_at && (
                    <div>
                      <span className="text-gray-400 text-xs block mb-0.5">অর্ডারের তারিখ</span>
                      <span className="font-medium text-gray-800">
                        {new Date(orderData.created_at).toLocaleDateString('bn-BD', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
