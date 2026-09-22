import React, { useEffect, useState } from 'react';
import stocksense from './stocksense-hero.png';
import stocksenseA from './stocksense-a.png';
import stocksenseB from './stocksense-b.png';
import resumeA from './resumeai-a.png';
import resumeB from './resumeai-b.png';
import resumeC from './resumeai-c.png';
import bluff from './bluff-hero.png';
import bluffA from './bluff-a.png';
import bluffB from './bluff-b.png';
import portrait from './shobhit.jpg';
import flatlayLaptop from './flatlay-macbook.png';
import flatlayHeadphones from './flatlay-headphones.png';
import flatlayRuler from './flatlay-ruler.png';
import './index.css';

const projects = [
  { n:'01', title:'StockSense', kind:'Market intelligence', copy:'A focused Indian equities workspace for signals, sectors, macro context and sourced market news.', stack:'React · TypeScript · Supabase', images:[stocksense,stocksenseA,stocksenseB], live:'https://stocksensee.netlify.app/', code:'https://github.com/shobhit26-09/StockSense' },
  { n:'02', title:'Bluff', kind:'Real-time multiplayer', copy:'A live card game built around deception, rooms and synchronized play across connected clients.', stack:'React · Express · Socket.IO · MongoDB', images:[bluff,bluffA,bluffB], live:'https://bluff-82py.onrender.com/', code:'https://github.com/shobhit26-09/bluff' },
  { n:'03', title:'ResumeAI', kind:'AI resume builder', copy:'A TypeScript resume builder and analyzer for creating ATS-aware resumes with guided feedback and intelligent suggestions.', stack:'React · TypeScript · Tailwind · Clerk', images:[resumeA,resumeB,resumeC], live:'https://resumeai2.netlify.app/', code:'https://github.com/shobhit26-09/ResumeAI' },
];

type Project = typeof projects[number];
function ProjectWindow({p,index}:{p:Project,index:number}){
 const [slide,setSlide]=useState(0);
 useEffect(()=>{const id=window.setInterval(()=>setSlide(v=>(v+1)%p.images.length),3600+index*450);return()=>clearInterval(id)},[p.images.length,index]);
 return <div className="projectStage reveal" style={{'--delay':`${index*80}ms`} as React.CSSProperties}>
  <div className="browserWindow" data-parallax>
   <div className="browserBar"><span className="traffic"><i/><i/><i/></span><span className="browserUrl"><b>⌘</b> {p.live.replace('https://','').replace('/','')}</span><span className="windowBadge">LIVE</span></div>
   <a className="projectVisual" href={p.live} target="_blank" rel="noreferrer">
    {p.images.map((im:string,i:number)=><img className={i===slide?'active':''} src={im} alt={`${p.title} interface view ${i+1}`} key={im}/>) }
    <span className="open">Open project ↗</span>
   </a>
   <div className="slideDots" aria-label={`View ${slide+1} of ${p.images.length}`}>{p.images.map((_:string,i:number)=><button onClick={()=>setSlide(i)} className={i===slide?'active':''} aria-label={`Show image ${i+1}`} key={i}/>)}</div>
  </div>
 </div>
}

export default function App(){
 const [portraitColor,setPortraitColor]=useState(false);
 const [formSent,setFormSent]=useState(false);
 const [dark,setDark]=useState(()=>window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
 useEffect(()=>{
  const els=[...document.querySelectorAll('.reveal')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12}); els.forEach(e=>io.observe(e));
  const move=()=>document.documentElement.style.setProperty('--sy',String(window.scrollY)); window.addEventListener('scroll',move,{passive:true}); move();
  return()=>{io.disconnect();window.removeEventListener('scroll',move)};
 },[]);
 return <div className={'portfolio '+(dark?'dark':'light')}>
   <header className="topbar"><a className="mark" href="#top" aria-label="Home">SG<span>.</span></a><nav><button className="themeToggle" onClick={()=>setDark(v=>!v)} aria-label={`Switch to ${dark?'light':'dark'} mode`}><span>{dark?'☾':'☀'}</span><i/></button><a href="#work">Work</a><a href="#skills">Skills</a><a href="#about">About</a><a className="availability" href="mailto:shobhitg947@gmail.com"><i/>Available for work</a></nav></header>
   <main id="top">
    <section className="hero heroEditorial">
      <p className="eyebrow reveal">Full-stack developer · India</p>
      <div className="heroCanvas">
       <h1 className="heroDisplay reveal"><span className="displayLine lineOne">I make the interface</span><span className="displayLine lineTwo">make <em>sense.</em></span></h1>
       <p className="heroBio bioOne">I’m Shobhit Gupta, a frontend-strong full-stack developer based in India.</p>
       <p className="heroBio bioTwo">I build responsive interfaces, then carry them through Node, Express, PostgreSQL and APIs.</p>
       <div className="techOrbit" aria-hidden="true">
        <img className="flatHeadphones" src={flatlayHeadphones} alt=""/>
        <img className="flatRuler" src={flatlayRuler} alt=""/>
        <img className="flatLaptop" src={flatlayLaptop} alt=""/>
       </div>
      </div>
      <div className="heroFoot reveal"><p>Complete web products, built from interface to API.</p><a href="#work">Selected work <span>↓</span></a></div>
    </section>
    <section id="work" className="work"><div className="sectionHead reveal"><p>Selected work</p><p>2026</p></div>
      {projects.map((p,i)=><article className="project" key={p.title}><div className="projectMeta reveal"><span>{p.n}</span><span>{p.kind}</span></div><ProjectWindow p={p} index={i}/><div className="projectCopy reveal"><div><h2>{p.title}</h2><p>{p.copy}</p></div><div className="projectLinks"><span>{p.stack}</span><a href={p.code} target="_blank" rel="noreferrer">Source ↗</a></div></div></article>)}
    </section>
    <section id="skills" className="skills reveal">
      <div className="sectionHead"><p>Skills &amp; tools</p><p>02</p></div>
      <div className="skillsIntro"><p className="eyebrow">What I work with</p><h2>Built for the browser.<br/><em>Ready for the whole stack.</em></h2></div>
      <div className="skillCloud" aria-hidden="true"><span>JS</span><span>React</span><span>TS</span><span>Git</span><span>CSS</span></div>
      <div className="skillGrid">
        <article><h3>Frontend</h3><div><span>React</span><span>JavaScript</span><span>TypeScript</span><span>HTML</span><span>CSS</span><span>Responsive UI</span></div></article>
        <article><h3>Backend &amp; data</h3><div><span>Node.js</span><span>Express</span><span>MongoDB</span><span>PostgreSQL</span><span>REST APIs</span></div></article>
        <article><h3>Styling</h3><div><span>Tailwind CSS</span><span>CSS Modules</span><span>UI systems</span><span>Accessibility</span></div></article>
        <article><h3>Workflow</h3><div><span>Git</span><span>GitHub</span><span>Vite</span><span>npm</span><span>Netlify</span></div></article>
      </div>
    </section>
    <section id="about" className="about aboutProfile reveal">
      <button className={'portraitWrap '+(portraitColor?'isColor':'')} onClick={()=>setPortraitColor(v=>!v)} aria-label="Toggle portrait color"><img src={portrait} alt="Shobhit Gupta"/><span>{portraitColor?'Color on':'Hover for color'}</span></button>
      <div className="aboutBody"><p className="eyebrow">About me</p><h2>Frontend instinct.<br/><em>Full-stack follow-through.</em></h2><div className="aboutGrid"><p>I’m Shobhit Gupta, a full-stack developer with a strong frontend core. I care about clear interfaces, responsive systems and shipping the whole product, not stopping at the screen.</p><p>My recent work spans live market data, global event monitoring and authenticated real-time multiplayer. I build with React and TypeScript on the client, then Node, Express, PostgreSQL and APIs behind it.</p></div></div>
    </section>
    <section className="education reveal"><div className="sectionHead"><p>Education</p><p>01</p></div><div className="timeline"><span className="year">2021 — 2025</span><div><h3>Bachelor of Technology</h3><p>Computer Science · CGPA 7.8/10</p></div><div><h3>Jaypee University of Information Technology</h3><p>Solan, India</p></div></div></section>
    <section className="contact" id="contact"><div className="contactGrid reveal">
      <div className="contactIntro"><p className="eyebrow">Get in touch</p><h2>Let’s talk.</h2><p>Have a role, project or question? Send me a note and I’ll get back to you.</p><div className="contactRoutes"><a href="mailto:shobhitg947@gmail.com"><span>Mail</span>shobhitg947@gmail.com ↗</a><a href="https://www.linkedin.com/in/shobhit-gupta-867b12223/" target="_blank" rel="noreferrer"><span>LinkedIn</span>shobhit-gupta ↗</a></div></div>
      {formSent?<div className="formSuccess" role="status"><b>Message sent.</b><p>Thanks — it’s on its way to Shobhit.</p><button onClick={()=>setFormSent(false)}>Send another</button></div>:<form className="messageForm" name="portfolio-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/?message=sent#contact" onSubmit={()=>setFormSent(true)}><input type="hidden" name="form-name" value="portfolio-contact"/><p className="hiddenField"><label>Don’t fill this out: <input name="bot-field"/></label></p><label>Your email<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required/></label><label>Subject<input name="subject" placeholder="Role, project or question" required/></label><label>Message<textarea name="message" rows={6} placeholder="Tell me what you’re working on…" required/></label><button type="submit">Send message <span>↗</span></button></form>}
    </div></section>
   </main><footer><span>© 2026 Shobhit Gupta</span><a href="#top">Back to top ↑</a></footer>
  </div>
}
