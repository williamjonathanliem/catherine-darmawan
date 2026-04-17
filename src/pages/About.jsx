import { useEffect } from 'react';
import portrait from '../assets/potrait.png';
import Ornament from '../components/Ornament';
import LaceBorder from '../components/LaceBorder';
import Footer from '../components/Footer';

const education = [
  { year: '2009–11', title: 'Buah Hati Pre School Kindergarten', detail: '' },
  { year: '2011–17', title: 'Cita Hati Elementary School', detail: '' },
  { year: '2017–23', title: 'Cita Hati Junior & Senior High', detail: '' },
  { year: '2023–26', title: 'Nanyang Academy of Fine Arts', detail: 'Diploma in Object & Jewellery' },
];

const experience = [
  {
    company: 'Lasalle College of the Arts',
    period: '2023 · 3-Day Internship',
    role: 'Content creator — videographer, editor, and interviewer.',
  },
  {
    company: 'Nanyang Academy of Fine Arts',
    period: '2023–2025 · Part-time',
    role: 'School of Media & Design — editor, photographer, organiser.\nSchool of Young Talents — assisted children to their classrooms.',
  },
  {
    company: 'Derocks Trading PTE LTD',
    period: 'May–Nov 2025 · Internship',
    role: 'Jewellery designer.',
  },
];

const awards = [
  'Batik Course · Museum Batik Yogyakarta (2015)',
  'Colossal Drama · Buah Hati & Cita Hati School (2016)',
  'Being a Good Example · Cita Hati School (2016)',
  'Commercial Arrangement · Shesan Blossom Florist (2022)',
  'Building Good Concept into Creative Media Workshop · NAFA (2022)',
];

export default function About() {
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

      {/* Lace strip at very top */}
      <div style={{ paddingTop: 90 }}>
        <LaceBorder color="#c8868c" opacity={0.4} flip />
      </div>

      <main className="about">
        {/* Hero */}
        <div className="about-hero">
          <div className="about-image-wrap reveal">
            <img
              src={portrait}
              alt="Catherine Darmawan"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div className="about-right">
            <p className="section-label reveal">About</p>
            <h2 className="about-heading reveal">Catherine<br />Darmawan</h2>
            <p className="about-bio reveal">
              A final year student at Nanyang Academy of Fine Arts, specialising in Object &amp; Jewellery
              design. Over three years of rigorous making, Catherine has grown from learning the foundations
              of metalsmithing into a designer with a distinct voice — one that draws equally from nature,
              narrative, and the quiet beauty of handcraft. Based in Singapore, she approaches every piece
              as a conversation between material and meaning.
            </p>
            <div className="three-words reveal">
              {['Strategic', 'Adaptable', 'Insightful'].map((w) => (
                <div className="word-cell" key={w}>{w}</div>
              ))}
            </div>
            <p className="about-quote reveal">
              "I've always been drawn to making things with intention. Whether it's a piece of jewellery,
              a wooden toy, or a short film — I want everything I create to carry a reason for existing.
              Curiosity keeps me moving, strategy keeps me grounded, and I'm never afraid to start from scratch
              if it means getting it right."
            </p>
          </div>
        </div>

        {/* Lace divider */}
        <div className="reveal">
          <LaceBorder color="#d4959a" opacity={0.5} />
          <div style={{ margin: '10px 0' }}><Ornament /></div>
          <LaceBorder color="#d4959a" opacity={0.5} flip />
        </div>
      </main>

      {/* Lower sections */}
      <div className="about-lower">
        <div className="reveal">
          <h3 className="block-title">Education</h3>
          <ul className="timeline">
            {education.map((item) => (
              <li className="tl-item" key={item.title}>
                <span className="tl-year">{item.year}</span>
                <div className="tl-diamond" />
                <div>
                  <div className="tl-title">{item.title}</div>
                  {item.detail && <div className="tl-detail">{item.detail}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <h3 className="block-title">Experience</h3>
          <ul className="exp-list">
            {experience.map((item) => (
              <li className="exp-item" key={item.company}>
                <div className="exp-company">{item.company}</div>
                <div className="exp-period">{item.period}</div>
                <div className="exp-role" style={{ whiteSpace: 'pre-line' }}>{item.role}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ gridColumn: '1 / -1' }}>
          <h3 className="block-title">Awards &amp; Achievements</h3>
          <ul className="award-list">
            {awards.map((a) => (
              <li className="award-item" key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lace before footer */}
      <LaceBorder color="#c8868c" opacity={0.45} />
      <Footer />
    </div>
  );
}
