export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Transform Your Digital Presence</h1>
              <p className="lead mb-4">
                We create stunning, responsive websites and applications that drive results. 
                From concept to deployment, we bring your vision to life with cutting-edge technology.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-gradient btn-lg px-4 py-2 text-white">Get Started</button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <i className="bi bi-laptop display-1 opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Why Choose TechFlow?</h2>
              <p className="lead text-muted">We deliver exceptional digital solutions tailored to your needs</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-primary bg-gradient d-inline-flex align-items-center justify-content-center text-white mb-3">
                    <i className="bi bi-lightning-charge fs-2"></i>
                  </div>
                  <h5 className="card-title">Lightning Fast</h5>
                  <p className="card-text text-muted">
                    Optimized performance and blazing-fast load times ensure your users have the best experience possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-success bg-gradient d-inline-flex align-items-center justify-content-center text-white mb-3">
                    <i className="bi bi-phone fs-2"></i>
                  </div>
                  <h5 className="card-title">Mobile First</h5>
                  <p className="card-text text-muted">
                    Responsive design that looks perfect on all devices, from smartphones to desktop computers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-warning bg-gradient d-inline-flex align-items-center justify-content-center text-white mb-3">
                    <i className="bi bi-shield-check fs-2"></i>
                  </div>
                  <h5 className="card-title">Secure & Reliable</h5>
                  <p className="card-text text-muted">
                    Built with security best practices and reliable infrastructure to keep your data safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="h2 fw-bold text-primary">500+</div>
              <p className="text-muted">Projects Completed</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="h2 fw-bold text-primary">98%</div>
              <p className="text-muted">Client Satisfaction</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="h2 fw-bold text-primary">24/7</div>
              <p className="text-muted">Support Available</p>
            </div>
            <div className="col-md-3 mb-4">
              <div className="h2 fw-bold text-primary">5+</div>
              <p className="text-muted">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Join hundreds of satisfied clients who have transformed their digital presence with TechFlow.
              </p>
              <button className="btn btn-gradient btn-lg px-5 py-3 text-white">
                Start Your Project Today
              </button>
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
      title: 'TechFlow - Modern Digital Solutions'
    }
  };
}

