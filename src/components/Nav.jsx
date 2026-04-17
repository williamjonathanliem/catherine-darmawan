import { useState, useEffect } from 'react';

const PAGES = ['Home', 'About', 'Work', 'Contact'];

export default function Nav({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  /* lock body scroll while menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => go('Home')}>C.D</button>

      {/* Desktop links */}
      <ul className="nav-links">
        {PAGES.map((page) => (
          <li key={page}>
            <button
              className={current === page ? 'active' : ''}
              onClick={() => go(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger button — mobile only */}
      <button
        className={`nav-burger${open ? ' nav-burger--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' nav-drawer--open' : ''}`}>
        <ul className="nav-drawer-links">
          {PAGES.map((page) => (
            <li key={page}>
              <button
                className={current === page ? 'active' : ''}
                onClick={() => go(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
