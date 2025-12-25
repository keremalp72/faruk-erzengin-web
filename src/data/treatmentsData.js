// src/data/treatmentsData.js

export const treatmentsData = [
    {
      id: 1,
      title: "Hipertansiyon (Yüksek Tansiyon)",
      shortDesc: "Sessiz katil olarak bilinen yüksek tansiyonun tanı, takip ve kişiye özel ilaç tedavisi.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80", // Tansiyon aleti resmi
      content: {
        description: "Hipertansiyon, kan basıncının atardamarlarda sürekli olarak yüksek olması durumudur. Tedavi edilmezse kalp krizi, felç ve böbrek yetmezliğine yol açabilir.",
        symptoms: ["Baş ağrısı ve baş dönmesi", "Burun kanaması", "Kulak çınlaması", "Yorgunluk ve halsizlik"],
        treatment: "Yaşam tarzı değişiklikleri (tuz kısıtlaması, egzersiz) ve kişiye özel ilaç kombinasyonları ile kan basıncı kontrol altına alınır.",
        approach: "Prof. Dr. Faruk Erzengin, 24 saatlik tansiyon holter takibi ve detaylı ekokardiyografi ile hipertansiyonun kalbe etkisini inceler ve en uygun ilaç rejimini belirler."
      }
    },
    {
      id: 2,
      title: "Diyabetik Ayak Yaraları",
      shortDesc: "Ampütasyon (kesilme) riski taşıyan yaraların özel solüsyonlar ile kurtarılması.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80", // Ayak/Muayene resmi
      content: {
        description: "Diyabet hastalarında damar tıkanıklığı ve sinir hasarına bağlı olarak ayaklarda iyileşmeyen yaralar oluşabilir.",
        symptoms: ["Ayakta his kaybı veya uyuşma", "İyileşmeyen yaralar", "Renk değişikliği ve morarma", "Ağrı (bazen hiç hissedilmeyebilir)"],
        treatment: "Enfeksiyon kontrolü, ölü dokuların temizlenmesi ve kan dolaşımını artırıcı tedaviler.",
        approach: "Hocamızın geliştirdiği özel 'Erzengin Solüsyonu' ve multidisipliner yaklaşım sayesinde, kesilme kararı verilen ayaklarda %99 oranında kurtarma başarısı sağlanmaktadır."
      }
    },
    {
      id: 3,
      title: "Koroner Arter Hastalığı",
      shortDesc: "Damar sertliği ve kalp krizi riskine karşı erken teşhis ve tedavi.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80", // Kalp modeli/doktor
      content: {
        description: "Kalbi besleyen damarların (koroner) daralması veya tıkanması sonucu kalbin yeterli oksijen alamaması durumudur.",
        symptoms: ["Göğüs ağrısı (Anjina)", "Nefes darlığı", "Çarpıntı", "Sol kola vuran ağrı"],
        treatment: "İlaç tedavisi, balon/stent işlemleri veya gerekli durumlarda bypass cerrahisi.",
        approach: "Klasik anjiyodan önce, gelişmiş ekokardiyografi ve efor testleri ile risk belirlenir. 'Adventisya Teorisi' ışığında damar sertliğini gerileten tedaviler uygulanır."
      }
    },
    {
      id: 4,
      title: "Kalp Yetersizliği",
      shortDesc: "Kalbin vücuda yeterli kanı pompalayamadığı durumlarda yaşam kalitesini artıran tedaviler.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80", // EKG cihazı
      content: {
        description: "Kalp kasının zayıflaması veya sertleşmesi sonucu pompalama gücünün azalmasıdır.",
        symptoms: ["Çabuk yorulma", "Ayaklarda şişlik (ödem)", "Gece nefes darlığı ile uyanma", "İştahsızlık"],
        treatment: "Kalbin iş yükünü azaltan ilaçlar, diüretikler (idrar söktürücüler) ve ritim düzenleyici cihazlar.",
        approach: "Hasta eğitimi ve sıkı takip ile hastaneye yatış oranları en aza indirilir. Kalbin yeniden şekillenmesini (remodeling) önleyici modern ilaç tedavileri uygulanır."
      }
    },
    {
      id: 5,
      title: "Aritmi (Ritim Bozukluğu)",
      shortDesc: "Çarpıntı, tekleme ve düzensiz kalp atışlarının tanı ve tedavisi.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=600&q=80", // Kalp ritim grafiği
      content: {
        description: "Kalbin çok hızlı, çok yavaş veya düzensiz atması durumudur.",
        symptoms: ["Göğüste kuş çırpınması hissi", "Baş dönmesi", "Bayılma", "Nefes darlığı"],
        treatment: "İlaç tedavisi, ablasyon (yakma) işlemi veya pil (pacemaker) takılması.",
        approach: "Holter EKG ile ritim bozukluğunun türü 24-48 saat izlenerek tespit edilir ve nokta atışı tedavi planlanır."
      }
    },
    {
      id: 6,
      title: "Hiperlipidemi (Kolesterol)",
      shortDesc: "Yüksek kolesterolün damar yapısına zarar vermeden kontrol altına alınması.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=600&q=80", // Kan tüpü
      content: {
        description: "Kandaki yağ oranının (kolesterol ve trigliserid) yüksek olması, damar tıkanıklığının ana sebebidir.",
        symptoms: "Genellikle belirti vermez, kan tahlili ile anlaşılır. İleri evrede göz çevresinde yağ bezeleri görülebilir.",
        treatment: "Diyet, egzersiz ve statin grubu ilaçlar.",
        approach: "Sadece kolesterolü düşürmek değil, damar iç yapısını (endotel) korumak hedeflenir. Kişiye özel diyet ve ilaç programı uygulanır."
      }
    }
  ];