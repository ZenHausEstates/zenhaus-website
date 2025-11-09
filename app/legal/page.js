import content from '../../content/content.json';
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.legal.h1}</h1>
          <h2 className="h2">Purpose</h2>
          <p className="small">{content.legal.llc_purpose}</p>
          <h2 className="h2">Disclaimers</h2>
          <p className="small">{content.legal.disclaimer}</p>
          <h2 className="h2">Privacy</h2>
          <p className="small">We collect basic contact form information to respond to inquiries. We don’t sell data. For removal requests, email {content.site.contact_email}.</p>
          <h2 className="h2">Terms</h2>
          <p className="small">All information on this site is provided “as-is.” No warranties, express or implied.</p>
        </div>
      </section>
    </div>
  );
}
