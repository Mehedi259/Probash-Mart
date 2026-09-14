import React from "react";

export default function WhyProbashMart() {
  return (
    <section className="w-full px-margin py-space-xl">
      <div className="max-w-[1320px] mx-auto bg-primary text-on-primary rounded-xl overflow-hidden relative shadow-lg">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary-fixed-dim/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="bg-secondary text-on-secondary font-label-sm text-label-sm px-3 py-1 rounded-full font-bold inline-block mb-space-sm">
              আমাদের অঙ্গীকার
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-primary font-bold leading-tight mb-space-md">
              কেন প্রবাসমার্ট কোটি মানুষের আস্থার ঠিকানা?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/90 leading-relaxed mb-space-lg">
              আমরা সরাসরি বাংলার মেঠোপথ, নদী আর প্রান্তিক কৃষকদের উঠোন থেকে
              আসল পণ্য আপনার দরজায় পৌঁছে দিই। পদ্মার মাঝি, রাজশাহীর আমচাষি কিংবা
              সুন্দরবনের মৌয়াল—সবার শ্রমের যথার্থ মূল্যায়ন করে আমরা নিশ্চিত করি
              খাঁটি স্বাদের গ্যারান্টি। দেশ কিংবা প্রবাস, পরিবারের মুখে খাঁটি
              খাবারের হাসি ফোটানোই আমাদের মূল লক্ষ্য।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              <div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-xl p-space-md">
                <span className="font-display-lg text-display-lg font-bold text-secondary-fixed">
                  ৫০,০০০+
                </span>
                <p className="font-label-md text-label-md text-on-primary/80 mt-1">
                  সন্তুষ্ট গ্রাহক পরিবার
                </p>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-xl p-space-md">
                <span className="font-display-lg text-display-lg font-bold text-primary-fixed">
                  ১০০%
                </span>
                <p className="font-label-md text-label-md text-on-primary/80 mt-1">
                  খাঁটি ও প্রাকৃতিক নিশ্চয়তা
                </p>
              </div>
              <div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-xl p-space-md">
                <span className="font-display-lg text-display-lg font-bold text-secondary-fixed">
                  ৬৪
                </span>
                <p className="font-label-md text-label-md text-on-primary/80 mt-1">
                  জেলায় এক্সপ্রেস ডেলিভারি
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-80 object-cover"
                alt="Farmer holding produce"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUWl7YHBCdwc-8quGpRrl7ZvA370upuNlB5-vWUDNDgZi_eK6cLPF9xiSwKiKBCWvbTGM5DdmWh_6-0Du3Rs-XJBfSPHnWyKeGBCrL9o73Xf2Hx2Me2d0uq2Jmwm7x2iYcVVgQdvcJq0ATHXloz7caEY32pkncPZg3skM2VE0cPN0MF5fONgGit7-tjj5R5aHzs_ziIENJJ05-xkrFrF3f4c1P8ES1hrCcR1HteT1VZ5P71QG03VGybw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-space-md">
                <div className="flex items-center gap-space-sm text-on-primary">
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
                    handshake
                  </span>
                  <span className="font-label-md text-label-md font-semibold">
                    কৃষক ও উদ্যোক্তাদের সরাসরি সমর্থন
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
