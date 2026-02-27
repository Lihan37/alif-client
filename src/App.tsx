import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-light/70 blur-3xl" />
      <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-20 pt-10 font-bn md:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p
            className="mb-6 text-sm md:text-base font-semibold uppercase tracking-[0.06em] text-text-muted animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            আলিফ রেস্টুরেন্ট · Dewanhat
          </p>
          <h1
            className="text-3xl font-bold leading-tight text-text-primary md:text-3xl lg:text-4xl animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            আলিফ রেস্টুরেন্ট - সবসময় খোলা, ক্ষুধা নিয়ে আসুন, সুখ নিয়ে যান।
          </h1>
          <p
            className="mt-6 max-w-xl text-base text-text-secondary md:text-lg animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            ঠিকানা: ৩ শেখ মুজিব রোড, দেওয়ানহাট মোড়, চট্টগ্রাম, বাংলাদেশ (৪০০০)।
            সার্ভিস: ডাইন-ইন, টেকওয়ে, রিজার্ভেশন। মূল্যমান: $$।
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-text-secondary animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            <span className="rounded-full bg-brand-light px-4 py-2 text-text-primary">
              স্ট্যাটাস: Always Open
            </span>
            <span className="rounded-full bg-brand-light px-4 py-2 text-text-primary">
              ফোন: +8801819640974
            </span>
          </div>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-text-inverse transition hover:bg-accent-hover">
              টেবিল বুক করুন
            </button>
            <Link
              to="/menu"
              className="rounded-full border border-accent/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-text-secondary transition hover:border-accent hover:text-accent"
            >
              মেনু দেখুন
            </Link>
          </div>
        </div>
        <div className="relative animate-float-in" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-[32px] border border-brand-dark/30 bg-white p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-text-muted">
              New Branch
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-text-primary md:text-3xl">
              Alongkar Branch
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Alongkar branch details, menu highlights, and opening updates are available on a dedicated
              page.
            </p>
            <div className="mt-6 rounded-2xl bg-surface-section px-4 py-4 text-sm text-text-secondary">
              Opening Hours: 10:00 AM - 11:30 PM
            </div>
            <Link
              to="/alongkar-branch"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-text-inverse transition hover:bg-accent-hover"
            >
              Alongkar Branch
            </Link>
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
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: 'আসন', value: '68' },
              { label: 'প্রাইভেট রুম', value: '3' },
              { label: 'দৈনিক বেক', value: '12' },
              { label: 'সিজনাল মেনু', value: '4' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-brand-dark/20 bg-white p-6 text-center animate-fade-up"
              >
                <p className="text-3xl font-semibold text-accent">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.06em] text-text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-[32px] border border-brand-dark/20 bg-white p-10 animate-fade-up">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.06em] text-text-muted">
                প্রাইভেট ডাইনিং
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                গল্পের মতো এক সন্ধ্যার আয়োজন করুন।
              </h2>
            </div>
            <button className="rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.06em] text-text-inverse transition hover:bg-accent-hover">
              ইভেন্ট পরিকল্পনা
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;





