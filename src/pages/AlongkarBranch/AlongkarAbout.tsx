const AlongkarAbout = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 font-bn text-text-primary sm:px-6 md:py-14">
      <div className="animate-fade-up rounded-3xl border border-brand-dark/15 bg-white px-5 py-7 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">
          About Alif Restaurant
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">আমাদের কথা</h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="animate-fade-up rounded-2xl border border-brand-dark/15 bg-surface-section/50 p-5 md:p-6">
            <h2 className="text-xl font-semibold text-accent md:text-2xl">English</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Alif Restaurant (Dewanhat Branch) is a popular local dining spot located at Dewanhat
              Circle on Sheikh Mujib Road in Chattogram. The restaurant was officially founded on 26th
              January 2020 and has since become well-known among residents for its flavorful food and
              reliable service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Alif Restaurant offers a wide variety of Bangladeshi and Asian dishes, with special
              popularity for its biryani, kacchi, chicken roast, beef curry, bhuna khichuri, and grilled
              items. It provides both dine-in and takeaway services, along with home delivery across
              different areas of Chattogram.
            </p>
          </article>

          <article
            className="animate-fade-up rounded-2xl border border-brand-dark/15 bg-surface-section/50 p-5 md:p-6"
            style={{ animationDelay: '0.12s' }}
          >
            <h2 className="text-xl font-semibold text-accent md:text-2xl">বাংলা</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              আলিফ রেস্টুরেন্ট (দেওয়ানহাট শাখা) চট্টগ্রামের দেওয়ানহাট সার্কেল, শেখ মুজিব
              রোডে অবস্থিত একটি জনপ্রিয় স্থানীয় রেস্টুরেন্ট। রেস্টুরেন্টটি ২৬ জানুয়ারি
              ২০২০ সালে প্রতিষ্ঠিত হয় এবং প্রতিষ্ঠার পর থেকে সুস্বাদু খাবার ও নির্ভরযোগ্য
              সেবার মাধ্যমে স্থানীয়দের কাছে বিশেষ পরিচিতি লাভ করেছে।
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              আলিফ রেস্টুরেন্টে বিভিন্ন ধরনের বাংলাদেশি ও এশিয়ান খাবার পরিবেশন করা হয়।
              বিশেষভাবে জনপ্রিয় খাবারের মধ্যে রয়েছে বিরিয়ানি, কাচ্চি, চিকেন রোস্ট, বিফ
              কারি, ভুনা খিচুড়ি ও বিভিন্ন গ্রিল আইটেম। এখানে ডাইন-ইন ও টেকঅ্যাওয়ে
              সুবিধার পাশাপাশি চট্টগ্রামের বিভিন্ন এলাকায় হোম ডেলিভারি সেবাও প্রদান করা হয়।
            </p>
          </article>
        </div>

        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3 text-sm text-text-primary md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="rounded-full border border-brand-dark/20 bg-brand-light/70 px-4 py-2 font-semibold">
            প্রতিষ্ঠা: ২৬ জানুয়ারি ২০২০
          </span>
          <span className="rounded-full border border-brand-dark/20 bg-brand-light/70 px-4 py-2 font-semibold">
            অবস্থান: দেওয়ানহাট, চট্টগ্রাম
          </span>
          <span className="rounded-full border border-brand-dark/20 bg-brand-light/70 px-4 py-2 font-semibold">
            সেবা: ডাইন-ইন, টেকঅ্যাওয়ে, হোম ডেলিভারি
          </span>
        </div>
      </div>
    </section>
  );
};

export default AlongkarAbout;
