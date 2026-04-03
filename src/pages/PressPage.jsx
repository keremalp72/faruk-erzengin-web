import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FaYoutube, FaNewspaper, FaExternalLinkAlt, FaPlayCircle, FaCalendarAlt } from 'react-icons/fa';
import './PressPage.css';

// 1. Animasyon Bileşenini Import Ediyoruz
import ScrollReveal from '../components/Animations/ScrollReveal';

// 2. SEO Bileşenini Ekliyoruz (Çok Önemli)
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const PressPage = () => {
  const [activeTab, setActiveTab] = useState('videos'); // Başlangıçta videolar açık olsun
  const [videos, setVideos] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPressData();
  }, []);

  const fetchPressData = async () => {
    setLoading(true);
    const [videosRes, newsRes] = await Promise.all([
      supabase.from('press_videos').select('*').order('created_at', { ascending: false }),
      supabase.from('press_news').select('*').order('created_at', { ascending: false })
    ]);
    if (videosRes.data) setVideos(videosRes.data);
    if (newsRes.data) setNews(newsRes.data);
    setLoading(false);
  };

  return (
    <div className="press-page">

      {/* VideoObject Structured Data - Google video dizinleme için */}
      {videos.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(videos.map(video => ({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": video.title,
              "description": video.description || video.title,
              "thumbnailUrl": video.video_url ? `https://img.youtube.com/vi/${video.video_url.split('/embed/')[1]?.split('?')[0]}/maxresdefault.jpg` : '',
              "uploadDate": video.created_at || new Date().toISOString(),
              "contentUrl": video.video_url ? video.video_url.replace('/embed/', '/watch?v=') : '',
              "embedUrl": video.video_url,
              "publisher": {
                "@type": "Person",
                "name": "Prof. Dr. Faruk Erzengin"
              }
            })))}
          </script>
        </Helmet>
      )}
      
      {/* --- SEO AYARLARI --- */}
      <SEO 
        title="Basında Biz" 
        description="Prof. Dr. Faruk Erzengin'in televizyon röportajları, gazete haberleri, katıldığı canlı yayınlar ve basında yer alan bilimsel çalışmaları." 
        url="https://farukerzengin.com/basin"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Basın", url: "/basin" }
        ]}
      />

      {/* HEADER - Fade In */}
      <div className="page-header">
        <ScrollReveal animation="fade-up">
          <div className="container">
            <h1 className="page-title">Basında Biz</h1>
            <p className="breadcrumb">Ana Sayfa / Basın</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="container page-content">
        
        {/* SEKMELER (TABS) - Fade Up */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div className="press-tabs">
            <button 
              className={`press-tab-btn ${activeTab === 'videos' ? 'active' : ''}`} 
              onClick={() => setActiveTab('videos')}
            >
              <FaYoutube /> TV & Video Röportajlar
            </button>
            <button 
              className={`press-tab-btn ${activeTab === 'news' ? 'active' : ''}`} 
              onClick={() => setActiveTab('news')}
            >
              <FaNewspaper /> Gazete & Haberler
            </button>
          </div>
        </ScrollReveal>

        {/* --- VİDEO İÇERİĞİ --- */}
        {activeTab === 'videos' && (
          <div className="videos-grid">
            {loading ? <p style={{textAlign: 'center', width: '100%'}}>Videolar yükleniyor...</p> : videos.map((video, index) => (
              // Videolar sırayla gelsin (index * 0.1)
              <ScrollReveal key={video.id} animation="fade-up" delay={index * 0.1}>
                <div className="video-card">
                  <div className="video-wrapper">
                    <iframe 
                      src={video.video_url} 
                      title={`${video.title} - Prof. Dr. Faruk Erzengin TV Röportajı`} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-body">
                    <div className="video-meta">
                      <span className="v-channel"><FaPlayCircle /> {video.channel}</span>
                      <span className="v-date"><FaCalendarAlt /> {video.publication_date}</span>
                    </div>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* --- HABER İÇERİĞİ --- */}
        {activeTab === 'news' && (
          <div className="news-grid">
            {loading ? <p style={{textAlign: 'center', width: '100%'}}>Haberler yükleniyor...</p> : news.map((newsItem, index) => (
              // Haberler sırayla gelsin (index * 0.1)
              <ScrollReveal key={newsItem.id} animation="fade-up" delay={index * 0.1}>
                <div className="news-card">
                  <div className="news-image">
                    <img src={newsItem.image_url} alt={`${newsItem.title} - Basında Prof. Dr. Faruk Erzengin`} loading="lazy" />
                    <span className="news-source">{newsItem.source}</span>
                  </div>
                  <div className="news-body">
                    <span className="news-date">{newsItem.publication_date}</span>
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.summary}</p>
                    
                    <a 
                      href={newsItem.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="news-link"
                    >
                      Haberin Devamı <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default PressPage;