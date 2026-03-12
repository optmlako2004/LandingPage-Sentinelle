import { useState } from 'react';

export default function ApiReference() {
  const [activeSection, setActiveSection] = useState('auth');

  const endpoints = [
    {
      id: 'auth',
      category: 'Authentification',
      items: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          desc: 'Authentifie un utilisateur et retourne un token JWT.',
          params: [
            { name: 'email', type: 'string', required: true, desc: 'Adresse email du compte.' },
            { name: 'password', type: 'string', required: true, desc: 'Mot de passe du compte.' },
          ],
          response: `{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 86400,
  "user": {
    "id": "usr_abc123",
    "email": "dev@example.com",
    "plan": "pro"
  }
}`,
        },
        {
          method: 'POST',
          path: '/api/v1/auth/refresh',
          desc: 'Renouvelle un token JWT expire.',
          params: [
            { name: 'refresh_token', type: 'string', required: true, desc: 'Token de rafraichissement.' },
          ],
          response: `{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 86400
}`,
        },
      ],
    },
    {
      id: 'projects',
      category: 'Projets',
      items: [
        {
          method: 'GET',
          path: '/api/v1/projects',
          desc: 'Liste tous les projets de l\'utilisateur.',
          params: [],
          response: `{
  "data": [
    {
      "id": "prj_xyz789",
      "name": "Mon API",
      "base_url": "https://api.example.com",
      "mode": "observer",
      "status": "active",
      "endpoints_count": 12,
      "created_at": "2026-01-15T10:30:00Z"
    }
  ],
  "total": 1
}`,
        },
        {
          method: 'POST',
          path: '/api/v1/projects',
          desc: 'Cree un nouveau projet.',
          params: [
            { name: 'name', type: 'string', required: true, desc: 'Nom du projet.' },
            { name: 'base_url', type: 'string', required: true, desc: 'URL de base du projet.' },
            { name: 'mode', type: 'string', required: false, desc: '"observer" (defaut) ou "acteur".' },
          ],
          response: `{
  "id": "prj_xyz789",
  "name": "Mon API",
  "base_url": "https://api.example.com",
  "mode": "observer",
  "status": "active"
}`,
        },
      ],
    },
    {
      id: 'endpoints',
      category: 'Endpoints',
      items: [
        {
          method: 'GET',
          path: '/api/v1/projects/:id/endpoints',
          desc: 'Liste tous les endpoints d\'un projet.',
          params: [
            { name: 'status', type: 'string', required: false, desc: 'Filtrer par statut : "up", "down", "degraded".' },
          ],
          response: `{
  "data": [
    {
      "id": "ep_001",
      "url": "https://api.example.com/health",
      "method": "GET",
      "status": "up",
      "last_check": "2026-03-12T14:30:00Z",
      "response_time_ms": 142,
      "uptime_7d": 99.8
    }
  ]
}`,
        },
        {
          method: 'POST',
          path: '/api/v1/projects/:id/endpoints',
          desc: 'Ajoute un endpoint a surveiller.',
          params: [
            { name: 'url', type: 'string', required: true, desc: 'URL de l\'endpoint.' },
            { name: 'method', type: 'string', required: false, desc: 'Methode HTTP (GET par defaut).' },
            { name: 'expected_status', type: 'number', required: false, desc: 'Code HTTP attendu (200 par defaut).' },
            { name: 'timeout_ms', type: 'number', required: false, desc: 'Timeout en ms (5000 par defaut).' },
          ],
          response: `{
  "id": "ep_002",
  "url": "https://api.example.com/users",
  "method": "GET",
  "status": "pending",
  "expected_status": 200
}`,
        },
      ],
    },
    {
      id: 'incidents',
      category: 'Incidents',
      items: [
        {
          method: 'GET',
          path: '/api/v1/projects/:id/incidents',
          desc: 'Liste les incidents d\'un projet.',
          params: [
            { name: 'status', type: 'string', required: false, desc: '"open", "resolved" ou "all".' },
            { name: 'limit', type: 'number', required: false, desc: 'Nombre de resultats (25 par defaut, max 100).' },
            { name: 'offset', type: 'number', required: false, desc: 'Pagination offset.' },
          ],
          response: `{
  "data": [
    {
      "id": "inc_456",
      "endpoint_id": "ep_001",
      "type": "downtime",
      "severity": "critical",
      "started_at": "2026-03-12T08:15:00Z",
      "resolved_at": "2026-03-12T08:42:00Z",
      "diagnosis": {
        "cause": "Database connection pool exhausted",
        "suggestion": "Increase max pool size in config",
        "confidence": 0.92
      }
    }
  ]
}`,
        },
      ],
    },
    {
      id: 'reports',
      category: 'Rapports',
      items: [
        {
          method: 'GET',
          path: '/api/v1/projects/:id/reports',
          desc: 'Liste les rapports generes pour un projet.',
          params: [
            { name: 'type', type: 'string', required: false, desc: '"monitoring", "pentest" ou "all".' },
          ],
          response: `{
  "data": [
    {
      "id": "rpt_789",
      "type": "monitoring",
      "period": "2026-03-01/2026-03-12",
      "generated_at": "2026-03-12T00:00:00Z",
      "download_url": "/api/v1/reports/rpt_789/download"
    }
  ]
}`,
        },
        {
          method: 'GET',
          path: '/api/v1/reports/:id/download',
          desc: 'Telecharge un rapport au format PDF.',
          params: [],
          response: 'Binary PDF file (application/pdf)',
        },
      ],
    },
    {
      id: 'pentest',
      category: 'Pentest',
      items: [
        {
          method: 'POST',
          path: '/api/v1/projects/:id/pentest',
          desc: 'Lance un scan de securite OWASP Top 10 sur le projet.',
          params: [
            { name: 'tests', type: 'array', required: false, desc: 'Liste des tests a executer. Par defaut : tous les tests OWASP Top 10.' },
          ],
          response: `{
  "scan_id": "scan_abc",
  "status": "running",
  "started_at": "2026-03-12T14:00:00Z",
  "tests": ["sqli", "xss", "csrf", "idor", "traversal", "bruteforce"]
}`,
        },
        {
          method: 'GET',
          path: '/api/v1/projects/:id/pentest/:scan_id',
          desc: 'Recupere les resultats d\'un scan de securite.',
          params: [],
          response: `{
  "scan_id": "scan_abc",
  "status": "completed",
  "vulnerabilities": [
    {
      "type": "xss",
      "severity": "high",
      "endpoint": "/api/search?q=<script>",
      "description": "Reflected XSS via query parameter",
      "recommendation": "Sanitize user input with DOMPurify"
    }
  ],
  "summary": {
    "critical": 0,
    "high": 1,
    "medium": 2,
    "low": 3
  }
}`,
        },
      ],
    },
  ];

  const methodColor = {
    GET: '#22c55e',
    POST: '#3b82f6',
    PUT: '#f59e0b',
    DELETE: '#ef4444',
  };

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Ressources</div>
          <h1>API Reference</h1>
          <p>Integrez Sentinelle a vos outils avec notre API REST. Authentification par token JWT.</p>
        </div>
      </div>

      <div className="container page-content">
        {/* Base URL */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-server" /> URL de base</h2>
          <div className="api-base-url">
            <code>https://api.sentinelledev.fr/api/v1</code>
          </div>
          <p style={{ marginTop: 16 }}>Toutes les requetes doivent inclure le header d'authentification :</p>
          <pre className="api-code">Authorization: Bearer {'<votre_token_jwt>'}</pre>
          <p style={{ marginTop: 12, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Les reponses sont au format JSON. Les erreurs suivent le format standard avec les codes HTTP appropries (400, 401, 403, 404, 429, 500).
          </p>
        </section>

        {/* Rate limiting */}
        <section className="doc-section">
          <h2><i className="fa-solid fa-gauge-high" /> Limites de requetes</h2>
          <div className="doc-table-wrapper">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Requetes / minute</th>
                  <th>Requetes / jour</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Starter</td><td>30</td><td>1 000</td></tr>
                <tr><td>Pro</td><td>120</td><td>10 000</td></tr>
                <tr><td>Enterprise</td><td>Illimite</td><td>Illimite</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* API nav */}
        <div className="api-nav">
          {endpoints.map((section) => (
            <button
              key={section.id}
              className={`api-nav-btn ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.category}
            </button>
          ))}
        </div>

        {/* Endpoints */}
        {endpoints
          .filter((s) => s.id === activeSection)
          .map((section) => (
            <section key={section.id} className="doc-section">
              <h2>{section.category}</h2>
              {section.items.map((ep, i) => (
                <div key={i} className="api-endpoint">
                  <div className="api-endpoint-header">
                    <span className="api-method" style={{ background: methodColor[ep.method] }}>{ep.method}</span>
                    <code className="api-path">{ep.path}</code>
                  </div>
                  <p className="api-desc">{ep.desc}</p>

                  {ep.params.length > 0 && (
                    <div className="api-params">
                      <h4>Parametres</h4>
                      <div className="doc-table-wrapper">
                        <table className="doc-table">
                          <thead>
                            <tr>
                              <th>Nom</th>
                              <th>Type</th>
                              <th>Requis</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ep.params.map((p, j) => (
                              <tr key={j}>
                                <td><code>{p.name}</code></td>
                                <td>{p.type}</td>
                                <td>{p.required ? <span className="accent">Oui</span> : 'Non'}</td>
                                <td>{p.desc}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="api-response">
                    <h4>Reponse</h4>
                    <pre className="api-code">{ep.response}</pre>
                  </div>
                </div>
              ))}
            </section>
          ))}
      </div>
    </div>
  );
}
