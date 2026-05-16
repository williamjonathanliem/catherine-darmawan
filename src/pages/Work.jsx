import { useEffect } from 'react';
import Ornament from '../components/Ornament';
import LaceBorder from '../components/LaceBorder';
import Footer from '../components/Footer';

/* ── DeRocks Trading ── */
import imgMenPendant      from '../assets/works/men_pendant.png';
import imgEmeraldCut      from '../assets/works/emerald_cut_women.png';
import imgOvalCut         from '../assets/works/oval_cut_women.png';
import imgCrossPendant    from '../assets/works/cross_pendant.png';
import imgRedesign        from '../assets/works/redesign_diamonds.png';
import imgPhotoModel      from '../assets/works/jewelery_photography_model.png';
import imgPhotoStone      from '../assets/works/jewelery_photography_stone.png';
import imgSketches        from '../assets/works/practice_sketches.png';
import imgGemSourcing     from '../assets/works/gemstone_sourcing.png';
import imgDiamondMachine  from '../assets/works/diamond_machine.png';

/* ── Personal Work ── */
import imgPersonal1       from '../assets/works/personal_work1.png';
import imgPersonal2       from '../assets/works/personal_work2.png';

/* ── Carat 55 & Mus.za ── */
import imgCarat1          from '../assets/works/pt_carat1.png';
import imgCarat2          from '../assets/works/pt_carat2.png';
import imgCarat3          from '../assets/works/pt_carat3.png';
import imgCarat4          from '../assets/works/pt_carat4.png';
import imgCarat5          from '../assets/works/pt_carat5.png';
import imgCarat6          from '../assets/works/pt_carat6.png';
import imgJade1           from '../assets/works/jade1.png';
import imgJade2           from '../assets/works/jade2.png';
import imgJade3           from '../assets/works/jade3.png';
import imgJade4           from '../assets/works/jade4.png';
import imgJade5           from '../assets/works/jade5.png';
import imgFourLeaf        from '../assets/works/four_leaf.png';
import imgFourLeaf2       from '../assets/works/four_leaf2.png';
import imgInitialPendant  from '../assets/works/initial_pendant.png';

/* ── NAFA Jewellery ── */
import imgOrchid          from '../assets/works/orchird.png';
import imgVendetta        from '../assets/works/vendetta.png';
import imgUntitled        from '../assets/works/untitled.png';
import imgEnameling       from '../assets/works/enameling.png';

/* ── NAFA Object Design ── */
import imgBake            from '../assets/works/bake.png';
import imgCare            from '../assets/works/care.png';

/* ── Photography & Videography ── */
import imgPhotography     from '../assets/works/photography.png';
import imgVideography     from '../assets/works/videography.gif';

const groups = [
  {
    id: 'derocks',
    company: 'DeRocks Trading PTE LTD',
    badge: 'Internship · May – Nov 2025',
    projects: [
      {
        title: "Men's Custom Pendant",
        tag: 'Silver · Diamond · Black Onyx',
        height: 320,
        img: imgMenPendant,
        desc: 'Emerald-cut diamond centre set in a geometric octagonal frame with black onyx triangular accents and pavé diamond border. Width kept to 3 cm per client specification.',
      },
      {
        title: "Women's Ring — Emerald Cut",
        tag: 'Sapphire · Diamond · Sketch',
        height: 360,
        img: imgEmeraldCut,
        desc: "Client's emerald-cut sapphire redesigned with surrounding diamonds and marquise accent stones. Multiple setting options sketched for client approval.",
      },
      {
        title: "Women's Ring — Oval Cut",
        tag: 'Sapphire · Floral Setting',
        height: 300,
        img: imgOvalCut,
        desc: 'Oval sapphire repurposed from an old ring into a new floral-pattern setting. Various crown and band configurations explored per client preference.',
      },
      {
        title: 'Cross Pendant',
        tag: 'Silver · Diamond Centre',
        height: 360,
        img: imgCrossPendant,
        desc: 'A refined silver cross pendant with a diamond accent, designed to precise client-specified proportions. Clean lines that balance delicacy with presence.',
      },
      {
        title: 'Diamond Redesign — Necklace Set',
        tag: 'White Gold · Diamonds',
        height: 300,
        img: imgRedesign,
        desc: "Existing diamonds from a client's old jewellery reworked into a new necklace, earring, and ring set using round diamonds in varying sizes.",
      },
      {
        title: 'Jewellery Photography — Model',
        tag: 'Product Photography · Pearl Ring',
        height: 360,
        img: imgPhotoModel,
        desc: 'Hand-modelled product photography of a gold south sea pearl cocktail ring set with pavé diamonds. Shot for client presentation.',
      },
      {
        title: 'Gemstone Photography',
        tag: 'Product Photography · 8.51ct Tanzanite',
        height: 340,
        img: imgPhotoStone,
        desc: 'Studio photography of a natural unheated tanzanite (8.51 ct), capturing colour depth and clarity for gemstone documentation and valuation records.',
      },
      {
        title: 'Design Sketches',
        tag: 'Coloured Pencil · Mixed Jewellery',
        height: 300,
        img: imgSketches,
        desc: 'A spread of jewellery concept sketches covering earrings, necklaces, and bracelets — drawn as part of ongoing design practice and technical skill development.',
      },
      {
        title: 'Gemstone Sourcing',
        tag: 'Loose Stones · Gemstone Library',
        height: 280,
        img: imgGemSourcing,
        desc: 'Hands-on experience sourcing and cataloguing loose gemstones, reviewing quality across a broad range of cuts, colours, and stone types.',
      },
      {
        title: 'Diamond Grading & GIA Verification',
        tag: 'DigiTrue CS2 · GIA Records',
        height: 300,
        img: imgDiamondMachine,
        desc: 'Operation of the DigiTrue CS2 diamond grading machine for natural and lab-grown diamond identification, alongside GIA certificate verification and inventory record-keeping.',
      },
    ],
  },
  {
    id: 'personal',
    company: 'Personal Work',
    badge: 'Independent · Self-initiated',
    projects: [
      {
        title: 'Earring Design Studies',
        tag: 'Coloured Sketch · Mixed Stones',
        height: 320,
        img: imgPersonal1,
        desc: 'A series of earring concept sketches exploring gemstone cuts and settings — tourmaline, topaz, and opals in drop and stud configurations.',
      },
      {
        title: 'Blue Topaz & White Topaz Earrings',
        tag: 'Sterling Silver · Claw Setting',
        height: 380,
        img: imgPersonal2,
        desc: 'Self-initiated piece featuring blue tourmaline and white topaz in a claw setting. Designed and fabricated independently outside of academic or professional projects.',
      },
    ],
  },
  {
    id: 'carat55',
    company: 'Carat 55 & Mus.za Fine Jewellery',
    badge: 'Part-time · Jan 2025 – Present',
    projects: [
      {
        title: 'Heirloom Pendant Redesign I',
        tag: 'Floral · Emerald · Opal',
        height: 380,
        img: imgCarat1,
        desc: "Concept for redesigning a client's heirloom into a floral pendant featuring emerald and opal stones in a stacked, botanical arrangement.",
      },
      {
        title: 'Heirloom Pendant Redesign II',
        tag: 'Cross Motif · Gemstones',
        height: 380,
        img: imgCarat2,
        desc: "Cross-shaped pendant concept incorporating the client's existing stones into a new ornate setting with floral detailing.",
      },
      {
        title: 'Custom Pendant — Ornate',
        tag: 'Emerald Centre · Layered Motif',
        height: 360,
        img: imgCarat3,
        desc: 'Richly detailed pendant necklace sketch with an emerald-cut centre stone framed by layered geometric and floral motifs.',
      },
      {
        title: 'Pendant — Floral Cluster',
        tag: 'Emerald · Opal · CAD Sketch',
        height: 380,
        img: imgCarat4,
        desc: 'Pendant concept featuring a cluster of emerald and opal stones in a floral arrangement with pendant drop attachment.',
      },
      {
        title: 'Jade Bracelet — Technical Drawing',
        tag: 'Jade · 12mm / 9mm / 7mm',
        height: 360,
        img: imgCarat5,
        desc: 'Technical layout for a jade bracelet in three bead sizes — 12mm, 9mm, and 7mm — specifying spacing, clasp position, and total length of 17.5 cm.',
      },
      {
        title: 'Heirloom Locket Pendant',
        tag: 'Gold · Initial · Diamonds',
        height: 320,
        img: imgCarat6,
        desc: "Redesign of a client's sentimental pieces into a gold locket pendant. Floating charms inside are secured behind a diamond-set octagonal frame.",
      },
      {
        title: 'Bunny Bangle Collection',
        tag: 'Jade · Enamel · Pink',
        height: 300,
        img: imgJade1,
        desc: 'Three bangle designs featuring an illustrated bunny motif — sitting on cherry blossoms, in a cameo frame, and in a garden scene. Playful yet refined.',
      },
      {
        title: 'Bunny Charm Pendant',
        tag: 'Jade · Charm · Gemstone Drop',
        height: 300,
        img: imgJade2,
        desc: 'Circular jade charm variations centred on a bunny motif with gemstone drop accents. Multiple colour and size studies presented for client selection.',
      },
      {
        title: 'Deer Antler Earrings',
        tag: 'Silver · Citrine · Studs & Hoops',
        height: 340,
        img: imgJade3,
        desc: 'Deer antler-inspired earring collection in stud and hoop silhouettes, each set with a citrine centre stone. Technical sketches include clip and hinge mechanisms.',
      },
      {
        title: 'Deer Antler Bangle',
        tag: 'Silver · Citrine · 6.5cm',
        height: 360,
        img: imgJade4,
        desc: 'Bangle carrying the deer antler motif, with measurement annotations at 6.5 cm width and 1 cm band height. Citrine stone accent at centre.',
      },
      {
        title: 'Deer Antler Necklace',
        tag: 'Silver · Circular Pendant · 11.51mm',
        height: 360,
        img: imgJade5,
        desc: 'Circular pendant with an 11.51mm centre gemstone framed by open antler silhouettes. Continues the deer antler series with CAD dimensions included.',
      },
      {
        title: 'Four-Leaf Clover Jade Bangle',
        tag: 'Grey Jade · Ruby · Silver Overlay',
        height: 300,
        img: imgFourLeaf,
        desc: 'Jade bangle featuring a four-leaf clover motif in white metal overlay with a ruby centre. Two colourway variations — with and without a floral border.',
      },
      {
        title: 'Four-Leaf Clover Earrings',
        tag: 'Silver · Ruby · Hoop & Stud',
        height: 300,
        img: imgFourLeaf2,
        desc: 'Earring collection expanding the four-leaf clover theme into dangling hoop and stud forms, with detailed side views and clip mechanism specs.',
      },
      {
        title: 'Initial Pendants with Diamond',
        tag: 'Gold · Letter · Diamond Accent',
        height: 320,
        img: imgInitialPendant,
        desc: 'Initial pendant designs in round (12.8mm) and rectangular (13mm) formats, featuring engraved letters with a bezel-set diamond accent.',
      },
    ],
  },
  {
    id: 'nafa-jewellery',
    company: 'Nanyang Academy of Fine Arts',
    badge: 'Object & Jewellery Design · 2023 – 2026',
    projects: [
      {
        title: 'Orchid Arm Cuff',
        tag: 'Copper · Jewellery',
        height: 340,
        img: imgOrchid,
        desc: 'Inspired by the orchid flower, this piece curls around the arm mimicking a leaf. Sleek and minimalist — perfect for events and daily wear.',
      },
      {
        title: 'Vendetta',
        tag: 'Copper & Silver · Face Jewellery',
        height: 280,
        img: imgVendetta,
        desc: 'An eye patch accessory crafted using metal manipulation techniques to create a bent, edgy look. A bold statement piece for themed events.',
      },
      {
        title: 'Untitled',
        tag: 'Aluminium Wire · Gold Plate · Epoxy',
        height: 380,
        img: imgUntitled,
        desc: 'Aluminium wire (gold plated), hand-mixed epoxy bead colours, and a brass pendant with a laser-cut Rhino 7 logo set in clear epoxy.',
      },
      {
        title: 'Enameling',
        tag: 'Copper · Cloisonné & Champleve',
        height: 300,
        img: imgEnameling,
        desc: 'Four motifs: fish, Egyptian half-circle, flower & leaf, and a fountain with bird and cloud. Two enameling techniques on copper flat sheet.',
      },
    ],
  },
  {
    id: 'nafa-object',
    company: 'Nanyang Academy of Fine Arts',
    badge: 'Object & Product Design · 2023 – 2026',
    projects: [
      {
        title: 'Bake',
        tag: 'Jelutong Wood · Acrylic · AutoCAD',
        height: 320,
        img: imgBake,
        desc: 'A wooden toy for ages 3–4 featuring Velcro bread-shaped pieces. Laser-cut via AutoCAD designs. Develops basic cutting skills for children.',
      },
      {
        title: 'Care · Ferris Wheel Notepad',
        tag: 'Ice Cream Sticks · Acrylic · Magnet',
        height: 360,
        img: imgCare,
        desc: 'Designed for dementia-care nurses at Apex Harmony Lodge. Nurses can write on the acrylic panel and reattach it magnetically to the Ferris wheel.',
      },
    ],
  },
  {
    id: 'photo-video',
    company: 'Photography & Videography',
    badge: 'Various · 2023 – 2025',
    projects: [
      {
        title: 'Photography',
        tag: 'People · Scenery · Jewellery',
        height: 260,
        img: imgPhotography,
        desc: 'Photographic work spanning people, scenery, and jewellery — including event coverage for Mus.za Fine Jewellery and personal documentary work across Japan and Indonesia.',
      },
      {
        title: 'Videography',
        tag: 'Lasalle Internship 2023 · Van Cleef 2025',
        height: 300,
        img: imgVideography,
        desc: 'Video work from the Lasalle College of the Arts internship (2023) and coverage of the Van Cleef & Arpels exhibition visit (2025).',
      },
    ],
  },
];

const digitalSkills = [
  'Adobe Illustrator', 'Adobe Photoshop',
  'Rhino 3D', 'AutoCAD', 'Canva',
  'Microsoft Office Suite', 'Google Workspace',
  'Photography & Photo Editing',
  'Videography & Video Editing',
];

const practicalSkills = [
  'Enameling — Champleve & Cloisonné',
  'Metalsmithing on Brass, Silver & Copper',
  'Wirework & Stone Setting',
  'Repousse & Metal Forming',
  'Soldering & Finishing',
  'Basic Lost Wax Casting',
  'Foam & Wood Mock-up Prototyping',
];

export default function Work() {
  useEffect(() => {
    const cards = document.querySelectorAll('.work-card');
    const obs1 = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
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
        {/* Page header */}
        <div className="work-header">
          <p className="section-label">Selected Work</p>
          <h2 className="page-heading">Projects</h2>
          <div style={{ maxWidth: 320, margin: '0 auto' }}><Ornament /></div>
        </div>

        {/* Groups */}
        {groups.map((group, gi) => (
          <div key={group.id} className="work-group">
            {/* Lace divider between groups */}
            <div className="reveal" style={{ marginBottom: 40 }}>
              <LaceBorder color="#d4959a" opacity={gi === 0 ? 0.45 : 0.35} />
            </div>

            {/* Group header */}
            <div className="work-group-header reveal">
              <p className="section-label">{group.badge}</p>
              <h3 className="work-group-company">{group.company}</h3>
            </div>

            {/* Masonry grid */}
            <div className="work-grid">
              {group.projects.map((p) => (
                <div className="work-card" key={p.title}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="card-img"
                    style={{ height: p.height, width: '100%', objectFit: 'cover', display: 'block' }}
                  />
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
          </div>
        ))}

        {/* Lace before skills */}
        <div className="reveal" style={{ margin: '48px 0 32px' }}>
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
