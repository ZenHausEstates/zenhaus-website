import content from '../../content/content.json';
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.strategy.h1}</h1>
          <div className="grid">
            {content.strategy.sections.map((s,i)=>(
              <div className="card" key={i}>
                <strong>{s.title}</strong>
                <p className="small">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
