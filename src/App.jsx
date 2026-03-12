import { useState, useEffect, useRef, useCallback } from 'react';

const DASHBOARD_URL = 'https://app.sentinelledev.fr';

/* ===== Animated counter hook ===== */
const useCounter = (end, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) { setStarted(true); return; }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
};

/* ===== Typing effect hook ===== */
const useTyping = (texts, speed = 80, pause = 2000) => {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const text = texts[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(text.substring(0, charIdx + 1));
        if (charIdx + 1 === text.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(text.substring(0, charIdx));
        if (charIdx === 0) {
          setDeleting(false);
          setIdx((idx + 1) % texts.length);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const typedText = useTyping([
    'vos applications.',
    'vos APIs.',
    'vos microservices.',
    'votre infrastructure.',
  ], 70, 1800);

  const checks = useCounter(1440, 2200);
  const endpoints = useCounter(87, 1800);
  const incidents = useCounter(24, 1500);
  const uptime = useCounter(99, 2000);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer for fade-in with stagger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('visible'), delay);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      el.dataset.delay = (i % 6) * 100;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Parallax on hero owl
  useEffect(() => {
    const onScroll = () => {
      const owl = document.querySelector('.hero-owl');
      if (owl) {
        const y = window.scrollY * 0.15;
        owl.style.transform = `translateY(${-y}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ===== NAV ===== */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-brand">
            <img src="/logo-dark.png" alt="Sentinelle" />
            <span>Sentinelle</span>
          </a>
          <div className={`nav-links ${mobileMenu ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMobileMenu(false)}>Fonctionnalites</a>
            <a href="#how-it-works" onClick={() => setMobileMenu(false)}>Comment ca marche</a>
            <a href="#modes" onClick={() => setMobileMenu(false)}>Modes</a>
            <a href="#pricing" onClick={() => setMobileMenu(false)}>Tarifs</a>
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

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title-animate">
              Surveillez. Diagnostiquez.
              <span className="accent">Protegez.</span>
            </h1>
            <p className="hero-subtitle-animate">
              Sentinelle est un agent IA autonome qui surveille{' '}
              <span className="typed-text">{typedText}<span className="cursor">|</span></span>
              {' '}24/7, diagnostique les incidents et genere des rapports intelligents.
            </p>
            <div className="hero-buttons hero-btn-animate">
              <a href={DASHBOARD_URL + '/register'} className="btn-accent btn-accent-lg btn-glow">
                Commencer gratuitement
              </a>
              <a href="#how-it-works" className="btn-outline-lg">
                <i className="fa-solid fa-play" style={{ fontSize: '0.75rem', marginRight: 8 }} />
                Voir la demo
              </a>
            </div>
            <div className="hero-tags hero-tags-animate">
              <span className="hero-tag"><i className="fa-solid fa-circle" /> Monitoring 24/7</span>
              <span className="hero-tag"><i className="fa-solid fa-circle" /> Diagnostic IA</span>
              <span className="hero-tag"><i className="fa-solid fa-circle" /> Pentest auto</span>
              <span className="hero-tag"><i className="fa-solid fa-circle" /> Rapports PDF</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="owl-ring ring-1" />
            <div className="owl-ring ring-2" />
            <div className="owl-ring ring-3" />
            <img src="/logo-dark.png" alt="Sentinelle Owl" className="hero-owl" />
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card fade-in" ref={checks.ref}>
              <div className="stat-value">{checks.count.toLocaleString()}+</div>
              <div className="stat-label">Checks par jour</div>
            </div>
            <div className="stat-card fade-in" ref={endpoints.ref}>
              <div className="stat-value">{endpoints.count}+</div>
              <div className="stat-label">Endpoints surveilles</div>
            </div>
            <div className="stat-card fade-in" ref={incidents.ref}>
              <div className="stat-value">&lt;{incidents.count}h</div>
              <div className="stat-label">Temps de detection moyen</div>
            </div>
            <div className="stat-card fade-in" ref={uptime.ref}>
              <div className="stat-value">{uptime.count}.8%</div>
              <div className="stat-label">Uptime moyen des clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-label fade-in">Fonctionnalites</div>
          <h2 className="section-title fade-in">Tout ce dont vous avez besoin<br />pour securiser vos apps.</h2>
          <p className="section-subtitle fade-in">
            Sentinelle combine monitoring temps reel, intelligence artificielle et tests de securite
            dans une seule plateforme.
          </p>
          <div className="features-grid">
            {[
              { icon: 'fa-heartbeat', title: 'Health Check continu', desc: 'Ping de tous vos endpoints toutes les 30 minutes. Detection automatique des pannes, temps de reponse anormaux et erreurs HTTP.' },
              { icon: 'fa-brain', title: 'Diagnostic IA', desc: 'Chaque incident est analyse par Claude AI qui fournit un diagnostic precis, la cause probable et un fix suggere.' },
              { icon: 'fa-shield-halved', title: 'Pentest automatique', desc: 'Tests OWASP Top 10 : injection SQL, XSS, CSRF, brute force, IDOR, directory traversal, data leak.' },
              { icon: 'fa-file-pdf', title: 'Rapports PDF', desc: 'Generation automatique de rapports detailles avec KPIs, uptime, incidents, diagnostics IA et resume pentest.' },
              { icon: 'fa-bolt', title: 'Temps reel', desc: 'Dashboard avec mise a jour en temps reel via WebSocket. Alertes instantanees sur incidents critiques.' },
              { icon: 'fa-code-pull-request', title: 'Auto-fix (mode Acteur)', desc: 'En mode Acteur, Sentinelle genere des patches et cree automatiquement des Pull Requests sur GitHub.' },
            ].map((f, i) => (
              <div key={i} className="feature-card fade-in" data-delay={i * 120}>
                <div className="feature-icon"><i className={`fa-solid ${f.icon}`} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-label fade-in">Comment ca marche</div>
          <h2 className="section-title fade-in">De la detection au fix en 5 etapes.</h2>
          <p className="section-subtitle fade-in">
            Sentinelle travaille en boucle continue pour garder vos applications saines et securisees.
          </p>
          <div className="pipeline fade-in">
            {[
              { icon: 'fa-satellite-dish', label: 'Surveiller' },
              { icon: 'fa-triangle-exclamation', label: 'Detecter' },
              { icon: 'fa-brain', label: 'Diagnostiquer' },
              { icon: 'fa-wrench', label: 'Corriger' },
              { icon: 'fa-chart-line', label: 'Rapporter' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <div className="pipeline-arrow" />}
                <div className="pipeline-step">
                  <div className="pipeline-icon pulse-hover"><i className={`fa-solid ${s.icon}`} /></div>
                  <span className="pipeline-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Modes */}
          <div id="modes" className="modes-grid">
            <div className="mode-card observer fade-in">
              <span className="mode-badge">Observateur</span>
              <h3>Mode Observer</h3>
              <p>Sentinelle surveille, detecte et rapporte. Vous gardez le controle total. Parfait pour commencer.</p>
              <ul className="mode-features">
                <li><i className="fa-solid fa-check" /> Monitoring continu de vos endpoints</li>
                <li><i className="fa-solid fa-check" /> Diagnostic IA a chaque incident</li>
                <li><i className="fa-solid fa-check" /> Rapports PDF avec fix suggere</li>
                <li><i className="fa-solid fa-check" /> Pentest automatique OWASP</li>
                <li><i className="fa-solid fa-check" /> Alertes temps reel</li>
              </ul>
            </div>
            <div className="mode-card acteur fade-in">
              <span className="mode-badge">Acteur</span>
              <h3>Mode Acteur</h3>
              <p>Sentinelle agit : il genere des patches et cree des PRs sur GitHub automatiquement.</p>
              <ul className="mode-features">
                <li><i className="fa-solid fa-check" /> Tout le mode Observateur</li>
                <li><i className="fa-solid fa-check" /> Generation automatique de patches</li>
                <li><i className="fa-solid fa-check" /> Creation de Pull Requests GitHub</li>
                <li><i className="fa-solid fa-check" /> Rapport de ce qui a ete corrige</li>
                <li><i className="fa-solid fa-check" /> Rollback possible a tout moment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="section-label fade-in">Tarifs</div>
          <h2 className="section-title fade-in">Simple et transparent.</h2>
          <p className="section-subtitle fade-in">
            Commencez gratuitement, evoluez selon vos besoins.
          </p>
          <div className="pricing-grid">
            <div className="pricing-card fade-in">
              <div className="pricing-name">Starter</div>
              <div className="pricing-desc">Pour les projets personnels</div>
              <div className="pricing-price">Gratuit</div>
              <div className="pricing-period">pour toujours</div>
              <ul className="pricing-features">
                <li><i className="fa-solid fa-check" /> 1 projet</li>
                <li><i className="fa-solid fa-check" /> 10 endpoints</li>
                <li><i className="fa-solid fa-check" /> Health check toutes les 30 min</li>
                <li><i className="fa-solid fa-check" /> Diagnostic IA</li>
                <li><i className="fa-solid fa-check" /> Rapports PDF</li>
              </ul>
              <a href={DASHBOARD_URL + '/register'} className="btn-ghost">Commencer</a>
            </div>
            <div className="pricing-card featured fade-in">
              <div className="pricing-name">Pro</div>
              <div className="pricing-desc">Pour les equipes</div>
              <div className="pricing-price" style={{ color: 'var(--accent)' }}>19&#8364;</div>
              <div className="pricing-period">par mois / projet</div>
              <ul className="pricing-features">
                <li><i className="fa-solid fa-check" /> Projets illimites</li>
                <li><i className="fa-solid fa-check" /> Endpoints illimites</li>
                <li><i className="fa-solid fa-check" /> Check toutes les 5 min</li>
                <li><i className="fa-solid fa-check" /> Pentest automatique OWASP</li>
                <li><i className="fa-solid fa-check" /> Mode Acteur (auto-fix)</li>
                <li><i className="fa-solid fa-check" /> Alertes Slack/Discord/Email</li>
              </ul>
              <a href={DASHBOARD_URL + '/register'} className="btn-accent">Essayer 14 jours gratuit</a>
            </div>
            <div className="pricing-card fade-in">
              <div className="pricing-name">Enterprise</div>
              <div className="pricing-desc">Pour les grandes organisations</div>
              <div className="pricing-price">Sur mesure</div>
              <div className="pricing-period">contactez-nous</div>
              <ul className="pricing-features">
                <li><i className="fa-solid fa-check" /> Tout le plan Pro</li>
                <li><i className="fa-solid fa-check" /> SLA garanti</li>
                <li><i className="fa-solid fa-check" /> Support prioritaire</li>
                <li><i className="fa-solid fa-check" /> Instance dediee</li>
                <li><i className="fa-solid fa-check" /> Integration CI/CD</li>
                <li><i className="fa-solid fa-check" /> Audit de securite personnalise</li>
              </ul>
              <a href="mailto:contact@sentinelledev.fr" className="btn-ghost">Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section section">
        <div className="container">
          <h2 className="fade-in">Protegez vos applications<br />des maintenant.</h2>
          <p className="fade-in">Commencez en moins de 5 minutes. Aucune carte bancaire requise.</p>
          <div className="cta-buttons fade-in">
            <a href={DASHBOARD_URL + '/register'} className="btn-accent btn-accent-lg btn-glow">
              Commencer gratuitement
            </a>
            <a href="mailto:contact@sentinelledev.fr" className="btn-outline-lg">
              Demander une demo
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="#" className="nav-brand">
                <img src="/logo-dark.png" alt="Sentinelle" style={{ width: 32, height: 32 }} />
                <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>Sentinelle</span>
              </a>
              <p>Agent IA autonome de monitoring DevOps. Surveillance, diagnostic et protection automatique de vos applications.</p>
            </div>
            <div className="footer-col">
              <h4>Produit</h4>
              <a href="#features">Fonctionnalites</a>
              <a href="#pricing">Tarifs</a>
              <a href="#modes">Modes</a>
              <a href={DASHBOARD_URL}>Dashboard</a>
            </div>
            <div className="footer-col">
              <h4>Ressources</h4>
              <a href="#">Documentation</a>
              <a href="#">Changelog</a>
              <a href="#">API Reference</a>
              <a href="#">Status</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Mentions legales</a>
              <a href="#">Politique de confidentialite</a>
              <a href="#">CGU</a>
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

export default App;
