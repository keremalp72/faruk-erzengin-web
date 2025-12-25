import React, { useState, useEffect } from 'react';
import { pressData } from '../data/pressData';
import { FaYoutube, FaNewspaper, FaExternalLinkAlt, FaPlayCircle, FaCalendarAlt } from 'react-icons/fa';
import './PressPage.css';

// 1. Animasyon Bileşenini Import Ediyoruz
import ScrollReveal from '../components/Animations/ScrollReveal';

const PressPage = () => {
  const [activeTab, setActiveTab] = useState('videos'); // Başlangıçta videolar açık olsun

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="press-page">
      
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
            {pressData.videos.map((video, index) => (
              // Videolar sırayla gelsin (index * 0.1)
              <ScrollReveal key={video.id} animation="fade-up" delay={index * 0.1}>
                <div className="video-card">
                  <div className="video-wrapper">
                    <iframe 
                      src={video.videoUrl} 
                      title={video.title} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-body">
                    <div className="video-meta">
                      <span className="v-channel"><FaPlayCircle /> {video.channel}</span>
                      <span className="v-date"><FaCalendarAlt /> {video.date}</span>
                    </div>
                    <h3>{video.title}</h3>
                    <p>{video.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* --- HABER İÇERİĞİ --- */}
        {activeTab === 'news' && (
          <div className="news-grid">
            {pressData.news.map((news, index) => (
              // Haberler sırayla gelsin (index * 0.1)
              <ScrollReveal key={news.id} animation="fade-up" delay={index * 0.1}>
                <div className="news-card">
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                    <span className="news-source">{news.source}</span>
                  </div>
                  <div className="news-body">
                    <span className="news-date">{news.date}</span>
                    <h3>{news.title}</h3>
                    <p>{news.summary}</p>
                    
                    <a 
                      href={news.link} 
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