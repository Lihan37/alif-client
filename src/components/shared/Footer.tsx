const Footer = () => {
  return (
    <footer className="bg-surface-footer text-text-inverse">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1.1fr_0.9fr]">
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
            <span className="text-text-inverse">hello@alifrestaurant.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Instagram</span>
            <span className="text-text-inverse">@alif.restaurant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
