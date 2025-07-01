import React from 'react';

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
          <p className="lead">Have a project or opportunity in mind? Let’s connect.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm contact-card h-100 text-center p-4">
                <div className="bg-primary bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{ width: '4rem', height: '4rem' }}>
                  <i className="bi bi-geo-alt-fill fs-2"></i>
                </div>
                <h5 className="card-title">Location</h5>
                <p className="text-muted">Mazgaon, Mumbai<br />Maharashtra, 400010</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm contact-card h-100 text-center p-4">
                <div className="bg-success bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{ width: '4rem', height: '4rem' }}>
                  <i className="bi bi-telephone-fill fs-2"></i>
                </div>
                <h5 className="card-title">Call Me</h5>
                <p className="text-muted">+91 9920 129765<br />Available Mon–Sat</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm contact-card h-100 text-center p-4">
                <div className="bg-warning bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" style={{ width: '4rem', height: '4rem' }}>
                  <i className="bi bi-envelope-fill fs-2"></i>
                </div>
                <h5 className="card-title">Email</h5>
                <p className="text-muted">hr@techflow.com<br />support@techflow.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h2 className="display-6 fw-bold text-center mb-4">Send a Message</h2>
                  <p className="text-center text-muted mb-4">Fill out the form and I’ll respond shortly.</p>

                  <form
                    action="https://formspree.io/f/mrbkjrwk"
                    method="POST"
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name *</label>
                        <input type="text" className="form-control" name="firstName" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name *</label>
                        <input type="text" className="form-control" name="lastName" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email Address *</label>
                        <input type="email" className="form-control" name="email" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message *</label>
                        <textarea className="form-control" name="message" rows="5" required></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-gradient btn-lg px-5 py-3 text-white">
                          <i className="bi bi-send-fill me-2"></i>Send Message
                        </button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="display-6 fw-bold mb-4">Find Our Office</h2>
          <div className="map-placeholder">
            <div>
              <i className="bi bi-map display-1 text-muted mb-3"></i>
              <p className="text-muted">Interactive map</p>
              <small className="text-muted">Anjirwadi, Mazgaon, Mumbai-400010</small>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-6 fw-bold text-center mb-5">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    How long does a typical project take?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    What's included in your web development service?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Our comprehensive service includes design consultation, responsive web development, content management system setup, SEO optimization, testing, deployment, and 3 months of free support and maintenance.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    Do you provide ongoing maintenance?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes! We offer various maintenance packages including security updates, content updates, performance monitoring, and technical support. We believe in long-term partnerships with our clients.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
