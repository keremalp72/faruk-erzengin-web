import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaArrowRight } from 'react-icons/fa'; // Ok ikonu eklendi

import 'swiper/css';
import 'swiper/css/pagination';

import './Reviews.css';

const Reviews = () => {

  // Yorumları biraz uzattım ki taşma kontrolü yapabilelim
  const reviews = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      text: "Babamın kalp kapağı ameliyatı sürecinde Faruk Hocamın ilgisi ve bilgisi bizi hayata bağladı. Kendisine ne kadar teşekkür etsek azdır. Türkiye'nin en iyi hocalarından biri olduğunu gönül rahatlığıyla söyleyebilirim. Hastane süreci boyunca...",
      date: "Ekim 2024"
    },
    {
      id: 2,
      name: "Ayşe Demir",
      text: "Yıllardır süren tansiyon problemimi doğru teşhis ve tedavi ile kontrol altına aldı. Güler yüzü ve detaylı açıklamalarıyla insana güven veriyor. Daha önce gittiğim doktorların aksine beni dinledi ve...",
      date: "Ağustos 2024"
    },
    {
      id: 3,
      name: "Mehmet Özkan",
      text: "Ekokardiyografi konusunda bir numara. Başka doktorların göremediği detayı görüp hayatımı kurtardı. Allah başımızdan eksik etmesin. Tetkiklerim sonucunda çıkan tabloyu o kadar net anlattı ki...",
      date: "Eylül 2024"
    },
    {
      id: 4,
      name: "Zeynep Kaya",
      text: "Annemin anjiyo korkusunu yenmesini sağlayan, eli hafif, kalbi güzel doktorumuz. Süreç çok rahat geçti, hiç hissetmedik bile. Herkese tavsiye ediyorum.",
      date: "Kasım 2024"
    },
     {
      id: 5,
      name: "Caner Erkin",
      text: "Sporcu kalbi kontrollerim için gittim. Akademik bilgisi ve tecrübesi tartışılmaz. Çok memnun kaldım. Spor hayatıma güvenle devam edebiliyorum.",
      date: "Aralık 2024"
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-container">
        
        <div className="reviews-header">
          <h4 className="sub-title">HASTA YORUMLARI</h4>
          <h2 className="main-title">Sizden Gelenler</h2>
          <div className="stars-badge">
             <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
             <span>%100 Memnuniyet</span>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="reviews-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="review-card">
                
                {/* Üst Kısım: İkon ve Yorum */}
                <div className="card-body">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="review-text">{review.text}</p>
                  
                  {/* YENİ: Devamını Oku Linki */}
                  <a href="#tum-yorumlar" className="read-more-link">
                    Devamını Oku <FaArrowRight className="arrow-icon"/>
                  </a>
                </div>

                {/* Alt Kısım: İsim ve Yıldızlar */}
                <div className="review-footer">
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <div className="review-stars">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Reviews;