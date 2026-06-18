import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SEO from '../components/SEO';
import ScrollReveal from '../components/Animations/ScrollReveal';
import { FaArrowLeft, FaUserMd, FaTag, FaCalendarAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './BlogPostDetail.css';

import doctorProfileImg from '../assets/images/aboutme/hakkimda1.png'; 

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [id]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Fetch current post
      const { data: postData, error: postError } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();
        
      if (postError) throw postError;
      setPost(postData);

      // 2. Fetch all for categories & recent
      const { data: allData, error: allError } = await supabase
        .from('articles')
        .select('id, title, category, image_url, created_at')
        .order('created_at', { ascending: false });

      if (allError) throw allError;

      setRecentPosts(allData.slice(0, 3));
      
      const counts = allData.reduce((acc, item) => {
        const cat = item.category || 'Genel';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      }, {});
      setCategoryCounts(counts);

    } catch (error) {
      console.error("Veri çekme hatası:", error);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', margin: '150px 0', fontSize: '1.2rem', color: '#1a3c6d', fontFamily: 'Poppins' }}>
        Makale yükleniyor...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-not-found" style={{ textAlign: 'center', margin: '150px 0', fontFamily: 'Poppins' }}>
        <h2>Yazı bulunamadı.</h2>
        <Link to="/blog" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#1a3c6d', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>Blog'a Dön</Link>
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

  // Convert HTML content from DB, avoiding dangerous tags if necessary
  const excerpt = post.content ? post.content.substring(0, 150).replace(/<[^>]+>/g, '') + '...' : '';

  return (
    <div className="blog-detail-page">
      <SEO 
        title={post.title} 
        description={excerpt} 
        image={post.image_url} 
        url={`https://farukerzengin.com/blog/${post.id}`}
        isArticle={true}
        articleDate={post.created_at}
        articleAuthor="Prof. Dr. Faruk Erzengin"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.category || 'Genel', url: `/blog?category=${post.category || 'Genel'}` },
          { name: post.title, url: `/blog/${post.id}` }
        ]}
      />

      <div className="bd-dark-header" style={{ backgroundColor: '#1a3c6d' }}>
        <div className="container">
           <ScrollReveal animation="fade-down">
             <h1 className="bd-hero-title">{post.title}</h1>
             <p className="bd-breadcrumb" style={{ color: '#d4af37' }}>
                Ana Sayfa / Blog / {post.category || 'Genel'}
             </p>
           </ScrollReveal>
        </div>
      </div>

      <div className="container">
        <div className="bd-layout-grid">
          <div className="bd-main-column">
            <ScrollReveal animation="fade-up">
              <article className="bd-article-box">
                <div className="bd-internal-nav">
                    <button onClick={() => navigate('/blog')} className="bd-back-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', color: '#1a3c6d', padding: 0, fontWeight: 600 }}>
                        <FaArrowLeft /> Listeye Dön
                    </button>
                </div>

                <div className="bd-post-image">
                   {post.image_url && <img src={post.image_url} alt={`${post.title} - Prof. Dr. Faruk Erzengin Makalesi`} style={{ width: '100%', borderRadius: '15px', objectFit: 'cover', maxHeight: '500px' }} />}
                </div>

                <div className="bd-meta-info" style={{ display: 'flex', gap: '20px', margin: '20px 0', color: '#666', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                   <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaCalendarAlt style={{ color: '#1a3c6d' }}/> {new Date(post.created_at).toLocaleDateString('tr-TR')}</span>
                   <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaTag style={{ color: '#1a3c6d' }}/> {post.category || 'Genel'}</span>
                   <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaUserMd style={{ color: '#1a3c6d' }}/> Prof. Dr. Faruk Erzengin</span>
                </div>

                <div 
                  className="bd-content-area"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{ lineHeight: '1.8', color: '#333', fontSize: '1.1rem', marginTop: '30px' }}
                />

                 <div className="bd-share-section" style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <span style={{ fontWeight: 600, color: '#1a3c6d' }}>Bu yazıyı paylaş:</span>
                   <div className="bd-social-icons" style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => handleShare('facebook')} aria-label="Facebook'ta Paylaş" className="s-btn fb" style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#3b5998', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem' }}><FaFacebookF /></button>
                      <button onClick={() => handleShare('twitter')} aria-label="Twitter'da Paylaş" className="s-btn tw" style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#1da1f2', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem' }}><FaTwitter /></button>
                      <button onClick={() => handleShare('linkedin')} aria-label="LinkedIn'de Paylaş" className="s-btn li" style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#0077b5', color: 'white', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem' }}><FaLinkedinIn /></button>
                   </div>
                 </div>
              </article>
            </ScrollReveal>
          </div>

          <aside className="bd-sidebar-column">
            <ScrollReveal animation="fade-up" delay={0.1}>
              <div className="bd-widget profile-widget" style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', textAlign: 'center', marginBottom: '30px', borderBottom: '3px solid #d4af37' }}>
                 <div className="pw-img" style={{ width: '120px', height: '120px', margin: '0 auto 15px auto', borderRadius: '50%', overflow: 'hidden', border: '3px solid #1a3c6d' }}>
                    <img src={doctorProfileImg} alt="Prof. Dr. Faruk Erzengin Bilgi" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <h3 style={{ color: '#1a3c6d', marginBottom: '5px' }}>Prof. Dr. Faruk Erzengin</h3>
                 <span className="pw-role" style={{ display: 'block', color: '#666', marginBottom: '15px', fontSize: '0.9rem' }}>Kardiyoloji Uzmanı</span>
                 <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '20px' }}>40 yıllık tecrübe ve bilimsel birikimle kalp sağlığınız için buradayız.</p>
                 <Link to="/iletisim" className="pw-btn" style={{ display: 'inline-block', padding: '10px 25px', background: '#1a3c6d', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s' }}>Randevu Al</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="bd-widget" style={{ background: 'white', padding: '30px', borderRadius: '15px', border: '1px solid #eee', marginBottom: '30px' }}>
                <h4 className="widget-header" style={{ color: '#1a3c6d', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee', fontSize: '1.2rem' }}>Kategoriler</h4>
                <ul className="cat-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}><Link to="/blog" className="cat-link" style={{ textDecoration: 'none', color: '#444', display: 'flex', justifyContent: 'space-between', transition: 'color 0.3s' }}>Tümü</Link></li>
                  {Object.entries(categoryCounts).map(([cat, count]) => (
                    <li key={cat} style={{ marginBottom: '10px' }}>
                      <Link to="/blog" state={{ category: cat }} className="cat-link" style={{ textDecoration: 'none', color: '#444', display: 'flex', justifyContent: 'space-between', transition: 'color 0.3s' }}>{cat} <span className="count" style={{ color: '#999' }}>({count})</span></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="bd-widget" style={{ background: 'white', padding: '30px', borderRadius: '15px', border: '1px solid #eee' }}>
                <h4 className="widget-header" style={{ color: '#1a3c6d', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee', fontSize: '1.2rem' }}>Son Yazılar</h4>
                <div className="recent-posts-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {recentPosts.map((item) => (
                    <Link to={`/blog/${item.id}`} key={item.id} className="recent-post-item" style={{ display: 'flex', gap: '15px', textDecoration: 'none', color: 'inherit', alignItems: 'center' }}>
                      {item.image_url ? (
                        <img src={item.image_url} alt={`${item.title} Küçük Resim`} loading="lazy" style={{ width: '70px', height: '70px', borderRadius: '8px', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '70px', height: '70px', borderRadius: '8px', background: '#eee' }}></div>
                      )}
                      <div className="rp-info">
                        <h5 style={{ fontSize: '0.95rem', margin: '0 0 5px 0', color: '#1a3c6d', lineHeight: '1.3' }}>{item.title.length > 40 ? item.title.substring(0,40) + '...' : item.title}</h5>
                        <small style={{ color: '#888' }}>{new Date(item.created_at).toLocaleDateString('tr-TR')}</small>
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