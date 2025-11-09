import content from '../../content/content.json';
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.partners.h1}</h1>
          <div className="grid">
            <div className="card"><strong>Agents</strong><p className="small">{content.partners.agents}</p></div>
            <div className="card"><strong>Contractors</strong><p className="small">{content.partners.contractors}</p></div>
            <div className="card"><strong>Lenders</strong><p className="small">{content.partners.lenders}</p></div>
          </div>
          <h2 className="h2">Partner With Us</h2>
          <form name="partner-intake" method="POST" data-netlify="true" className="form">
            <input type="hidden" name="form-name" value="partner-intake" />
            <label>Name / Company<input name="name" required /></label>
            <label>Role<select name="role">
              <option>Agent</option><option>Contractor</option><option>Lender</option><option>Other</option>
            </select></label>
            <label>City<input name="city" /></label>
            <label>Phone<input name="phone" /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Message<textarea name="message" rows={4} /></label>
            <button className="cta" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
