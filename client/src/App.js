
import { useState } from 'react';
import './App.css';
import './theme.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Categories, { categories } from './components/Categories';
import Steps from './components/Steps';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <Header scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero scrollTo={scrollTo} />
        <About scrollTo={scrollTo} />
        <Categories scrollTo={scrollTo} setSelectedCategory={setSelectedCategory} />
        <section className="marquee"><div>YOUR VOICE MATTERS&nbsp; ✦ &nbsp;YOUR VOICE MATTERS&nbsp; ✦ &nbsp;YOUR VOICE MATTERS&nbsp; ✦ &nbsp;</div></section>
        <Steps />
        <Registration selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} submitted={submitted} setSubmitted={setSubmitted} categories={categories} />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
