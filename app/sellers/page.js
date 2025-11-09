import content from '../../content/content.json';
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.sellers.h1}</h1>
          <div className="badges" style={{marginBottom:12}}>
            {content.sellers.bullets.map((b,i)=>(<span key={i}>{b}</span>))}
          </div>
          <ol className="small">
            {content.sellers.process.map((p,i)=>(<li key={i}>{p}</li>))}
          </ol>
          <h2 className="h2">Request an Offer</h2>
          <form name="seller-intake" method="POST" data-netlify="true" className="form">
            <input type="hidden" name="form-name" value="seller-intake" />
            <label>Full Name<input name="name" required /></label>
            <label>Property Address<input name="address" required /></label>
            <label>Units<input name="units" type="number" min="1" /></label>
            <label>Condition Notes<textarea name="condition" rows={4} /></label>
            <label>Desired Timeline<select name="timeline">
              <option>ASAP</option><option>30 days</option><option>60+ days</option>
            </select></label>
            <label>Phone<input name="phone" /></label>
            <label>Email<input name="email" type="email" required /></label>
            <button className="cta" type="submit">Submit</button>
            <div className="mini">We’ll reply within 1 business day.</div>
          </form>
        </div>
      </section>
    </div>
  );
}
