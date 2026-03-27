const AlongkarContact = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 font-bn text-text-primary sm:px-6 md:py-14">
      <div className="rounded-3xl border border-brand-dark/15 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted">Contact</p>
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">যোগাযোগ</h1>

        <div className="mt-8 rounded-2xl border border-brand-dark/15 bg-surface-section/40 p-6 md:p-7">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-text-muted md:text-base">
            Alongkar Branch
          </p>
          <h2 className="mt-1 text-center text-2xl font-bold text-text-primary md:text-3xl">
            Alongkar, Chattogram
          </h2>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-text-muted md:text-base">ঠিকানা</p>
              <p className="mt-2 text-lg text-text-secondary">
                Alongkar, Alongkar Shopping Complex, Port Connecting Rd, Chattogram 4202
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Alongkar+Shopping+Complex+Port+Connecting+Rd+Chattogram+4202"
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
                <a href="tel:+8801878131703" className="block text-base font-semibold text-text-primary md:text-xl">
                  বাংলা হল: 01878131703
                </a>
                <a href="tel:+8801878131704" className="block text-base font-semibold text-text-primary md:text-xl">
                  চাইনিজ হল: 01878131704
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
              title="Alif Restaurant Alongkar Location"
              src="https://www.google.com/maps?q=Alongkar%20Shopping%20Complex%20Port%20Connecting%20Rd%20Chattogram%204202&output=embed"
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

export default AlongkarContact;
