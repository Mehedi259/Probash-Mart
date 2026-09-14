import React from "react";

export default function Testimonials() {
  return (
    <section className="w-full px-margin py-space-xl">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-space-xl">
          <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
            আস্থার প্রমাণ
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-1">
            ক্রেতাদের সন্তুষ্টির অভিজ্ঞতা
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            প্রবাসী ভাই-বোন ও দেশীয় গ্রাহকদের বাস্তব প্রশংসাসূচক মতামত
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Review 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-secondary mb-space-md">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                "আমি দুবাই থেকে ঢাকার উত্তরায় পরিবারের জন্য পদ্মার ইলিশ আর
                সুন্দরবনের মধু অর্ডার করেছিলাম। ডেলিভারি একদম সময়মতো হয়েছে এবং মা
                জানিয়েছেন মাছের স্বাদ ছিল অতুলনীয়।"
              </p>
            </div>
            <div className="flex items-center gap-space-md mt-space-lg pt-space-md border-t-0 bg-surface-container-low p-space-sm rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                <span>ত</span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                  তানভীর হাসান
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  প্রবাসী (দুবাই) / ডেলিভারি: ঢাকা
                </span>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-secondary mb-space-md">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                "সিলেট শহরে এত দ্রুত ক্যাশ অন ডেলিভারি পাবো ভাবিনি। খাঁটি গাওয়া
                ঘির সুবাসে পুরো রান্নাঘর ভরে উঠেছে। প্রবাসমার্টের প্যাকেজিং ও
                পণ্যের মান অসাধারণ!"
              </p>
            </div>
            <div className="flex items-center gap-space-md mt-space-lg pt-space-md border-t-0 bg-surface-container-low p-space-sm rounded-lg">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
                <span>স</span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                  সাদিয়া আফরিন
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  গৃহিণী, সিলেট সদর
                </span>
              </div>
            </div>
          </div>
          {/* Review 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-secondary mb-space-md">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                "রমজানে মদিনার আজওয়া খেজুরের কোয়ালিটি নিয়ে একটু সংশয়ে ছিলাম। কিন্তু
                হাতে পেয়ে দেখলাম একদম সতেজ আর প্রিমিয়াম গ্রেডের খেজুর। চট্টগ্রাম
                শহরে ২ দিনের মধ্যে পৌঁছে গেছে।"
              </p>
            </div>
            <div className="flex items-center gap-space-md mt-space-lg pt-space-md border-t-0 bg-surface-container-low p-space-sm rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                <span>ম</span>
              </div>
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface font-bold">
                  মাহমুদুল আলম
                </h4>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  ব্যবসায়ী, আগ্রাবাদ, চট্টগ্রাম
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
