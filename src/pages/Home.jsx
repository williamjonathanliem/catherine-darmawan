import Ornament from '../components/Ornament';
import LaceBorder from '../components/LaceBorder';
import Footer from '../components/Footer';

function LaceCorner() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
      <path d="M2 2 L2 32" stroke="#c8868c" strokeWidth="1" />
      <path d="M2 2 L32 2" stroke="#c8868c" strokeWidth="1" />
      <path d="M2 2 L16 16" stroke="#e8c4c0" strokeWidth="0.5" strokeDasharray="2 2.5" />
      <path d="M2 20 Q12 12 20 2" stroke="#e8c4c0" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M2 28 Q18 18 28 2" stroke="#f0dde0" strokeWidth="0.4" fill="none" opacity="0.45" />
      <circle cx="2"  cy="2"  r="2.2" fill="#c8868c" />
      <circle cx="2"  cy="32" r="1.2" fill="#c8868c" opacity="0.6" />
      <circle cx="32" cy="2"  r="1.2" fill="#c8868c" opacity="0.6" />
      <rect x="11" y="11" width="5" height="5" stroke="#c8868c" strokeWidth="0.6"
        transform="rotate(45 13.5 13.5)" fill="none" opacity="0.65" />
      <circle cx="13.5" cy="13.5" r="1" fill="#e8c4c0" opacity="0.5" />
      <path d="M2 10 Q6 6 10 2" stroke="#d4959a" strokeWidth="0.6" fill="none" />
      <circle cx="6" cy="6" r="1" fill="#e8c4c0" opacity="0.6" />
    </svg>
  );
}

export default function Home({ onNavigate }) {
  return (
    <div className="page-wrapper">
      <main className="home">
        {/* Animated lace frame */}
        <div className="lace-frame">
          <div style={{ position: 'absolute', top: 0, left: 0 }}><LaceCorner /></div>
          <div style={{ position: 'absolute', top: 0, right: 0, transform: 'scaleX(-1)' }}><LaceCorner /></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, transform: 'scaleY(-1)' }}><LaceCorner /></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, transform: 'scale(-1)' }}><LaceCorner /></div>
          <div style={{ position: 'absolute', top: 0, left: 80, right: 80, height: 1,
            background: 'linear-gradient(to right, #c8868c, rgba(232,196,192,0.3), #c8868c)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 80, right: 80, height: 1,
            background: 'linear-gradient(to right, #c8868c, rgba(232,196,192,0.3), #c8868c)' }} />
          <div style={{ position: 'absolute', left: 0, top: 80, bottom: 80, width: 1,
            background: 'linear-gradient(to bottom, #c8868c, rgba(232,196,192,0.3), #c8868c)' }} />
          <div style={{ position: 'absolute', right: 0, top: 80, bottom: 80, width: 1,
            background: 'linear-gradient(to bottom, #c8868c, rgba(232,196,192,0.3), #c8868c)' }} />
        </div>

        {/* Hero — perfectly centred, no scroll hint */}
        <div className="home-content">
          <p className="home-eyebrow">Singapore · Object &amp; Jewellery</p>

          <h1 className="home-name">
            CATHERINE
            <br />
            DARMAWAN
            <span className="shimmer-overlay" />
          </h1>

          <p className="home-subtitle">Designer · Maker · Storyteller</p>

          <div className="home-ornament">
            <Ornament />
          </div>

          <p className="home-teaser">
            Crafting jewellery and objects where material meets meaning
          </p>

          <div className="home-cta">
            <button className="btn-engraved" onClick={() => onNavigate('Work')}>
              <span>View Work →</span>
            </button>
          </div>
        </div>
      </main>

      <LaceBorder color="#c8868c" opacity={0.55} />
      <Footer />
    </div>
  );
}
