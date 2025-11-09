import content from '../../content/content.json';
const posts = [
  { title:'Why Southwest Florida, and why now', date:'2025-11-08', summary:'Regional focus and selection criteria.' },
  { title:'What “value-add” means to us', date:'2025-11-08', summary:'Light-to-moderate improvements that matter.' }
];
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.updates.h1}</h1>
          <p className="small">{content.updates.intro}</p>
          <div className="grid">
            {posts.map((p,i)=>(
              <div className="card" key={i}>
                <strong>{p.title}</strong>
                <div className="mini">{p.date}</div>
                <p className="small">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
