import React, { useEffect } from 'react';
import { FaHeartbeat, FaVial, FaProcedures, FaStethoscope, FaUserMd, FaNotesMedical, FaSyringe, FaDna } from 'react-icons/fa';
// DOĞRUSU BU:
import PageTransition from "../Animations/PageTransition";
import ScrollReveal from "../Animations/ScrollReveal";
import './Services.css';

const ServicesPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaVial />,
      title: "Erzengin Solüsyonu & Diyabetik Ayak",
      desc: "Kesilme kararı verilen diyabetik ayak yaralarında %98 başarı oranıyla uzuv kurtaran, hocamızın geliştirdiği özel formülasyon tedavisi."
    },
    {
      id: 2,
      icon: <FaDna />,
      title: "Adventisya (Damar Dışı) Tedavisi",
      desc: "Damar sertliğinin (Ateroskleroz) dış tabakadan başladığını kanıtlayan 'Adventisya Teorisi'ne dayalı, hastalığı gerileten kökten çözüm."
    },
    {
      id: 3,
      icon: <FaHeartbeat />,
      title: "Kalp Yetmezliği & Kapak Hastalıkları",
      desc: "Kalbin pompa gücünü artıran medikal tedaviler, kapak darlık ve yetersizliklerinde cerrahiye alternatif girişimsel yöntemler."
    },
    {
      id: 4,
      icon: <FaUserMd />,
      title: "Dirençli Hipertansiyon",
      desc: "Düşürülemeyen tansiyon vakalarında 'Polypill' yaklaşımı ve böbrek damar (Renal) kaynaklı sorunların tespiti ve tedavisi."
    },
    {
      id: 5,
      icon: <FaProcedures />,
      title: "Girişimsel Kardiyoloji",
      desc: "Koroner Anjiyografi, Balon, Stent işlemleri ve kalp deliklerinin ameliyatsız kapatılması gibi minimal invaziv operasyonlar."
    },
    {
      id: 6,
      icon: <FaStethoscope />,
      title: "Aritmi ve Kalp Pili",
      desc: "Çarpıntı, ritim bozuklukları (Atriyal Fibrilasyon) tedavisi ve kalp pili (Pacemaker) takılması ve takibi."
    },
    {
      id: 7,
      icon: <FaSyringe />,
      title: "Koruyucu Kardiyoloji",
      desc: "Genetik risk analizi, kolesterol yönetimi ve kalp krizini oluşmadan engellemeye yönelik detaylı check-up programları."
    },
    {
      id: 8,
      icon: <FaNotesMedical />,
      title: "İç Hastalıkları (Dahiliye)",
      desc: "Şeker hastalığı (Diyabet), tiroid bozuklukları ve metabolik sendrom gibi sistemik hastalıkların bütüncül yönetimi."
    }
  ];

  return (
    <PageTransition>
      <div className="services-page">
        
        {/* HEADER */}
        <div className="services-header-section">
          <ScrollReveal>
            <div className="services-header-content">
              <span className="services-subtitle">TIBBİ UZMANLIKLAR</span>
              <h1 className="services-hero-title">Bilimsel ve Bütüncül Tedaviler</h1>
              <p className="services-hero-desc">
                Prof. Dr. Faruk Erzengin'in literatüre giren buluşları ve 45 yıllık tecrübesiyle, 
                kalp ve damar sağlığınız için en doğru çözümler.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* KARTLAR GRID */}
        <section className="services-content-section">
          <div className="services-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.1}> 
                  {/* Her kart 0.1s gecikmeli gelsin */}
                  <div className="service-card-item">
                    <div className="s-icon-box">
                      {service.icon}
                    </div>
                    <h3 className="s-card-title">{service.title}</h3>
                    <p className="s-card-desc">{service.desc}</p>
                    <div className="s-card-line"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default ServicesPage;