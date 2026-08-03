import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Certification = { name:string; issuer?:string; issued?:string; credentialId?:string; credentialUrl?:string };
export type Resume = { summary:string; skills:string[]; certifications:Certification[]; experience:{role:string;company:string;dates:string;highlights:string[]}[] };
export type Post = { title:string; slug:string; excerpt:string; body:string; publishedAt:string; published:boolean; cover?:string };
export type HomeContent = { name:string; greeting:string; roles:string[]; image:string; imageAlt:string; imageCaption:string; aboutLabel:string; aboutTitle:string; body:string };

export function getHomeContent():HomeContent {
  const source=fs.readFileSync(path.join(process.cwd(),"content/home.md"),"utf8");
  const {data,content}=matter(source);
  return {...data,body:content.trim()} as HomeContent;
}

function readResume():Resume {
  const source=fs.readFileSync(path.join(process.cwd(),"content/resume.md"),"utf8");
  const {data,content}=matter(source);
  return {summary:content.trim(),skills:data.skills??[],certifications:data.certifications??[],experience:data.experience??[]};
}

export function getContent():{resume:Resume;posts:Post[]} {
  const postsDir=path.join(process.cwd(),"content/posts");
  const posts=fs.readdirSync(postsDir).filter(file=>file.endsWith(".md")).map(file=>{const {data,content}=matter(fs.readFileSync(path.join(postsDir,file),"utf8"));const publishedAt=data.publishedAt instanceof Date?data.publishedAt.toISOString().slice(0,10):String(data.publishedAt);return {...data,publishedAt,body:content.trim()} as Post;}).filter(post=>post.published).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));
  return {resume:readResume(),posts};
}
export function getPost(slug:string){return getContent().posts.find(post=>post.slug===slug)??null;}
