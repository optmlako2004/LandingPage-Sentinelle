export default function Status() {
  const services = [
    { name: 'API principale', status: 'operational', uptime: '99.98%' },
    { name: 'Dashboard', status: 'operational', uptime: '99.95%' },
    { name: 'Moteur de monitoring', status: 'operational', uptime: '99.99%' },
    { name: 'Diagnostic IA', status: 'operational', uptime: '99.90%' },
    { name: 'Pentest engine', status: 'operational', uptime: '99.92%' },
    { name: 'Generation de rapports PDF', status: 'operational', uptime: '99.88%' },
    { name: 'Notifications (Email/Slack/Discord)', status: 'operational', uptime: '99.95%' },
    { name: 'WebSocket (temps reel)', status: 'operational', uptime: '99.97%' },
  ];

  const statusConfig = {
    operational: { label: 'Operationnel', color: '#22c55e', icon: 'fa-circle-check' },
    degraded: { label: 'Degrade', color: '#f59e0b', icon: 'fa-triangle-exclamation' },
    outage: { label: 'Panne', color: '#ef4444', icon: 'fa-circle-xmark' },
    maintenance: { label: 'Maintenance', color: '#3b82f6', icon: 'fa-wrench' },
  };

  const recentIncidents = [
    {
      date: '8 mars 2026',
      title: 'Maintenance planifiee - Migration base de donnees',
      status: 'resolved',
      description: 'Migration de la base de donnees vers une nouvelle infrastructure pour ameliorer les performances. Interruption de service de 15 minutes entre 03h00 et 03h15 (heure de Paris).',
      duration: '15 minutes',
    },
    {
      date: '22 fevrier 2026',
      title: 'Latence elevee sur le diagnostic IA',
      status: 'resolved',
      description: 'Augmentation du temps de reponse du moteur de diagnostic IA due a une charge elevee. Temps de reponse normalise apres ajustement de la capacite.',
      duration: '45 minutes',
    },
    {
      date: '10 fevrier 2026',
      title: 'Interruption des notifications Slack',
      status: 'resolved',
      description: 'Les notifications Slack n\'ont pas ete delivrees pendant une courte periode suite a un changement dans l\'API Slack. Correctif deploye rapidement.',
      duration: '30 minutes',
    },
  ];

  const allOperational = services.every(s => s.status === 'operational');

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Statut du service</div>
          <h1>Status</h1>
          <p>Etat en temps reel de l'infrastructure Sentinelle.</p>
        </div>
      </div>

      <div className="container page-content">
        {/* Global status */}
        <div className={`status-global ${allOperational ? 'status-ok' : 'status-issue'}`}>
          <i className={`fa-solid ${allOperational ? 'fa-circle-check' : 'fa-triangle-exclamation'}`} />
          <span>{allOperational ? 'Tous les systemes sont operationnels' : 'Certains systemes rencontrent des problemes'}</span>
        </div>

        {/* Services */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-server" /> Services</h2>
          <div className="status-list">
            {services.map((service, i) => {
              const config = statusConfig[service.status];
              return (
                <div key={i} className="status-item">
                  <div className="status-item-left">
                    <i className={`fa-solid ${config.icon}`} style={{ color: config.color }} />
                    <span className="status-name">{service.name}</span>
                  </div>
                  <div className="status-item-right">
                    <span className="status-uptime">Uptime : {service.uptime}</span>
                    <span className="status-badge" style={{ background: config.color + '20', color: config.color }}>
                      {config.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Uptime bars */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-chart-bar" /> Uptime des 30 derniers jours</h2>
          <div className="uptime-bars">
            {services.slice(0, 4).map((service, i) => (
              <div key={i} className="uptime-row">
                <div className="uptime-label">{service.name}</div>
                <div className="uptime-bar-track">
                  <div
                    className="uptime-bar-fill"
                    style={{ width: service.uptime }}
                  />
                </div>
                <div className="uptime-value">{service.uptime}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent incidents */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-clock-rotate-left" /> Incidents recents</h2>
          {recentIncidents.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>Aucun incident recent.</p>
          ) : (
            <div className="status-incidents">
              {recentIncidents.map((incident, i) => (
                <div key={i} className="status-incident-card">
                  <div className="status-incident-header">
                    <span className="status-incident-date">{incident.date}</span>
                    <span className="status-badge" style={{
                      background: incident.status === 'resolved' ? '#22c55e20' : '#ef444420',
                      color: incident.status === 'resolved' ? '#22c55e' : '#ef4444',
                    }}>
                      {incident.status === 'resolved' ? 'Resolu' : 'En cours'}
                    </span>
                  </div>
                  <h3>{incident.title}</h3>
                  <p>{incident.description}</p>
                  <span className="status-incident-duration">
                    <i className="fa-regular fa-clock" /> Duree : {incident.duration}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="page-cta">
          <p>Vous souhaitez etre notifie en cas d'incident ?</p>
          <a href="mailto:contact@sentinelledev.fr" className="btn-accent">S'abonner aux alertes</a>
        </div>
      </div>
    </div>
  );
}
