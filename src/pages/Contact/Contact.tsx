const Contact = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 font-bn text-text-primary sm:px-6 md:py-14">
      <div className="rounded-3xl border border-brand-dark/15 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">Contact</p>
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">যোগাযোগ</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-brand-dark/15 bg-surface-section/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-text-muted">ঠিকানা</p>
            <p className="mt-2 text-base text-text-secondary">৩ শেখ মুজিব রোড, দেওয়ানহাট, চট্টগ্রাম</p>
          </div>

          <div className="rounded-2xl border border-brand-dark/15 bg-surface-section/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-text-muted">ফোন</p>
            <a href="tel:+8801819640974" className="mt-2 block text-base font-semibold text-text-primary">
              +8801819640974
            </a>
          </div>

          <div className="rounded-2xl border border-brand-dark/15 bg-surface-section/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-text-muted">লোকেশন</p>
            <a
              href="https://maps.app.goo.gl/okhRGYTMaCTR9dYMA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-text-inverse transition hover:bg-accent-hover"
            >
              Google Map দেখুন
            </a>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">
            ম্যাপ প্রিভিউ
          </p>
          <div className="overflow-hidden rounded-2xl border border-brand-dark/15">
            <iframe
              title="Alif Restaurant Dewanhat Location"
              src="https://www.google.com/maps?q=Alif%20Restaurant%20Dewanhat%20Chattogram&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
