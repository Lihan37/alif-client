const eventImages = [
  {
    src: 'https://res.cloudinary.com/duaysox2a/image/upload/v1772522831/WhatsApp_Image_2026-03-03_at_12.35.15_vpungs.jpg',
    alt: 'Alif Restaurant Gift Prize Ceremony Winners Announcement',
    caption: 'Gift Prize Ceremony - Winners Announcement',
  },
  {
    src: 'https://res.cloudinary.com/duaysox2a/image/upload/v1772522837/WhatsApp_Image_2026-03-03_at_12.35.19_tpuz95.jpg',
    alt: '6th anniversary raffle draw winners list part 1',
    caption: 'Raffle Draw Winners List - Part 1',
  },
  {
    src: 'https://res.cloudinary.com/duaysox2a/image/upload/v1772522843/alif_2_xr3tvz.jpg',
    alt: '6th anniversary raffle draw winners list part 2',
    caption: 'Raffle Draw Winners List - Part 2',
  },
];

const Events = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 font-bn text-text-primary sm:px-6 md:py-14">
      <div className="animate-fade-up rounded-3xl border border-brand-dark/15 bg-white px-5 py-7 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">Special Event</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">৬ষ্ঠ প্রতিষ্ঠাবার্ষিকী উদযাপন</h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="animate-fade-up rounded-2xl border border-brand-dark/15 bg-surface-section/50 p-5 md:p-6">
            <h2 className="text-xl font-semibold text-accent md:text-2xl">English</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Alif Restaurant celebrated its 6th anniversary by organizing a special event for its valued
              customers. During the celebration, an exciting raffle draw was arranged, where winners
              received attractive prizes. In addition, gifts were distributed to customers as a token of
              appreciation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              We have been organizing similar anniversary events and raffle draws continuously for the past
              four years, as part of our commitment to appreciating our loyal customers and strengthening
              our relationship with them.
            </p>
          </article>

          <article
            className="animate-fade-up rounded-2xl border border-brand-dark/15 bg-surface-section/50 p-5 md:p-6"
            style={{ animationDelay: '0.12s' }}
          >
            <h2 className="text-xl font-semibold text-accent md:text-2xl">বাংলা</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              Alif Restaurant–এর ৬ষ্ঠ প্রতিষ্ঠাবার্ষিকী উপলক্ষে একটি বিশেষ অনুষ্ঠানের আয়োজন করা হয়।
              অনুষ্ঠানে গ্রাহকদের জন্য আকর্ষণীয় র‍্যাফেল ড্র অনুষ্ঠিত হয় এবং বিজয়ীদের জন্য ছিল
              বিশেষ পুরস্কার। এছাড়াও অংশগ্রহণকারী অনেক গ্রাহককে উপহার প্রদান করা হয়।
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              গত ৪ বছর ধরে ধারাবাহিকভাবে আমরা এই ধরনের আয়োজন করে আসছি, যাতে আমাদের সম্মানিত
              গ্রাহকদের প্রতি কৃতজ্ঞতা প্রকাশ করা যায় এবং তাদের সাথে আমাদের সম্পর্ক আরও সুদৃঢ় হয়।
            </p>
          </article>
        </div>

        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3 text-sm text-text-primary md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="rounded-full border border-brand-dark/20 bg-brand-light/70 px-4 py-2 font-semibold">
            Event: 6th Anniversary
          </span>
          <span className="rounded-full border border-brand-dark/20 bg-brand-light/70 px-4 py-2 font-semibold">
            আয়োজন: Raffle Draw + Gift Distribution
          </span>
          <span className="rounded-full border border-brand-dark/20 bg-brand-light/70 px-4 py-2 font-semibold">
            ধারাবাহিকতা: গত ৪ বছর
          </span>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-center text-xl font-semibold text-text-primary md:text-2xl">
          Gift Prize Ceremony - Winners Announcement
        </h3>
        <figure
          className="animate-fade-up mx-auto mt-3 w-full max-w-xl overflow-hidden rounded-2xl border border-brand-dark/15 bg-white p-2.5 shadow-[0_20px_50px_-45px_rgba(0,0,0,0.45)]"
          style={{ animationDelay: '0.12s' }}
        >
          <img
            src={eventImages[0].src}
            alt={eventImages[0].alt}
            loading="lazy"
            className="max-h-[560px] w-full rounded-xl object-contain bg-surface-main"
          />
        </figure>

        <h3 className="mt-5 text-center text-xl font-semibold text-text-primary md:text-2xl">
          Raffle Draw Winners List
        </h3>
        <div className="mt-3 grid gap-5 md:grid-cols-2">
          {eventImages.slice(1).map((image, index) => (
            <figure
              key={image.src}
              className="animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-[560px] w-full object-contain sm:h-[640px]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
