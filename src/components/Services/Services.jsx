import React from 'react';
// FaActivity yerine FaWaveSquare (Dalga/EKG) ekledik
import { FaHeartbeat, FaStethoscope, FaWaveSquare, FaUserMd, FaNotesMedical, FaSyringe } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  
  const services = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      title: "Klinik Kardiyoloji",
      desc: "Kalp ritim bozuklukları, kalp kapak hastalıkları ve koroner arter hastalıklarının detaylı tanısı ve tedavisi."
    },
    {
      id: 2,
      icon: <FaWaveSquare />, // BURAYI DEĞİŞTİRDİK (Eko dalgalarını temsil eder)
      title: "Ekokardiyografi",
      desc: "Kalbin ultrasonografik incelenmesi. Türkiye'de bu alandaki öncü uygulamalar ve ileri düzey görüntüleme."
    },
    {
      id: 3,
      icon: <FaStethoscope />,
      title: "İç Hastalıkları",
      desc: "Diyabet, tiroid, sindirim sistemi ve genel dahiliye problemlerinin bütüncül yaklaşım ile tedavisi."
    },
    {
      id: 4,
      icon: <FaUserMd />,
      title: "Hipertansiyon",
      desc: "Dirençli tansiyon vakalarında kişiye özel ilaç düzenlemeleri ve yaşam tarzı danışmanlığı."
    },
    {
      id: 5,
      icon: <FaNotesMedical />,
      title: "Kalp Yetersizliği",
      desc: "İleri evre kalp yetersizliği hastalarının takibi, ilaç tedavisi ve cihaz terapileri yönetimi."
    },
    {
      id: 6,
      icon: <FaSyringe />,
      title: "Check-Up & Koruma",
      desc: "Kalp hastalıkları riskini önceden belirlemek için kapsamlı kardiyolojik tarama ve risk analizi."
    }
  ];

  return (
    <section className="services-section" id="treatments">
      <div className="container services-container">
        
        {/* Bölüm Başlığı */}
        <div className="section-header">
           <h4 className="sub-title">UZMANLIK ALANLARI</h4>
           <h2 className="main-title">Tedavi ve Hizmetlerimiz</h2>
           <p className="section-desc">
             Akademik tecrübe ve son teknoloji tanı yöntemleriyle, kalbiniz ve sağlığınız için en doğru çözümleri sunuyoruz.
           </p>
        </div>

        {/* Kartlar Grid Yapısı */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="icon-box">
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
              {/* İsteğe bağlı ok işareti veya 'Detaylı Bilgi' yazısı eklenebilir */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;