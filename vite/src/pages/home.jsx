import './home.css'

const capabilities = [
  {
    number: '01',
    title: 'Intelligent automation',
    description:
      'Turn repetitive, manual work into dependable workflows that give people more time for meaningful work.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 14h12v10H9zM27 24h12v10H27zM15 24v10h12M33 24V14H21" />
        <circle cx="15" cy="19" r="2" />
        <circle cx="33" cy="29" r="2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Data engineering',
    description:
      'Build connected data foundations and pipelines that make information easier to trust, find, and use.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse cx="24" cy="12" rx="12" ry="5" />
        <path d="M12 12v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8M12 20v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8M12 28v8c0 2.8 5.4 5 12 5s12-2.2 12-5v-8" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Enterprise systems',
    description:
      'Bring tools, teams, and processes together with technology designed around the way organizations work.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="8" width="14" height="12" rx="3" />
        <rect x="27" y="28" width="14" height="12" rx="3" />
        <path d="M21 14h6a6 6 0 0 1 6 6v8M27 34h-6a6 6 0 0 1-6-6v-8" />
      </svg>
    ),
  },
]

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="IITM Centre of Excellence home">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="21" />
          <path d="M13 31h7l6-12 7 18 6-12h4M17 14h.1M26 10h.1M35 14h.1" />
          <circle cx="26" cy="19" r="3" />
        </svg>
      </span>
      <span className="brand-type">
        <strong>IITM</strong>
        <span>Centre of Excellence</span>
        <small>Automation and Data Engineering</small>
      </span>
    </a>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M10 4l6 6-6 6" />
    </svg>
  )
}

function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="main-nav" aria-label="Main navigation">
            <a className="nav-link nav-link-active" href="#home" aria-current="page">
              Home
            </a>
            <a className="nav-link" href="#expertise">
              Product
            </a>
            <a className="nav-link" href="#careers">
              Careers
            </a>
            <a className="nav-cta" href="#about">
              About us <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                IITM Centre of Excellence
              </p>
              <h1 id="hero-title">
                Central Excellence
                <span>for a smarter,</span>
                <span className="title-accent">more connected world.</span>
              </h1>
              <p className="hero-description">
                We connect data, workflows, and intelligence to create technology
                that moves organizations from manual processes to autonomous
                operations.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#expertise">
                  Explore our work <ArrowIcon />
                </a>
                <a className="text-link" href="#about">
                  Discover the Centre <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-note">
                <span className="note-dot" aria-hidden="true" />
                Automation <span aria-hidden="true">·</span> Data engineering{' '}
                <span aria-hidden="true">·</span> Enterprise systems
              </div>
            </div>

            {/* <div className="hero-art" aria-hidden="true">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-orbit orbit-three" />
              <div className="art-core">
                <span className="core-label">CONNECTED</span>
                <svg viewBox="0 0 220 220">
                  <path d="M48 72h57l35 38h34M48 148h57l35-38M105 72v76" />
                  <circle cx="48" cy="72" r="13" />
                  <circle cx="48" cy="148" r="13" />
                  <circle cx="105" cy="72" r="11" />
                  <circle cx="105" cy="148" r="11" />
                  <circle cx="140" cy="110" r="16" />
                  <circle cx="174" cy="110" r="12" />
                </svg>
                <span className="core-caption">Ideas into impact</span>
              </div>
              <span className="art-tag tag-data">Data</span>
              <span className="art-tag tag-flow">Workflows</span>
              <span className="art-tag tag-intelligence">Intelligence</span>
              <span className="art-spark spark-one" />
              <span className="art-spark spark-two" />
              <span className="art-spark spark-three" />
            </div> */}
          </div>
          <a className="scroll-cue" href="#expertise">
            <span className="scroll-line" />
            Scroll to explore
          </a>
        </section>

        <section
          className="expertise section-light"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-dark">
                  <span className="eyebrow-line" />
                  What we do
                </p>
                <h2 id="expertise-title">
                  Technology that works
                  <br />
                  <span>better, together.</span>
                </h2>
              </div>
              <p className="section-intro">
                From automating repetitive workflows to building robust data
                pipelines and intelligent enterprise systems, we focus on
                technology that works seamlessly within existing operations.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.number}>
                  <div className="card-topline">
                    <span className="card-number">{capability.number}</span>
                    <span className="card-icon">{capability.icon}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <a
                    className="card-link"
                    href="#about"
                    aria-label={`Learn about ${capability.title}`}
                  >
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner">
            <div className="about-heading">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-line" />
                From complexity to clarity
              </p>
              <h2 id="about-title">
                Built for the way
                <br />
                <span>business moves.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                We connect data, workflows, and intelligence to create
                technology that moves organizations from manual processes to
                autonomous operations.
              </p>
              <p>
                By bringing automation, data engineering, and enterprise
                systems together, we help make complex operations simpler,
                more connected, and ready for what comes next.
              </p>
              <a className="button button-light" href="#expertise">
                Explore our expertise <ArrowIcon />
              </a>
            </div>
            <div className="about-footer">
              <span>Make the complex work beautifully.</span>
              <span className="about-decoration" aria-hidden="true">
                IITM <span>×</span> CoE
              </span>
            </div>
          </div>
        </section>

        <section className="careers-strip" id="careers">
          <div className="careers-inner">
            <div>
              <p className="eyebrow eyebrow-dark">
                <span className="eyebrow-line" />
                Careers
              </p>
              <h2>Help build what comes next.</h2>
            </div>
            <a className="button button-outline" href="#about">
              Learn about the Centre <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <BrandMark />
          <p>
            Advancing automation and data engineering
            <span>© {new Date().getFullYear()} IITM Centre of Excellence</span>
          </p>
          <a className="back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Home
