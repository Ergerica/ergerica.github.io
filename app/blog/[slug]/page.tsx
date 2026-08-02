import Link from "next/link";
import {notFound} from "next/navigation";
import ReactMarkdown from "react-markdown";
import {getContent,getPost} from "../../../lib/content";

export function generateStaticParams(){return getContent().posts.map(post=>({slug:post.slug}));}
export default async function BlogPost({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const post=getPost(slug);if(!post)notFound();const base=process.env.PAGES_BASE_PATH??"";
  return <main className="article-shell"><Link className="back" href="/">← Back to Erica’s page</Link><article><p className="article-kicker">A field note · {post.publishedAt}</p><h1>{post.title}</h1><p className="article-intro">{post.excerpt}</p><div className="article-body"><ReactMarkdown components={{img:({src,alt})=><img src={`${base}${src}`} alt={alt??""}/>}}>{post.body}</ReactMarkdown></div></article></main>;
}
