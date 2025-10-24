# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio application built with TypeScript, React 19, and Tailwind CSS v4. The project uses shadcn/ui components (New York style) for UI components with a slate base color scheme.

## Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **React**: 19.2.0
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (configured in `components.json`)
- **Fonts**: Geist Sans & Geist Mono (Google Fonts via next/font)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge (via `cn()` helper), class-variance-authority
- **Animations**: tw-animate-css

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with font configuration
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind + theme variables
├── components/            # React components (to be created)
│   └── ui/               # shadcn/ui components
├── lib/                   # Utilities
│   └── utils.ts          # cn() utility for className merging
└── public/               # Static assets
```

## Architecture & Conventions

### Styling System
- Uses Tailwind CSS v4 with custom CSS variables defined in `globals.css`
- Theme system with light/dark modes using `.dark` class
- Color variables use OKLCH color space for better perceptual uniformity
- Custom variant for dark mode: `@custom-variant dark (&:is(.dark *))`
- The `cn()` utility in `lib/utils.ts` merges Tailwind classes with proper precedence

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` maps to project root
- shadcn/ui aliases (from `components.json`):
  - `@/components` → components directory
  - `@/lib` → lib directory
  - `@/ui` → components/ui directory
  - `@/hooks` → hooks directory
  - `@/utils` → lib/utils

### shadcn/ui Configuration
- Style: "new-york"
- Base color: "slate"
- CSS variables enabled for theming
- Icon library: lucide-react
- RSC (React Server Components) enabled

## Adding shadcn/ui Components

Use the shadcn CLI to add components:
```bash
npx shadcn@latest add [component-name]
```

Components will be added to `components/ui/` with proper styling and TypeScript types.

## Theme System

The application supports light/dark themes via CSS custom properties:
- Light mode: Default `:root` variables
- Dark mode: Applied via `.dark` class on a parent element
- Toggle implementation needed at app level (no current theme switcher)

## Fonts

Two variable fonts are configured in `layout.tsx`:
- `--font-geist-sans`: Primary sans-serif (Geist)
- `--font-geist-mono`: Monospace (Geist Mono)

## Important Notes

- This is a fresh Next.js project with shadcn/ui configured but minimal custom code
- No components directory exists yet - create when needed
- Theme switching logic not yet implemented (only CSS variables defined)
- Uses React Server Components by default (Next.js 16 App Router)
