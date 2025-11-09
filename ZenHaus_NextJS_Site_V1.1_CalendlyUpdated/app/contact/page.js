import content from '../../content/content.json';
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.contact.h1}</h1>
          <p className="small">{content.contact.sub}</p>
          <div style={{margin:'16px 0'}}>
            <iframe
              title="Calendly"
              src={content.site.calendly_url}
              style={{minWidth:'320px', width:'100%', height:'680px', border:'1px solid var(--border)', borderRadius:'12px'}}
            />
          </div>
          <h2 className="h2">Prefer email?</h2>
          <form name="contact" method="POST" data-netlify="true" className="form">
            <input type="hidden" name="form-name" value="contact" />
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" /></label>
            <label>Topic<select name="topic">
              <option>Seller</option><option>Agent</option><option>Contractor</option><option>Lender</option><option>Other</option>
            </select></label>
            <label>Message<textarea name="message" rows={4} /></label>
            <button className="cta" type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}
