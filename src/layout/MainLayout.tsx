import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/Alif_Logo_Main.png';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    `transition hover:text-accent ${isActive ? 'text-accent' : ''}`;

  const mobileNavClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-xl px-5 py-3 text-center text-2xl font-semibold transition hover:bg-brand-light ${
      isActive ? 'bg-brand-light text-accent' : 'text-text-secondary'
    }`;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-surface-main text-text-primary">
      <header className="sticky top-0 z-50 border-b border-brand-dark/20 bg-surface-main/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 font-bn">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <img src={logo} alt="Alif logo" className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 text-base font-semibold tracking-normal text-text-secondary md:flex">
            <NavLink className={navClassName} to="/menu">
              Menu
            </NavLink>
            <NavLink className={navClassName} to="/about">
              About
            </NavLink>
            <NavLink className={navClassName} to="/events">
              Events
            </NavLink>
            <NavLink className={navClassName} to="/contact">
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-dark/30 text-text-primary md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="hidden rounded-full bg-accent px-6 py-2.5 text-base font-semibold tracking-normal text-text-inverse transition hover:bg-accent-hover md:inline-flex">
              Reserve
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-black/35 px-5 py-6 md:hidden" onClick={closeMobileMenu}>
            <div
              className="mx-auto mt-16 w-full max-w-sm rounded-2xl border border-brand-dark/20 bg-white p-4 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.65)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-dark/30 text-text-primary"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col items-center gap-3 pb-2">
                <NavLink className={mobileNavClassName} to="/menu" onClick={closeMobileMenu}>
                  Menu
                </NavLink>
                <NavLink className={mobileNavClassName} to="/about" onClick={closeMobileMenu}>
                  About
                </NavLink>
                <NavLink className={mobileNavClassName} to="/events" onClick={closeMobileMenu}>
                  Events
                </NavLink>
                <NavLink className={mobileNavClassName} to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
