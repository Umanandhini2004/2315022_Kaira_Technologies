function Footer({ scrollTo }) {
  return <><footer><div className="container footer-inner"><button className="brand footer-brand" onClick={() => scrollTo('home')}><span className="brand-mark"><i></i><i></i><i></i></span><span>voice<span className="brand-dot">.</span><small>STATE</small></span></button><span>© 2025 Voice State India</span><span>Made for the ones who sing anyway.</span></div></footer><div className="creator-badge">B Uma Nandhini <span>2315022</span></div></>;
}
export default Footer;
