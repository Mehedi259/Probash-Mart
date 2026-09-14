"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="w-full px-margin pb-space-xl">
      <div className="max-w-[1320px] mx-auto bg-surface-container-low rounded-xl p-space-xl shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-space-xs bg-primary text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm mb-space-sm">
              <span className="material-symbols-outlined text-[16px]">
                notifications_active
              </span>
              <span>নিয়মিত অফার পান সবার আগে</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-space-xs">
              প্রবাসমার্ট অ্যাপ ও অফার আপডেট
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              আপনার ফোন নম্বর বা ইমেইল দিয়ে যুক্ত থাকুন। বিশেষ ডিসকাউন্ট কুপন ও
              সিজনাল পণ্যের আগমনী বার্তা পান সরাসরি।
            </p>
            <form
              className="flex flex-col sm:flex-row gap-space-xs max-w-[500px]"
              onSubmit={handleSubmit}
            >
              <input
                className="flex-1 bg-surface-container-lowest px-space-md py-3 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none shadow-sm"
                placeholder="আপনার মোবাইল নম্বর বা ইমেইল লিখুন..."
                required
                type="text"
              />
              <button
                className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-space-lg py-3 rounded-lg flex items-center justify-center gap-space-xs shadow-md transition-colors shrink-0"
                type="submit"
              >
                <span>সাবস্ক্রাইব করুন</span>
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </button>
            </form>
            {success && (
              <div className="mt-space-sm text-primary font-label-md text-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                <span>ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।</span>
              </div>
            )}
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-space-md mt-space-lg lg:mt-0">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md w-full sm:w-auto">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">
                  phone_iphone
                </span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  শীঘ্রই আসছে
                </span>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                  প্রবাসমার্ট মোবাইল অ্যাপ
                </h4>
                <span className="font-body-sm text-body-sm text-primary font-semibold">
                  Google Play & App Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
