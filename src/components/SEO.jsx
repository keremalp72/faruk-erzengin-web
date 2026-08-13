import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, isArticle = false, isTreatment = false, noIndex = false, articleDate, articleAuthor, breadcrumbs, keywords }) => {
  // Site genel ayarları
  const siteTitle = "Prof. Dr. Faruk Erzengin";
  const siteUrl = "https://farukerzengin.com";

  // Varsayılan anahtar kelimeler
  const defaultKeywords = "kardiyolog, kardiyoloji, iç hastalıkları, hipertansiyon, diyabetik ayak, kalp doktoru, istanbul kardiyolog, Prof. Dr. Faruk Erzengin";
  const metaKeywords = keywords || defaultKeywords;
  
  // OG image: favicon yerine gerçek sosyal paylaşım görseli
  const defaultImage = `${siteUrl}/og-image.png`;

  // Resim yolunu tam adrese çevirme
  const metaImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`) 
    : defaultImage;
    
  // URL belirtilmemişse mevcut pathname'i kullanarak tam URL oluştur
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const metaUrl = url || (currentPath && currentPath !== '/' ? `${siteUrl}${currentPath}` : siteUrl);

  // --- TITLE FORMATI ---
  // Her sayfa için benzersiz, anlamlı title.
  // Format: "Sayfa Adı | Prof. Dr. Faruk Erzengin"
  // Ana sayfa için daha zengin format
  const fullTitle = title 
    ? `${title} | ${siteTitle}` 
    : `${siteTitle} | İstanbul Kardiyolog ve İç Hastalıkları Uzmanı`;

  // Structured Data (JSON-LD) - Person / Physician Schema
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    "name": "Prof. Dr. Faruk Erzengin",
    "honorificPrefix": "Prof. Dr.",
    "jobTitle": "Kardiyolog ve İç Hastalıkları Uzmanı",
    "url": siteUrl,
    "description": "İstanbul Üniversitesi İstanbul Tıp Fakültesi'nin önceki dekanı, Nobel Tıp Ödülü adayı Prof. Dr. Faruk Erzengin. Kardiyoloji, iç hastalıkları, hipertansiyon ve diyabetik ayak tedavisinde 45 yıllık uzmanlık.",
    "knowsAbout": [
      "Kardiyoloji",
      "İç Hastalıkları",
      "Hipertansiyon Tedavisi",
      "Diyabetik Ayak Tedavisi",
      "Kalp Hastalıkları",
      "Aritmi",
      "Koroner Anjiyografi",
      "Kalp Yetmezliği",
      "Damar Sertliği"
    ],
    "medicalSpecialty": ["Cardiology", "Internal Medicine"],
    "sameAs": [
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
      "name": articleAuthor || "Prof. Dr. Faruk Erzengin",
      "@id": `${siteUrl}/#physician`
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
    },
    "inLanguage": "tr",
    "about": {
      "@type": "MedicalCondition",
      "name": "Kardiyoloji ve İç Hastalıkları"
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

  // MedicalClinic / Physician Schema (Tüm sayfalar için — daha zengin)
  const medicalBusinessSchema = (!isArticle && !isTreatment) ? {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#business`,
    "name": "Prof. Dr. Faruk Erzengin - Kardiyoloji ve İç Hastalıkları",
    "description": description || "Prof. Dr. Faruk Erzengin muayenehanesi. Kalp hastalıkları, hipertansiyon, diyabetik ayak ve iç hastalıkları tedavisi.",
    "url": siteUrl,
    "telephone": "+90-212-356-88-88",
    "email": "farukerzengin@gmail.com",
    "image": `${siteUrl}/favicon.png`,
    "priceRange": "$$",
    "medicalSpecialty": ["Cardiology", "Internal Medicine"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Büyükdere Cad. Kral Apt. No: 75 Kat: 1 D: 2",
      "addressLocality": "Mecidiyeköy",
      "addressRegion": "İstanbul",
      "postalCode": "34394",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0668514",
      "longitude": "28.9987561"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Thursday"],
        "opens": "12:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "13:00",
        "closes": "18:00"
      }
    ],
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Büyükdere+Cad.+Kral+Apt.+No:+75,+Mecidiyeköy"
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
      <title>{fullTitle}</title>
      <meta name="description" content={description ? description.substring(0, 160) : ''} />

      {/* meta keywords kaldırıldı: Google tarafından kullanılmıyor, gereksiz */}
      <meta name="author" content={articleAuthor || siteTitle} />
      <meta name="publisher" content={siteTitle} />
      <link rel="canonical" href={metaUrl} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

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
      <meta name="twitter:image:alt" content={title || siteTitle} />

      {/* --- STRUCTURED DATA (JSON-LD) --- */}
      <script type="application/ld+json">
        {JSON.stringify(physicianSchema)}
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