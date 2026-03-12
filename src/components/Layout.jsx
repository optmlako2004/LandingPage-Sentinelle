import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DASHBOARD_URL = 'https://app.sentinelledev.fr';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* ===== NAV ===== */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-brand">
            <img src="/logo-dark.png" alt="Sentinelle" />
            <span>Sentinelle</span>
          </Link>
          <div className={`nav-links ${mobileMenu ? 'open' : ''}`}>
            {isHome ? (
              <>
                <a href="#features" onClick={() => setMobileMenu(false)}>Fonctionnalites</a>
                <a href="#how-it-works" onClick={() => setMobileMenu(false)}>Comment ca marche</a>
                <a href="#modes" onClick={() => setMobileMenu(false)}>Modes</a>
                <a href="#pricing" onClick={() => setMobileMenu(false)}>Tarifs</a>
              </>
            ) : (
              <>
                <Link to="/documentation" onClick={() => setMobileMenu(false)}>Documentation</Link>
                <Link to="/api-reference" onClick={() => setMobileMenu(false)}>API Reference</Link>
                <Link to="/changelog" onClick={() => setMobileMenu(false)}>Changelog</Link>
                <Link to="/status" onClick={() => setMobileMenu(false)}>Status</Link>
              </>
            )}
          </div>
          <div className="nav-cta">
            <a href={DASHBOARD_URL + '/login'} className="btn-ghost">Se connecter</a>
            <a href={DASHBOARD_URL + '/register'} className="btn-accent">Essayer gratuit</a>
          </div>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}>
            <i className={`fa-solid ${mobileMenu ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      {/* ===== PAGE CONTENT ===== */}
      <Outlet />

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <Link to="/" className="nav-brand">
                <img src="/logo-dark.png" alt="Sentinelle" style={{ width: 32, height: 32 }} />
                <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>Sentinelle</span>
              </Link>
              <p>Agent IA autonome de monitoring DevOps. Surveillance, diagnostic et protection automatique de vos applications.</p>
            </div>
            <div className="footer-col">
              <h4>Produit</h4>
              <Link to="/#features">Fonctionnalites</Link>
              <Link to="/#pricing">Tarifs</Link>
              <Link to="/#modes">Modes</Link>
              <a href={DASHBOARD_URL}>Dashboard</a>
            </div>
            <div className="footer-col">
              <h4>Ressources</h4>
              <Link to="/documentation">Documentation</Link>
              <Link to="/changelog">Changelog</Link>
              <Link to="/api-reference">API Reference</Link>
              <Link to="/status">Status</Link>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <Link to="/mentions-legales">Mentions legales</Link>
              <Link to="/politique-de-confidentialite">Politique de confidentialite</Link>
              <Link to="/cgu">CGU</Link>
              <a href="mailto:contact@sentinelledev.fr">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Sentinelle. Tous droits reserves.</span>
            <div className="footer-socials">
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
