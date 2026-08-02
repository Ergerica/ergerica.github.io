# Erica Ross — personal site

This is the source for `https://ergerica.github.io`.

## Update the homepage and About section

Edit `content/home.md`. Its top block controls your name, roles, photo, caption, and About heading. The Markdown below that block becomes the About text.

## Update the résumé

Edit `content/resume.md`, then commit and push. The résumé information lives in the YAML block between the `---` lines.

## Add a blog post

Create a new Markdown file in `content/posts`. Start it with:

```md
---
title: My post title
slug: my-post-title
excerpt: A short description shown on the homepage.
publishedAt: 2026-08-01
published: true
---

Write the post here.
```

Put post images in `public/blog-images`, then use standard Markdown:

```md
![Description of the image](/blog-images/example.jpg)
```

Pushing to `main` runs the GitHub Pages workflow and updates the site automatically.

## Local preview

```bash
npm install
npm run dev
```
