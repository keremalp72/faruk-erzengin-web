import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaQuoteRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from '../Animations/ScrollReveal';

import { reviewsData } from '../../data/reviewsData'; 

import 'swiper/css';
import 'swiper/css/pagination';
import './Reviews.css';

const Reviews = () => {

  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-container">
        
        <ScrollReveal>
          <div className="reviews-header">
            <h4 className="sub-title">HASTA DENEYİMLERİ</h4>
            <h2 className="main-title">Gerçek Hikayeler, Mutlu Sonlar</h2>
          </div>
        </ScrollReveal>

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
            {reviewsData.map((review) => {
              
              // Yorumun boş olup olmadığını kontrol ediyoruz
              const isCommentEmpty = !review.comment || review.comment.trim() === "";

              return (
                <SwiperSlide key={review.id}>
                  <div className="review-card">
                    
                    <div className="quote-icon-box">
                      <FaQuoteRight />
                    </div>

                    <div className="card-stars">
                      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>

                    {/* --- DEĞİŞİKLİK BURADA --- */}
                    {/* Eğer yorum boşsa 'no-comment' sınıfı eklenir ve özel mesaj yazar */}
                    <p className={`review-text ${isCommentEmpty ? 'no-comment' : ''}`}>
                      {isCommentEmpty 
                        ? "*(Yazılı yorum yapılmadı, puan verildi)" 
                        : `"${review.comment}"`
                      }
                    </p>

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
              );
            })}
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