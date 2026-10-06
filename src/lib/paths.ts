/** Prefix Astro `base` for public assets and internal links. */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;

  let base = import.meta.env.BASE_URL || '/';
  if (!base.endsWith('/')) base += '/';

  if (path === '/' || path === '') return base;
  return `${base}${path.replace(/^\//, '')}`;
}
