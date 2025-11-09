export default function ContactPage() {
  return (
    <main className="container">
      <h1>Contact ZenHaus Estates</h1>
      <p>Email: <a href="mailto:hello@zenhausestates.com">hello@zenhausestates.com</a></p>
      <p>Phone: <a href="tel:+19414442123">(941) 444-2123</a></p>
      <p>Schedule a meeting below:</p>
      <iframe src="https://calendly.com/zenhaus/new-meeting" width="100%" height="600" frameBorder="0"></iframe>
    </main>
  );
}
