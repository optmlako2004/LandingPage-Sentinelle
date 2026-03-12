import { Link } from 'react-router-dom';

export default function PolitiqueConfidentialite() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Legal</div>
          <h1>Politique de confidentialite</h1>
          <p>Comment Sentinelle collecte, utilise et protege vos donnees personnelles, conformement au RGPD.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Responsable du traitement</h2>
            <p>Le responsable du traitement des donnees personnelles est :</p>
            <div className="legal-info-block">
              <p><strong>Sentinelle SAS</strong></p>
              <p>12 rue de l'Innovation, 75011 Paris, France</p>
              <p>Email : <a href="mailto:dpo@sentinelledev.fr">dpo@sentinelledev.fr</a></p>
            </div>
            <p>Sentinelle SAS s'engage a proteger la vie privee des utilisateurs de son site et de ses services, conformement au Reglement (UE) 2016/679 du 27 avril 2016 (RGPD) et a la loi n° 78-17 du 6 janvier 1978 modifiee (loi Informatique et Libertes).</p>
          </section>

          <section className="legal-section">
            <h2>2. Donnees collectees</h2>
            <p>Dans le cadre de l'utilisation du site et des services Sentinelle, nous sommes susceptibles de collecter les categories de donnees suivantes :</p>

            <h3>2.1 Donnees d'identification</h3>
            <ul>
              <li>Nom et prenom</li>
              <li>Adresse email</li>
              <li>Mot de passe (stocke sous forme hashee et salee)</li>
            </ul>

            <h3>2.2 Donnees de facturation (plan Pro et Enterprise)</h3>
            <ul>
              <li>Raison sociale</li>
              <li>Adresse de facturation</li>
              <li>Numero de TVA intracommunautaire</li>
            </ul>
            <p>Les donnees de paiement (numero de carte bancaire) sont traitees directement par notre prestataire de paiement <strong>Stripe</strong> et ne sont jamais stockees sur nos serveurs.</p>

            <h3>2.3 Donnees techniques</h3>
            <ul>
              <li>Adresse IP</li>
              <li>Type et version du navigateur</li>
              <li>Systeme d'exploitation</li>
              <li>Pages consultees et dates d'acces</li>
              <li>Donnees de connexion (logs)</li>
            </ul>

            <h3>2.4 Donnees liees au service</h3>
            <ul>
              <li>URLs des endpoints surveilles</li>
              <li>Resultats des health checks et pentests</li>
              <li>Rapports generes</li>
              <li>Configuration des projets</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Finalites et bases legales du traitement</h2>
            <div className="doc-table-wrapper">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Finalite</th>
                    <th>Base legale</th>
                    <th>Duree de conservation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gestion du compte utilisateur</td>
                    <td>Execution du contrat (art. 6.1.b RGPD)</td>
                    <td>Duree de la relation contractuelle + 3 ans</td>
                  </tr>
                  <tr>
                    <td>Fourniture des services de monitoring</td>
                    <td>Execution du contrat (art. 6.1.b RGPD)</td>
                    <td>Duree de l'abonnement</td>
                  </tr>
                  <tr>
                    <td>Facturation et comptabilite</td>
                    <td>Obligation legale (art. 6.1.c RGPD)</td>
                    <td>10 ans (obligation comptable)</td>
                  </tr>
                  <tr>
                    <td>Amelioration du service</td>
                    <td>Interet legitime (art. 6.1.f RGPD)</td>
                    <td>26 mois maximum</td>
                  </tr>
                  <tr>
                    <td>Prospection commerciale</td>
                    <td>Consentement (art. 6.1.a RGPD)</td>
                    <td>Jusqu'au retrait du consentement</td>
                  </tr>
                  <tr>
                    <td>Mesure d'audience (cookies analytiques)</td>
                    <td>Consentement (art. 6.1.a RGPD)</td>
                    <td>13 mois (recommandation CNIL)</td>
                  </tr>
                  <tr>
                    <td>Securite et prevention de la fraude</td>
                    <td>Interet legitime (art. 6.1.f RGPD)</td>
                    <td>12 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="legal-section">
            <h2>4. Destinataires des donnees</h2>
            <p>Vos donnees personnelles peuvent etre transmises aux categories de destinataires suivantes :</p>
            <ul>
              <li><strong>Personnel habilite</strong> de Sentinelle SAS (equipe technique, support client)</li>
              <li><strong>Sous-traitants techniques</strong> : hebergement (OVHcloud, France), paiement (Stripe), envoi d'emails (service transactionnel)</li>
              <li><strong>Autorites competentes</strong> en cas d'obligation legale</li>
            </ul>
            <p>Sentinelle SAS ne vend ni ne loue vos donnees personnelles a des tiers. Tous nos sous-traitants sont situes dans l'Union europeenne ou offrent des garanties adequates conformement au RGPD.</p>
          </section>

          <section className="legal-section">
            <h2>5. Transferts de donnees hors UE</h2>
            <p>Par principe, vos donnees sont hebergees et traitees au sein de l'Union europeenne (France). En cas de transfert hors de l'UE, Sentinelle SAS s'assure que des garanties appropriees sont mises en place :</p>
            <ul>
              <li>Decision d'adequation de la Commission europeenne</li>
              <li>Clauses contractuelles types (CCT) approuvees par la Commission europeenne</li>
              <li>Regles d'entreprise contraignantes (BCR)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Vos droits</h2>
            <p>Conformement au RGPD et a la loi Informatique et Libertes, vous disposez des droits suivants :</p>
            <div className="doc-card-grid">
              <div className="doc-card">
                <h3>Droit d'acces</h3>
                <p>Obtenir la confirmation que vos donnees sont traitees et en recevoir une copie (art. 15 RGPD).</p>
              </div>
              <div className="doc-card">
                <h3>Droit de rectification</h3>
                <p>Faire corriger vos donnees inexactes ou incompletes (art. 16 RGPD).</p>
              </div>
              <div className="doc-card">
                <h3>Droit a l'effacement</h3>
                <p>Demander la suppression de vos donnees dans les conditions prevues (art. 17 RGPD).</p>
              </div>
              <div className="doc-card">
                <h3>Droit a la limitation</h3>
                <p>Demander la limitation du traitement de vos donnees (art. 18 RGPD).</p>
              </div>
              <div className="doc-card">
                <h3>Droit a la portabilite</h3>
                <p>Recevoir vos donnees dans un format structure et lisible par machine (art. 20 RGPD).</p>
              </div>
              <div className="doc-card">
                <h3>Droit d'opposition</h3>
                <p>Vous opposer au traitement de vos donnees pour des motifs legitimes (art. 21 RGPD).</p>
              </div>
            </div>
            <p style={{ marginTop: 24 }}>Pour exercer vos droits, contactez notre Delegue a la Protection des Donnees (DPO) :</p>
            <div className="legal-info-block">
              <p><strong>Email :</strong> <a href="mailto:dpo@sentinelledev.fr">dpo@sentinelledev.fr</a></p>
              <p><strong>Courrier :</strong> Sentinelle SAS - DPO, 12 rue de l'Innovation, 75011 Paris, France</p>
            </div>
            <p>Nous nous engageons a repondre a votre demande dans un delai d'un mois, conformement au RGPD. Ce delai peut etre prolonge de deux mois en cas de demande complexe.</p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies</h2>
            <p>Le site sentinelledev.fr utilise les categories de cookies suivantes :</p>
            <div className="doc-table-wrapper">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Type de cookie</th>
                    <th>Finalite</th>
                    <th>Duree</th>
                    <th>Consentement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cookies strictement necessaires</td>
                    <td>Fonctionnement du site (session, authentification)</td>
                    <td>Session</td>
                    <td>Non requis (art. 82 loi Informatique et Libertes)</td>
                  </tr>
                  <tr>
                    <td>Cookies analytiques</td>
                    <td>Mesure d'audience, amelioration du service</td>
                    <td>13 mois</td>
                    <td>Requis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Conformement aux recommandations de la CNIL, votre consentement est recueilli avant le depot de cookies non essentiels. Vous pouvez modifier vos preferences a tout moment.</p>
          </section>

          <section className="legal-section">
            <h2>8. Securite des donnees</h2>
            <p>Sentinelle SAS met en oeuvre les mesures techniques et organisationnelles appropriees pour garantir la securite de vos donnees :</p>
            <ul>
              <li>Chiffrement des communications en TLS 1.3</li>
              <li>Chiffrement des donnees au repos (AES-256)</li>
              <li>Hashage des mots de passe (bcrypt avec salage)</li>
              <li>Authentification a deux facteurs (2FA) disponible</li>
              <li>Sauvegardes quotidiennes chiffrees</li>
              <li>Acces restreint aux donnees selon le principe du moindre privilege</li>
              <li>Audits de securite reguliers</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Notification de violation de donnees</h2>
            <p>En cas de violation de donnees a caractere personnel susceptible d'engendrer un risque pour vos droits et libertes, Sentinelle SAS s'engage a :</p>
            <ul>
              <li>Notifier la CNIL dans les 72 heures suivant la prise de connaissance de la violation (art. 33 RGPD)</li>
              <li>Vous informer dans les meilleurs delais si la violation est susceptible d'engendrer un risque eleve pour vos droits et libertes (art. 34 RGPD)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Reclamation aupres de la CNIL</h2>
            <p>Si vous estimez que le traitement de vos donnees personnelles constitue une violation du RGPD, vous avez le droit d'introduire une reclamation aupres de la Commission Nationale de l'Informatique et des Libertes (CNIL) :</p>
            <div className="legal-info-block">
              <p><strong>CNIL</strong></p>
              <p>3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
              <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
              <p>Telephone : +33 (0)1 53 73 22 22</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>11. Modification de la politique</h2>
            <p>Sentinelle SAS se reserve le droit de modifier la presente politique de confidentialite a tout moment. Toute modification substantielle sera portee a votre connaissance par email ou par notification sur le site. La date de derniere mise a jour est indiquee ci-dessous.</p>
          </section>

          <p className="legal-update">Derniere mise a jour : 1er mars 2026</p>
        </div>
      </div>
    </div>
  );
}
