import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Resume = { summary:string; skills:string[]; certifications:string[]; experience:{role:string;company:string;dates:string;highlights:string[]}[] };
export type Post = { title:string; slug:string; excerpt:string; body:string; publishedAt:string; published:boolean; cover?:string };

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
