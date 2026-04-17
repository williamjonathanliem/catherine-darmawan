import { useEffect } from 'react';
import Ornament from '../components/Ornament';
import LaceBorder from '../components/LaceBorder';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page-wrapper">

      <div style={{ paddingTop: 90 }}>
        <LaceBorder color="#c8868c" opacity={0.4} flip />
      </div>

      <main className="contact">
        <div className="contact-inner">

          <p className="section-label reveal">Let's Connect</p>
          <h2 className="contact-heading reveal">Get In Touch</h2>

          <div className="reveal" style={{ marginBottom: 36 }}>
            <Ornament />
          </div>

          <div className="reveal">
            <LaceBorder color="#d4959a" opacity={0.5} />
          </div>

          {/* Contact details — click email to open mail app */}
          <div className="contact-block reveal">
            <div className="contact-row">
              <span className="c-label">Email</span>
              <a href="mailto:catherinesignature@gmail.com" className="c-value c-link">
                catherinesignature@gmail.com
              </a>
            </div>
            {/* <div className="c-sep" />
            <div className="contact-row">
              <span className="c-label">Phone</span>
              <a href="tel:+6580522239" className="c-value c-link">
                +65 8052 2239
              </a>
            </div> */}
            <div className="c-sep" />
            <div className="contact-row">
              <span className="c-label">Location</span>
              <span className="c-value">Singapore</span>
            </div>
          </div>

          <div className="reveal">
            <LaceBorder color="#d4959a" opacity={0.45} flip />
          </div>

          <p className="contact-closing reveal">
            Available for commissions, collaborations,<br />and creative opportunities.
          </p>

        </div>
      </main>

      <div style={{ marginTop: 56 }}>
        <LaceBorder color="#c8868c" opacity={0.45} />
      </div>
      <Footer />
    </div>
  );
}
