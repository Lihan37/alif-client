import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="relative overflow-hidden">
      <section className="animate-hero-in relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(232,224,205,0.55)_0%,rgba(255,251,241,0.82)_45%,rgba(215,194,145,0.35)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(130,112,72,0.14)_1px,transparent_0)] [background-size:22px_22px] opacity-60" />
        <div className="pointer-events-none absolute -top-24 right-0 hidden -z-10 md:block">
          <div className="grid origin-top-right rotate-12 grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={`hero-tile-${index}`}
                className="h-20 w-20 rounded-sm border border-white/50 bg-white/75 shadow-[0_12px_24px_-18px_rgba(20,20,20,0.45)] backdrop-blur-[1px]"
              />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-brand-light/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-10 -z-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-8 font-bn sm:px-6 md:gap-12 md:pb-20 md:pt-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <p className="mb-6 text-base font-semibold uppercase tracking-[0.06em] text-text-muted md:text-lg">
            আলিফ রেস্টুরেন্ট · Dewanhat
          </p>
          <h1 className="text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl">
            আলিফ রেস্টুরেন্ট
          </h1>
          <p className="mt-6 max-w-xl text-base text-text-secondary md:text-xl">
            <span className="block sm:whitespace-nowrap">
              ঠিকানা: ৩ শেখ মুজিব রোড, দেওয়ানহাট মোড়, চট্টগ্রাম, বাংলাদেশ (৪০০০)
            </span>
          </p>
          <div className="mt-5 flex max-w-xl flex-wrap items-center gap-2 text-base text-text-secondary">
            {['ডাইন-ইন', 'টেকওয়ে', 'রিজার্ভেশন', '২৪ ঘণ্টা খোলা'].map((service) => (
              <span
                key={service}
                className="rounded-xl border border-brand-dark/20 bg-brand-light/60 px-3 py-1.5 text-sm font-semibold text-text-primary md:px-5 md:py-2.5 md:text-lg"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <Link
              to="/menu"
              className="rounded-full bg-accent px-8 py-3.5 text-base font-semibold uppercase tracking-[0.04em] text-text-inverse shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:scale-[0.98] md:px-10 md:py-4 md:text-lg"
            >
              মেনু দেখুন
            </Link>
            <a
              href="https://www.foodpanda.com.bd/restaurant/g54m/alif-restaurant-dewanhut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#e21b70] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(226,27,112,0.8)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#c81662] hover:shadow-[0_18px_30px_-16px_rgba(226,27,112,0.9)] active:scale-[0.98] md:px-7 md:py-3.5 md:text-base"
              aria-label="Foodpanda-তে অর্ডার করুন"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/90" />
              Foodpanda-তে অর্ডার করুন
            </a>
          </div>
        </div>
        <div className="relative z-10">
          <div className="w-full rounded-[28px] border border-brand-dark/30 bg-white p-5 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.35)] sm:rounded-[32px] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.05em] text-text-muted md:text-base">আরেক শাখা</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-text-primary md:text-4xl">
              অলংকার শাখা
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              অলংকার শাখার বিস্তারিত, মেনুর বিশেষ আইটেম এবং নতুন আপডেট একটি আলাদা পেজে দেখুন।
            </p>
            <div className="mt-6 rounded-2xl bg-surface-section px-4 py-4 text-base text-text-secondary md:text-lg">
              ২৪ ঘণ্টা খোলা
            </div>
            <Link
              to="/alongkar-branch"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold uppercase tracking-[0.04em] text-text-inverse shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md active:scale-[0.98] md:text-lg"
            >
              অলংকার শাখা
            </Link>
          </div>
        </div>
        </div>
      </section>

      <section id="about" className="bg-surface-section">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-brand-dark/20 bg-white p-6 animate-fade-up">
            <p className="text-xs uppercase tracking-[0.06em] text-text-muted">আমাদের গল্প</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              আগুন, মসলা আর উদারতার মিশেলে তৈরি।
            </h2>
            <p className="mt-4 text-sm text-text-secondary">
              আমরা তাজা উপকরণ ব্যবহার করি এবং প্রতিটি খাবারে স্বাদ, গন্ধ ও মান ধরে রাখি।
            </p>
          </div>
          <div className="font-bn-clear grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'বাংলা হল',
                details: ['মোট টেবিল: ২৮', 'মোট চেয়ার: ১১৫'],
              },
              {
                title: 'চাইনিজ মেইন হল',
                details: ['মোট টেবিল: ১৩', 'চেয়ার: ১০৯', 'সোফা সেট: ৩৬'],
              },
              {
                title: 'চাইনিজ হল (A)',
                details: ['শুধু বুকিং: ১০০', 'ওয়েটিং ছাড়া'],
              },
              {
                title: 'চাইনিজ পার্টি হল (B)',
                details: ['শুধু বুকিং: ১২০', 'ওয়েটিং ছাড়া'],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-dark/20 bg-white p-6 animate-fade-up"
              >
                <p className="text-lg font-semibold text-accent md:text-xl">{item.title}</p>
                <div className="mt-3 space-y-1 text-sm text-text-secondary md:text-base">
                  {item.details.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-2 w-full max-w-6xl px-6 pb-16">
          <h3 className="mb-3 text-lg font-semibold text-text-primary md:text-xl">হল ডেকোরেশন গ্যালারি</h3>
          <p className="mb-4 text-sm text-text-secondary md:text-base">
            আপনার পছন্দ ও বাজেট অনুযায়ী হলের ডেকোরেশন সম্পূর্ণ কাস্টমাইজ করা যাবে।
          </p>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {[
              'https://res.cloudinary.com/duaysox2a/image/upload/v1772526526/WhatsApp_Image_2026-03-03_at_13.16.36_1_jdikrc.jpg',
              'https://res.cloudinary.com/duaysox2a/image/upload/v1772526526/WhatsApp_Image_2026-03-03_at_13.16.37_nzd95s.jpg',
              'https://res.cloudinary.com/duaysox2a/image/upload/v1772526526/WhatsApp_Image_2026-03-03_at_13.16.36_fvnswf.jpg',
            ].map((src, index) => (
              <figure
                key={src}
                className="snap-start shrink-0 overflow-hidden rounded-2xl border border-brand-dark/20 bg-white p-2 shadow-[0_16px_35px_-28px_rgba(0,0,0,0.45)] w-[280px] sm:w-[360px] md:w-[420px]"
              >
                <img
                  src={src}
                  alt={`Hall decoration ${index + 1}`}
                  loading="lazy"
                  className="h-[190px] w-full rounded-xl object-cover sm:h-[230px] md:h-[260px]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-[32px] border border-brand-dark/20 bg-white p-10 animate-fade-up">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.06em] text-text-muted">
                ৬ষ্ঠ প্রতিষ্ঠাবার্ষিকী
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                র‍্যাফেল ড্র ও গিফট প্রাইজ সেরিমনি সফলভাবে সম্পন্ন।
              </h2>
              <p className="mt-3 text-base text-text-secondary md:text-lg">
                গত ৪ বছর ধরে ধারাবাহিকভাবে আয়োজিত এই অনুষ্ঠানে বিজয়ীদের পুরস্কার এবং
                অংশগ্রহণকারীদের উপহার প্রদান করা হয়েছে।
              </p>
            </div>
            <Link
              to="/events"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-text-inverse transition hover:bg-accent-hover md:text-base"
            >
              বিস্তারিত দেখুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;





