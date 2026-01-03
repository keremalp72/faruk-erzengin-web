// Sitemap oluşturma scripti
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Blog data'yı import etmek için basit bir çözüm
// Blog ID'lerini manuel olarak ekleyelim (6 blog yazısı var)
const blogData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const siteUrl = 'https://farukerzengin.com';
const currentDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { url: '', changefreq: 'daily', priority: 1.0 },
  { url: '/hakkinda', changefreq: 'monthly', priority: 0.8 },
  { url: '/tedaviler', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/basin', changefreq: 'weekly', priority: 0.7 },
  { url: '/yorumlar', changefreq: 'monthly', priority: 0.6 },
  { url: '/iletisim', changefreq: 'monthly', priority: 0.7 },
];

const blogRoutes = blogData.map(post => ({
  url: `/blog/${post.id}`,
  changefreq: 'monthly',
  priority: 0.8,
}));

const allRoutes = [...staticRoutes, ...blogRoutes];

const urlEntries = allRoutes.map(route => {
  const fullUrl = `${siteUrl}${route.url}`;
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}).join('\n');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

const outputPath = join(rootDir, 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemapContent, 'utf-8');
console.log('✅ Sitemap.xml oluşturuldu: public/sitemap.xml');

