function Header({ scrollTo, menuOpen, setMenuOpen }) {
  return (
    <><div className="top-strip"><span>THE 2025 EDITION</span><span>Registrations close 31 August 2025</span></div>
      <header className="nav-wrap"><nav className="nav container">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Voice State home"><span className="brand-mark"><i></i><i></i><i></i></span><span>voice<span className="brand-dot">.</span><small>STATE</small></span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}><button onClick={() => scrollTo('about')}>About the event</button><button onClick={() => scrollTo('categories')}>Categories</button><button onClick={() => scrollTo('how-it-works')}>How it works</button><button className="nav-cta" onClick={() => scrollTo('register')}>Register now <span>↗</span></button></div>
      </nav></header>
    </>
  );
}
export default Header;
