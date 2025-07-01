import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Layout({ children, title = 'TechFlow - Modern Digital Solutions' }) {
  const router = useRouter();

  useEffect(() => {
    // Load Bootstrap JS
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">
            <i className="bi bi-lightning-charge-fill me-2"></i>TechFlow
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  href="/" 
                  className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/about" 
                  className={`nav-link ${router.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  href="/contact" 
                  className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5><i className="bi bi-lightning-charge-fill me-2"></i>TechFlow</h5>
              <p className="text-muted">Transforming digital experiences, one project at a time.</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="#" className="text-white"><i className="bi bi-twitter fs-5"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
                <a href="#" className="text-white"><i className="bi bi-github fs-5"></i></a>
                <a href="#" className="text-white"><i className="bi bi-envelope fs-5"></i></a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted">© 2025 Huzaifa M. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

