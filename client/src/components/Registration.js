
import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'https://two315022-kaira-technologies-1.onrender.com';

function Registration({ selectedCategory, setSelectedCategory, submitted, setSubmitted, categories }) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.consent = form.get('consent') === 'on';

    try {
      const response = await fetch(`${API_URL}/api/registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to save your registration.');
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError.message || 'Server unavailable. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return <section className="register section-pad" id="register"><div className="container register-grid"><div className="register-copy"><div className="eyebrow"><span className="eyebrow-line"></span> Your moment starts here</div><h2>Ready to be<br /><em>heard?</em></h2><p>Registration is open for singers aged 6–29. Take the first step towards the stage that could change everything.</p><div className="event-facts"><div><span>Event date</span><strong>14 — 15 Sep, 2025</strong></div><div><span>Venue</span><strong>Shanmukhananda Hall, Mumbai</strong></div><div><span>Entry fee</span><strong>₹499 <small>incl. taxes</small></strong></div></div></div><div className="form-card">{submitted ? <div className="success"><div className="success-icon">✓</div><div className="eyebrow dark">Application received</div><h3>You’re in the running.</h3><p>Thanks for registering for Voice State. We’ll send your audition instructions to your email shortly.</p><button className="button button-dark" onClick={() => setSubmitted(false)}>Submit another entry</button></div> : <form onSubmit={handleSubmit}><div className="form-top"><span>01 — Registration</span><span>All fields required</span></div><h3>Let’s get to know you.</h3><label>Full name<input name="fullName" required placeholder="Your full name" /></label><div className="form-row"><label>City<input name="city" required placeholder="Your city" /></label><label>Singing experience<select name="experience" required defaultValue=""><option value="">Select experience</option><option>Just getting started</option><option>1-3 years</option><option>3+ years</option><option>Professional / trained</option></select></label></div><label>Email address<input name="email" required type="email" placeholder="you@email.com" /></label><label>Phone number<input name="phone" required type="tel" placeholder="+91 00000 00000" /></label><label>Preferred song language<select name="songLanguage" required defaultValue=""><option value="">Select language</option><option>Hindi</option><option>English</option><option>Marathi</option><option>Other Indian language</option><option>Other</option></select></label><label>Choose your category<select name="category" required value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}><option value="">Select a category</option>{categories.map((c) => <option key={c.title} value={c.title}>{c.title} — {c.age}</option>)}</select></label><label className="check"><input name="consent" type="checkbox" required /> <span>I agree to the competition rules and privacy policy.</span></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-dark full" type="submit" disabled={saving}>{saving ? 'Saving registration…' : <>Continue to audition details <span>↗</span></>}</button></form>}</div></div></section>;
}
export default Registration;




