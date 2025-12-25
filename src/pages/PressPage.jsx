import React, { useState, useEffect } from 'react';
import { pressData } from '../data/pressData';
import { FaYoutube, FaNewspaper, FaExternalLinkAlt, FaPlayCircle, FaCalendarAlt } from 'react-icons/fa';
import './PressPage.css';

const PressPage = () => {
  const [activeTab, setActiveTab] = useState('videos'); // Başlangıçta videolar açık olsun

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="press-page">
      
      {/* HEADER */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Basında Biz</h1>
          <p className="breadcrumb">Ana Sayfa / Basın</p>
        </div>
      </div>

      <div className="container page-content">
        
        {/* SEKMELER (TABS) */}
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

        {/* --- VİDEO İÇERİĞİ --- */}
        {activeTab === 'videos' && (
          <div className="videos-grid fade-in">
            {pressData.videos.map((video) => (
              <div key={video.id} className="video-card">
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
            ))}
          </div>
        )}

        {/* --- HABER İÇERİĞİ --- */}
        {activeTab === 'news' && (
          <div className="news-grid fade-in">
            {pressData.news.map((news) => (
              <div key={news.id} className="news-card">
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                  <span className="news-source">{news.source}</span>
                </div>
                <div className="news-body">
                  <span className="news-date">{news.date}</span>
                  <h3>{news.title}</h3>
                  <p>{news.summary}</p>
                  
                  {/* --- GÜNCELLENEN KISIM --- */}
                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="news-link"
                  >
                    Haberin Devamı <FaExternalLinkAlt />
                  </a>
                  {/* ------------------------- */}

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default PressPage;