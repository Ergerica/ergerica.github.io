import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getContent, getHomeContent } from "../lib/content";

export default function Home() {
  const {resume,posts}=getContent();
  const home=getHomeContent();
  const base=process.env.PAGES_BASE_PATH??"";
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Erica Ross home">Home<img src={`${base}/bricks.png`} alt=""/></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#writing">Blog</a><a href="#experience">Résumé</a><a href="#contact">Say hi</a></nav>
    </header>

    <section className="personal-hero" id="top">
      <div className="hero-words">
        <p className="eyebrow"><span/>{home.greeting}</p>
        <h1>{home.name.split(" ").map(part=><span key={part}>{part}<br/></span>)}</h1>
        <div className="roles">{home.roles.map(role=><span key={role}>{role}</span>)}</div>
      </div>
      <figure className="profile-frame"><img src={`${base}${home.image}`} alt={home.imageAlt}/><figcaption>{home.imageCaption}</figcaption></figure>
    </section>

    <section className="hello" id="about">
      <p className="section-label">{home.aboutLabel}</p>
      <div><h2>{home.aboutTitle}</h2><div className="about-copy"><ReactMarkdown>{home.body}</ReactMarkdown></div></div>
    </section>

    <section className="section writing" id="writing">
      <div className="section-label">The blog</div>
      <div><div className="writing-heading"><h2>Things I’m<br/>figuring out.</h2><p>Notes from what I’m building, learning, breaking, fixing, and thinking about lately.</p></div>
        <div className="post-list">{posts.map(post=><Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}><div className="post-copy"><span>{post.publishedAt}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Keep reading →</b></div>{post.cover&&<div className="post-image"><img src={`${base}${post.cover}`} alt=""/></div>}</Link>)}</div>
      </div>
    </section>

    <section className="section" id="experience"><div className="section-label">Work, so far</div><div><h2>Things I’ve<br/>worked on.</h2><div className="timeline">{resume.experience.map(job=><article className="job" key={`${job.company}-${job.role}`}><div className="job-top"><div><h3>{job.role}</h3><p className="company">{job.company}</p></div><time>{job.dates}</time></div><ul>{job.highlights.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="section education"><div className="section-label">The toolkit</div><div><h2>Things I know<br/>and keep learning.</h2><div className="skill-cloud light">{resume.skills.map(skill=><span key={skill}>{skill}</span>)}</div><div className="credentials">{resume.certifications.map(cert=><div key={cert}><span>Certified</span><strong>{cert}</strong></div>)}</div></div></section>

    <footer id="contact"><p>Tell me what you’re working on.</p><a href="https://www.linkedin.com/in/erica-r0ss/" target="_blank" rel="noreferrer">Say hello<span> ↗</span></a><div><span>© {new Date().getFullYear()} Erica Ross</span><a href="https://github.com/ergerica" target="_blank" rel="noreferrer">GitHub</a><span>Made with curiosity</span></div><small className="attribution"><a href="https://www.flaticon.com/free-icons/alphabet" title="alphabet icons" target="_blank" rel="noreferrer">Alphabet icon by Magnific — Flaticon</a><a href="https://www.flaticon.com/free-icons/bricks" title="bricks icons" target="_blank" rel="noreferrer">Bricks icon by Magnific — Flaticon</a></small></footer>
  </main>;
}
