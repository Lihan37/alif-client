const Contact = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 font-bn text-text-primary sm:px-6 md:py-14">
      <div className="rounded-3xl border border-brand-dark/15 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">Contact</p>
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">যোগাযোগ</h1>

        <div className="mt-8 rounded-2xl border border-brand-dark/15 bg-surface-section/40 p-6 md:p-7">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-text-muted md:text-base">
            Main Branch
          </p>
          <h2 className="mt-1 text-center text-2xl font-bold text-text-primary md:text-3xl">Dewanhat, Chattogram</h2>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted md:text-base">ঠিকানা</p>
              <p className="mt-2 text-lg text-text-secondary">৩ শেখ মুজিব রোড, দেওয়ানহাট, চট্টগ্রাম</p>
              <a
                href="https://maps.app.goo.gl/okhRGYTMaCTR9dYMA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-base font-semibold text-text-inverse transition hover:bg-accent-hover"
              >
                Google Map দেখুন
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted md:text-base">ফোন নম্বর</p>
              <div className="mt-2 space-y-2.5">
                <a href="tel:+8801819640974" className="block text-base font-semibold text-text-primary md:text-xl">
                  Main Hotline: +8801819640974
                </a>
                <a href="tel:+8801883254533" className="block text-base font-semibold text-text-primary md:text-xl">
                  Manager: +880 18 8325 4533
                </a>
                <a href="tel:+8801833368191" className="block text-base font-semibold text-text-primary md:text-xl">
                  1st Floor (Bangla): +880 18 3336 8191
                </a>
                <a href="tel:+8801833368192" className="block text-base font-semibold text-text-primary md:text-xl">
                  2nd Floor (Chinese/Thai): +880 18 3336 8192
                </a>
              </div>
            </div>
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
