function Steps() {
  const steps = [['01', 'Register online', 'Tell us about yourself through the simple entry form.'], ['02', 'Send your audition', 'Submit a 90-second singing video. Keep it real, keep it yours.'], ['03', 'Take the stage', 'Shortlisted singers perform live before our jury and a cheering crowd.'], ['04', 'Make your mark', 'Win the title, prizes, mentorship and a platform for what comes next.']];
  return <section className="steps section-pad" id="how-it-works"><div className="container"><div className="steps-head"><div className="eyebrow dark"><span className="eyebrow-line"></span> The journey</div><h2>From first note<br />to <em>finale.</em></h2></div><div className="step-grid">{steps.map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>;
}
export default Steps;
