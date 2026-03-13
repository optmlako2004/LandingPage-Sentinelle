import { Link } from 'react-router-dom';

export default function Documentation() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Ressources</div>
          <h1>Documentation</h1>
          <p>Tout ce que vous devez savoir pour utiliser Sentinelle et proteger vos applications.</p>
        </div>
      </div>

      <div className="container page-content">
        {/* Quick start */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-rocket" /> Demarrage rapide</h2>
          <p>Sentinelle se configure en quelques minutes. Suivez ces etapes pour commencer a surveiller vos applications.</p>

          <div className="doc-steps">
            <div className="doc-step">
              <div className="doc-step-num">1</div>
              <div>
                <h3>Creer un compte</h3>
                <p>Inscrivez-vous gratuitement sur <a href="https://app.sentinelledev.fr/register">app.sentinelledev.fr</a>. Aucune carte bancaire requise pour le plan Starter.</p>
              </div>
            </div>
            <div className="doc-step">
              <div className="doc-step-num">2</div>
              <div>
                <h3>Ajouter un projet</h3>
                <p>Depuis le dashboard, cliquez sur <strong>"Nouveau projet"</strong> et renseignez le nom de votre application ainsi que son URL de base.</p>
              </div>
            </div>
            <div className="doc-step">
              <div className="doc-step-num">3</div>
              <div>
                <h3>Configurer vos endpoints</h3>
                <p>Ajoutez les URLs a surveiller (API, pages web, webhooks). Definissez la frequence de check (30 min en Starter, 5 min en Pro).</p>
              </div>
            </div>
            <div className="doc-step">
              <div className="doc-step-num">4</div>
              <div>
                <h3>Activer la surveillance</h3>
                <p>Sentinelle commence immediatement a surveiller vos endpoints. Vous recevrez des alertes en cas d'incident.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Concepts */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-book" /> Concepts cles</h2>

          <div className="doc-card-grid">
            <div className="doc-card">
              <h3><i className="fa-solid fa-heartbeat" /> Health Checks</h3>
              <p>Sentinelle envoie des requetes HTTP a vos endpoints a intervalles reguliers. Chaque reponse est analysee : code HTTP, temps de reponse, contenu du body. Un endpoint est considere "down" apres 2 echecs consecutifs.</p>
            </div>
            <div className="doc-card">
              <h3><i className="fa-solid fa-brain" /> Diagnostic IA</h3>
              <p>Lorsqu'un incident est detecte, notre moteur IA analyse les logs, le code de reponse et le contexte pour fournir un diagnostic precis : cause probable, impact estime et suggestion de correctif.</p>
            </div>
            <div className="doc-card">
              <h3><i className="fa-solid fa-shield-halved" /> Pentest OWASP</h3>
              <p>Sentinelle execute des tests de securite bases sur le referentiel OWASP Top 10 : injections SQL, XSS, CSRF, IDOR, directory traversal, brute force et detection de fuites de donnees.</p>
            </div>
            <div className="doc-card">
              <h3><i className="fa-solid fa-file-pdf" /> Rapports PDF</h3>
              <p>Des rapports complets sont generes automatiquement avec vos KPIs : taux d'uptime, incidents detectes, diagnostics IA, resultats de pentest et recommandations.</p>
            </div>
          </div>
        </section>

        {/* Modes */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-toggle-on" /> Modes de fonctionnement</h2>

          <div className="doc-table-wrapper">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Fonctionnalite</th>
                  <th>Mode Observateur</th>
                  <th>Mode Acteur</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Monitoring continu</td><td><i className="fa-solid fa-check accent" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Diagnostic IA</td><td><i className="fa-solid fa-check accent" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Alertes temps reel</td><td><i className="fa-solid fa-check accent" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Rapports PDF</td><td><i className="fa-solid fa-check accent" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Pentest OWASP</td><td><i className="fa-solid fa-check accent" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Generation de patches IA</td><td><i className="fa-solid fa-xmark muted" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Pull Requests GitHub</td><td><i className="fa-solid fa-xmark muted" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Auto-merge et deploy</td><td><i className="fa-solid fa-xmark muted" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
                <tr><td>Verification post-deploy</td><td><i className="fa-solid fa-xmark muted" /></td><td><i className="fa-solid fa-check accent" /></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Integrations */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-plug" /> Integrations</h2>
          <p>Sentinelle s'integre avec vos outils existants pour des notifications et un workflow optimal.</p>
          <div className="doc-card-grid">
            <div className="doc-card">
              <h3><i className="fa-brands fa-slack" /> Slack</h3>
              <p>Recevez des alertes directement dans vos channels Slack. Configurez les niveaux de severite pour chaque canal.</p>
            </div>
            <div className="doc-card">
              <h3><i className="fa-brands fa-discord" /> Discord</h3>
              <p>Integrez Sentinelle a votre serveur Discord via webhook. Notifications en temps reel dans le channel de votre choix.</p>
            </div>
            <div className="doc-card">
              <h3><i className="fa-solid fa-envelope" /> Email</h3>
              <p>Alertes par email avec resume de l'incident, diagnostic IA et actions recommandees. Configurable par projet.</p>
            </div>
            <div className="doc-card">
              <h3><i className="fa-brands fa-github" /> GitHub</h3>
              <p>En mode Acteur, Sentinelle cree automatiquement des Pull Requests avec les correctifs suggeres sur vos depots.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-circle-question" /> Questions frequentes</h2>

          <div className="doc-faq">
            <div className="doc-faq-item">
              <h3>Combien d'endpoints puis-je surveiller ?</h3>
              <p>Le plan Starter permet 10 endpoints. Les plans Pro et Enterprise offrent un nombre illimite d'endpoints.</p>
            </div>
            <div className="doc-faq-item">
              <h3>A quelle frequence les checks sont-ils effectues ?</h3>
              <p>Toutes les 30 minutes en Starter, toutes les 5 minutes en Pro. Les plans Enterprise peuvent avoir une frequence personnalisee.</p>
            </div>
            <div className="doc-faq-item">
              <h3>Mes donnees sont-elles securisees ?</h3>
              <p>Oui. Toutes les communications sont chiffrees en TLS 1.3. Vos donnees sont hebergees en France et soumises au RGPD. Consultez notre <Link to="/politique-de-confidentialite">politique de confidentialite</Link>.</p>
            </div>
            <div className="doc-faq-item">
              <h3>Puis-je exporter mes rapports ?</h3>
              <p>Oui. Tous les rapports sont disponibles en PDF et accessibles via l'API REST. Vous pouvez egalement planifier des envois automatiques par email.</p>
            </div>
          </div>
        </section>

        <div className="page-cta">
          <p>Besoin d'aide supplementaire ?</p>
          <a href="mailto:contact@sentinelledev.fr" className="btn-accent">Contacter le support</a>
        </div>
      </div>
    </div>
  );
}
