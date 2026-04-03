import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, isArticle = false, isTreatment = false, articleDate, articleAuthor, breadcrumbs }) => {
  // Site genel ayarları
  const siteTitle = "Prof. Dr. Faruk Erzengin";
  const siteUrl = "https://farukerzengin.com"; // Canlı site adresin (yayına alınca burası önemli)
  
  // Eğer özel bir resim gelmediyse varsayılan bir logo/resim göster (Opsiyonel)
  // Şimdilik boş bırakabilirsin veya sitenin logosunun linkini koyabilirsin.
  const defaultImage = `${siteUrl}/favicon.png`; 

  // Resim yolunu tam adrese çevirme (http ile başlamıyorsa başına site adresini ekle)
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`) 
    : defaultImage;
    
  const metaUrl = url || siteUrl;

  // Structured Data (JSON-LD) - Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prof. Dr. Faruk Erzengin",
    "jobTitle": "Kardiyolog ve İç Hastalıkları Uzmanı",
    "url": siteUrl,
    "description": "İstanbul Üniversitesi Tıp Fakültesi önceki dekanı, Nobel adayı Prof. Dr. Faruk Erzengin. Kalp hastalıkları, hipertansiyon, diyabetik ayak ve iç hastalıkları tedavisi.",
    "knowsAbout": [
      "Kardiyoloji",
      "İç Hastalıkları",
      "Hipertansiyon",
      "Diyabetik Ayak",
      "Kalp Hastalıkları",
      "Aritmi"
    ],
    "sameAs": [
      // Sosyal medya linkleriniz varsa buraya ekleyin
      "https://www.facebook.com/faruk.erzengin.2025/",
      "https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/",
      "https://www.instagram.com/farukerzengin/"
    ]
  };

  // Article Schema (Blog yazıları için)
  const articleSchema = isArticle ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title || siteTitle,
    "description": description,
    "image": metaImage,
    "author": {
      "@type": "Person",
      "name": articleAuthor || "Prof. Dr. Faruk Erzengin"
    },
    "publisher": {
      "@type": "Person",
      "name": "Prof. Dr. Faruk Erzengin"
    },
    "datePublished": articleDate || new Date().toISOString(),
    "dateModified": articleDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": metaUrl
    }
  } : null;

  // MedicalCondition Schema (Tedaviler sayfası için)
  const medicalConditionSchema = isTreatment ? {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": title,
    "description": description,
    "possibleTreatment": {
      "@type": "MedicalSpecialty",
      "name": "Kardiyoloji"
    },
    "url": metaUrl
  } : null;

  // MedicalClinic / Physician Schema (Ana sayfa için)
  const medicalBusinessSchema = (!isArticle && !isTreatment) ? {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Prof. Dr. Faruk Erzengin - Kardiyoloji ve İç Hastalıkları",
    "description": description,
    "url": siteUrl,
    "telephone": "+90 212 356 88 88",
    "email": "farukerzengin@gmail.com",
    "image": `${siteUrl}/favicon.png`,
    "priceRange": "$$",
    "medicalSpecialty": [
      "Kardiyoloji",
      "İç Hastalıkları"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Büyükdere Cad. Kral Apt. No: 75 Kat: 1 D: 2",
      "addressLocality": "Mecidiyeköy",
      "addressRegion": "İstanbul",
      "postalCode": "34394",
      "addressCountry": "TR"
    }
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* --- STANDART META ETİKETLERİ --- */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="kardiyolog, kardiyoloji, iç hastalıkları, hipertansiyon, diyabetik ayak, kalp doktoru, istanbul kardiyolog, Prof. Dr. Faruk Erzengin" />
      <meta name="author" content={articleAuthor || siteTitle} />
      <meta name="publisher" content={siteTitle} />
      <link rel="canonical" href={metaUrl} />
      <meta name="robots" content="index, follow" />

      {/* --- FACEBOOK / LINKEDIN (Open Graph) --- */}
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content={siteTitle} />

      {/* --- TWITTER (X) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@farukerzengin" />
      <meta name="twitter:creator" content="@farukerzengin" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {/* --- STRUCTURED DATA (JSON-LD) --- */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {medicalBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(medicalBusinessSchema)}
        </script>
      )}

      {medicalConditionSchema && (
        <script type="application/ld+json">
          {JSON.stringify(medicalConditionSchema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;