# Netlify Deploy

This project is ready to deploy on Netlify as a static Vite site.

## Build settings

- Build command: `pnpm build:netlify`
- Publish directory: `dist/public`
- Node version: `22`

## Environment variables

Add these variables in Netlify:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_CONTACT_EMAIL`

## Notes

- SPA routing is already handled by `client/public/_redirects`.
- `netlify.toml` contains the same build configuration, so Netlify should detect it automatically.
