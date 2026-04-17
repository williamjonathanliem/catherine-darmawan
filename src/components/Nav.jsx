const PAGES = ['Home', 'About', 'Work', 'Contact'];

export default function Nav({ current, onNavigate }) {
  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => onNavigate('Home')}>
        C.D
      </button>
      <ul className="nav-links">
        {PAGES.map((page) => (
          <li key={page}>
            <button
              className={current === page ? 'active' : ''}
              onClick={() => onNavigate(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
