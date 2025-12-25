# abhirathsharma.com

Personal website built with Astro.

## Features

- Minimal, clean design
- Blog with Markdown posts
- Projects showcase
- Photo gallery
- Now page

## Typography

- Headings: Literata
- Body: DM Sans
- Mono: IBM Plex Mono

## Color Palette

- Accent: `#C17F59` (copper)
- Background: `#FCFAF6`
- Text: `#262421`
- Muted: `#918B82`
- Borders: `#EAE6DD`

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Blog Posts

Create Markdown files in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
date: 2025-12-25
description: "A brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Projects

Edit the `projects` array in `src/pages/projects.astro`.

### Photos

Add images to `public/images/` and update the `photos` array in `src/pages/photos.astro`.

## License

MIT
