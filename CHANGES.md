# v1.1 – 3D hero, dark/light mode, motion

## Run
```bash
npm install      # installs three + @react-three/fiber + @react-three/drei
npm run dev
```

## What changed
- **Hero**: the 4-box architecture diagram (`ArchitectureVisual.jsx`) is removed and replaced by the
  interactive 3D "Digital Engineering Core" (`src/components/hero/`). It lazy-loads, falls back to a
  static SVG when WebGL is unavailable, pauses off-screen and respects reduced-motion.
- **Dark / light mode**: `src/theme/ThemeProvider.jsx`, toggle in the navbar (`ThemeToggle.jsx`),
  saved in localStorage, defaults to the OS setting, no flash on load (script in `index.html`).
  All colours for both themes live in `src/theme.css` (loaded after `styles.css`).
- **Motion**: staggered hero entrance, red shimmer on "Automate.", pulsing hero glow, floating 3D
  scene with mouse parallax, animated theme toggle, smooth colour transition when switching.
  Everything is disabled under `prefers-reduced-motion`.
- `package.json`: removed `"latest"` ranges, added the 3D dependencies. `package-lock.json` was
  removed because it was stale – `npm install` generates a fresh one.

## Tuning
- Hero 3D height: `.hero-visual .hero3d` in `src/theme.css`.
- Light-mode colours: bottom of `src/theme.css` (section 6) + generated block (section 5).
- 3D scene colours / nodes: `src/components/hero/scene/config.ts`.
