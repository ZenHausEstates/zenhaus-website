import content from '../../content/content.json';
export default function Page(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>{content.about.h1}</h1>
          <p className="small">{content.about.body}</p>
        </div>
      </section>
    </div>
  );
}
