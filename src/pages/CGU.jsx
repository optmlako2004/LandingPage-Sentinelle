import { Link } from 'react-router-dom';

export default function CGU() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Legal</div>
          <h1>Conditions Generales d'Utilisation</h1>
          <p>Les presentes CGU regissent l'utilisation du site et des services proposes par Sentinelle.</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Objet</h2>
            <p>Les presentes Conditions Generales d'Utilisation (ci-apres "CGU") ont pour objet de definir les conditions d'acces et d'utilisation du site <strong>sentinelledev.fr</strong> et des services proposes par la societe Sentinelle SAS (ci-apres "Sentinelle"), societe par actions simplifiee au capital de 1 000 euros, immatriculee au RCS de Paris, dont le siege social est situe au 12 rue de l'Innovation, 75011 Paris, France.</p>
            <p>L'utilisation du site et des services implique l'acceptation pleine et entiere des presentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser le site ni les services.</p>
          </section>

          <section className="legal-section">
            <h2>2. Definitions</h2>
            <ul>
              <li><strong>"Utilisateur"</strong> : toute personne physique ou morale qui accede au site ou utilise les services Sentinelle.</li>
              <li><strong>"Services"</strong> : l'ensemble des fonctionnalites proposees par Sentinelle, incluant le monitoring d'endpoints, le diagnostic IA, les tests de securite (pentest), la generation de rapports et l'auto-fix.</li>
              <li><strong>"Compte"</strong> : l'espace personnel de l'Utilisateur cree lors de son inscription.</li>
              <li><strong>"Projet"</strong> : une application ou un ensemble d'endpoints configures par l'Utilisateur dans le cadre des Services.</li>
              <li><strong>"Endpoint"</strong> : une URL surveillee par les Services Sentinelle.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Inscription et compte utilisateur</h2>
            <h3>3.1 Creation de compte</h3>
            <p>L'acces aux Services necessite la creation d'un compte. L'Utilisateur doit fournir des informations exactes, completes et a jour. Il s'engage a mettre a jour ses informations en cas de changement.</p>
            <p>L'Utilisateur doit etre age d'au moins 18 ans ou avoir l'autorisation de son representant legal. Pour les personnes morales, l'Utilisateur declare etre dument habilite a agir au nom et pour le compte de l'entite qu'il represente.</p>

            <h3>3.2 Securite du compte</h3>
            <p>L'Utilisateur est responsable de la confidentialite de ses identifiants de connexion (email et mot de passe). Toute utilisation du compte est presumee etre faite par l'Utilisateur. En cas d'utilisation non autorisee, l'Utilisateur doit en informer Sentinelle immediatement a l'adresse <a href="mailto:security@sentinelledev.fr">security@sentinelledev.fr</a>.</p>

            <h3>3.3 Suppression du compte</h3>
            <p>L'Utilisateur peut supprimer son compte a tout moment depuis les parametres de son dashboard. La suppression entraine l'effacement definitif de ses donnees conformement a notre <Link to="/politique-de-confidentialite">politique de confidentialite</Link>, sous reserve des obligations legales de conservation.</p>
          </section>

          <section className="legal-section">
            <h2>4. Description des services</h2>
            <p>Sentinelle propose un service de monitoring et de securite des applications web comprenant :</p>
            <ul>
              <li><strong>Health Check continu</strong> : surveillance periodique de la disponibilite et des performances des endpoints.</li>
              <li><strong>Diagnostic IA</strong> : analyse automatisee des incidents par intelligence artificielle avec identification de la cause probable et suggestion de correctif.</li>
              <li><strong>Pentest automatique</strong> : tests de securite bases sur le referentiel OWASP Top 10.</li>
              <li><strong>Rapports PDF</strong> : generation automatique de rapports detailles.</li>
              <li><strong>Alertes</strong> : notifications en temps reel par email, Slack ou Discord.</li>
              <li><strong>Mode Acteur</strong> (plan Pro et superieur) : generation automatique de patches et creation de Pull Requests sur GitHub.</li>
            </ul>
            <p>Les fonctionnalites disponibles dependent du plan souscrit (Starter, Pro ou Enterprise).</p>
          </section>

          <section className="legal-section">
            <h2>5. Offres et tarification</h2>
            <h3>5.1 Plans</h3>
            <p>Sentinelle propose plusieurs plans dont les details sont disponibles sur la page <a href="/#pricing">Tarifs</a> du site. Le plan Starter est gratuit et sans limite de duree.</p>

            <h3>5.2 Paiement</h3>
            <p>Le paiement des plans payants (Pro, Enterprise) s'effectue par carte bancaire via notre prestataire de paiement securise <strong>Stripe</strong>. Les prix sont indiques en euros, toutes taxes comprises (TTC) pour les particuliers, et hors taxes (HT) pour les professionnels assujettis a la TVA.</p>

            <h3>5.3 Facturation</h3>
            <p>La facturation est mensuelle ou annuelle selon le choix de l'Utilisateur. Les factures sont disponibles dans l'espace client et envoyees par email, conformement aux exigences de l'article 289 du Code general des impots.</p>

            <h3>5.4 Droit de retractation</h3>
            <p>Conformement a l'article L.221-28 du Code de la consommation, le droit de retractation ne peut etre exerce pour les contrats de fourniture de contenu numerique non fourni sur un support materiel dont l'execution a commence avec l'accord du consommateur. En souscrivant a un plan payant et en utilisant immediatement le service, l'Utilisateur consommateur reconnait renoncer expressement a son droit de retractation.</p>
            <p>Toutefois, Sentinelle propose une periode d'essai gratuite de 14 jours pour le plan Pro, permettant de tester le service avant tout engagement financier.</p>
          </section>

          <section className="legal-section">
            <h2>6. Obligations de l'utilisateur</h2>
            <p>L'Utilisateur s'engage a :</p>
            <ul>
              <li>Utiliser les Services conformement a leur destination et aux presentes CGU.</li>
              <li>Ne surveiller que des endpoints dont il est proprietaire ou pour lesquels il dispose d'une autorisation explicite.</li>
              <li>Ne pas utiliser les fonctionnalites de pentest sur des systemes tiers sans autorisation ecrite prealable.</li>
              <li>Ne pas tenter de contourner les limitations techniques du service (rate limiting, quotas).</li>
              <li>Ne pas utiliser les Services a des fins illicites, notamment pour porter atteinte a la securite de systemes informatiques tiers (article 323-1 et suivants du Code penal).</li>
              <li>Ne pas revendre ou redistribuer les Services sans autorisation prealable ecrite de Sentinelle.</li>
              <li>Respecter la legislation en vigueur, notamment la loi Godfrain (loi n° 88-19 du 5 janvier 1988) et les dispositions du Code penal relatives aux atteintes aux systemes de traitement automatise de donnees.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Obligations de Sentinelle</h2>
            <p>Sentinelle s'engage a :</p>
            <ul>
              <li>Fournir les Services avec diligence et selon les regles de l'art.</li>
              <li>Mettre en oeuvre les moyens necessaires pour assurer la disponibilite et la securite des Services.</li>
              <li>Informer l'Utilisateur de toute interruption planifiee des Services avec un preavis raisonnable.</li>
              <li>Proteger les donnees personnelles de l'Utilisateur conformement au RGPD et a notre <Link to="/politique-de-confidentialite">politique de confidentialite</Link>.</li>
            </ul>
            <p>Sentinelle est soumise a une obligation de moyens et non de resultat. Les Services sont fournis "en l'etat" et Sentinelle ne garantit pas l'absence totale d'interruptions ou d'erreurs.</p>
          </section>

          <section className="legal-section">
            <h2>8. Propriete intellectuelle</h2>
            <p>L'ensemble des elements composant le site et les Services (logiciels, interfaces, textes, algorithmes, bases de donnees, visuels, logos) sont la propriete exclusive de Sentinelle SAS et sont proteges par le droit de la propriete intellectuelle.</p>
            <p>L'Utilisateur conserve la propriete de l'ensemble de ses donnees et contenus integres dans les Services. Il accorde a Sentinelle une licence d'utilisation limitee, necessaire a la fourniture des Services.</p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation de responsabilite</h2>
            <p>Dans les limites autorisees par la loi :</p>
            <ul>
              <li>Sentinelle ne saurait etre tenue responsable des dommages indirects (perte de chiffre d'affaires, perte de donnees, perte d'opportunite, atteinte a l'image) resultant de l'utilisation ou de l'impossibilite d'utiliser les Services.</li>
              <li>La responsabilite totale de Sentinelle est limitee au montant des sommes versees par l'Utilisateur au cours des 12 derniers mois precedant le fait generateur.</li>
              <li>Sentinelle n'est pas responsable des diagnostics et recommandations generes par l'intelligence artificielle. Ces elements sont fournis a titre indicatif et ne substituent pas l'analyse d'un professionnel.</li>
              <li>En mode Acteur, les patches et Pull Requests generes automatiquement sont fournis sous la responsabilite de l'Utilisateur qui les accepte et les integre a son code.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Force majeure</h2>
            <p>Sentinelle ne pourra etre tenue responsable de l'inexecution de ses obligations en cas de force majeure telle que definie par l'article 1218 du Code civil, notamment : catastrophes naturelles, pannes de reseau internet, actes gouvernementaux, greves, pannes d'hebergeur tiers.</p>
          </section>

          <section className="legal-section">
            <h2>11. Resiliation</h2>
            <h3>11.1 Resiliation par l'Utilisateur</h3>
            <p>L'Utilisateur peut resilier son abonnement a tout moment depuis les parametres de son compte. La resiliation prend effet a la fin de la periode de facturation en cours. Aucun remboursement au prorata ne sera effectue pour la periode restante.</p>

            <h3>11.2 Resiliation par Sentinelle</h3>
            <p>Sentinelle se reserve le droit de suspendre ou de resilier le compte d'un Utilisateur en cas de :</p>
            <ul>
              <li>Violation des presentes CGU</li>
              <li>Utilisation frauduleuse ou abusive des Services</li>
              <li>Non-paiement des sommes dues (apres mise en demeure restee infructueuse pendant 15 jours)</li>
              <li>Comportement portant atteinte a la securite ou au bon fonctionnement des Services</li>
            </ul>
            <p>En cas de manquement grave, la resiliation peut etre immediate et sans preavis.</p>
          </section>

          <section className="legal-section">
            <h2>12. Disponibilite des services</h2>
            <p>Sentinelle s'efforce d'assurer la disponibilite des Services 24h/24 et 7j/7. Toutefois, Sentinelle se reserve le droit d'interrompre temporairement les Services pour des operations de maintenance, de mise a jour ou d'amelioration, en informant au prealable les Utilisateurs dans la mesure du possible.</p>
            <p>L'etat de disponibilite des Services est consultable sur la page <Link to="/status">Status</Link>.</p>
          </section>

          <section className="legal-section">
            <h2>13. Modification des CGU</h2>
            <p>Sentinelle se reserve le droit de modifier les presentes CGU a tout moment. Les modifications entreront en vigueur 30 jours apres leur publication sur le site. L'Utilisateur sera informe par email de toute modification substantielle. La poursuite de l'utilisation des Services apres l'entree en vigueur des nouvelles CGU vaut acceptation.</p>
          </section>

          <section className="legal-section">
            <h2>14. Droit applicable et juridiction</h2>
            <p>Les presentes CGU sont soumises au droit francais.</p>
            <p><strong>Pour les Utilisateurs professionnels :</strong> tout litige relatif a l'interpretation ou a l'execution des presentes CGU sera soumis a la competence exclusive des tribunaux de commerce de Paris.</p>
            <p><strong>Pour les Utilisateurs consommateurs :</strong> conformement aux dispositions du Code de la consommation relatives au reglement amiable des litiges, l'Utilisateur peut recourir au service de mediation MEDICYS (<a href="https://www.medicys.fr" target="_blank" rel="noopener noreferrer">www.medicys.fr</a>). L'Utilisateur peut egalement saisir la plateforme europeenne de reglement en ligne des litiges : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>
            <p>A defaut de resolution amiable, le litige sera porte devant les tribunaux competents conformement aux regles de droit commun.</p>
          </section>

          <section className="legal-section">
            <h2>15. Dispositions generales</h2>
            <p><strong>Integralite :</strong> les presentes CGU constituent l'integralite de l'accord entre l'Utilisateur et Sentinelle concernant l'utilisation des Services, et remplacent tout accord anterieur.</p>
            <p><strong>Nullite partielle :</strong> si l'une des dispositions des presentes CGU etait declaree nulle ou inapplicable par une juridiction competente, les autres dispositions resteraient en vigueur.</p>
            <p><strong>Tolerance :</strong> le fait que Sentinelle ne se prevale pas a un moment donne de l'une des dispositions des presentes CGU ne pourra etre interprete comme valant renonciation a se prevaloir ulterieurement de l'une de ces dispositions.</p>
          </section>

          <section className="legal-section">
            <h2>16. Contact</h2>
            <p>Pour toute question relative aux presentes CGU :</p>
            <div className="legal-info-block">
              <p><strong>Email :</strong> <a href="mailto:legal@sentinelledev.fr">legal@sentinelledev.fr</a></p>
              <p><strong>Adresse :</strong> Sentinelle SAS, 12 rue de l'Innovation, 75011 Paris, France</p>
            </div>
          </section>

          <p className="legal-update">Derniere mise a jour : 1er mars 2026</p>
        </div>
      </div>
    </div>
  );
}
