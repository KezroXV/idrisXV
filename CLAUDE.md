# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal portfolio website** built with Next.js 16, TypeScript, and Tailwind CSS v4. The design follows a minimalist, terminal-inspired aesthetic with monospace typography (Geist Mono) and a pure monochrome color palette (black/white, no color saturation).

## Tech Stack

- **Framework**: Next.js 16 with App Router (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with OKLCH color space
- **UI Components**: shadcn/ui (New York style, customized)
- **Internationalization**: next-intl v4.4.0
- **Icons**: lucide-react
- **Fonts**: Geist Mono (monospace only)

## Development Commands

```bash
npm run dev    # Start dev server (localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

### Cleaning Build Issues

If you encounter routing or build errors:
```bash
rm -rf .next && npm run dev
```

## Architecture

### Routing Structure (Next.js 16 App Router with i18n)

```
app/
  [locale]/              # Dynamic locale routing
    layout.tsx           # Main layout with i18n provider
    page.tsx             # Home page (all sections in one page)
    globals.css          # Global styles
    not-found.tsx        # 404 page
```

**Important**:
- The app uses a dynamic `[locale]` route segment for internationalization
- There is NO root `app/layout.tsx` - everything goes through `app/[locale]/layout.tsx`
- In Next.js 16, `params` are Promises and must be unwrapped with `await`:
  ```tsx
  async function Layout({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
  }
  ```

### Internationalization (i18n)

**Configuration:**
- `i18n/config.ts` - Defines supported locales (`en`, `fr`)
- `i18n/request.ts` - next-intl configuration
- `middleware.ts` - Handles locale routing
- `messages/en.json` - English translations (default)
- `messages/fr.json` - French translations

**Routes:**
- `/` → English (default, no prefix)
- `/fr` → French

**Using translations in components:**
```tsx
"use client";
import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("sectionName");
  return <h1>{t("title")}</h1>;
}
```

**Currently implemented translations:**
- ✅ Skills section (`components/sections/skills-terminal.tsx`)
- ⏳ Hero, Projects, Contact sections - translation keys exist in JSON files but not yet implemented in components

See [TRADUCTIONS.md](TRADUCTIONS.md) for complete i18n documentation.

### Component Structure

**Active components (used in production):**
- `components/sections/hero-terminal.tsx` - Hero/intro section
- `components/sections/skills-terminal.tsx` - Tech stack grid with logos
- `components/sections/projects-terminal.tsx` - Projects showcase with modal
- `components/sections/contact-terminal.tsx` - Contact form
- `components/footer-terminal.tsx` - Footer
- `components/project-modal.tsx` - Modal for project details (shadcn Dialog)
- `components/theme-toggle.tsx` - Dark/light mode toggle
- `components/language-toggle.tsx` - EN/FR language switcher
- `components/theme-wrapper.tsx` - Theme provider wrapper
- `components/ui/dialog.tsx` - shadcn Dialog component

**Legacy components (not used):**
- `components/sections/hero.tsx`, `skills.tsx`, `projects.tsx`, `contact.tsx`
- These were from the original colored design, replaced by `-terminal` variants

### Data Structure

**Skills (`lib/data/skills.ts`):**
```typescript
{
  frontend: [{ name: "React", logo: "/react-logo.svg" }, ...],
  backend: [...],
  tools: [...]
}
```

**Logo inversion for dark mode:**
The skills section has a `darkLogos` array for logos that need color inversion in dark mode:
- "GitHub", "Next.js", "Prisma", "Better Auth"

These logos are black and need `dark:invert` and `group-hover:invert` to remain visible.

**Projects (`lib/data/projects.ts`):**
```typescript
{
  id: number;
  title: string;
  category: string;          // e.g. "Plateforme E-commerce"
  description: string;        // Short description
  longDescription: string;    // Full description for modal
  image: string;             // Placeholder path
  tags: string[];            // Tech stack
  github?: string;
  demo?: string;
  featured: boolean;
}
```

### Theme System

**Custom theme implementation:**
- Uses React Context (`hooks/use-theme.tsx`)
- Persists to localStorage
- Default: dark mode
- Toggle button fixed in top-right corner
- Language toggle button positioned next to theme toggle (right-20)

**Color system:**
- Pure monochrome palette using OKLCH color space
- No cyan or colored accents (removed from hover states)
- `border-radius: 0` for sharp, terminal-like corners
- Consistent hover pattern: `hover:bg-foreground hover:text-background`

**Important design constraints:**
- All hover states should invert (bg-foreground/text-background), no colored borders
- No ASCII art overuse - keep minimal for UX
- Typography: Only Geist Mono (no sans-serif)

## Key Technical Patterns

### Adding shadcn Components

```bash
npx shadcn@latest add [component-name]
```

Components are installed to `components/ui/` with the New York style and slate base color.

### Image Optimization

Skills use Next.js `Image` component for SVG logos:
```tsx
<Image src={logo} alt={name} fill className="object-contain" />
```

### Client Components

All interactive components must be marked with `"use client"` directive:
- Theme toggle
- Language toggle
- Any component using `useTranslations`, `useState`, `useEffect`, etc.

### Modal Pattern

Projects use shadcn Dialog component:
```tsx
<Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent>...</DialogContent>
</Dialog>
```

Clicking a project card opens the modal with full details.

## Common Workflows

### Adding a New Skill

1. Add SVG logo to `/public/`
2. Update `lib/data/skills.ts`:
   ```ts
   tools: [
     { name: "Tool Name", logo: "/logo-file.svg" }
   ]
   ```
3. If logo is black/dark, add to `darkLogos` array in `skills-terminal.tsx`

### Adding a New Project

Update `lib/data/projects.ts` with new project object including all fields (title, category, description, longDescription, image, tags, etc.)

### Implementing Translations in a Section

1. Ensure translation keys exist in `messages/en.json` and `messages/fr.json`
2. In the component:
   ```tsx
   "use client";
   import { useTranslations } from "next-intl";

   export function MySection() {
     const t = useTranslations("sectionName");
     return <h1>{t("keyName")}</h1>;
   }
   ```

### Modifying Translations

Edit both files to keep them in sync:
- `messages/en.json` - English
- `messages/fr.json` - French

Structure must match between both files.

## Styling Conventions

### Tailwind Classes

- Use `border-foreground` for all borders
- Use `text-muted-foreground` for secondary text
- Hover states: `hover:bg-foreground hover:text-background`
- No `rounded-*` classes (border-radius: 0)
- Typography: `font-mono` only

### Responsive Design

Common breakpoints:
- `md:` for tablet/desktop changes
- Grid patterns: `grid-cols-3 md:grid-cols-6` (skills)

### Animations

Available custom animations (in globals.css):
- `animate-fadeInUp`
- `animate-gradient`
- Smooth scrolling enabled

## Important Notes

### Next.js 16 Specifics

- **Async params**: All route params are Promises in dynamic routes
- **Middleware deprecation**: The project shows a warning about middleware → proxy migration (can be ignored for now)
- **Turbopack**: Used by default in development

### Build Considerations

- Skills section: Only include skills with available logo files
- Projects: Currently use placeholder images
- All components should support both light and dark modes
- Ensure all interactive elements are keyboard accessible

### Known Issues

- Middleware deprecation warning (Next.js 16 transitional period)
- Some sections not yet translated (hero, projects, contact) - translation keys exist but components need updating

## File Locations Reference

| Purpose | Location |
|---------|----------|
| Page content | `app/[locale]/page.tsx` |
| Main layout | `app/[locale]/layout.tsx` |
| Sections | `components/sections/*-terminal.tsx` |
| Data | `lib/data/{skills,projects}.ts` |
| Translations | `messages/{en,fr}.json` |
| Theme config | `app/[locale]/globals.css` |
| Theme logic | `hooks/use-theme.tsx` |
| i18n config | `i18n/{config,request}.ts` |
| Middleware | `middleware.ts` |
