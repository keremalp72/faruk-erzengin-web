import React, { useState, useEffect } from "react";
// import { blogData } from '../data/blogData'; // İstersen bunu tamamen kaldırabiliriz veya birleştirebiliriz
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";
import "./BlogPage.css";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import ScrollReveal from "../components/Animations/ScrollReveal";
import doctorProfileImg from "../assets/images/aboutme/hakkimda1.png";

// 1. Supabase Bağlantısını İçe Aktar
import { supabase } from "../lib/supabaseClient";

// HTML etiketlerini temizleyip düz metin döndüren yardımcı fonksiyon
const stripHtml = (html) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const BlogPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(
    location.state?.category || "Tümü",
  );

  // 2. State Yönetimi: Gelen yazıları tutmak için
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Verileri Supabase'den Çekme
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Eğer istersen eski blogData ile birleştirebilirsin:
        // setPosts([...data, ...blogData]);
        setPosts(data);
      } catch (error) {
        console.error("Hata:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  // 4. Dinamik Kategori Sayıları (Artık 'posts' üzerinden hesaplıyoruz)
  const categoryCounts = posts.reduce((acc, item) => {
    const cat = item.category || "Genel"; // Eğer kategorisiz makale varsa hata vermesin
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  // 5. Filtreleme Mantığı (posts üzerinden)
  const filteredPosts =
    activeCategory === "Tümü"
      ? posts
      : posts.filter((post) => (post.category || "Genel") === activeCategory);

  return (
    <div className="bp-page-wrapper">
      <SEO
        title="Sağlık Makaleleri ve Blog"
        description="Kalp sağlığı, hipertansiyon, diyabet ve iç hastalıkları hakkında güncel tıbbi makaleler ve sağlık bilgileri."
        url="https://farukerzengin.com/blog"
        keywords="sağlık blog, kalp sağlığı makaleler, hipertansiyon bilgi, diyabet tedavisi, tıbbi makaleler, kardiyoloji blog"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" }
        ]}
      />

      <div className="bp-page-header">
        <div className="container">
          {/* H1 animasyon dışında — SEO için hemen görünür */}
          <h1 className="bp-page-title">Blog &amp; Makaleler</h1>
          <ScrollReveal animation="fade-up">
            <p className="bp-breadcrumb">
              Ana Sayfa / Blog{" "}
              {activeCategory !== "Tümü" ? ` / ${activeCategory}` : ""}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="bp-layout">
        <div className="bp-main-content">
          {activeCategory !== "Tümü" && (
            <ScrollReveal animation="fade-up">
              <div className="bp-filter-info">
                <h3>
                  "{activeCategory}" kategorisindeki yazılar listeleniyor.
                </h3>
                <button onClick={() => setActiveCategory("Tümü")}>
                  Tümünü Göster
                </button>
              </div>
            </ScrollReveal>
          )}

          <div className="bp-grid">
            {loading ? (
              <p>Makaleler yükleniyor...</p>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <ScrollReveal
                  key={post.id}
                  animation="fade-up"
                  delay={index * 0.1}
                >
                  <article className="bp-card">
                    <div className="bp-card-img-box">
                      {/* Supabase'den gelen image_url'i kullanıyoruz */}
                      <img src={post.image_url} alt={`${post.title} - Prof. Dr. Faruk Erzengin Blog`} loading="lazy" />
                      <span className="bp-category-tag">
                        {post.category || "Genel"}
                      </span>
                    </div>

                    <div className="bp-card-body">
                      <div className="bp-meta">
                        <span>
                          <FaCalendarAlt />{" "}
                          {new Date(post.created_at).toLocaleDateString(
                            "tr-TR",
                          )}
                        </span>
                        <span>
                          <FaUserMd /> Prof. Dr. Faruk Erzengin
                        </span>
                      </div>

                      <h3 className="bp-card-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>

                      {/* İçeriğin sadece bir kısmını gösteriyoruz */}
                      <p className="bp-card-excerpt">
                        {stripHtml(post.content).substring(0, 150)}...
                      </p>

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

        {/* --- SIDEBAR --- */}
        <aside className="bp-sidebar">
          {/* ... Profil Widget ... */}
          <ScrollReveal animation="slide-in-right" delay={0.4}>
            <div className="bp-widget">
              <h4 className="bp-widget-title">Kategoriler</h4>
              <ul className="bp-cat-list">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory("Tümü");
                    }}
                    className={activeCategory === "Tümü" ? "active-cat" : ""}
                  >
                    Tümü <span>({posts.length})</span>
                  </a>
                </li>
                {Object.entries(categoryCounts).map(([catName, count]) => (
                  <li key={catName}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(catName);
                      }}
                      className={activeCategory === catName ? "active-cat" : ""}
                    >
                      {catName} <span>({count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Son Yazılar Widget */}
          <ScrollReveal animation="slide-in-right" delay={0.6}>
            <div className="bp-widget">
              <h4 className="bp-widget-title">Son Yazılar</h4>
              <div className="bp-recent-list">
                {posts.slice(0, 3).map((item) => (
                  <Link
                    to={`/blog/${item.id}`}
                    key={item.id}
                    className="bp-recent-item"
                  >
                    <img src={item.image_url} alt={`${item.title} Küçük Resim`} loading="lazy" />
                    <div>
                      <h5>{item.title}</h5>
                      <small>
                        {new Date(item.created_at).toLocaleDateString("tr-TR")}
                      </small>
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
