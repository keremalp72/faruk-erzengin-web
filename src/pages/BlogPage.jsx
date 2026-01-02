import React, { useState, useEffect } from 'react';
import { blogData } from '../data/blogData';
import { FaCalendarAlt, FaUserMd, FaTag } from 'react-icons/fa';
import './BlogPage.css';

// YENİ: Link import edildi
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import ScrollReveal from '../components/Animations/ScrollReveal';
import doctorProfileImg from '../assets/images/aboutme/hakkimda1.png'; 

const BlogPage = () => {
  // selectedPost state'ine gerek kalmadı, çünkü detaylar yeni sayfada açılacak.
  const [activeCategory, setActiveCategory] = useState('Tümü');

  // Sayfa açılınca en tepeye çık
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  // Kategori sayılarını hesapla
  const categoryCounts = blogData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // Kategoriye göre filtrele
  const filteredPosts = activeCategory === 'Tümü' 
    ? blogData 
    : blogData.filter(post => post.category === activeCategory);

  return (
    <div className="bp-page-wrapper">
      
      <SEO 
        title="Blog & Makaleler" 
        description="Kalp sağlığı, hipertansiyon, diyabet ve iç hastalıkları hakkında güncel tıbbi makaleler ve Prof. Dr. Faruk Erzengin'in uzman görüşleri." 
      />

      {/* HEADER */}
      <div className="bp-page-header">
        <ScrollReveal animation="fade-up">
          <div className="container">
            <h1 className="bp-page-title">Blog & Makaleler</h1>
            <p className="bp-breadcrumb">
              Ana Sayfa / Blog {activeCategory !== 'Tümü' ? ` / ${activeCategory}` : ""}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="bp-layout">
        
        {/* --- SOL TARAFA (ANA İÇERİK) --- */}
        <div className="bp-main-content">
          
          {/* Kategori Bilgisi */}
          {activeCategory !== 'Tümü' && (
             <ScrollReveal animation="fade-up">
               <div className="bp-filter-info">
                 <h3>"{activeCategory}" kategorisindeki yazılar listeleniyor.</h3>
                 <button onClick={() => setActiveCategory('Tümü')}>Tümünü Göster</button>
               </div>
             </ScrollReveal>
          )}

          {/* BLOG LİSTESİ */}
          <div className="bp-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} animation="fade-up" delay={index * 0.1}>
                  
                  {/* KART YAPISI (Link ile sarmalandı veya buton link yapıldı) */}
                  <article className="bp-card">
                    
                    {/* Resim Alanı */}
                    <div className="bp-card-img-box">
                      <img src={post.image} alt={post.title} />
                      <span className="bp-category-tag">{post.category}</span>
                    </div>
                    
                    {/* İçerik Alanı */}
                    <div className="bp-card-body">
                      <div className="bp-meta">
                        <span><FaCalendarAlt /> {post.date}</span>
                        <span><FaUserMd /> Prof. Dr. Faruk Erzengin</span>
                      </div>
                      
                      {/* Başlığa tıklandığında da gitmesi için Link */}
                      <h3 className="bp-card-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="bp-card-excerpt">{post.excerpt}</p>
                      
                      {/* BUTON ARTIK GERÇEK BİR LINK */}
                      <Link to={`/blog/${post.id}`} className="bp-read-more">
                        Devamını Oku →
                      </Link>
                    </div>

                  </article>
                </ScrollReveal>
              ))
            ) : (
              <p>Bu kategoride henüz yazı bulunmamaktadır.</p>
            )}
          </div>

        </div>

        {/* --- SAĞ TARAF (SIDEBAR) --- */}
        <aside className="bp-sidebar">
          
          {/* 1. Profil Widget */}
          <ScrollReveal animation="slide-in-right" delay={0.2}>
            <div className="bp-widget bp-profile-box">
              <div className="bp-profile-img">
                <img src={doctorProfileImg} alt="Prof. Dr. Faruk Erzengin" />
              </div>
              <h3>Prof. Dr. Faruk Erzengin</h3>
              <span className="bp-profile-role">Kardiyoloji Uzmanı</span>
              <p className="bp-bio-text">40 yıllık tecrübe ve bilimsel birikimle kalp sağlığınız için buradayız.</p>
              <Link to="/iletisim" className="bp-btn-cta">Randevu Al</Link>
            </div>
          </ScrollReveal>

          {/* 2. Kategoriler Widget */}
          <ScrollReveal animation="slide-in-right" delay={0.4}>
            <div className="bp-widget">
              <h4 className="bp-widget-title">Kategoriler</h4>
              <ul className="bp-cat-list">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveCategory('Tümü'); }} className={activeCategory === 'Tümü' ? 'active-cat' : ''}>
                    Tümü <span>({blogData.length})</span>
                  </a>
                </li>
                {Object.entries(categoryCounts).map(([catName, count]) => (
                  <li key={catName}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveCategory(catName); }} className={activeCategory === catName ? 'active-cat' : ''}>
                      {catName} <span>({count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 3. Son Yazılar Widget */}
          <ScrollReveal animation="slide-in-right" delay={0.6}>
            <div className="bp-widget">
              <h4 className="bp-widget-title">Son Yazılar</h4>
              <div className="bp-recent-list">
                {blogData.slice(0, 3).map(item => (
                  // Buradaki Link'i de güncelledik
                  <Link to={`/blog/${item.id}`} key={item.id} className="bp-recent-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h5>{item.title}</h5>
                      <small>{item.date}</small>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </aside>

      </div>
    </div>
  );
};

export default BlogPage;