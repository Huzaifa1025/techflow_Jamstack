export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">About TechFlow</h1>
              <p className="lead">
                We're passionate about creating digital experiences that make a difference. 
                Our team combines creativity with technical expertise to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Our Story</h2>
              <p className="lead mb-4">
                Founded in 2020, TechFlow emerged from a simple belief: technology should enhance human experiences, not complicate them.
              </p>
              <p>
                We started as a small team of developers and designers who were frustrated with the complexity of modern web development. 
                Our mission was to create beautiful, functional websites that businesses could be proud of.
              </p>
              <p>
                Today, we've grown into a full-service digital agency, but our core values remain the same: simplicity, quality, and client satisfaction.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <i className="bi bi-people-fill display-1 text-primary opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-6 fw-bold">Our Values</h2>
              <p className="lead text-muted">The principles that guide everything we do</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-primary bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{width: '4rem', height: '4rem'}}>
                  <i className="bi bi-heart-fill fs-2"></i>
                </div>
                <h5>Passion</h5>
                <p className="text-muted">We love what we do, and it shows in every project we deliver.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-success bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{width: '4rem', height: '4rem'}}>
                  <i className="bi bi-star-fill fs-2"></i>
                </div>
                <h5>Excellence</h5>
                <p className="text-muted">We strive for perfection in every detail, no matter how small.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-warning bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{width: '4rem', height: '4rem'}}>
                  <i className="bi bi-people-fill fs-2"></i>
                </div>
                <h5>Partnership</h5>
                <p className="text-muted">We work closely with our clients as true partners in success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-6 fw-bold">Meet Our Team</h2>
              <p className="lead text-muted">The talented people behind TechFlow</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm team-card">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{width: '5rem', height: '5rem'}}>
                    <i className="bi bi-person-fill fs-1"></i>
                  </div>
                  <h5 className="card-title">Huzaifa Manasawala</h5>
                  <p className="text-muted mb-3">CEO & Founder</p>
                  <p className="card-text">Passionate about creating digital solutions that drive business growth.</p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-primary"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm team-card">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{width: '5rem', height: '5rem'}}>
                    <i className="bi bi-person-fill fs-1"></i>
                  </div>
                  <h5 className="card-title">Mike Chen</h5>
                  <p className="text-muted mb-3">Lead Developer</p>
                  <p className="card-text">Full-stack developer who loves clean code and innovative solutions. Expert in modern web technologies.</p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-primary"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm team-card">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{width: '5rem', height: '5rem'}}>
                    <i className="bi bi-person-fill fs-1"></i>
                  </div>
                  <h5 className="card-title">Emily Rodriguez</h5>
                  <p className="text-muted mb-3">UX/UI Designer</p>
                  <p className="card-text">Creative designer focused on user experience. Believes great design should be both beautiful and functional.</p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-primary"><i className="bi bi-dribbble"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-6 fw-bold text-center mb-5">Our Journey</h2>
              <div className="timeline-item mb-4">
                <h5>2020 - The Beginning</h5>
                <p className="text-muted">TechFlow was founded with a vision to simplify web development and create exceptional digital experiences.</p>
              </div>
              <div className="timeline-item mb-4">
                <h5>2021 - First Major Client</h5>
                <p className="text-muted">Landed our first enterprise client and delivered a complete digital transformation project.</p>
              </div>
              <div className="timeline-item mb-4">
                <h5>2022 - Team Expansion</h5>
                <p className="text-muted">Grew our team to 10+ talented professionals and opened our first office.</p>
              </div>
              <div className="timeline-item mb-4">
                <h5>2023 - Industry Recognition</h5>
                <p className="text-muted">Won "Best Web Development Agency" award and reached 100+ successful projects.</p>
              </div>
              <div className="timeline-item">
                <h5>2024 - Global Reach</h5>
                <p className="text-muted">Expanded internationally and launched our innovative SaaS platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'About Us - TechFlow'
    }
  };
}

