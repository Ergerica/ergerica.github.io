---
title: How to make your first web app with the ChatGPT App from zero
slug: building-my-first-web-app-with-ai
excerpt: If you just have ChatGPT, this is for you. Here is how I built and published my first web app with Codex.
publishedAt: 2026-08-01
published: true
cover: /images/blog-ai.jpg
---

If you just have ChatGPT, this is for you.

After Chain React (a great React Native conference), I left with a lot of energy, so many ideas in my head, and a desire to share them. That meant not just building, but **shipping**, as one of the conference speakers said.

I saw this being applied by many people at the conference. For example, I saw people updating their old projects and giving them amazing improvements in a matter of hours. Imagine things that once took months now taking hours to revamp.

One cool thing I learned is that AI has become so advanced at coding that reviewing can now be the bottleneck?! This made me hopeful that I—a person with general knowledge in tech, but whose programming knowledge has always felt subpar—can make things that are just as cool and share them with the world.

My first idea was to make a web blog where I could post tutorials, share what I’m working on, and maybe even write food reviews based on my Google Reviews. Since you’re reading this, the web app is already done. Let me share how I made this site.

## 1. Knowing how AI can do the building

I’ve seen Codex integrated into IDEs like Xcode (shoutout, Philly!) and VS Code. In my case, I had previously dabbled with integrating a Claude agent into VS Code, but the setup looked so long that I was afraid I would procrastinate instead of making the web app.

So, I went with a super-simple option: downloading the ChatGPT desktop app. I chose it because it has Codex integration and lets you view how the app is turning out beside your prompts.

**Download ChatGPT Desktop**

While you can see the visual output, one downside is that you can’t always see what the code is doing. It can feel like a leap of faith in that aspect, and I can imagine that having visibility into the code is important for programmers and software engineers.

For me, right now, the ChatGPT app with Codex is perfect for the projects I want to make.

The reason I chose Codex over Claude Code was convenience. I didn’t delve into which one was better at building and launching. From what I’ve read, though, they’re both great.

## 2. Knowing what we’re building

One important thing to consider when making an app is its scope: What do you actually need it to have?

My idea was simple. I wanted a blog where I could publish new posts and update my résumé once in a while without changing the code.

Codex immediately started planning an admin dashboard, databases, and cloud hosting. I asked why, and it explained that I had said only I should have permission to make updates.

I had to research how to avoid all of that. The answer was to use Markdown files and GitHub Pages. My homepage and résumé each have their own Markdown file, while every blog post is a separate file.

When I push an update to these files in GitHub, the site rebuilds and publishes automatically. My GitHub account is essentially the admin system.

## 3. Building the app

Once the general request was established, I shared my résumé, About Me text, and color choices with Codex.
Since the general ask was already established, I shared with codex my resume, about me , colors.  And most importantly, the way that I want to be able to upload blogs which is through .md files.  

I asked Codex what stack my app uses. Here is what it told me:

> **The site uses:**
>
> - Next.js 16 and React 19 for the website
> - TypeScript for the application code
> - Markdown for editable content
> - gray-matter to read Markdown metadata
> - react-markdown to render the posts
> - Custom CSS in `app/globals.css` for the design
> - Node.js and npm for building locally
> - GitHub Actions for automatic builds
> - GitHub Pages for free static hosting

*This part in quotes was written by AI.*

## 4. Unexpected behavior

One unexpected behavior I rant into to while creating this page is that when running locally the application looked like what I expected yet when the app was deployed through GitHub actions. It only had the html no css

## 5. Publishing

This doesn’t take away your ability to think. These tools allow you to move so much faster than before.

Essentially, Codex did all the coding, and I acted as a guide for what I needed while checking that everything worked as expected.

## 6. Making updates

Now I can update the website by modifying only `.md` files.

In fact, this is technically an update: the article was published a while ago, and I’m now editing it through the same workflow described above.
