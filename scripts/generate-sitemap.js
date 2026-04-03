// Sitemap oluşturma scripti - Supabase'den dinamik blog verisi çeker
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const SUPABASE_URL = 'https://uekcducwvvwzufzhlwhg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE';

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

async function generateSitemap() {
  let blogRoutes = [];

  try {
    // Supabase'den blog yazılarını çek (10 sn timeout)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/articles?select=id,created_at&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (response.ok) {
      const articles = await response.json();
      blogRoutes = articles.map(article => ({
        url: `/blog/${article.id}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: article.created_at ? article.created_at.split('T')[0] : currentDate,
      }));
      console.log(`✅ ${articles.length} blog yazısı Supabase'den çekildi.`);
    } else {
      console.warn('⚠️ Supabase bağlantısı başarısız, blog yazıları sitemap\'e eklenemedi.');
    }
  } catch (error) {
    console.warn('⚠️ Supabase bağlantı hatası:', error.message);
  }

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const urlEntries = allRoutes.map(route => {
    const fullUrl = `${siteUrl}${route.url}`;
    const lastmod = route.lastmod || currentDate;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
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
  console.log(`✅ Sitemap.xml oluşturuldu: public/sitemap.xml (${allRoutes.length} URL)`);
}

generateSitemap();
