import React, { useState } from 'react';
import { FaGraduationCap, FaAward, FaStethoscope, FaUniversity } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('egitim');

  // Sekme İçerikleri (Burası normalde veritabanından gelebilir ama şimdilik statik yapıyoruz)
  const tabContent = {
    egitim: [
      { year: '1974', title: 'İstanbul Üniversitesi Tıp Fakültesi', desc: 'Tıp Doktoru Ünvanı (Derece ile Mezuniyet)' },
      { year: '1982', title: 'St. James’s University Hospital (İngiltere)', desc: 'Kardiyoloji Araştırma Üyesi (Senior Registrar)' },
      { year: '1987', title: 'Doçentlik Ünvanı', desc: 'İstanbul Tıp Fakültesi Kardiyoloji Anabilim Dalı' },
      { year: '1995', title: 'Profesörlük Ünvanı', desc: 'İstanbul Üniversitesi Tıp Fakültesi' },
      { year: '1998 - 2004', title: 'Dekanlık Görevi', desc: 'İstanbul Tıp Fakültesi Dekanı (İki Dönem Üst Üste)' },
    ],
    oduller: [
      { year: 'Özel', title: 'Erich Frank Üstün Hizmet Madalyası', desc: 'Münih Üniversitesi Rektörlüğü tarafından verilmiştir.' },
      { year: 'Hizmet', title: 'Üstün Hizmet Ödülü', desc: 'İstanbul Üniversitesi Rektörlüğü' },
      { year: 'Bilim', title: '50+ Plaket ve Madalya', desc: 'Akademik ve idari başarılarından dolayı çeşitli kurumlardan.' },
    ],
    ilgi: [
      { title: 'Ekokardiyografi', desc: 'Türkiye\'de Transözofajiyal Ekokardiografi Laboratuvarı kurucusu.' },
      { title: 'Ateroskleroz (Damar Sertliği)', desc: 'Damar sertliğini gerileten özel tedavi yöntemleri.' },
      { title: 'Hipertansiyon', desc: 'Dirençli tansiyon ve kalp yetersizliği tedavileri.' },
    ]
  };

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        {/* SOL TARAF: FOTO VE HİKAYE */}
        <div className="about-left">
          <div className="about-image-box">
             {/* Buraya Hero'dakinden farklı, belki masada oturan bir resim koyabilirsin */}
             <img 
               src="https://img.freepik.com/free-photo/doctor-offering-medical-advice_23-2147896173.jpg" 
               alt="Prof. Dr. Faruk Erzengin" 
               className="about-img"
             />
             <div className="exp-badge">
               <span className="exp-number">40+</span>
               <span className="exp-text">Yıllık<br/>Tecrübe</span>
             </div>
          </div>
        </div>

        {/* SAĞ TARAF: BİYOGRAFİ VE SEKMELER */}
        <div className="about-right">
          <h4 className="section-subtitle">HAKKIMDA</h4>
          <h2 className="section-title">Prof. Dr. Faruk Erzengin</h2>
          
          <p className="about-text">
            Meslek hayatım boyunca binlerce hastanın kalbine dokunma şansı buldum. 
            Tıp sadece bir bilim değil, aynı zamanda insanı anlama sanatıdır. 
            İstanbul Tıp Fakültesi'nde (Çapa) geçen uzun yıllarımda hem öğrenci yetiştirdim 
            hem de en zorlu vakalarda şifa dağıtmaya çalıştım.
          </p>

          {/* SEKMELER (TABS) */}
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'egitim' ? 'active' : ''}`} 
              onClick={() => setActiveTab('egitim')}
            >
              <FaGraduationCap /> Eğitim
            </button>
            <button 
              className={`tab-btn ${activeTab === 'oduller' ? 'active' : ''}`} 
              onClick={() => setActiveTab('oduller')}
            >
              <FaAward /> Ödüller
            </button>
            <button 
              className={`tab-btn ${activeTab === 'ilgi' ? 'active' : ''}`} 
              onClick={() => setActiveTab('ilgi')}
            >
              <FaStethoscope /> Uzmanlık
            </button>
          </div>

          {/* SEKME İÇERİĞİ */}
          <div className="tab-content">
            
            {activeTab === 'egitim' && (
              <ul className="timeline-list">
                {tabContent.egitim.map((item, index) => (
                  <li key={index}>
                    <span className="timeline-year">{item.year}</span>
                    <div className="timeline-info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'oduller' && (
              <ul className="timeline-list">
                {tabContent.oduller.map((item, index) => (
                  <li key={index}>
                    <span className="timeline-year gold-bg"><FaAward/></span>
                    <div className="timeline-info">
                      <h4>{item.title}</h4>
                      <p className="year-badge">{item.year}</p>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'ilgi' && (
              <div className="interest-grid">
                {tabContent.ilgi.map((item, index) => (
                  <div key={index} className="interest-item">
                    <FaStethoscope className="interest-icon"/>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;