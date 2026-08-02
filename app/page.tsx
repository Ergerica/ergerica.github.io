import Link from "next/link";
import { getContent } from "../lib/content";

export default function Home() {
  const {resume,posts}=getContent();
  const base=process.env.PAGES_BASE_PATH??"";
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Erica Ross home">ER<span>✦</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#writing">Blog</a><a href="#experience">Résumé</a><a href="#contact">Say hi</a></nav>
    </header>

    <section className="personal-hero" id="top">
      <div className="hero-words">
        <p className="eyebrow"><span/>Hello, I’m</p>
        <h1>Erica<br/>Ross</h1>
        <div className="roles"><span>DevOps</span><span>Builder</span></div>
      </div>
      <figure className="profile-frame"><img src={`${base}/images/erica-profile.jpeg`} alt="Erica Ross smiling outside at night"/><figcaption>Always exploring something new ✦</figcaption></figure>
    </section>

    <section className="hello" id="about">
      <p className="section-label">A little about me</p>
      <div><h2>I’m curious about<br/><em>a lot of things.</em></h2><p>{resume.summary}</p><p>I love hearing what other people are working on, and I love creating things myself. Right now I feel like sharing more, so this is where I’ll keep the ideas, projects, and discoveries I pick up along the way.</p></div>
    </section>

    <section className="section writing" id="writing">
      <div className="section-label">The blog</div>
      <div><div className="writing-heading"><h2>Things I’m<br/>figuring out.</h2><p>Notes from what I’m building, learning, breaking, fixing, and thinking about lately.</p></div>
        <div className="post-list">{posts.map(post=><Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}><span>{post.publishedAt}</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Keep reading →</b></Link>)}</div>
      </div>
    </section>

    <section className="section" id="experience"><div className="section-label">Work, so far</div><div><h2>Things I’ve<br/>worked on.</h2><div className="timeline">{resume.experience.map(job=><article className="job" key={`${job.company}-${job.role}`}><div className="job-top"><div><h3>{job.role}</h3><p className="company">{job.company}</p></div><time>{job.dates}</time></div><ul>{job.highlights.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section className="section education"><div className="section-label">The toolkit</div><div><h2>Things I know<br/>and keep learning.</h2><div className="skill-cloud light">{resume.skills.map(skill=><span key={skill}>{skill}</span>)}</div><div className="credentials">{resume.certifications.map(cert=><div key={cert}><span>Certified</span><strong>{cert}</strong></div>)}</div></div></section>

    <footer id="contact"><p>Tell me what you’re working on.</p><a href="mailto:ergerica76@gmail.com">Say hello<span> ↗</span></a><div><span>© {new Date().getFullYear()} Erica Ross</span><a href="https://www.linkedin.com/in/erica-r0ss/" target="_blank" rel="noreferrer">LinkedIn</a><span>Made with curiosity</span></div></footer>
  </main>;
}
