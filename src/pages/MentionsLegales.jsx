import { Link } from 'react-router-dom';

export default function MentionsLegales() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <div className="page-label">Legal</div>
          <h1>Mentions legales</h1>
          <p>Conformement aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'economie numerique (LCEN).</p>
        </div>
      </div>

      <div className="container page-content">
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Editeur du site</h2>
            <p>Le site <strong>sentinelledev.fr</strong> est edite par :</p>
            <div className="legal-info-block">
              <p><strong>Raison sociale :</strong> Sentinelle SAS</p>
              <p><strong>Forme juridique :</strong> Societe par Actions Simplifiee (SAS)</p>
              <p><strong>Capital social :</strong> 1 000 euros</p>
              <p><strong>Siege social :</strong> 12 rue de l'Innovation, 75011 Paris, France</p>
              <p><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
              <p><strong>RCS :</strong> Paris B XXX XXX XXX</p>
              <p><strong>Numero de TVA intracommunautaire :</strong> FR XX XXX XXX XXX</p>
              <p><strong>Directeur de la publication :</strong> JEMAI Mehar</p>
              <p><strong>Email :</strong> <a href="mailto:contact@sentinelledev.fr">contact@sentinelledev.fr</a></p>
              <p><strong>Telephone :</strong> +33 (0)1 XX XX XX XX</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>2. Hebergeur</h2>
            <div className="legal-info-block">
              <p><strong>Raison sociale :</strong> OVHcloud</p>
              <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
              <p><strong>Telephone :</strong> +33 (0)9 72 10 10 07</p>
              <p><strong>Site web :</strong> <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a></p>
            </div>
            <p>Les donnees sont hebergees en France, conformement au Reglement General sur la Protection des Donnees (RGPD) et aux recommandations de la CNIL.</p>
          </section>

          <section className="legal-section">
            <h2>3. Propriete intellectuelle</h2>
            <p>L'ensemble des contenus presents sur le site sentinelledev.fr (textes, images, logos, icones, logiciels, base de donnees, design, architecture) est protege par les dispositions du Code de la propriete intellectuelle et par les conventions internationales en vigueur.</p>
            <p>Toute reproduction, representation, modification, publication, distribution, retransmission, ou exploitation commerciale de tout ou partie du contenu du site, par quelque procede que ce soit, sans l'autorisation prealable ecrite de Sentinelle SAS, est strictement interdite et constituerait une contrefacon sanctionnee par les articles L.335-2 et suivants du Code de la propriete intellectuelle.</p>
            <p>Les marques, logos et noms de domaine sont la propriete exclusive de Sentinelle SAS. Toute utilisation non autorisee est passible de poursuites.</p>
          </section>

          <section className="legal-section">
            <h2>4. Limitation de responsabilite</h2>
            <p>Sentinelle SAS s'efforce de fournir sur le site des informations aussi precises que possible. Toutefois, elle ne pourra etre tenue responsable des omissions, des inexactitudes ou des carences dans la mise a jour, qu'elles soient de son fait ou du fait de tiers partenaires.</p>
            <p>Sentinelle SAS ne pourra etre tenue responsable des dommages directs ou indirects causes au materiel de l'utilisateur lors de l'acces au site, resultant soit de l'utilisation d'un materiel ne repondant pas aux specifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilite.</p>
            <p>Sentinelle SAS ne pourra egalement etre tenue responsable des dommages indirects (tels que perte de marche ou perte d'opportunite) consecutifs a l'utilisation du site.</p>
          </section>

          <section className="legal-section">
            <h2>5. Liens hypertextes</h2>
            <p>Le site sentinelledev.fr peut contenir des liens hypertextes vers d'autres sites internet. Sentinelle SAS n'exerce aucun controle sur ces sites et decline toute responsabilite quant a leur contenu.</p>
            <p>La mise en place de liens hypertextes vers le site sentinelledev.fr est autorisee sans demande prealable, sous reserve que ces liens ne portent pas atteinte a l'image de Sentinelle SAS.</p>
          </section>

          <section className="legal-section">
            <h2>6. Protection des donnees personnelles</h2>
            <p>Conformement au Reglement (UE) 2016/679 du 27 avril 2016 (RGPD) et a la loi n° 78-17 du 6 janvier 1978 modifiee relative a l'informatique, aux fichiers et aux libertes (loi Informatique et Libertes), vous disposez de droits sur vos donnees personnelles.</p>
            <p>Pour plus d'informations, consultez notre <Link to="/politique-de-confidentialite">politique de confidentialite</Link>.</p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies</h2>
            <p>Le site sentinelledev.fr utilise des cookies strictement necessaires au fonctionnement du service (cookies de session, d'authentification). Des cookies de mesure d'audience peuvent egalement etre utilises, sous reserve de votre consentement prealable, conformement aux recommandations de la CNIL.</p>
            <p>Vous pouvez configurer votre navigateur pour refuser les cookies. Toutefois, certaines fonctionnalites du site pourraient ne plus etre accessibles.</p>
          </section>

          <section className="legal-section">
            <h2>8. Droit applicable et juridiction competente</h2>
            <p>Les presentes mentions legales sont regies par le droit francais. En cas de litige, et apres tentative de resolution amiable, competence est attribuee aux tribunaux competents de Paris, France.</p>
            <p>Conformement aux dispositions du Code de la consommation concernant le reglement amiable des litiges, l'utilisateur peut recourir au service de mediation MEDICYS : <a href="https://www.medicys.fr" target="_blank" rel="noopener noreferrer">www.medicys.fr</a> ou par courrier a MEDICYS, 73 Boulevard de Clichy, 75009 Paris.</p>
            <p>L'utilisateur peut egalement presenter sa reclamation sur la plateforme europeenne de reglement en ligne des litiges : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>
          </section>

          <section className="legal-section">
            <h2>9. Contact</h2>
            <p>Pour toute question concernant les presentes mentions legales, vous pouvez nous contacter :</p>
            <div className="legal-info-block">
              <p><strong>Email :</strong> <a href="mailto:legal@sentinelledev.fr">legal@sentinelledev.fr</a></p>
              <p><strong>Adresse :</strong> Sentinelle SAS, 12 rue de l'Innovation, 75011 Paris, France</p>
            </div>
          </section>

          <p className="legal-update">Dernieres mise a jour : 1er mars 2026</p>
        </div>
      </div>
    </div>
  );
}
