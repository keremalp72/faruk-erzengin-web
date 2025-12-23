import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaQuoteRight, FaStar, FaCheckCircle } from 'react-icons/fa'; // Google ikonu silindi
import ScrollReveal from '../Animations/ScrollReveal';

import 'swiper/css';
import 'swiper/css/pagination';
import './Reviews.css';

const Reviews = () => {

  const reviews = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      treatment: "Diyabetik Ayak Tedavisi",
      text: "Ayağımın kesilmesi gerektiği söylenmişti. Faruk Hocamın özel solüsyon tedavisi sayesinde ayağım kurtuldu. Allah ondan razı olsun, şu an yürüyebiliyorum.",
      date: "Ekim 2024"
    },
    {
      id: 2,
      name: "Mehmet Demir",
      treatment: "Hipertansiyon & Kalp",
      text: "Yıllardır düşmeyen tansiyonum hocamın 'Polypill' yaklaşımıyla düzene girdi. Artık nefes darlığı çekmeden merdiven çıkabiliyorum. İlgisi muazzam.",
      date: "Ağustos 2024"
    },
    {
      id: 3,
      name: "Zeynep Kaya",
      treatment: "Kalp Kapak Hastalığı",
      text: "Ameliyat korkum vardı. Hocamızın detaylı açıklamaları ve medikal tedavisiyle çok daha iyiyim. Güven veren, babacan bir hekim.",
      date: "Kasım 2024"
    },
    {
      id: 4,
      name: "Caner Erkin",
      treatment: "Sporcu Kalbi Kontrolü",
      text: "Profesyonel spor hayatım için detaylı check-up yaptırdım. Akademik bilgisi ve tecrübesi tartışılmaz. Çok memnun kaldım.",
      date: "Aralık 2024"
    },
    {
      id: 5,
      name: "Fatma Çelik",
      treatment: "Damar Sertliği",
      text: "Bacaklarımdaki ağrılar yüzünden uyuyamıyordum. Hocamızın Adventisya tedavisiyle ağrılarım dindi. Çok teşekkür ederim.",
      date: "Ocak 2025"
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-container">
        
        {/* BAŞLIK (Google Rozeti YOK) */}
        <ScrollReveal>
          <div className="reviews-header">
            <h4 className="sub-title">HASTA DENEYİMLERİ</h4>
            <h2 className="main-title">Gerçek Hikayeler, Mutlu Sonlar</h2>
            {/* Buradaki Google Badge div'ini sildik */}
          </div>
        </ScrollReveal>

        {/* SWIPER SLIDER */}
        <ScrollReveal delay={0.2}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                  
                  <div className="quote-icon-box">
                    <FaQuoteRight />
                  </div>

                  <div className="card-stars">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                  </div>

                  <p className="review-text">"{review.text}"</p>

                  <div className="review-footer">
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <span className="treatment-tag">
                        <FaCheckCircle className="check-icon"/> {review.treatment}
                      </span>
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
        
        <div className="reviews-action">
           <Link to="/yorumlar" className="btn-reviews-all">Tüm Yorumları Oku</Link>
        </div>

      </div>
    </section>
  );
};

export default Reviews;