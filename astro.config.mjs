// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// GitHub Pages:
//  - Repo named "<username>.github.io" → site: 'https://<username>.github.io', no base.
//  - Any other repo name (e.g. "profile-site") → also set base: '/profile-site'.
//  - Custom domain later → site: 'https://yourdomain.dev', remove base, add public/CNAME.
export default defineConfig({
  site: 'https://raiden-lv.github.io',
  // base: '/profile-site',
});
