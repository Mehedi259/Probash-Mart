import Link from "next/link";
import React from "react";

export default function FeaturedCategories() {
  return (
    <section className="w-full px-margin py-space-xl">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-space-lg">
          <div>
            <span className="text-secondary font-label-md text-label-md font-bold uppercase tracking-wider">
              পণ্য সম্ভার
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-1">
              ক্যাটাগরি অনুযায়ী কেনাকাটা করুন
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold"
            href="/products"
          >
            <span>সব ক্যাটাগরি দেখুন</span>
            <span className="material-symbols-outlined text-[20px]">
              chevron_right
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-md">
          {/* Category 1 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/hilsa"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Hilsa Fish"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZTuYCu8djwXrWX42zVXIP_EjnUDtJFHhDe8sLt3TnuLttmWtYVB_paUJfj3kxMC4wYt4UQ4Z9ESGLeJfcxmmEoNYK4GTSEPxy5i0PtpefQuNBf2iz_SXmWaWTYsr_Eark5oM9iUhB54D1i4FwLq5gfLBJnK5jmDfhgt-vEnL_BOkDU7zXT-yRdr33kJNflnnff4euhQ_AVaEcIA18q6dLSfM7kuP2edVjEqj1p4MowzOxl8pfuRl9Sg"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              ইলিশ মাছ
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ২৪টি পণ্য
            </span>
          </Link>
          {/* Category 2 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/fruits"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Mangoes and Fruits"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxGZKcARVCGq9DJm19WOI1TbF7mVuw7LTzYrSmZ9W5d59YBGVvFGfVFMSEKSgSDxI_EtUPiASPsvB9wG42kizYY5PsCfUhaiVYEOOSxGRH3q357eGOVvLlJBvK3lod4cfDesorJyIyQrdcdCmr1KtADcAcAqSEWPEooAJv5MnYoOnRIVEP-QCfjJEcsFOJHnaOkQ4ynRYYs7dIK_ZkLJEgZMxAkQKDUmLmsefvUNfdadK526f2mt_QAQ"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              আম ও তাজা ফল
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ১৮টি পণ্য
            </span>
          </Link>
          {/* Category 3 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/honey"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Honey and Ghee"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp6oCexnAcpMRXx9PeNF9BWzc_T3_YKImhCJJ9spnrnhmBcDCy1VGerve8_J1QY5XEdeyK9H5PID44Jx_qJ96ZexE_o6EB3lHHa-R_UojhPlY0w8EjNQvcvOErK7dkCqt0fsARIYsBaICacKIyT2iob85OuBtOncZYunkFi3LjsML8VWWcyjakDOCu-DpXmmut1Q1izlzuL8GN2CTe5TKoDGWAWoTuYE-bKFEVHUTjQYPPGWOesgltxQ"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              মধু ও ঘি
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ১৫টি পণ্য
            </span>
          </Link>
          {/* Category 4 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/dates"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Dates and Dry Fruits"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm9FNc5xSjxYu74KHMIRq4-yFpzyEDBbinv0tb_bSFjmai6lczuonGeO7JnCtXHhKnqp6Mqs9fXiARArXLLbTILU7ePeDlK1mgrBZ5jSvld37btSd3GYnbi9ySwdiPJOh_FTTyV_qI6fV97Qet6_h4otU5VuekmxDiNSbc07jV3TC0p0l_ot2o9grusm4RVNtOBFzHIEj9Y4lyuu0OUCUalklfg2lp_WeFBwthUInGQjJQzdkhRUE1Ig"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              খেজুর ও বাদাম
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ৩২টি পণ্য
            </span>
          </Link>
          {/* Category 5 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/heritage"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Heritage Clothes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxA1RrhI7x-PPcd8JJv92mEuxcdMTtyKAbsHcSHhMHlIbyjhwlthZkygl0KgO59uamVYxQD3_UqKCw9RxtwVQyIwtapopyjiJvvs9Q4O0ARG6oiKassuo9btUrXsxhBe7h14Nz9qrQaGSR9C2DwlAFy45-icUExIaDeSuARHWsxsG4oM6Vl0VyX3Xa6h1WWFu3GiVkJEo2LRaOZCWYbDoyQrHz4-faoGXwBvUPsXGcjdkHlGvZRtONSw"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              ঐতিহ্যবাহী পোশাক
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ৪২টি পণ্য
            </span>
          </Link>
          {/* Category 6 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/crafts"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Handicrafts"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDOz3l7AloS5WvOFIxnQVadwvKhftcK5fbtQ2IaZZodRJbIppO-k2TLMeddJHiLwtPwAq1BtRYDTERVYYrfdTHzxBU3nkPDIgvUmo0lsp5Nmap4yIDlmolmqDkG-htnvPx4U1PERHCb3JmQRnd9LCHwvDWSR44yCYydKU_etr1zebDwqv88yT8xcq3CZbcnhGz1dLf0zBcOtHq3mJcVu7jWfsyC98Hrcxc7uTUi1q7jQC8f6-MPbWVw"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              হস্তশিল্প ও খেলনা
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ২০টি পণ্য
            </span>
          </Link>
          {/* Category 7 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all shadow-sm hover:shadow-md"
            href="/category/spices"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <img
                className="w-full h-full object-cover"
                alt="Spices"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQAPE1jLTXec0_NJMo9MJsaFumWFDd2PWGQp_-GTunVx9BMoOLX8zP9JrDrGGT5qN5r1J-UB4lIoY2sAzthEYtsMSCvS_3Ggxau9pMek77OGJy32CQmv9e45NYJ3z4NzHXRueZFH92unumEHigB98YjAHje0MYD4-363piJL4TI_sp39zjxZ9d1u8floHjE6BSPs6rQyKCCzO7H7DMNx-8EKniMMcWKthO1EVZaqVmif5U3sG0c9ijQ"
              />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-sm">
              মসলা ও সামগ্রী
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ৩৬টি পণ্য
            </span>
          </Link>
          {/* Category 8 */}
          <Link
            className="group flex flex-col items-center text-center p-space-md rounded-xl bg-secondary-fixed hover:bg-secondary-container transition-all shadow-sm hover:shadow-md"
            href="/offers"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container-lowest text-secondary mb-space-sm shadow-inner group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">
                local_fire_department
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-secondary-fixed font-bold text-sm">
              অফার জোন
            </span>
            <span className="font-label-sm text-label-sm text-on-secondary-fixed-variant mt-1">
              ৫০+ ডিল
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
