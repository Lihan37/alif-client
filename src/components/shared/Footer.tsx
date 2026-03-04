const Footer = () => {
  return (
    <footer className="bg-surface-footer text-text-inverse">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-8 pt-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold">Alif Restaurant</h2>
          <p className="mt-3 text-sm text-text-muted">
            3 Sheikh Mujib Road, Dewanhat, Chattogram
          </p>
        </div>
        <div className="grid gap-4 text-sm text-text-muted">
          <div className="flex items-center justify-between border-b border-text-muted/20 pb-3">
            <span>Phone</span>
            <span className="text-text-inverse">+8801819640974</span>
          </div>
          <div className="flex items-center justify-between border-b border-text-muted/20 pb-3">
            <span>Email</span>
            <a href="mailto:wasiurrahman90@gmail.com" className="text-text-inverse hover:text-accent">
              wasiurrahman90@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-between border-b border-text-muted/20 pb-3">
            <span>Socials</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61556054081387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-text-inverse transition hover:bg-accent hover:text-white"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 9H16V6h-2.5C10.9 6 9 7.9 9 10.5V13H7v3h2v5h3v-5h2.4l.6-3H12v-2.5c0-.8.7-1.5 1.5-1.5z" />
                </svg>
              </a>
              <a
                href="https://www.foodpanda.com.bd/restaurant/g54m/alif-restaurant-dewanhut"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e21b70] text-white transition hover:opacity-90"
                aria-label="Foodpanda"
                title="Foodpanda"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 4a3.5 3.5 0 0 1 3.5 3.5V9H17a3 3 0 1 1 0 6h-1.6A4.9 4.9 0 0 1 10.5 19H7a2 2 0 1 1 0-4h1.2A4.8 4.8 0 0 1 7.5 12C7.5 7.6 10.6 4 15 4h-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl border-t border-text-muted/20 px-6 pb-8 pt-4 text-center text-sm">
        <p className="text-text-inverse">All rights reserved. Alif Restaurant.</p>
        <p className="mt-2 text-text-inverse">Developed by Eanur Rahman</p>
        <a href="mailto:eanurlihan10@gmail.com" className="text-text-muted hover:text-accent">
          Contact: eanurlihan10@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
