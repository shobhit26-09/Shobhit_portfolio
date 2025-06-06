import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BuyMeCoffee from './BuyMeCoffee';  // import

function App() {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <BuyMeCoffee />   {/* add here */}
    </div>
  );
}

export default App;
