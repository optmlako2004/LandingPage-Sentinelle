export default function Changelog() {
  const releases = [
    {
      version: '1.3.0',
      date: '13 mars 2026',
      tag: 'Derniere version',
      changes: [
        { type: 'feature', text: 'Auto-Deploy : merge automatique des PRs, deploiement sur le serveur et verification post-deploy.' },
        { type: 'feature', text: 'Webhook GitHub : les push sur main declenchent automatiquement le deploiement.' },
        { type: 'feature', text: 'Deploy logs : historique complet des deploiements avec output et verification.' },
        { type: 'improvement', text: 'Pause du monitoring pendant les deploiements pour eviter les faux incidents (502).' },
        { type: 'improvement', text: 'Deploy lock (cooldown 2 min) contre les cascades de deploiements.' },
        { type: 'fix', text: 'Correction du bug de doublons d\'incidents quand le status est "fixing".' },
        { type: 'fix', text: 'Skip automatique des erreurs 429 dans l\'auto-fix (rate limit ≠ bug de code).' },
      ],
    },
    {
      version: '1.2.0',
      date: '10 mars 2026',
      tag: null,
      changes: [
        { type: 'feature', text: 'Integration Discord : recevez vos alertes directement dans vos channels Discord.' },
        { type: 'feature', text: 'Export CSV des incidents depuis le dashboard.' },
        { type: 'improvement', text: 'Amelioration du temps de reponse du diagnostic IA (-40%).' },
        { type: 'fix', text: 'Correction d\'un bug d\'affichage des graphiques sur mobile.' },
      ],
    },
    {
      version: '1.1.0',
      date: '18 fevrier 2026',
      tag: null,
      changes: [
        { type: 'feature', text: 'Mode Acteur : generation automatique de patches et creation de Pull Requests GitHub.' },
        { type: 'feature', text: 'Pentest OWASP Top 10 avec rapport detaille.' },
        { type: 'improvement', text: 'Refonte du dashboard avec metriques en temps reel via WebSocket.' },
        { type: 'improvement', text: 'Amelioration de la precision du diagnostic IA avec analyse contextuelle.' },
        { type: 'fix', text: 'Correction du calcul du taux d\'uptime pour les endpoints avec redirections.' },
      ],
    },
    {
      version: '1.0.1',
      date: '2 fevrier 2026',
      tag: null,
      changes: [
        { type: 'fix', text: 'Correction d\'un probleme de timeout sur les health checks pour les serveurs a haute latence.' },
        { type: 'fix', text: 'Correction de l\'envoi de notifications email en double.' },
        { type: 'improvement', text: 'Amelioration des performances de generation des rapports PDF.' },
      ],
    },
    {
      version: '1.0.0',
      date: '15 janvier 2026',
      tag: 'Lancement',
      changes: [
        { type: 'feature', text: 'Lancement officiel de Sentinelle.' },
        { type: 'feature', text: 'Health check continu avec detection automatique des pannes.' },
        { type: 'feature', text: 'Diagnostic IA a chaque incident detecte.' },
        { type: 'feature', text: 'Generation automatique de rapports PDF.' },
        { type: 'feature', text: 'Alertes en temps reel par email et Slack.' },
        { type: 'feature', text: 'Dashboard avec visualisation des metriques.' },
        { type: 'feature', text: 'API REST pour l\'integration avec vos outils.' },
      ],
    },
    {
      version: '0.9.0',
      date: '20 decembre 2025',
      tag: 'Beta',
      changes: [
        { type: 'feature', text: 'Version beta ouverte aux premiers testeurs.' },
        { type: 'feature', text: 'Monitoring basique avec checks HTTP.' },
        { type: 'feature', text: 'Dashboard minimal avec historique des incidents.' },
        { type: 'improvement', text: 'Optimisation de l\'infrastructure pour la scalabilite.' },
      ],
    },
  ];

  const typeLabel = { feature: 'Nouveaute', improvement: 'Amelioration', fix: 'Correctif' };
  const typeClass = { feature: 'tag-feature', improvement: 'tag-improvement', fix: 'tag-fix' };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Ressources</div>
          <h1>Changelog</h1>
          <p>Suivez l'evolution de Sentinelle. Nouvelles fonctionnalites, ameliorations et correctifs.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="changelog-timeline">
          {releases.map((release, i) => (
            <div key={i} className="changelog-entry">
              <div className="changelog-marker">
                <div className="changelog-dot" />
                {i < releases.length - 1 && <div className="changelog-line" />}
              </div>
              <div className="changelog-card">
                <div className="changelog-header">
                  <h2>v{release.version}</h2>
                  {release.tag && <span className="changelog-tag">{release.tag}</span>}
                  <span className="changelog-date"><i className="fa-regular fa-calendar" /> {release.date}</span>
                </div>
                <ul className="changelog-list">
                  {release.changes.map((change, j) => (
                    <li key={j}>
                      <span className={`changelog-type ${typeClass[change.type]}`}>{typeLabel[change.type]}</span>
                      <span>{change.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
