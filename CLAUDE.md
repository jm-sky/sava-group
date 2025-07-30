# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the SAVA GROUP website repository.

# Dev Commands

## Development  
- `pnpm dev` - Start development server (Nuxt dev mode)
- `pnpm build` - Build for production  
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- `pnpm postinstall` - Prepare Nuxt (runs automatically after install)

## Linting and Type Checking
- `npx eslint <files>` - Run ESLint on specific files
- `npx tsc --noEmit` - Run TypeScript type checking
- ESLint configuration uses Nuxt's built-in ESLint config (`.nuxt/eslint.config.mjs`)
- TypeScript references are managed by Nuxt's generated tsconfig files
- Always run linter and type check after feature completion or even after each few components/functions.

## Dependencies
- Project uses **pnpm** as package manager
- Uses Nuxt 4 with Vue 3 and TypeScript
- Key modules: @nuxt/ui, @nuxtjs/i18n, shadcn-nuxt
- Styling: Tailwind CSS v4 with @tailwindcss/vite plugin

# Project Architecture

## Component Structure
- **Root components/**: Source components copied to `app/components/` for Nuxt 4 compatibility
- **app/components/**: Nuxt-accessible components organized by category:
  - `Buttons/`: DarkModeButton, LocaleButton  
  - `Cards/`: AboutCard, BaseCard, ContactCard
  - `Layout/`: Navbar, NavbarLinks
  - `Sections/`: HeroSection, AboutSection, ContactSection, FooterSection, etc.
  - `ui/`: shadcn-vue components (managed by shadcn-nuxt)

## Application Structure  
- **Single-page application**: `app/app.vue` contains main layout with all sections
- **Section-based design**: Hero → About → Contact → Footer with ScrollToTop
- **Static generation ready**: Uses `pnpm generate` for deployment

## Internationalization (i18n)
- **Locales**: English (default) and Polish in `i18n/locales/`
- **Configuration**: Cookie-based detection, redirects on root
- **Integration**: Uses @nuxtjs/i18n module with vue-i18n

## Styling System
- **Tailwind CSS v4**: Latest version with Vite plugin integration
- **shadcn-vue**: Component library with New York style, slate base color
- **CSS location**: `app/assets/css/index.css` (copied from `assets/css/`)
- **Component styling**: Uses CSS variables for theming

## Build and Deployment
- **Static generation**: Primary deployment method via `pnpm generate`
- **Build script**: `scripts/build-deploy.sh` handles git pull, generate, and finalization
- **Production**: Uses Nuxt's optimized build process
- **Domain**: sava-group.dev-made.it
- **Caddy config**: `Caddyfile` contains server configuration for deployment

# Key Configuration Files
- `nuxt.config.ts`: Main Nuxt configuration with modules and i18n setup
- `components.json`: shadcn-vue configuration with aliases and styling preferences
- `tsconfig.json`: TypeScript references managed by Nuxt's generated configs
- `app/config.ts`: Company data (SAVA GROUP sp. z o.o., NIP: 5213870408, KRS: 0000793121)

# Company Information
- **Company**: SAVA GROUP sp. z o.o.
- **NIP**: 5213870408
- **KRS**: 0000793121  
- **REGON**: 383783407
- **Email**: sava.group.pl@gmail.com
- **Phone**: +48 572 751 175
- **Address**: Aleja Jana Pawła II 27, 00-867 Warszawa, Polska
- **Services**: Electrical services, installation, maintenance
- **Slogan**: "Nie ma nic niemożliwego. Zapraszam do kontaktu. Rozwiązanie każdego problemu."
 