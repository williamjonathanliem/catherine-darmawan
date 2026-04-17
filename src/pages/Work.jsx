import { useEffect } from 'react';
import Ornament from '../components/Ornament';
import LaceBorder from '../components/LaceBorder';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Orchid Arm Cuff',
    tag: 'Copper · Jewellery',
    height: 340,
    desc: 'Inspired by the orchid flower, this piece curls around the arm mimicking a leaf. Sleek and minimalist — perfect for events and daily wear.',
  },
  {
    title: 'Vendetta',
    tag: 'Copper & Silver · Jewellery',
    height: 280,
    desc: 'An eye patch accessory crafted using metal manipulation techniques to create a bent, edgy look. A bold statement piece for themed events.',
  },
  {
    title: 'Untitled',
    tag: 'Aluminium Wire · Gold Plate · Epoxy',
    height: 380,
    desc: 'Aluminium wire (gold plated), hand-mixed epoxy bead colours, and a brass pendant with a laser-cut Rhino 7 logo set in clear epoxy.',
  },
  {
    title: 'Enameling',
    tag: 'Copper · Cloisonné & Champleve',
    height: 300,
    desc: 'Four motifs: fish, Egyptian half-circle, flower & leaf, and a fountain with bird and cloud. Two enameling techniques on copper flat sheet.',
  },
  {
    title: 'Bake',
    tag: 'Jelutong Wood · Acrylic · AutoCAD',
    height: 320,
    desc: 'A wooden toy for ages 3–4 featuring Velcro bread-shaped pieces. Laser-cut via AutoCAD designs. Develops basic cutting skills for children.',
  },
  {
    title: 'Care · Ferris Wheel Notepad',
    tag: 'Ice Cream Sticks · Acrylic · Magnet',
    height: 360,
    desc: 'Designed for dementia-care nurses at Apex Harmony Lodge. Nurses can write on the acrylic panel and reattach it magnetically to the Ferris wheel.',
  },
  {
    title: 'Photography',
    tag: 'People · Scenery · Food',
    height: 260,
    desc: 'A collection of photographic work spanning people, scenery, and food. Locations include Japan and Indonesia.',
  },
  {
    title: 'Videography',
    tag: 'Lasalle Internship 2023 · Van Cleef 2025',
    height: 300,
    desc: 'Video work from the Lasalle College of the Arts internship (2023) and coverage of the Van Cleef & Arpels exhibition visit (2025).',
  },
];

const digitalSkills = [
  'Microsoft Word', 'Adobe Illustrator', 'Adobe Photoshop',
  'PowerPoint', 'Google Slides', 'AutoCAD', 'Rhino 7', 'Canva',
];

const practicalSkills = [
  'Enameling — Champleve & Cloisonné',
  'Metalsmithing on Brass, Silver & Copper',
  'Wirework', 'Repousse', 'Soldering',
  'Lost Wax Technique (basic)',
  'Mockup with Jelutong & Pine Wood',
];

export default function Work() {
  useEffect(() => {
    const cards = document.querySelectorAll('.work-card');
    const obs1 = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          obs1.unobserve(e.target);
        }
      }),
      { threshold: 0.06 }
    );
    cards.forEach((c) => obs1.observe(c));

    const reveals = document.querySelectorAll('.reveal');
    const obs2 = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs2.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => obs2.observe(el));

    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <div className="page-wrapper">

      {/* Top lace */}
      <div style={{ paddingTop: 90 }}>
        <LaceBorder color="#c8868c" opacity={0.4} flip />
      </div>

      <main className="work">
        {/* Header */}
        <div className="work-header">
          <p className="section-label">Selected Work</p>
          <h2 className="page-heading">Projects</h2>
          <div style={{ maxWidth: 320, margin: '0 auto' }}><Ornament /></div>
        </div>

        {/* Lace above grid */}
        <div className="reveal" style={{ marginBottom: 32 }}>
          <LaceBorder color="#d4959a" opacity={0.45} />
        </div>

        {/* Masonry grid */}
        <div className="work-grid">
          {projects.map((p) => (
            <div className="work-card" key={p.title}>
              <div className="card-img img-placeholder" style={{ height: p.height }}>
                {p.title}
              </div>
              <div className="card-overlay">
                <div className="overlay-title">{p.title}</div>
                <p className="overlay-desc">{p.desc}</p>
              </div>
              <div className="card-info">
                <div className="card-title">{p.title}</div>
                <div className="card-tag">{p.tag}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lace between grid and skills */}
        <div className="reveal" style={{ margin: '40px 0 32px' }}>
          <LaceBorder color="#d4959a" opacity={0.5} flip />
          <div style={{ margin: '12px 0' }}><Ornament /></div>
          <LaceBorder color="#d4959a" opacity={0.5} />
        </div>
      </main>

      {/* Skills */}
      <div className="work-footer-pad">
        <div className="skills-box reveal">
          <div className="skills-box-header">
            <p className="section-label">Capabilities</p>
            <h3 className="skills-heading">Skills</h3>
            <div style={{ maxWidth: 280, margin: '10px auto 0' }}><Ornament /></div>
          </div>

          {/* Lace inside skills box header */}
          <div style={{ margin: '0 -60px 36px', padding: '0' }}>
            <LaceBorder color="#d4959a" opacity={0.35} />
          </div>

          <div className="skills-cols">
            <div>
              <div className="skills-col-title">Digital</div>
              <ul className="skills-items">
                {digitalSkills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <div className="skills-col-title">Practical</div>
              <ul className="skills-items">
                {practicalSkills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>

          {/* Lace at bottom of skills box */}
          <div style={{ margin: '36px -60px 0' }}>
            <LaceBorder color="#d4959a" opacity={0.35} flip />
          </div>
        </div>
      </div>

      {/* Lace before footer */}
      <div style={{ marginTop: 48 }}>
        <LaceBorder color="#c8868c" opacity={0.45} />
      </div>
      <Footer />
    </div>
  );
}
