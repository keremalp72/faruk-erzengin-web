import React, { useState, useEffect } from 'react';
import { blogData } from '../data/blogData';
import { FaCalendarAlt, FaUserMd, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaTag } from 'react-icons/fa';
import './BlogPage.css';

// 1. Animasyon Bileşenini Import Ediyoruz
import ScrollReveal from '../components/Animations/ScrollReveal';

import doctorProfileImg from '../assets/images/hakkimda1.png'; 

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Tümü');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost, activeCategory]);

  const categoryCounts = blogData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const filteredPosts = activeCategory === 'Tümü' 
    ? blogData 
    : blogData.filter(post => post.category === activeCategory);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedPost(null);
  };

  const handleShare = (platform) => {
    if (!selectedPost) return;
    const currentUrl = window.location.href; 
    const title = selectedPost.title;
    let shareUrl = "";

    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="bp-page-wrapper">
      
      {/* HEADER - Fade In */}
      <div className="bp-page-header">
        <ScrollReveal animation="fade-up">
          <div className="container">
            <h1 className="bp-page-title">
              {selectedPost ? selectedPost.title : "Blog & Makaleler"}
            </h1>
            <p className="bp-breadcrumb">
              Ana Sayfa / Blog 
              {activeCategory !== 'Tümü' && !selectedPost ? ` / ${activeCategory}` : ""}
              {selectedPost ? ` / ${selectedPost.title.substring(0, 20)}...` : ""}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="bp-layout">
        
        {/* --- SOL TARAFA (ANA İÇERİK) --- */}
        <div className="bp-main-content">
          
          {/* DURUM 1: LİSTE GÖRÜNÜMÜ */}
          {!selectedPost ? (
            <>
              {activeCategory !== 'Tümü' && (
                 <ScrollReveal animation="fade-up">
                   <div className="bp-filter-info">
                     <h3>"{activeCategory}" kategorisindeki yazılar listeleniyor.</h3>
                     <button onClick={() => setActiveCategory('Tümü')}>Tümünü Göster</button>
                   </div>
                 </ScrollReveal>
              )}

              <div className="bp-grid">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    // index * 0.1 ile kartlar sırayla gelir (Staggered Effect)
                    <ScrollReveal key={post.id} animation="fade-up" delay={index * 0.1}>
                      <article className="bp-card" onClick={() => handlePostClick(post)}>
                        <div className="bp-card-img-box">
                          <img src={post.image} alt={post.title} />
                          <span className="bp-category-tag">{post.category}</span>
                        </div>
                        <div className="bp-card-body">
                          <div className="bp-meta">
                            <span><FaCalendarAlt /> {post.date}</span>
                            <span><FaUserMd /> Prof. Dr. Faruk Erzengin</span>
                          </div>
                          <h3 className="bp-card-title">{post.title}</h3>
                          <p className="bp-card-excerpt">{post.excerpt}</p>
                          <button className="bp-read-more">Devamını Oku →</button>
                        </div>
                      </article>
                    </ScrollReveal>
                  ))
                ) : (
                  <p>Bu kategoride henüz yazı bulunmamaktadır.</p>
                )}
              </div>
            </>
          ) : (
            /* DURUM 2: DETAY GÖRÜNÜMÜ - Animasyonla açılır */
            <ScrollReveal animation="fade-up">
              <div className="bp-detail-view">
                <button className="bp-back-btn" onClick={handleBackClick}>
                  <FaArrowLeft /> Listeye Dön
                </button>
                
                <div className="bp-detail-img">
                  <img src={selectedPost.image} alt={selectedPost.title} />
                </div>

                <div className="bp-detail-meta">
                  <span><FaCalendarAlt /> {selectedPost.date}</span>
                  <span 
                    className="clickable-cat" 
                    onClick={() => handleCategoryClick(selectedPost.category)}
                    style={{cursor: 'pointer'}}
                  >
                    <FaTag /> {selectedPost.category}
                  </span>
                  <span><FaUserMd /> Prof. Dr. Faruk Erzengin</span>
                </div>

                <div 
                  className="bp-article-content"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
                ></div>

                <div className="bp-share-area">
                  <span>Bu yazıyı paylaş:</span>
                  <div className="bp-share-icons">
                    <button onClick={() => handleShare('facebook')} className="share-btn fb">
                      <FaFacebookF />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="share-btn tw">
                      <FaTwitter />
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="share-btn li">
                      <FaLinkedinIn />
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          )}

        </div>

        {/* --- SAĞ TARAF (SIDEBAR) - Sağdan kayarak gelir --- */}
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
              <a href="/iletisim" className="bp-btn-cta">Randevu Al</a>
            </div>
          </ScrollReveal>

          {/* 2. Kategoriler Widget */}
          <ScrollReveal animation="slide-in-right" delay={0.4}>
            <div className="bp-widget">
              <h4 className="bp-widget-title">Kategoriler</h4>
              <ul className="bp-cat-list">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick('Tümü'); }} className={activeCategory === 'Tümü' ? 'active-cat' : ''}>
                    Tümü <span>({blogData.length})</span>
                  </a>
                </li>
                {Object.entries(categoryCounts).map(([catName, count]) => (
                  <li key={catName}>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick(catName); }} className={activeCategory === catName ? 'active-cat' : ''}>
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
                  <div key={item.id} className="bp-recent-item" onClick={() => handlePostClick(item)}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h5>{item.title}</h5>
                      <small>{item.date}</small>
                    </div>
                  </div>
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