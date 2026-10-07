const categories = [
  { icon: '✦', title: 'Little Voices', age: 'Ages 6–12', desc: 'A joyful first stage for young singers finding their voice.', tone: 'gold' },
  { icon: '◒', title: 'Rising Stars', age: 'Ages 13–17', desc: 'For expressive performers ready to own the spotlight.', tone: 'coral' },
  { icon: '◈', title: 'Open Mic', age: 'Ages 18–29', desc: 'A national platform for bold, original young talent.', tone: 'blue' },
];
function Categories({ scrollTo, setSelectedCategory }) {
  return <section className="categories section-pad" id="categories"><div className="container"><div className="section-heading"><div><div className="eyebrow dark"><span className="eyebrow-line"></span> Pick your spotlight</div><h2>There’s a place<br />for <em>your</em> sound.</h2></div><p>Whether you’re warming up your first audience or ready for the big leagues, there’s a category made for your moment.</p></div><div className="category-grid">{categories.map((cat, index) => <button className={`category-card ${cat.tone}`} key={cat.title} onClick={() => { setSelectedCategory(cat.title); scrollTo('register'); }}><span className="card-icon">{cat.icon}</span><span className="card-number">0{index + 1}</span><span className="card-title">{cat.title}</span><span className="card-age">{cat.age}</span><span className="card-desc">{cat.desc}</span><span className="card-arrow">↗</span></button>)}</div></div></section>;
}
export { categories };
export default Categories;
