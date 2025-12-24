import React, { useState, useEffect } from 'react';
import { FaAward, FaFlask, FaUniversity, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ScrollReveal from '../Animations/ScrollReveal';
import './About.css';

// Resim importu
import doctorProfileImg from '../../assets/images/anasayfa-bg.jpeg'; 

const About = () => {
  const [activeTab, setActiveTab] = useState('kariyer');

  // Sticky özelliğinin çalışması için sayfa başına scroll düzeltmesi
  useEffect(() => {
    // Sayfa içi linklerde bazen sticky hesaplaması şaşabilir, bunu engeller
    const handleScroll = () => {}; 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabContent = {
    kariyer: [
      { year: '1972', title: 'Dönem Birinciliği', desc: 'İstanbul Üniversitesi Tıp Fakültesi (Mezuniyet)' },
      { year: '1978', title: 'İç Hastalıkları Uzmanlığı', desc: 'İstanbul Tıp Fakültesi (Üstün Başarı)' },
      { year: '1982', title: 'Senior Registrar (İngiltere)', desc: 'St. James’s University Hospital, Leeds - Kardiyoloji Departmanı' },
      { year: '1987', title: 'Doçentlik', desc: 'İstanbul Tıp Fakültesi Kardiyoloji Anabilim Dalı' },
      { year: '1995', title: 'Profesörlük', desc: 'İstanbul Üniversitesi Tıp Fakültesi' },
      { year: '1998 - 2004', title: 'Dekanlık Görevi', desc: 'İstanbul Tıp Fakültesi Dekanı (İki Dönem Üst Üste Seçilerek)' },
    ],
    buluslar: [
      { title: 'Erzengin Solüsyonu', desc: 'Diyabetik ayak yaralarında ampütasyonu (kesilmeyi) %99 önleyen ve damar sertliğini gerileten özel formülasyon.' },
      { title: 'Adventisya Teorisi', desc: 'Aterosklerozun (damar sertliği) sadece damar içinden değil, dış tabakadan (Adventisya) başladığını kanıtlayan literatür değiştiren teori.' },
      { title: 'Polypill Tedavisi', desc: 'Kalp damar hastalıklarında çoklu ilaç kullanımını tek potada eriten tedavi yaklaşımı.' },
    ],
    oduller: [
      { year: '2025', title: 'Nobel Tıp Ödülü Adaylığı', desc: '32 kişilik uluslararası bilim kurulu ile yürütülen çalışmalar sonucu.' },
      { year: 'Onur', title: 'Erich Frank Üstün Hizmet Madalyası', desc: 'Münih Üniversitesi Rektörlüğü tarafından.' },
      { year: 'Hizmet', title: 'Üstün Hizmet Ödülü', desc: 'İstanbul Üniversitesi Rektörlüğü.' },
      { year: 'Ünvan', title: 'FESC Ünvanı', desc: 'Fellow of the European Society of Cardiology.' },
    ]
  };

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        {/* --- SOL TARAF: RESİM ALANI (STICKY) --- */}
        <div className="about-left">
          {/* DÜZELTME: ScrollReveal buradan KALDIRILDI. */}
          {/* Sticky özelliğinin çalışması için elemanın 'transform' yememesi gerekir. */}
          <div className="about-img-wrapper">
            <img 
              src={doctorProfileImg} 
              alt="Prof. Dr. Faruk Erzengin" 
              className="about-img"
            />
            
            {/* Tecrübe Rozeti */}
            <div className="experience-badge">
              <span className="badge-year">45+</span>
              <span className="badge-text">Yıllık<br/>Tecrübe</span>
            </div>
          </div>
        </div>

        {/* --- SAĞ TARAF: İÇERİK --- */}
        <div className="about-right">
          
          {/* Başlık ve Metin (Burada animasyon kalabilir) */}
          <ScrollReveal delay={0.2}>
            <div className="about-header">
              <span className="section-subtitle">KARDİYOLOJİ & İÇ HASTALIKLARI</span>
              <h2 className="section-title">Bilimle Atan Bir Ömür: <br/>Prof. Dr. Faruk Erzengin</h2>
              <p className="about-intro">
                İstanbul Tıp Fakültesi'nden dönem birinciliği ile başlayan, İngiltere ve ABD'de dünyaca ünlü 
                <strong> Prof. Dr. Michael DeBakey</strong> ile devam eden, binlerce hayatın kurtarıldığı yarım asırlık bir tıp yolculuğu.
              </p>
              <p className="about-text">
                Sadece bir hekim değil, aynı zamanda <strong>"Erzengin Solüsyonu"</strong> ve <strong>"Adventisya Teorisi"</strong> gibi 
                buluşlarıyla tıp literatürüne yön veren bir bilim insanı. İki dönem üst üste İstanbul Tıp Fakültesi Dekanlığı 
                yaparak idari tecrübesini akademiyle birleştirdi. Bugün, diyabetik ayak yaralarından kalp yetmezliğine kadar 
                en zorlu vakalarda "kesilme kararı verilen" uzuvları kurtarmaya ve kalpleri iyileştirmeye devam ediyor.
              </p>
            </div>
          </ScrollReveal>

          {/* Sekmeler Grubu */}
          <ScrollReveal delay={0.4}>
            <div className="tabs-container">
              {/* Navigasyon */}
              <div className="tabs-nav">
                <button 
                  className={`tab-btn ${activeTab === 'kariyer' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('kariyer')}
                >
                  <FaUniversity /> Eğitim & Kariyer
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'buluslar' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('buluslar')}
                >
                  <FaFlask /> Buluşlar & Bilim
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'oduller' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('oduller')}
                >
                  <FaAward /> Ödüller
                </button>
              </div>

              {/* İçerikler */}
              <div className="tab-body">
                
                {/* KARİYER */}
                {activeTab === 'kariyer' && (
                  <div className="timeline-wrapper fade-in">
                    {tabContent.kariyer.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <span className="t-year">{item.year}</span>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* BULUŞLAR */}
                {activeTab === 'buluslar' && (
                  <div className="inventions-grid fade-in">
                    {tabContent.buluslar.map((item, index) => (
                      <div key={index} className="invention-card">
                        <div className="inv-icon"><FaFlask /></div>
                        <div className="inv-info">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ÖDÜLLER */}
                {activeTab === 'oduller' && (
                  <div className="awards-list fade-in">
                    {tabContent.oduller.map((item, index) => (
                      <div key={index} className="award-item">
                        <div className="award-year-box">{item.year}</div>
                        <div className="award-details">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default About;