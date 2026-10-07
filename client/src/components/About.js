function About({ scrollTo }) {
  return <section className="intro section-pad" id="about"><div className="container intro-grid"><div><div className="eyebrow dark"><span className="eyebrow-line"></span> More than a competition</div><h2>Your story<br /><em>deserves</em> a stage.</h2></div><div className="intro-text"><p>Voice State is a celebration of young Indian talent. A space to sing your truth, meet your people, and leave the stage a little taller than when you walked in.</p><p className="muted">From the first note to the final applause, we’re here to make every moment count.</p><button className="arrow-link" onClick={() => scrollTo('how-it-works')}>See how it works <span>↗</span></button></div></div></section>;
}
export default About;
