import React from "react";
import { Sparkles, Users, ShieldCheck, Truck, HeartHandshake } from "lucide-react";

export default function WhyProbashMart() {
  return (
    <section className="w-full">
      <div className="w-full bg-gradient-to-br from-[#FFF9F3] via-[#FFF3E8] to-[#FDF0E2] rounded-3xl border border-[#FEDDC7]/80 overflow-hidden relative shadow-lg shadow-orange-950/5">
        {/* Ambient decorative glows */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#FE6202]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#FF8C04]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 bg-[#FE6202]/10 border border-[#FE6202]/25 text-[#FE6202] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#FE6202]" />
              <span>আমাদের অঙ্গীকার</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#23170E] leading-tight mb-4">
              কেন প্রবাসমার্ট কোটি মানুষের{" "}
              <span className="text-[#FE6202]">আস্থার ঠিকানা?</span>
            </h2>

            <p className="text-[#5C4D41] text-sm sm:text-base leading-relaxed mb-8">
              আমরা সরাসরি বাংলার মেঠোপথ, নদী আর প্রান্তিক কৃষকদের উঠোন থেকে
              আসল পণ্য আপনার দরজায় পৌঁছে দিই। পদ্মার মাঝি, রাজশাহীর আমচাষি কিংবা
              সুন্দরবনের মৌয়াল—সবার শ্রমের যথার্থ মূল্যায়ন করে আমরা নিশ্চিত করি
              খাঁটি স্বাদের গ্যারান্টি। দেশ কিংবা প্রবাস, পরিবারের মুখে খাঁটি
              খাবারের হাসি ফোটানোই আমাদের মূল লক্ষ্য।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-[#FEDDC7]/90 shadow-xs hover:shadow-md hover:border-[#FE6202]/50 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-xl bg-[#FE6202]/10 flex items-center justify-center text-[#FE6202] mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#FE6202] tracking-tight">
                  ৫০,০০০+
                </div>
                <p className="text-[#6B5A4D] text-xs sm:text-sm font-semibold mt-1">
                  সন্তুষ্ট গ্রাহক পরিবার
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-[#FEDDC7]/90 shadow-xs hover:shadow-md hover:border-[#FE6202]/50 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-xl bg-[#FE6202]/10 flex items-center justify-center text-[#FE6202] mb-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#FE6202] tracking-tight">
                  ১০০%
                </div>
                <p className="text-[#6B5A4D] text-xs sm:text-sm font-semibold mt-1">
                  খাঁটি ও প্রাকৃতিক নিশ্চয়তা
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-[#FEDDC7]/90 shadow-xs hover:shadow-md hover:border-[#FE6202]/50 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-xl bg-[#FE6202]/10 flex items-center justify-center text-[#FE6202] mb-3 group-hover:scale-110 transition-transform">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#FE6202] tracking-tight">
                  ৬৪
                </div>
                <p className="text-[#6B5A4D] text-xs sm:text-sm font-semibold mt-1">
                  জেলায় এক্সপ্রেস ডেলিভারি
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Farmer holding produce"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUWl7YHBCdwc-8quGpRrl7ZvA370upuNlB5-vWUDNDgZi_eK6cLPF9xiSwKiKBCWvbTGM5DdmWh_6-0Du3Rs-XJBfSPHnWyKeGBCrL9o73Xf2Hx2Me2d0uq2Jmwm7x2iYcVVgQdvcJq0ATHXloz7caEY32pkncPZg3skM2VE0cPN0MF5fONgGit7-tjj5R5aHzs_ziIENJJ05-xkrFrF3f4c1P8ES1hrCcR1HteT1VZ5P71QG03VGybw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/20 text-white px-3.5 py-2 rounded-xl">
                  <HeartHandshake className="w-5 h-5 text-[#FF9225] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">
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
