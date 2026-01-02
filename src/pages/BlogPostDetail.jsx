import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData'; 
import SEO from '../components/SEO';
import ScrollReveal from '../components/Animations/ScrollReveal';
import { FaArrowLeft, FaUserMd, FaTag, FaCalendarAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './BlogPostDetail.css';

import doctorProfileImg from '../assets/images/aboutme/hakkimda1.png'; 

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  const categoryCounts = blogData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Yazı bulunamadı.</h2>
        <Link to="/blog" className="back-btn">Blog'a Dön</Link>
      </div>
    );
  }

  const handleShare = (platform) => {
    const currentUrl = window.location.href;
    const shareUrl = platform === 'facebook' 
      ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
      : platform === 'twitter' 
      ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`
      : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="blog-detail-page">
      <SEO title={post.title} description={post.excerpt} image={post.image} url={window.location.href} />

      {/* --- KOYU MAVİ BAŞLIK ALANI --- */}
      <div className="bd-dark-header">
        <div className="container">
           <ScrollReveal animation="fade-down">
             <h1 className="bd-hero-title">{post.title}</h1>
             <p className="bd-breadcrumb">
                Ana Sayfa / Blog / {post.category}
             </p>
           </ScrollReveal>
        </div>
      </div>

      <div className="container">
        
        <div className="bd-layout-grid">
          
          {/* --- SOL KOLON --- */}
          <div className="bd-main-column">
            
            <ScrollReveal animation="fade-up">
              <article className="bd-article-box">
                
                {/* --- 1. LİSTEYE DÖN (BEYAZ KUTUNUN İÇİNDE) --- */}
                <div className="bd-internal-nav">
                    <Link to="/blog" className="bd-back-link">
                        <FaArrowLeft /> Listeye Dön
                    </Link>
                </div>

                {/* Resim Alanı */}
                <div className="bd-post-image">
                   <img src={post.image} alt={post.title} />
                </div>

                {/* Meta Bilgiler */}
                <div className="bd-meta-info">
                   <span className="meta-item"><FaCalendarAlt /> {post.date}</span>
                   <span className="meta-item"><FaTag /> {post.category}</span>
                   <span className="meta-item"><FaUserMd /> Prof. Dr. Faruk Erzengin</span>
                </div>

                {/* İçerik */}
                <div 
                  className="bd-content-area"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Paylaş Butonları */}
                <div className="bd-share-section">
                   <span>Bu yazıyı paylaş:</span>
                   <div className="bd-social-icons">
                      <button onClick={() => handleShare('facebook')} className="s-btn fb"><FaFacebookF /></button>
                      <button onClick={() => handleShare('twitter')} className="s-btn tw"><FaTwitter /></button>
                      <button onClick={() => handleShare('linkedin')} className="s-btn li"><FaLinkedinIn /></button>
                   </div>
                </div>

              </article>
            </ScrollReveal>
          </div>

          {/* --- SAĞ KOLON (SIDEBAR) --- */}
          <aside className="bd-sidebar-column">
            
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="bd-widget profile-widget">
                 <div className="pw-img">
                    <img src={doctorProfileImg} alt="Prof. Dr. Faruk Erzengin" />
                 </div>
                 <h3>Prof. Dr. Faruk Erzengin</h3>
                 <span className="pw-role">Kardiyoloji Uzmanı</span>
                 <p>40 yıllık tecrübe ve bilimsel birikimle kalp sağlığınız için buradayız.</p>
                 <Link to="/iletisim" className="pw-btn">Randevu Al</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="bd-widget">
                <h4 className="widget-header">Kategoriler</h4>
                <ul className="cat-list">
                  <li><Link to="/blog" className="cat-link">Tümü <span className="count">({blogData.length})</span></Link></li>
                  {Object.entries(categoryCounts).map(([cat, count]) => (
                    <li key={cat}>
                      <Link to="/blog" className="cat-link">{cat} <span className="count">({count})</span></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="bd-widget">
                <h4 className="widget-header">Son Yazılar</h4>
                <div className="recent-posts-list">
                  {blogData.slice(0, 3).map((item) => (
                    <Link to={`/blog/${item.id}`} key={item.id} className="recent-post-item">
                      <img src={item.image} alt={item.title} />
                      <div className="rp-info">
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
    </div>
  );
};

export default BlogPostDetail;