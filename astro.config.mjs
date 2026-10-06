import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://rocket703.github.io'
    : 'https://www.atelier-haarkunst.de',
  base: isGitHubPages ? '/evi' : '/',
  compressHTML: true,
});
