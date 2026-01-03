// Sitemap oluşturma utility fonksiyonu
import { blogData } from '../data/blogData';

const siteUrl = 'https://farukerzengin.com';

// Tüm sayfa rotaları
const staticRoutes = [
  { url: '', changefreq: 'daily', priority: 1.0 },
  { url: '/hakkinda', changefreq: 'monthly', priority: 0.8 },
  { url: '/tedaviler', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/basin', changefreq: 'weekly', priority: 0.7 },
  { url: '/yorumlar', changefreq: 'monthly', priority: 0.6 },
  { url: '/iletisim', changefreq: 'monthly', priority: 0.7 },
];

// Blog yazılarından dinamik rotalar oluştur
const blogRoutes = blogData.map(post => ({
  url: `/blog/${post.id}`,
  changefreq: 'monthly',
  priority: 0.8,
}));

// Sitemap XML'i oluştur
export const generateSitemapXML = () => {
  const allRoutes = [...staticRoutes, ...blogRoutes];
  const currentDate = new Date().toISOString().split('T')[0];

  const urlEntries = allRoutes.map(route => {
    const fullUrl = `${siteUrl}${route.url}`;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// Sitemap'i dosyaya yazmak için (Node.js ortamında)
export const writeSitemapToFile = async () => {
  const fs = await import('fs/promises');
  const path = await import('path');
  const sitemapContent = generateSitemapXML();
  const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  await fs.writeFile(publicPath, sitemapContent, 'utf-8');
  console.log('✅ Sitemap.xml oluşturuldu: public/sitemap.xml');
};

