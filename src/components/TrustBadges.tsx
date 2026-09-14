import React from "react";

export default function TrustBadges() {
  return (
    <section className="w-full px-margin py-space-md">
      <div className="max-w-[1320px] mx-auto bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-[28px]">
                local_shipping
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                সারা দেশে হোম ডেলিভারি
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                দ্রুত ও নির্ভরযোগ্য নিরাপদ সরবরাহ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[28px]">
                payments
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                ক্যাশ অন ডেলিভারি
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                পণ্য হাতে পেয়ে মূল্য পরিশোধের সুবিধা
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-[28px]">
                verified
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                ১০০% খাঁটি ও নির্ভেজাল
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                সরাসরি সোর্স থেকে ল্যাব টেস্টেড পণ্য
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[28px]">
                published_with_changes
              </span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                সহজ রিটার্ন সুবিধা
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                ৭ দিনের মধ্যে সহজ পণ্য পরিবর্তনের সুযোগ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
