export default function SellersPage() {
  return (
    <main className="container">
      <h1>Sell Your Property to ZenHaus</h1>
      <p>We buy homes directly — no agents, no commissions, no hassle.</p>
      <form action="https://formspree.io/f/xayrwdnr" method="POST">
        <label>Name<br/><input type="text" name="name" required /></label><br/>
        <label>Email<br/><input type="email" name="email" required /></label><br/>
        <label>Phone<br/><input type="text" name="phone" /></label><br/>
        <label>Property Address<br/><input type="text" name="address" required /></label><br/>
        <label>Message<br/><textarea name="message" rows="4"></textarea></label><br/>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
