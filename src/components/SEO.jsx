import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  // Site genel ayarları
  const siteTitle = "Prof. Dr. Faruk Erzengin";
  const siteUrl = "https://farukerzengin.com"; // Canlı site adresin (yayına alınca burası önemli)
  
  // Eğer özel bir resim gelmediyse varsayılan bir logo/resim göster (Opsiyonel)
  // Şimdilik boş bırakabilirsin veya sitenin logosunun linkini koyabilirsin.
  const defaultImage = `${siteUrl}/logo.png`; 

  // Resim yolunu tam adrese çevirme (http ile başlamıyorsa başına site adresini ekle)
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`) 
    : defaultImage;
    
  const metaUrl = url || siteUrl;

  return (
    <Helmet>
      {/* --- STANDART META ETİKETLERİ --- */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description} />

      {/* --- FACEBOOK / LINKEDIN (Open Graph) --- */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />

      {/* --- TWITTER (X) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;