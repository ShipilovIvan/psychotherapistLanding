const specialties = [
  "Anxiety & panic",
  "Relationship challenges",
  "Life transitions",
  "Creative blocks",
  "Identity exploration",
  "Trauma recovery",
];

export default function Home() {
  return (
    <main className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="wordmark">Asya Berezovskaya, LMHC</div>
          <nav className="primary-nav">
            <a href="#approach">Approach</a>
            <a href="#specialties">Specialties</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="pill-button" href="#contact">
            Book a consultation
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Psychotherapy in New York City & online</p>
            <h1>
              Gentle, collaborative therapy for people navigating complex emotional
              landscapes.
            </h1>
            <p className="lede">
              I help creatives, immigrants, LGBTQIA+ individuals, and thoughtful
              professionals cultivate deeper self-understanding, heal from past
              wounds, and move through the world with more ease.
            </p>
            <div className="cta-group">
              <a className="cta primary" href="#contact">
                Schedule a call
              </a>
              <a className="cta secondary" href="#approach">
                Explore approach
              </a>
            </div>
          </div>
          <aside className="credentials-card">
            <p className="card-eyebrow">Credentials</p>
            <ul>
              <li>Licensed Mental Health Counselor (NY)</li>
              <li>M.S. Counseling, Columbia University</li>
              <li>Advanced training in psychodynamic & relational therapy</li>
              <li>Fluent in English & Russian</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="approach" className="section">
        <div className="container split">
          <h2>A warm, attuned therapeutic relationship</h2>
          <div className="section-body">
            <p>
              Our work together is grounded in deep listening, cultural humility,
              and curiosity. I draw from psychodynamic, attachment-based, and
              somatic modalities to help you connect with your emotions, expand
              your capacity for joy, and build relationships that feel supportive
              and nourishing.
            </p>
            <p>
              Sessions move at a pace that feels right for you. We will notice
              patterns, experiment with new ways of being, and anchor into the
              resources that already exist within you.
            </p>
          </div>
        </div>
      </section>

      <section id="specialties" className="section highlight">
        <div className="container split">
          <div>
            <p className="eyebrow">Areas of focus</p>
            <h2>Support tailored to what matters most to you</h2>
            <p>
              Together we can address emotional stuckness, relational patterns,
              and the invisible pressures that shape your day-to-day life.
            </p>
          </div>
          <ul className="specialties-list">
            {specialties.map((item) => (
              <li key={item}>
                <span aria-hidden className="dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split about-grid">
          <div>
            <p className="eyebrow">About Asya</p>
            <h2>Thoughtful care rooted in lived experience</h2>
            <p>
              As a queer immigrant and former creative professional, I understand
              the complexity of navigating multiple identities. My practice is a
              place where your nuance, ambivalence, and artistry are welcome.
            </p>
            <p>
              We will co-create a space that honors your inner wisdom, while
              gently challenging the beliefs that keep you from feeling grounded
              and empowered.
            </p>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <h3>Practice details</h3>
              <ul>
                <li>Individual therapy for adults (18+)</li>
                <li>Virtual sessions across New York State</li>
                <li>Limited in-person availability in Brooklyn</li>
                <li>Sliding scale slots reserved for community care</li>
              </ul>
            </div>
            <div className="info-card outline">
              <h3>Values</h3>
              <p>
                Anti-oppressive, collaborative, and culturally responsive therapy
                that centers your autonomy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container split contact-grid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Ready to begin? Let’s connect.</h2>
            <p>
              Share a few details about what you&apos;re hoping for, and I will reach
              out within two business days to schedule a complimentary 20-minute
              consultation.
            </p>
            <div className="info-card outline">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@asyaberezovskaya.net">hello@asyaberezovskaya.net</a>
              </p>
              <p>
                <strong>Location:</strong> Brooklyn Heights & online for clients
                across New York State.
              </p>
            </div>
          </div>
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@email.com" />
            </label>
            <label>
              <span>How can I help?</span>
              <textarea rows={4} placeholder="Share a bit about what brings you to therapy" />
            </label>
            <button type="submit">Send message</button>
            <p className="disclaimer">
              This form is for initial contact only and does not create a
              therapeutic relationship.
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        © {new Date().getFullYear()} Asya Berezovskaya, LMHC
      </footer>
    </main>
  );
}
