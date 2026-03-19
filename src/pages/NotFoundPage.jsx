import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Sayfa Bulunamadı" 
        description="Aradığınız sayfa bulunamadı. Lütfen ana sayfaya dönünüz."
      />
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '6rem', color: '#1a3c6d', marginBottom: '1rem', fontWeight: 'bold' }}>404</h1>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>Sayfa Bulunamadı</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem', maxWidth: '600px' }}>
          Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.
        </p>
        <Link 
          to="/" 
          title="Ana Sayfaya Dön"
          style={{
            display: 'inline-block',
            backgroundColor: '#1a3c6d',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#102a4d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#1a3c6d'}
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
