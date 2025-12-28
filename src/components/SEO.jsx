import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      {/* Sayfa Başlığı */}
      <title>{title} | Prof. Dr. Faruk Erzengin</title>
      {/* Meta Açıklama */}
      <meta name="description" content={description} />
      {/* Sosyal Medya Paylaşımı İçin (Opsiyonel ama iyi olur) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;