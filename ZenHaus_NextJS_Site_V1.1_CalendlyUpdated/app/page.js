import content from '../content/content.json';
import Link from 'next/link';

export default function Page(){
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>{content.home.hero_h1}</h1>
          <p>{content.home.sub}</p>
          <div className="hstack badges">
            {content.home.badges.map((b,i)=>(<span key={i}>{b}</span>))}
          </div>
          <div style={{marginTop:16}}>
            <Link href="/contact" className="cta">Book an Intro Call</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Our Approach</h2>
          <div className="grid">
            {content.home.value_points.map((v,i)=>(
              <div className="card" key={i}>
                <strong>{v.title}</strong>
                <p className="small">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
