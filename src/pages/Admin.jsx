import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import imageCompression from 'browser-image-compression';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from "./Admin.module.css";

export default function Admin() {
  const [session, setSession] = useState(null);
  const [loadingConfig, setLoadingConfig] = useState(true);

  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Panel Tabs
  const [activeTab, setActiveTab] = useState("addArticle"); 
  // 'addArticle' | 'listArticles' | 'addTreatment' | 'listTreatments'

  // Common UI State
  const [loading, setLoading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState({ type: "", text: "" });

  // --- ARTICLE STATE ---
  const [articles, setArticles] = useState([]);
  const [fetchingArticles, setFetchingArticles] = useState(false);
  
  const [editingArticleId, setEditingArticleId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Kalp Sağlığı");
  const [aImage, setAImage] = useState(null);
  const [aExistingImageUrl, setAExistingImageUrl] = useState("");

  // --- TREATMENT STATE ---
  const [treatments, setTreatments] = useState([]);
  const [fetchingTreatments, setFetchingTreatments] = useState(false);

  const [editingTreatmentId, setEditingTreatmentId] = useState(null);
  const [tTitle, setTTitle] = useState("");
  const [tShortDesc, setTShortDesc] = useState("");
  const [tDescription, setTDescription] = useState("");
  const [tSymptoms, setTSymptoms] = useState(""); // comma separated
  const [tTreatment, setTTreatment] = useState("");
  const [tApproach, setTApproach] = useState("");
  const [tImage, setTImage] = useState(null);
  const [tExistingImageUrl, setTExistingImageUrl] = useState("");

  // --- PRESS VIDEOS STATE ---
  const [pressVideos, setPressVideos] = useState([]);
  const [fetchingPressVideos, setFetchingPressVideos] = useState(false);
  const [editingVideoId, setEditingVideoId] = useState(null);
  const [vTitle, setVTitle] = useState("");
  const [vVideoUrl, setVVideoUrl] = useState("");
  const [vChannel, setVChannel] = useState("");
  const [vPubDate, setVPubDate] = useState("");
  const [vDescription, setVDescription] = useState("");

  // --- PRESS NEWS STATE ---
  const [pressNews, setPressNews] = useState([]);
  const [fetchingPressNews, setFetchingPressNews] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState(null);
  const [nTitle, setNTitle] = useState("");
  const [nSource, setNSource] = useState("");
  const [nSummary, setNSummary] = useState("");
  const [nPubDate, setNPubDate] = useState("");
  const [nLink, setNLink] = useState("");
  const [nImage, setNImage] = useState(null);
  const [nExistingImageUrl, setNExistingImageUrl] = useState("");

  // --- REVIEWS STATE ---
  const [reviews, setReviews] = useState([]);
  const [fetchingReviews, setFetchingReviews] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [rName, setRName] = useState("");
  const [rSource, setRSource] = useState("website");
  const [rDate, setRDate] = useState("");
  const [rRating, setRRating] = useState(5);
  const [rTreatment, setRTreatment] = useState("Genel Yorum");
  const [rComment, setRComment] = useState("");

  // --- GALLERY STATE ---
  const [gallery, setGallery] = useState([]);
  const [fetchingGallery, setFetchingGallery] = useState(false);
  const [gImage, setGImage] = useState(null);

  // --- FEATURED VIDEOS (MEDYA) STATE ---
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [fetchingFeaturedVideos, setFetchingFeaturedVideos] = useState(false);
  const [editingFVideoId, setEditingFVideoId] = useState(null);
  const [fvYoutubeId, setFvYoutubeId] = useState("");
  const [fvTag, setFvTag] = useState("");
  const [fvTitle, setFvTitle] = useState("");
  const [fvDesc, setFvDesc] = useState("");
  const [fvIsNews, setFvIsNews] = useState(false);

  // --- AUDIOS STATE ---
  const [audios, setAudios] = useState([]);
  const [fetchingAudios, setFetchingAudios] = useState(false);
  const [editingAudioId, setEditingAudioId] = useState(null);
  const [auTitle, setAuTitle] = useState("");
  const [auAudioFile, setAuAudioFile] = useState(null);
  const [auExistingUrl, setAuExistingUrl] = useState("");

  // --- ANALYTICS STATE ---
  const [pageViews, setPageViews] = useState([]);
  const [fetchingPageViews, setFetchingPageViews] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingConfig(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setUploadMsg({ type: "", text: "" }); // clear messages on tab switch
    if (session) {
      if (activeTab === 'listArticles') fetchArticles();
      if (activeTab === 'listTreatments') fetchTreatments();
      if (activeTab === 'listPressVideos') fetchPressVideos();
      if (activeTab === 'listPressNews') fetchPressNews();
      if (activeTab === 'listReviews') fetchReviews();
      if (activeTab === 'listGallery') fetchGallery();
      if (activeTab === 'listFeaturedVideos') fetchFeaturedVideos();
      if (activeTab === 'listAudios') fetchAudios();
      if (activeTab === 'analytics') fetchPageViews();
    }
  }, [session, activeTab]);

  const fetchPageViews = async () => {
    setFetchingPageViews(true);
    const { data, error } = await supabase.from("page_views").select("*").order("views", { ascending: false });
    if (error) console.error("Analitik verileri çekilirken hata:", error);
    else setPageViews(data);
    setFetchingPageViews(false);
  };

  const fetchFeaturedVideos = async () => {
    setFetchingFeaturedVideos(true);
    const { data, error } = await supabase.from("featured_videos").select("*").order("created_at", { ascending: false });
    if (error) console.error("Öne çıkan videolar çekilirken hata:", error);
    else setFeaturedVideos(data);
    setFetchingFeaturedVideos(false);
  };

  const fetchAudios = async () => {
    setFetchingAudios(true);
    const { data, error } = await supabase.from("audios").select("*").order("created_at", { ascending: false });
    if (error) console.error("Ses kayıtları çekilirken hata:", error);
    else setAudios(data);
    setFetchingAudios(false);
  };

  const fetchGallery = async () => {
    setFetchingGallery(true);
    const { data, error } = await supabase.from("gallery_images").select("*").order("created_at", { ascending: false });
    if (error) console.error("Galeri fotoğrafları çekilirken hata:", error);
    else setGallery(data);
    setFetchingGallery(false);
  };

  const fetchReviews = async () => {
    setFetchingReviews(true);
    const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
    if (error) console.error("Yorumlar çekilirken hata:", error);
    else setReviews(data);
    setFetchingReviews(false);
  };

  const fetchPressVideos = async () => {
    setFetchingPressVideos(true);
    const { data, error } = await supabase.from("press_videos").select("*").order("created_at", { ascending: false });
    if (error) console.error("Videolar çekilirken hata:", error);
    else setPressVideos(data);
    setFetchingPressVideos(false);
  };

  const fetchPressNews = async () => {
    setFetchingPressNews(true);
    const { data, error } = await supabase.from("press_news").select("*").order("created_at", { ascending: false });
    if (error) console.error("Haberler çekilirken hata:", error);
    else setPressNews(data);
    setFetchingPressNews(false);
  };

  const fetchArticles = async () => {
    setFetchingArticles(true);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Makaleler çekilirken hata:", error);
    else setArticles(data);
    setFetchingArticles(false);
  };

  const fetchTreatments = async () => {
    setFetchingTreatments(true);
    const { data, error } = await supabase
      .from("treatments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Tedaviler çekilirken hata:", error);
    else setTreatments(data);
    setFetchingTreatments(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.includes('@') ? email : `${email}@farukerzengin.com`,
      password,
    });

    if (error) setLoginError("Hatalı kullanıcı adı veya şifre: " + error.message);
    setIsLoggingIn(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // UPLOAD HELPERS
  const compressImage = async (imageFile) => {
    const options = {
      maxSizeMB: 1, // Max 1MB
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      return await imageCompression(imageFile, options);
    } catch (error) {
      console.error("Görsel sıkıştırma hatası:", error);
      return imageFile; // fallback
    }
  };

  const uploadImage = async (imageFile) => {
    if (!imageFile) return "";
    let fileToUpload = imageFile;
    if (imageFile.type.startsWith('image/')) {
       fileToUpload = await compressImage(imageFile);
    }
    const fileExt = fileToUpload.name ? fileToUpload.name.split(".").pop() : "jpg";
    const fileName = `${Math.random()}.${fileExt}`;
    const { error } = await supabase.storage.from("article-images").upload(fileName, fileToUpload);
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage.from("article-images").getPublicUrl(fileName);
    return publicUrl;
  };

  const uploadMediaFile = async (fileObj, bucket) => {
    if (!fileObj) return "";
    let fileToUpload = fileObj;
    if (fileToUpload.type.startsWith('image/')) {
       fileToUpload = await compressImage(fileToUpload);
    }
    const fileExt = fileToUpload.name ? fileToUpload.name.split(".").pop() : "bin";
    const fileName = `${Math.random()}.${fileExt}`;
    const { error } = await supabase.storage.from(bucket).upload(fileName, fileToUpload);
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return publicUrl;
  };

  const deleteImage = async (url) => {
    if (!url) return;
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    if (fileName) {
      await supabase.storage.from("article-images").remove([fileName]);
    }
  };

  // ARTICLE HANDLERS
  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    if (!title.trim() || !content.trim()) {
      setUploadMsg({ type: "error", text: "Başlık ve içerik alanları boş olamaz!" });
      return;
    }
    setLoading(true);
    try {
      let imageUrl = aExistingImageUrl;
      if (aImage) {
        if (aExistingImageUrl) await deleteImage(aExistingImageUrl);
        imageUrl = await uploadImage(aImage);
      }
      
      const payload = { title, content, image_url: imageUrl, category };

      if (editingArticleId) {
        const { error } = await supabase.from("articles").update(payload).eq('id', editingArticleId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Makale başarıyla güncellendi!" });
      } else {
        const { error } = await supabase.from("articles").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Makale başarıyla eklendi!" });
      }
      resetArticleForm();
      if(editingArticleId) setTimeout(() => setActiveTab('listArticles'), 1000);
    } catch (error) {
      setUploadMsg({ type: "error", text: "Hata: " + error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleEditArticle = (article) => {
    setEditingArticleId(article.id);
    setTitle(article.title);
    setContent(article.content);
    setCategory(article.category);
    setAExistingImageUrl(article.image_url);
    setAImage(null);
    setActiveTab('addArticle');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${article.title}"` });
  };

  const resetArticleForm = () => {
    setEditingArticleId(null);
    setTitle("");
    setContent("");
    setAImage(null);
    setAExistingImageUrl("");
    const fileInput = document.getElementById('article-file-input');
    if (fileInput) fileInput.value = "";
  };

  const handleDeleteArticle = async (id, imageUrl) => {
    if (!window.confirm("Bu makaleyi silmek istediğinize emin misiniz?")) return;
    try {
      if (imageUrl) await deleteImage(imageUrl);
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
      setArticles(articles.filter(a => a.id !== id));
      alert("Makale silindi!");
    } catch (error) {
      alert("Silme işlemi başarısız: " + error.message);
    }
  };

  // TREATMENT HANDLERS
  const handleTreatmentSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    if (!tTitle.trim() || !tShortDesc.trim() || !tDescription.trim()) {
      setUploadMsg({ type: "error", text: "Zorunlu alanları (Başlık, Kısa Açıklama, Açıklama) doldurun!" });
      return;
    }
    setLoading(true);
    try {
      let imageUrl = tExistingImageUrl;
      if (tImage) {
        if (tExistingImageUrl) await deleteImage(tExistingImageUrl);
        imageUrl = await uploadImage(tImage);
      }
      
      const symptomsArray = tSymptoms.split(',').map(s => s.trim()).filter(s => s);

      const payload = { 
        title: tTitle, 
        short_desc: tShortDesc, 
        image_url: imageUrl, 
        content_description: tDescription,
        content_symptoms: symptomsArray,
        content_treatment: tTreatment,
        content_approach: tApproach
      };

      if (editingTreatmentId) {
        const { error } = await supabase.from("treatments").update(payload).eq('id', editingTreatmentId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Tedavi başarıyla güncellendi!" });
      } else {
        const { error } = await supabase.from("treatments").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Tedavi başarıyla eklendi!" });
      }
      resetTreatmentForm();
      if(editingTreatmentId) setTimeout(() => setActiveTab('listTreatments'), 1000);
    } catch (error) {
      setUploadMsg({ type: "error", text: "Hata: " + error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleEditTreatment = (t) => {
    setEditingTreatmentId(t.id);
    setTTitle(t.title);
    setTShortDesc(t.short_desc || "");
    setTDescription(t.content_description || "");
    
    let symp = "";
    if (Array.isArray(t.content_symptoms)) {
      symp = t.content_symptoms.join(', ');
    } else if (typeof t.content_symptoms === 'string') {
      try {
        const parsed = JSON.parse(t.content_symptoms);
        symp = Array.isArray(parsed) ? parsed.join(', ') : parsed;
      } catch(e) { symp = t.content_symptoms; }
    }

    setTSymptoms(symp);
    setTTreatment(t.content_treatment || "");
    setTApproach(t.content_approach || "");
    setTExistingImageUrl(t.image_url || "");
    setTImage(null);
    setActiveTab('addTreatment');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${t.title}"` });
  };

  const resetTreatmentForm = () => {
    setEditingTreatmentId(null);
    setTTitle("");
    setTShortDesc("");
    setTDescription("");
    setTSymptoms("");
    setTTreatment("");
    setTApproach("");
    setTImage(null);
    setTExistingImageUrl("");
    const fileInput = document.getElementById('treatment-file-input');
    if (fileInput) fileInput.value = "";
  };

  const handleDeleteTreatment = async (id, imageUrl) => {
    if (!window.confirm("Bu tedaviyi silmek istediğinize emin misiniz?")) return;
    try {
      if (imageUrl) await deleteImage(imageUrl);
      const { error } = await supabase.from("treatments").delete().eq("id", id);
      if (error) throw error;
      setTreatments(treatments.filter(a => a.id !== id));
      alert("Tedavi silindi!");
    } catch (error) {
      alert("Silme işlemi başarısız: " + error.message);
    }
  };

  // --- PRESS VIDEO HANDLERS ---
  const handleVideoSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    setLoading(true);
    try {
      const payload = { title: vTitle, video_url: vVideoUrl, channel: vChannel, publication_date: vPubDate, description: vDescription };
      if (editingVideoId) {
        const { error } = await supabase.from("press_videos").update(payload).eq('id', editingVideoId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Video başarıyla güncellendi!" });
      } else {
        const { error } = await supabase.from("press_videos").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Video başarıyla eklendi!" });
      }
      resetVideoForm();
      if (editingVideoId) setTimeout(() => setActiveTab('listPressVideos'), 1000);
    } catch (err) {
      setUploadMsg({ type: "error", text: "Hata: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const resetVideoForm = () => {
    setEditingVideoId(null); setVTitle(""); setVVideoUrl(""); setVChannel(""); setVPubDate(""); setVDescription("");
  };

  const handleEditVideo = (v) => {
    setEditingVideoId(v.id); setVTitle(v.title); setVVideoUrl(v.video_url); setVChannel(v.channel); setVPubDate(v.publication_date); setVDescription(v.description || "");
    setActiveTab('addPressVideo');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${v.title}"` });
  };

  const handleDeleteVideo = async (id) => {
    if (!window.confirm("Bu videoyu silmek istediğinize emin misiniz?")) return;
    try {
      const { error } = await supabase.from("press_videos").delete().eq("id", id);
      if (error) throw error;
      setPressVideos(pressVideos.filter(v => v.id !== id));
      alert("Video silindi!");
    } catch (err) {
      alert("Silme işlemi başarısız: " + err.message);
    }
  };

  // --- PRESS NEWS HANDLERS ---
  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    setLoading(true);
    try {
      let imageUrl = nExistingImageUrl;
      if (nImage) {
        if (nExistingImageUrl) await deleteImage(nExistingImageUrl);
        imageUrl = await uploadImage(nImage);
      }
      const payload = { title: nTitle, source: nSource, summary: nSummary, publication_date: nPubDate, link: nLink, image_url: imageUrl };
      if (editingNewsId) {
        const { error } = await supabase.from("press_news").update(payload).eq('id', editingNewsId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Haber güncellendi!" });
      } else {
        const { error } = await supabase.from("press_news").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Haber eklendi!" });
      }
      resetNewsForm();
      if (editingNewsId) setTimeout(() => setActiveTab('listPressNews'), 1000);
    } catch (err) {
      setUploadMsg({ type: "error", text: "Hata: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const resetNewsForm = () => {
    setEditingNewsId(null); setNTitle(""); setNSource(""); setNSummary(""); setNPubDate(""); setNLink(""); setNImage(null); setNExistingImageUrl("");
    const fileInput = document.getElementById('news-file-input');
    if (fileInput) fileInput.value = "";
  };

  const handleEditNews = (n) => {
    setEditingNewsId(n.id); setNTitle(n.title); setNSource(n.source); setNSummary(n.summary); setNPubDate(n.publication_date); setNLink(n.link); setNExistingImageUrl(n.image_url); setNImage(null);
    setActiveTab('addPressNews');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${n.title}"` });
  };

  const handleDeleteNews = async (id, imageUrl) => {
    if (!window.confirm("Bu haberi silmek istediğinize emin misiniz?")) return;
    try {
      if (imageUrl) await deleteImage(imageUrl);
      const { error } = await supabase.from("press_news").delete().eq("id", id);
      if (error) throw error;
      setPressNews(pressNews.filter(n => n.id !== id));
      alert("Haber silindi!");
    } catch (err) {
      alert("Silme işlemi başarısız: " + err.message);
    }
  };

  // --- REVIEWS HANDLERS ---
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    setLoading(true);
    try {
      const payload = { source: rSource, name: rName, date: rDate, rating: parseInt(rRating), treatment: rTreatment, comment: rComment };
      if (editingReviewId) {
        const { error } = await supabase.from("reviews").update(payload).eq('id', editingReviewId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Yorum güncellendi!" });
      } else {
        const { error } = await supabase.from("reviews").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Yorum eklendi!" });
      }
      resetReviewForm();
      if (editingReviewId) setTimeout(() => setActiveTab('listReviews'), 1000);
    } catch (err) {
      setUploadMsg({ type: "error", text: "Hata: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const resetReviewForm = () => {
    setEditingReviewId(null); setRName(""); setRSource("website"); setRDate(""); setRRating(5); setRTreatment("Genel Yorum"); setRComment("");
  };

  const handleEditReview = (r) => {
    setEditingReviewId(r.id); setRName(r.name); setRSource(r.source); setRDate(r.date || ""); setRRating(r.rating || 5); setRTreatment(r.treatment || ""); setRComment(r.comment || "");
    setActiveTab('addReview');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${r.name}"` });
  };

  const handleDeleteReview = async (id) => {
    if (!window.confirm("Bu yorumu silmek istediğinize emin misiniz?")) return;
    try {
      const { error } = await supabase.from("reviews").delete().eq("id", id);
      if (error) throw error;
      setReviews(reviews.filter(r => r.id !== id));
      alert("Yorum silindi!");
    } catch (err) {
      alert("Silme işlemi başarısız: " + err.message);
    }
  };

  // --- GALLERY HANDLERS ---
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    if (!gImage) {
      setUploadMsg({ type: "error", text: "Lütfen bir fotoğraf seçin!" });
      return;
    }
    setLoading(true);
    try {
      const imageUrl = await uploadImage(gImage);
      const { error } = await supabase.from("gallery_images").insert([{ image_url: imageUrl }]);
      if (error) throw error;
      setUploadMsg({ type: "success", text: "Fotoğraf galeriye eklendi!" });
      setGImage(null);
      const fileInput = document.getElementById('gallery-file-input');
      if (fileInput) fileInput.value = "";
      setTimeout(() => setActiveTab('listGallery'), 1000);
    } catch (err) {
      setUploadMsg({ type: "error", text: "Hata: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGalleryResim = async (id, imageUrl) => {
    if (!window.confirm("Bu fotoğrafı galeriden silmek istediğinize emin misiniz?")) return;
    try {
      if (imageUrl) await deleteImage(imageUrl);
      const { error } = await supabase.from("gallery_images").delete().eq("id", id);
      if (error) throw error;
      setGallery(gallery.filter(g => g.id !== id));
      alert("Fotoğraf silindi!");
    } catch (err) {
      alert("Silme işlemi başarısız: " + err.message);
    }
  };

  // --- FEATURED VIDEOS HANDLERS ---
  const handleFVideoSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    setLoading(true);
    try {
      const payload = { youtube_id: fvYoutubeId, title: fvTitle, tag: fvTag, description: fvDesc, is_news: fvIsNews };
      if (editingFVideoId) {
        const { error } = await supabase.from("featured_videos").update(payload).eq('id', editingFVideoId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Ana Sayfa videosu güncellendi!" });
      } else {
        const { error } = await supabase.from("featured_videos").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Ana Sayfa videosu eklendi!" });
      }
      resetFVideoForm();
      if (editingFVideoId) setTimeout(() => setActiveTab('listFeaturedVideos'), 1000);
    } catch (err) {
      setUploadMsg({ type: "error", text: "Hata: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const resetFVideoForm = () => {
    setEditingFVideoId(null); setFvYoutubeId(""); setFvTitle(""); setFvTag(""); setFvDesc(""); setFvIsNews(false);
  };

  const handleEditFVideo = (v) => {
    setEditingFVideoId(v.id); setFvYoutubeId(v.youtube_id); setFvTitle(v.title); setFvTag(v.tag); setFvDesc(v.description || ""); setFvIsNews(v.is_news || false);
    setActiveTab('addFeaturedVideo');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${v.title}"` });
  };

  const handleDeleteFVideo = async (id) => {
    if (!window.confirm("Bu videoyu silmek istediğinize emin misiniz?")) return;
    try {
      const { error } = await supabase.from("featured_videos").delete().eq("id", id);
      if (error) throw error;
      setFeaturedVideos(featuredVideos.filter(v => v.id !== id));
      alert("Video silindi!");
    } catch (err) {
      alert("Silme işlemi başarısız: " + err.message);
    }
  };

  // --- AUDIOS HANDLERS ---
  const handleAudioSubmit = async (e) => {
    e.preventDefault();
    setUploadMsg({ type: "", text: "" });
    if (!auExistingUrl && !auAudioFile) {
      setUploadMsg({ type: "error", text: "Lütfen bir ses dosyası seçin!" });
      return;
    }
    setLoading(true);
    try {
      let audioUrl = auExistingUrl;
      if (auAudioFile) {
        if (auExistingUrl) await deleteImage(auExistingUrl); // can reuse delete logic
        const fileExt = auAudioFile.name.split(".").pop();
        const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("media").upload(fileName, auAudioFile);
        if (uploadError) throw uploadError;
        const { data: { publicUrl } } = supabase.storage.from("media").getPublicUrl(fileName);
        audioUrl = publicUrl;
      }
      const payload = { title: auTitle, audio_url: audioUrl };
      if (editingAudioId) {
        const { error } = await supabase.from("audios").update(payload).eq('id', editingAudioId);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Ses kaydı güncellendi!" });
      } else {
        const { error } = await supabase.from("audios").insert([payload]);
        if (error) throw error;
        setUploadMsg({ type: "success", text: "Ses kaydı eklendi!" });
      }
      resetAudioForm();
      if (editingAudioId) setTimeout(() => setActiveTab('listAudios'), 1000);
    } catch (err) {
      setUploadMsg({ type: "error", text: "Hata: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  const resetAudioForm = () => {
    setEditingAudioId(null); setAuTitle(""); setAuAudioFile(null); setAuExistingUrl("");
    const fileInput = document.getElementById('audio-file-input');
    if (fileInput) fileInput.value = "";
  };

  const handleEditAudio = (a) => {
    setEditingAudioId(a.id); setAuTitle(a.title); setAuExistingUrl(a.audio_url); setAuAudioFile(null);
    setActiveTab('addAudio');
    setUploadMsg({ type: "success", text: `Düzenleme modu: "${a.title}"` });
  };

  const handleDeleteAudio = async (id, fileUrl) => {
    if (!window.confirm("Bu ses kaydını silmek istediğinize emin misiniz?")) return;
    try {
      if (fileUrl) await deleteImage(fileUrl);
      const { error } = await supabase.from("audios").delete().eq("id", id);
      if (error) throw error;
      setAudios(audios.filter(a => a.id !== id));
      alert("Ses kaydı silindi!");
    } catch (err) {
      alert("Silme işlemi başarısız: " + err.message);
    }
  };

  if (loadingConfig) {
    return <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Poppins' }}>Konfigürasyon Yükleniyor...</div>;
  }

  // --- GİRİŞ EKRANI ---
  if (!session) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.loginCard}>
          <h2>Yönetici Girişi</h2>
          {loginError && <div className={styles.errorMsg}>{loginError}</div>}
          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.loginBtn} disabled={isLoggingIn}>
              {isLoggingIn ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- PANEL EKRANI ---
  return (
    <div className={styles.adminPanelWrapper}>
      <div className={styles.panelHeader}>
        <h2>Yönetim Paneli</h2>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Güvenli Çıkış
        </button>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'addArticle' ? styles.active : ''}`}
          onClick={() => { resetArticleForm(); setActiveTab('addArticle'); }}
        >
          Yeni Makale
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listArticles' ? styles.active : ''}`}
          onClick={() => setActiveTab('listArticles')}
        >
          Makaleler
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'addTreatment' ? styles.active : ''}`}
          onClick={() => { resetTreatmentForm(); setActiveTab('addTreatment'); }}
        >
          Yeni Tedavi
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listTreatments' ? styles.active : ''}`}
          onClick={() => setActiveTab('listTreatments')}
        >
          Tedaviler
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listPressVideos' || activeTab === 'addPressVideo' ? styles.active : ''}`}
          onClick={() => { setActiveTab('listPressVideos'); }}
        >
          TV & Videolar
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listPressNews' || activeTab === 'addPressNews' ? styles.active : ''}`}
          onClick={() => { setActiveTab('listPressNews'); }}
        >
          Haber Editöryalı
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listReviews' || activeTab === 'addReview' ? styles.active : ''}`}
          onClick={() => { setActiveTab('listReviews'); }}
        >
          Hasta Yorumları
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listGallery' || activeTab === 'addGalleryImage' ? styles.active : ''}`}
          onClick={() => { setActiveTab('listGallery'); }}
        >
          Fotoğraf Galerisi
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listFeaturedVideos' || activeTab === 'addFeaturedVideo' ? styles.active : ''}`}
          onClick={() => { setActiveTab('listFeaturedVideos'); }}
        >
          Ana Sayfa Videoları
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'listAudios' || activeTab === 'addAudio' ? styles.active : ''}`}
          onClick={() => { setActiveTab('listAudios'); }}
        >
          Ses Kayıtları
        </button>
        <button 
          className={`${styles.tabBtn} ${activeTab === 'analytics' ? styles.active : ''}`}
          onClick={() => { setActiveTab('analytics'); }}
        >
          Ziyaretçi Raporu
        </button>
      </div>

      {uploadMsg.text && (
        <div className={uploadMsg.type === 'error' ? styles.errorMsg : styles.successMsg} style={{margin: '0 2rem 1rem'}}>
          {uploadMsg.text}
        </div>
      )}

      {/* --- ADD / EDIT ARTICLE --- */}
      {activeTab === 'addArticle' && (
        <div className={styles.uploadForm}>
          <h3>{editingArticleId ? "Makaleyi Düzenle" : "Yeni Makale Ekle"}</h3>
          <form onSubmit={handleArticleSubmit}>
            <div className={styles.formGroup}>
              <label>Makale Başlığı</label>
              <input type="text" placeholder="Başlık girin..." value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <label>Kategori (Seçebilir veya yeni yazabilirsiniz)</label>
              <input 
                list="category-options" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                placeholder="Kategori seçin veya yeni yazın..."
                required
              />
              <datalist id="category-options">
                <option value="Kalp Sağlığı" />
                <option value="Hipertansiyon" />
                <option value="Diyabet" />
                <option value="Genel" />
                {Array.from(new Set(articles.map(a => a.category).filter(Boolean))).map(cat => (
                  <option key={cat} value={cat} />
                ))}
              </datalist>
            </div>

            <div className={styles.formGroup}>
              <label>Makale İçeriği (Word benzeri panel - Kalın, italik, liste yapabilirsiniz)</label>
              <div style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden' }}>
                <ReactQuill 
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  style={{ height: '300px', marginBottom: '40px' }}
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      ['link'],
                      ['clean']
                    ]
                  }}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Kapak Resmi {aExistingImageUrl && "(Şu anki resim yüklü)"}</label>
              <input id="article-file-input" type="file" accept="image/*" onChange={(e) => setAImage(e.target.files[0])} />
              {aExistingImageUrl && !aImage && <img src={aExistingImageUrl} alt="mevcut" style={{height: 60, marginTop:10}}/>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "İşleniyor..." : (editingArticleId ? "Değişiklikleri Kaydet" : "Makaleyi Yayınla")}
            </button>
            {editingArticleId && (
              <button type="button" onClick={resetArticleForm} className={styles.cancelBtn} style={{marginLeft: 10, background: '#7f8c8d', padding: '12px 24px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>İptal Et</button>
            )}
          </form>
        </div>
      )}

      {/* --- LIST ARTICLES --- */}
      {activeTab === 'listArticles' && (
        <div>
          {fetchingArticles ? (
            <p style={{padding: '2rem'}}>Makaleler yükleniyor...</p>
          ) : articles.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead>
                  <tr>
                    <th>Görsel</th>
                    <th>Başlık</th>
                    <th>Kategori</th>
                    <th>Tarih</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td>
                        {article.image_url ? <img src={article.image_url} alt={article.title} className={styles.articleImg} /> : "Yok"}
                      </td>
                      <td>{article.title}</td>
                      <td>{article.category}</td>
                      <td>{new Date(article.created_at).toLocaleDateString('tr-TR')}</td>
                      <td style={{display:'flex', gap:'5px', flexWrap:'wrap', justifyContent:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditArticle(article)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteArticle(article.id, article.image_url)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
             <p style={{padding: '2rem'}}>Henüz makale bulunmuyor.</p>
          )}
        </div>
      )}

      {/* --- ADD / EDIT TREATMENT --- */}
      {activeTab === 'addTreatment' && (
        <div className={styles.uploadForm}>
           <h3>{editingTreatmentId ? "Tedaviyi Düzenle" : "Yeni Tedavi/Hizmet Ekle"}</h3>
          <form onSubmit={handleTreatmentSubmit}>
            <div className={styles.formGroup}>
              <label>Tedavi Başlığı</label>
              <input type="text" placeholder="Örn: Hipertansiyon..." value={tTitle} onChange={(e) => setTTitle(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <label>Kısa Açıklama (Kartlarda görünür)</label>
              <input type="text" placeholder="Sessiz katil olarak bilinen..." value={tShortDesc} onChange={(e) => setTShortDesc(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <label>Detaylı Açıklama (Word benzeri panel - Kalın, italik, liste yapabilirsiniz)</label>
              <div style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden' }}>
                <ReactQuill 
                  theme="snow" 
                  value={tDescription} 
                  onChange={setTDescription} 
                  style={{ height: '200px', marginBottom: '40px' }}
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      ['link'],
                      ['clean']
                    ]
                  }}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Belirtiler (Virgülle ayırın)</label>
              <input type="text" placeholder="Baş ağrısı, Burun kanaması, ..." value={tSymptoms} onChange={(e) => setTSymptoms(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>Uygulanan Tedavi</label>
              <textarea placeholder="Nasıl tedavi edilir?..." rows="3" value={tTreatment} onChange={(e) => setTTreatment(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>Prof. Dr. Faruk Erzengin'in Yaklaşımı</label>
              <textarea placeholder="Hocamızın bu konuya özel yaklaşımı..." rows="3" value={tApproach} onChange={(e) => setTApproach(e.target.value)} />
            </div>

            <div className={styles.formGroup}>
              <label>Kapak Resmi {tExistingImageUrl && "(Şu anki resim yüklü)"}</label>
              <input id="treatment-file-input" type="file" accept="image/*" onChange={(e) => setTImage(e.target.files[0])} />
              {tExistingImageUrl && !tImage && <img src={tExistingImageUrl} alt="mevcut" style={{height: 60, marginTop:10}}/>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "İşleniyor..." : (editingTreatmentId ? "Değişiklikleri Kaydet" : "Tedaviyi Ekle")}
            </button>
            {editingTreatmentId && (
              <button type="button" onClick={resetTreatmentForm} className={styles.cancelBtn} style={{marginLeft: 10, background: '#7f8c8d', padding: '12px 24px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>İptal Et</button>
            )}
          </form>
        </div>
      )}

      {/* --- LIST TREATMENTS --- */}
      {activeTab === 'listTreatments' && (
        <div>
          {fetchingTreatments ? (
            <p style={{padding: '2rem'}}>Tedaviler yükleniyor...</p>
          ) : treatments.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead>
                  <tr>
                    <th>Görsel</th>
                    <th>Başlık</th>
                    <th>Kısa Açıklama</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {treatments.map((t) => (
                    <tr key={t.id}>
                      <td>
                        {t.image_url ? <img src={t.image_url} alt={t.title} className={styles.articleImg} /> : "Yok"}
                      </td>
                      <td>{t.title}</td>
                      <td>{t.short_desc}</td>
                      <td style={{display:'flex', gap:'5px', flexWrap:'wrap', justifyContent:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditTreatment(t)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteTreatment(t.id, t.image_url)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
             <p style={{padding: '2rem'}}>Henüz tedavi bulunmuyor.</p>
          )}
        </div>
      )}

      {/* --- ADD / EDIT PRESS VIDEO --- */}
      {activeTab === 'addPressVideo' && (
        <div className={styles.uploadForm}>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <h3>{editingVideoId ? "Videoyu Düzenle" : "Yeni TV/Video Ekle"}</h3>
             <button type="button" onClick={() => setActiveTab('listPressVideos')} style={{background: '#7f8c8d', padding: '8px 16px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Listeye Dön</button>
           </div>
          <form onSubmit={handleVideoSubmit}>
            <div className={styles.formGroup}><label>Başlık</label><input type="text" placeholder="HaberTürk Canlı Yayın" value={vTitle} onChange={(e) => setVTitle(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Video URL (YouTube Embed destekli)</label><input type="text" placeholder="https://www.youtube.com/embed/xyz" value={vVideoUrl} onChange={(e) => setVVideoUrl(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Kanal/Mecra</label><input type="text" placeholder="HaberTürk" value={vChannel} onChange={(e) => setVChannel(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Yayın Tarihi</label><input type="text" placeholder="Ekim 2023" value={vPubDate} onChange={(e) => setVPubDate(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Açıklama</label><textarea rows="3" placeholder="Yayın içeriği..." value={vDescription} onChange={(e) => setVDescription(e.target.value)} /></div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "İşleniyor..." : "Kaydet"}</button>
          </form>
        </div>
      )}

      {/* --- LIST PRESS VIDEOS --- */}
      {activeTab === 'listPressVideos' && (
        <div>
           <div style={{padding:'1rem 2rem', textAlign:'right'}}>
             <button onClick={() => {resetVideoForm(); setActiveTab('addPressVideo');}} className={styles.submitBtn} style={{width:'auto', display:'inline-block'}}>+ Yeni Video Ekle</button>
           </div>
          {fetchingPressVideos ? (<p style={{padding: '2rem'}}>Videolar yükleniyor...</p>) : pressVideos.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead><tr><th>Başlık</th><th>Kanal</th><th>Tarih</th><th>İşlem</th></tr></thead>
                <tbody>
                  {pressVideos.map((v) => (
                    <tr key={v.id}>
                      <td>{v.title}</td><td>{v.channel}</td><td>{v.publication_date}</td>
                      <td style={{display:'flex', gap:'5px', justifyContent:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditVideo(v)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteVideo(v.id)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (<p style={{padding: '2rem'}}>Henüz video bulunmuyor.</p>)}
        </div>
      )}

      {/* --- ADD / EDIT PRESS NEWS --- */}
      {activeTab === 'addPressNews' && (
        <div className={styles.uploadForm}>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <h3>{editingNewsId ? "Haberi Düzenle" : "Yeni Haber Ekle"}</h3>
             <button type="button" onClick={() => setActiveTab('listPressNews')} style={{background: '#7f8c8d', padding: '8px 16px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Listeye Dön</button>
           </div>
          <form onSubmit={handleNewsSubmit}>
            <div className={styles.formGroup}><label>Haber Başlığı</label><input type="text" placeholder="Uluslararası Başarı Ödülü" value={nTitle} onChange={(e) => setNTitle(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Kaynak/Gazete</label><input type="text" placeholder="Hürriyet Gazetesi" value={nSource} onChange={(e) => setNSource(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Özet Bilgi</label><textarea rows="3" placeholder="Dünya kalp günündeki açıklama..." value={nSummary} onChange={(e) => setNSummary(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Tarih</label><input type="text" placeholder="Kasım 2023" value={nPubDate} onChange={(e) => setNPubDate(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Haberin Dış Linki</label><input type="text" placeholder="https://..." value={nLink} onChange={(e) => setNLink(e.target.value)} required /></div>
            <div className={styles.formGroup}>
              <label>Haber Görseli (Eğer varsa) {nExistingImageUrl && "(Şu an yüklü)"}</label>
              <input id="news-file-input" type="file" accept="image/*" onChange={(e) => setNImage(e.target.files[0])} />
              {nExistingImageUrl && !nImage && <img src={nExistingImageUrl} alt="mevcut" style={{height: 60, marginTop:10}}/>}
            </div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "İşleniyor..." : "Kaydet"}</button>
          </form>
        </div>
      )}

      {/* --- LIST PRESS NEWS --- */}
      {activeTab === 'listPressNews' && (
        <div>
           <div style={{padding:'1rem 2rem', textAlign:'right'}}>
             <button onClick={() => {resetNewsForm(); setActiveTab('addPressNews');}} className={styles.submitBtn} style={{width:'auto', display:'inline-block'}}>+ Yeni Haber Ekle</button>
           </div>
          {fetchingPressNews ? (<p style={{padding: '2rem'}}>Haberler yükleniyor...</p>) : pressNews.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead><tr><th>Görsel</th><th>Başlık</th><th>Kaynak</th><th>İşlem</th></tr></thead>
                <tbody>
                  {pressNews.map((n) => (
                    <tr key={n.id}>
                      <td>{n.image_url ? <img src={n.image_url} alt="img" className={styles.articleImg} /> : "Yok"}</td>
                      <td>{n.title}</td><td>{n.source}</td>
                      <td style={{display:'flex', gap:'5px', justifyContent:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditNews(n)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteNews(n.id, n.image_url)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (<p style={{padding: '2rem'}}>Henüz haber bulunmuyor.</p>)}
        </div>
      )}

      {/* --- ADD / EDIT REVIEW --- */}
      {activeTab === 'addReview' && (
        <div className={styles.uploadForm}>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <h3>{editingReviewId ? "Yorumu Düzenle" : "Yeni Yorum Ekle"}</h3>
             <button type="button" onClick={() => setActiveTab('listReviews')} style={{background: '#7f8c8d', padding: '8px 16px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Listeye Dön</button>
           </div>
          <form onSubmit={handleReviewSubmit}>
            <div className={styles.formGroup}><label>Hasta Adı / Soyadı</label><input type="text" placeholder="Ahmet Yılmaz" value={rName} onChange={(e) => setRName(e.target.value)} required /></div>
            <div className={styles.formGroup}>
              <label>Kaynak</label>
              <select value={rSource} onChange={(e) => setRSource(e.target.value)} required>
                <option value="website">Web Sitesi</option>
                <option value="google">Google</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Tedavi Türü</label>
              <input type="text" placeholder="Genel Yorum, Tansiyon Hastalığı..." value={rTreatment} onChange={(e) => setRTreatment(e.target.value)} required />
            </div>
            <div className={styles.formGroup}><label>Tarih (Örn: 2 Ay önce)</label><input type="text" placeholder="2 Ay önce" value={rDate} onChange={(e) => setRDate(e.target.value)} /></div>
            <div className={styles.formGroup}>
              <label>Puanlama (Değerlendirme 1-5)</label>
              <input type="number" min="1" max="5" value={rRating} onChange={(e) => setRRating(e.target.value)} required />
            </div>
            <div className={styles.formGroup}><label>Yorum (Düşünceleri)</label><textarea rows="3" placeholder="Muazzam bir doktor..." value={rComment} onChange={(e) => setRComment(e.target.value)} /></div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "İşleniyor..." : "Kaydet"}</button>
          </form>
        </div>
      )}

      {/* --- LIST REVIEWS --- */}
      {activeTab === 'listReviews' && (
        <div>
           <div style={{padding:'1rem 2rem', textAlign:'right'}}>
             <button onClick={() => {resetReviewForm(); setActiveTab('addReview');}} className={styles.submitBtn} style={{width:'auto', display:'inline-block'}}>+ Yeni Yorum Ekle</button>
           </div>
          {fetchingReviews ? (<p style={{padding: '2rem'}}>Yorumlar yükleniyor...</p>) : reviews.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead><tr><th>Üye Adı</th><th>Kaynak</th><th>Tedavi</th><th>Puan</th><th>Tarih</th><th>İşlem</th></tr></thead>
                <tbody>
                  {reviews.map((r) => (
                    <tr key={r.id}>
                      <td>{r.name}</td><td>{r.source === 'google' ? 'Google' : 'Web'}</td><td>{r.treatment}</td><td>{r.rating}/5</td><td>{r.date}</td>
                      <td style={{display:'flex', gap:'5px', justifyContent:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditReview(r)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteReview(r.id)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
           ) : (<p style={{padding: '2rem'}}>Henüz yorum bulunmuyor.</p>)}
        </div>
      )}

      {/* --- ADD GALLERY IMAGE --- */}
      {activeTab === 'addGalleryImage' && (
        <div className={styles.uploadForm}>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <h3>Yeni Fotoğraf Ekle</h3>
             <button type="button" onClick={() => setActiveTab('listGallery')} style={{background: '#7f8c8d', padding: '8px 16px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Listeye Dön</button>
           </div>
          <form onSubmit={handleGallerySubmit}>
            <div className={styles.formGroup}>
              <label>Fotoğraf Seç</label>
              <input id="gallery-file-input" type="file" accept="image/*" onChange={(e) => setGImage(e.target.files[0])} required />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "Yükleniyor..." : "Yükle ve Kaydet"}</button>
          </form>
        </div>
      )}

      {/* --- LIST GALLERY --- */}
      {activeTab === 'listGallery' && (
        <div>
           <div style={{padding:'1rem 2rem', textAlign:'right'}}>
             <button onClick={() => {setGImage(null); setActiveTab('addGalleryImage');}} className={styles.submitBtn} style={{width:'auto', display:'inline-block'}}>+ Yeni Fotoğraf Ekle</button>
           </div>
          {fetchingGallery ? (<p style={{padding: '2rem'}}>Fotoğraflar yükleniyor...</p>) : gallery.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(150px, 1fr))', gap:'15px', padding:'20px'}}>
                {gallery.map((g) => (
                  <div key={g.id} style={{position:'relative', border:'1px solid #ddd', borderRadius:'8px', overflow:'hidden', boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
                    <img src={g.image_url} alt="Galeri" style={{width:'100%', height:'150px', objectFit:'cover', display:'block'}} />
                    <button className={styles.deleteBtn} onClick={() => handleDeleteGalleryResim(g.id, g.image_url)} style={{position:'absolute', top:'5px', right:'5px', padding:'5px 10px'}}>Sil</button>
                  </div>
                ))}
              </div>
            </div>
          ) : (<p style={{padding: '2rem'}}>Galeride henüz fotoğraf bulunmuyor.</p>)}
        </div>
      )}

      {/* --- ADD / EDIT FEATURED VIDEO --- */}
      {activeTab === 'addFeaturedVideo' && (
        <div className={styles.uploadForm}>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <h3>{editingFVideoId ? "Ana Sayfa Videosu Düzenle" : "Ana Sayfa İçin Yeni Video Ekle"}</h3>
             <button type="button" onClick={() => setActiveTab('listFeaturedVideos')} style={{background: '#7f8c8d', padding: '8px 16px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Listeye Dön</button>
           </div>
          <form onSubmit={handleFVideoSubmit}>
            <div className={styles.formGroup}><label>Başlık</label><input type="text" placeholder="Seminer Videosu" value={fvTitle} onChange={(e) => setFvTitle(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>YouTube Video ID (URL'deki izleme kodu: örn gD-7bmIkBp0)</label><input type="text" placeholder="gD-7bmIkBp0" value={fvYoutubeId} onChange={(e) => setFvYoutubeId(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Etiket (Tag, örn: Biyografi, Haber)</label><input type="text" placeholder="Haber" value={fvTag} onChange={(e) => setFvTag(e.target.value)} required /></div>
            <div className={styles.formGroup}><label>Açıklama</label><textarea rows="3" placeholder="Video açıklaması..." value={fvDesc} onChange={(e) => setFvDesc(e.target.value)} /></div>
            <div className={styles.formGroup}>
              <label>Bu Bir Haber Mi? (Altın çerçeve ekler)</label>
              <select value={fvIsNews ? "true" : "false"} onChange={(e) => setFvIsNews(e.target.value === "true")}>
                <option value="false">Hayır, Normal Video</option>
                <option value="true">Evet, Haber Videosu</option>
              </select>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "İşleniyor..." : "Kaydet"}</button>
          </form>
        </div>
      )}

      {/* --- LIST FEATURED VIDEOS --- */}
      {activeTab === 'listFeaturedVideos' && (
        <div>
           <div style={{padding:'1rem 2rem', textAlign:'right'}}>
             <button onClick={() => {resetFVideoForm(); setActiveTab('addFeaturedVideo');}} className={styles.submitBtn} style={{width:'auto', display:'inline-block'}}>+ Yeni Video Ekle</button>
           </div>
          {fetchingFeaturedVideos ? (<p style={{padding: '2rem'}}>Videolar yükleniyor...</p>) : featuredVideos.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead><tr><th>Başlık</th><th>ID</th><th>Etiket</th><th>İşlem</th></tr></thead>
                <tbody>
                  {featuredVideos.map((v) => (
                    <tr key={v.id}>
                      <td>{v.title}</td><td>{v.youtube_id}</td><td>{v.tag}</td>
                      <td style={{display:'flex', gap:'5px', justifyContent:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditFVideo(v)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteFVideo(v.id)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (<p style={{padding: '2rem'}}>Henüz video bulunmuyor.</p>)}
        </div>
      )}

      {/* --- ADD / EDIT AUDIO --- */}
      {activeTab === 'addAudio' && (
        <div className={styles.uploadForm}>
           <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
             <h3>{editingAudioId ? "Ses Kaydı Düzenle" : "Yeni Ses Kaydı Ekle"}</h3>
             <button type="button" onClick={() => setActiveTab('listAudios')} style={{background: '#7f8c8d', padding: '8px 16px', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}>Listeye Dön</button>
           </div>
          <form onSubmit={handleAudioSubmit}>
            <div className={styles.formGroup}><label>Başlık</label><input type="text" placeholder="Şiir Dinletisi" value={auTitle} onChange={(e) => setAuTitle(e.target.value)} required /></div>
            <div className={styles.formGroup}>
              <label>Ses Dosyası (.mp3 vb) {auExistingUrl && "(Şu an yüklü)"}</label>
              <input id="audio-file-input" type="file" accept="audio/*" onChange={(e) => setAuAudioFile(e.target.files[0])} />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>{loading ? "İşleniyor..." : "Kaydet"}</button>
          </form>
        </div>
      )}

      {/* --- LIST AUDIOS --- */}
      {activeTab === 'listAudios' && (
        <div>
           <div style={{padding:'1rem 2rem', textAlign:'right'}}>
             <button onClick={() => {resetAudioForm(); setActiveTab('addAudio');}} className={styles.submitBtn} style={{width:'auto', display:'inline-block'}}>+ Yeni Ses Kaydı Ekle</button>
           </div>
          {fetchingAudios ? (<p style={{padding: '2rem'}}>Ses kayıtları yükleniyor...</p>) : audios.length > 0 ? (
            <div className={styles.articlesTableContainer}>
              <table className={styles.articlesTable}>
                <thead><tr><th>Başlık</th><th>Dosya/Oynat</th><th>İşlem</th></tr></thead>
                <tbody>
                  {audios.map((a) => (
                    <tr key={a.id}>
                      <td>{a.title}</td>
                      <td><audio controls style={{height:'35px'}}><source src={a.audio_url} /></audio></td>
                      <td style={{display:'flex', gap:'5px', justifyContent:'center', alignItems:'center'}}>
                        <button className={styles.editBtn} style={{background: '#3498db', color:'white', border:'none', padding:'6px 12px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleEditAudio(a)}>Düzenle</button>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteAudio(a.id, a.audio_url)}>Sil</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (<p style={{padding: '2rem'}}>Henüz ses kaydı bulunmuyor.</p>)}
        </div>
      )}

      {/* --- ANALYTICS --- */}
      {activeTab === 'analytics' && (
        <div style={{ padding: '20px' }}>
          <h3 style={{ color: '#1a3c6d', marginBottom: '20px', textAlign: 'center' }}>Site İçi Son 30 Sayfa/Hizmet Görüntülemeleri</h3>
          {fetchingPageViews ? (
            <p style={{ textAlign: 'center' }}>Veriler yükleniyor...</p>
          ) : pageViews.length > 0 ? (
            <div style={{ width: '100%', height: 400, background: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pageViews.slice(0, 30).map(item => ({...item, path: item.path === '/' ? 'Ana Sayfa' : item.path}))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis 
                    dataKey="path" 
                    tick={{ fill: '#666', fontSize: 12 }} 
                    angle={-45} 
                    textAnchor="end" 
                    interval={0} 
                  />
                  <YAxis tick={{ fill: '#666' }} allowDecimals={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(26, 60, 109, 0.05)' }} 
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="views" name="Görüntülenme Sayısı" fill="#d4af37" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>Henüz yeterli analitik verisi bulunmuyor.</p>
          )}
        </div>
      )}

    </div>
  );
}
