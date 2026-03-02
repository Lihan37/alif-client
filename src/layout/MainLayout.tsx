import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import api from '../api/axios';

const NAV_LOGO_URL =
  'https://res.cloudinary.com/duaysox2a/image/upload/v1772206360/alif_new_logo_red_kcjfhf.png';

type StoredAuth = {
  accessToken: string;
  user: {
    sub: string;
    name: string;
    number: string;
    role: 'admin' | 'user';
  };
};

const ADMIN_NUMBER = '01716285196';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authData, setAuthData] = useState<StoredAuth | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getStoredAuth = (): StoredAuth | null => {
    const raw = localStorage.getItem('alifAuth');
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as StoredAuth;
    } catch {
      return null;
    }
  };

  const normalizeNumber = (value: string): string => value.replace(/\D/g, '');
  const isLoggedIn = Boolean(authData?.accessToken);
  const isAdminLoggedIn =
    authData?.user?.role === 'admin' || normalizeNumber(authData?.user?.number ?? '') === ADMIN_NUMBER;

  useEffect(() => {
    setAuthData(getStoredAuth());
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      // ignore API logout failure; local session is still cleared below
    } finally {
      localStorage.removeItem('alifAuth');
      setAuthData(null);
      closeMobileMenu();
      navigate('/login');
    }
  };

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    `transition hover:text-accent ${isActive ? 'text-accent' : ''}`;

  const mobileNavClassName = ({ isActive }: { isActive: boolean }) =>
    `rounded-xl px-5 py-3 text-center text-2xl font-sans font-semibold transition hover:bg-brand-light ${
      isActive ? 'bg-brand-light text-accent' : 'text-text-secondary'
    }`;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-surface-main text-text-primary">
      <header className="sticky top-0 z-50 border-b border-brand-dark/20 bg-surface-main/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <img src={NAV_LOGO_URL} alt="Alif logo" className="h-14 w-auto origin-left scale-[1.35]" />
          </Link>

          <nav className="hidden items-center gap-8 text-base font-sans font-semibold tracking-normal text-text-secondary md:flex">
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
            <NavLink className={navClassName} to="/our-people">
              Our People
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
            {isAdminLoggedIn && (
              <NavLink
                to="/admin"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-brand-dark/30 bg-brand-light text-lg transition hover:border-accent hover:text-accent md:inline-flex"
                aria-label="Admin dashboard"
                title="Admin Dashboard"
              >
                👑
              </NavLink>
            )}
            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-full bg-accent px-6 py-2.5 text-base font-semibold tracking-normal text-text-inverse transition hover:bg-accent-hover md:inline-flex"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="hidden rounded-full bg-accent px-6 py-2.5 text-base font-semibold tracking-normal text-text-inverse transition hover:bg-accent-hover md:inline-flex"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-100 bg-black/35 px-5 py-6 md:hidden" onClick={closeMobileMenu}>
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
                <NavLink className={mobileNavClassName} to="/our-people" onClick={closeMobileMenu}>
                  Our People
                </NavLink>
                {isAdminLoggedIn && (
                  <NavLink className={mobileNavClassName} to="/admin" onClick={closeMobileMenu}>
                    👑 Admin
                  </NavLink>
                )}
                {isLoggedIn ? (
                  <button
                    type="button"
                    className={mobileNavClassName({ isActive: false })}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink className={mobileNavClassName} to="/login" onClick={closeMobileMenu}>
                    Login
                  </NavLink>
                )}
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
