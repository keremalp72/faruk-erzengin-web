import React, { useState, useRef, useEffect } from "react";
import "./FeaturedMedia.css";
import {
  FaCalendarCheck,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaTimes,
  FaPlay,
  FaTh,
  FaMicrophone,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "../Animations/ScrollReveal";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import YouTubeFacade from "../YouTubeFacade/YouTubeFacade";

const FeaturedMedia = () => {
  const galleryRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    fetchMediaData();
  }, []);

  const fetchMediaData = async () => {
    // Gallery
    const { data: gData } = await supabase.from('gallery_images').select('*').order('created_at', { ascending: false });
    if (gData) setGallery(gData.map(img => ({ id: img.id, src: img.image_url })));
    
    // Videos
    const { data: vData } = await supabase.from('featured_videos').select('*').order('created_at', { ascending: false });
    if (vData) setVideos(vData);

    // Audios
    const { data: aData } = await supabase.from('audios').select('*').order('created_at', { ascending: false });
    if (aData) setAudios(aData);
  };

  const scrollLeft = () => {
    if (galleryRef.current)
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (galleryRef.current)
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    if (!showAllGallery) {
      document.body.style.overflow = "unset";
    }
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  const openGalleryModal = () => {
    setShowAllGallery(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  };

  const closeGalleryModal = () => {
    setShowAllGallery(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="fm-section">
      {/* VideoObject Structured Data - Google Search Console video hatası için */}
      {videos.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(videos.map(video => ({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": video.title,
              "description": video.description || video.title,
              "thumbnailUrl": `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`,
              "uploadDate": video.created_at || new Date().toISOString(),
              "contentUrl": `https://www.youtube.com/watch?v=${video.youtube_id}`,
              "embedUrl": `https://www.youtube.com/embed/${video.youtube_id}`,
              "publisher": {
                "@type": "Person",
                "name": "Prof. Dr. Faruk Erzengin"
              }
            })))}
          </script>
        </Helmet>
      )}
      <div className="fm-bg-blur blur-1"></div>
      <div className="fm-bg-blur blur-2"></div>

      <div className="container fm-container-padding">
        {/* --- TITLE --- */}
        <ScrollReveal animation="fade-up">
          <div className="fm-header">
            <h2 className="fm-title">
              Medya & <span className="gold-text">Galeri</span>
            </h2>
            <div className="fm-divider"></div>
            <p className="fm-subtitle">
              Prof. Dr. Faruk Erzengin'in görsel ve işitsel arşivi: <br />
              Haberler, röportajlar, podcastler ve fotoğraf galerisi.
            </p>
          </div>
        </ScrollReveal>

        {/* --- VIDEO GRID (DATA'DAN GELİYOR) --- */}
        <div className="fm-grid">
          {videos.map((video, index) => (
            <ScrollReveal
              key={video.id}
              animation="fade-up"
              delay={0.1 + index * 0.1}
            >
              <div
                className={`fm-card ${
                  video.isNews ? "news-card" : "video-card"
                }`}
              >
                <div
                  className={`card-top-decoration ${
                    video.isNews ? "gold-border" : ""
                  }`}
                ></div>
                <YouTubeFacade videoId={video.youtube_id} title={video.title} />
                <div className="fm-card-content">
                  <div className="fm-tag">{video.tag}</div>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* --- SES KAYITLARI (SADE HALİ) --- */}
        {audios && audios.length > 0 && (
          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="fm-audio-container">
              {audios.map((item) => (
                <div key={item.id} className="simple-audio-wrapper">
                  <h3 className="simple-audio-title">
                    <FaMicrophone
                      style={{ marginRight: "10px", color: "#C5A059" }}
                    />
                    {item.title}
                  </h3>
                  <audio controls className="simple-player">
                    <source src={item.audio_url} type="audio/mpeg" />
                    Tarayıcınız bu ses dosyasını desteklemiyor.
                  </audio>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* --- RANDEVU BUTONU --- */}
        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="fm-action-wrapper">
            <Link to="/iletisim" className="fm-big-cta-btn">
              <span>Hemen Randevu Al</span>
              <div className="btn-icon-circle">
                <FaCalendarCheck />
              </div>
            </Link>
            <p className="fm-cta-note">
              Randevu ve detaylı bilgi için bize ulaşabilirsiniz.
            </p>
          </div>
        </ScrollReveal>

        {/* --- FOTOĞRAF GALERİSİ --- */}
        <ScrollReveal animation="fade-up" delay={0.5}>
          <div className="fm-gallery-section">
            <div className="gallery-header-row">
              <h3 className="gallery-title">
                <FaImages /> Fotoğraf Galerisi
              </h3>
              <div className="gallery-nav-buttons">
                <button
                  className="g-nav-btn"
                  onClick={scrollLeft}
                  aria-label="Sola Kaydır"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="g-nav-btn"
                  onClick={scrollRight}
                  aria-label="Sağa Kaydır"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className="fm-gallery-track" ref={galleryRef}>
              {gallery.map((img, index) => (
                <div
                  key={img.id}
                  className="fm-gallery-item clickable-gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <div className="g-img-box">
                    <img
                      src={img.src}
                      alt="Prof. Dr. Faruk Erzengin Galeri Görseli"
                      loading="lazy"
                    />
                    <div className="g-overlay">
                      <span className="zoom-hint">Büyüt</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fm-gallery-footer">
              <button className="fm-view-all-btn" onClick={openGalleryModal}>
                <FaTh /> Tüm Fotoğrafları Göster ({gallery.length})
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* --- MODAL 1: TÜM GALERİ --- */}
      {showAllGallery && (
        <div
          className="fm-modal-overlay gallery-grid-overlay"
          onClick={closeGalleryModal}
        >
          <div
            className="fm-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="fm-modal-header">
              <h3>Tüm Fotoğraflar</h3>
              <button className="fm-modal-close" onClick={closeGalleryModal}>
                <FaTimes />
              </button>
            </div>
            <div className="fm-modal-body">
              <div className="fm-full-grid">
                {gallery.map((img, index) => (
                  <div
                    key={img.id}
                    className="fm-grid-item"
                    onClick={() => openLightbox(index)}
                  >
                    <img src={img.src} alt="Prof. Dr. Faruk Erzengin Galeri Detay Tıbbi Görsel" loading="lazy" />
                    <div className="grid-overlay">
                      <FaPlay />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: LIGHTBOX --- */}
      {selectedImageIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button
            className="lightbox-nav-btn lightbox-prev"
            onClick={goToPrev}
            aria-label="Önceki"
          >
            <FaChevronLeft />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={gallery[selectedImageIndex].src} alt="Prof. Dr. Faruk Erzengin Galeri Tam Ekran" />
          </div>
          <button
            className="lightbox-nav-btn lightbox-next"
            onClick={goToNext}
            aria-label="Sonraki"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedMedia;
