import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://uekcducwvvwzufzhlwhg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE';
// Note: Normally we use service_role key to bypass RLS, but here we can use anon key since RLS has public insert or we can authenticate.
// Oh wait, RLS blocks inserts from unauthenticated users. 
// We should authenticate first!
const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadFile(localPath, bucketName) {
  try {
    const fileContent = fs.readFileSync(localPath);
    const fileName = path.basename(localPath);
    const uniqueName = `${Date.now()}_${fileName}`;
    
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(uniqueName, fileContent, {
        contentType: 'image/png' // hardcoded png is fine for most, or try to detect
      });

    if (error) {
      console.error("Upload error for", fileName, error);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage.from(bucketName).getPublicUrl(uniqueName);
    return publicUrl;
  } catch (err) {
    console.error("Failed to read/upload", localPath, err.message);
    return null;
  }
}

async function seed() {
  await supabase.auth.signInWithPassword({ email: 'admin@farukerzengin.com', password: 'faruk123' });

  // 1. PRESS VIDEOS
  const pressVideos = [
    {
      title: "Kalp Sağlığında Doğru Bilinen Yanlışlar",
      channel: "Funda Akosman",
      publication_date: "12 Ekim 2023",
      video_url: "https://www.youtube.com/embed/A4w_7aP_1mU",
      description: "Prof. Dr. Faruk Erzengin, Funda Akosman youtube kanalında kalp krizinden korunma yöntemlerini ve doğru bilinen yanlışları anlatıyor."
    },
    {
      title: "By-Pass ve Stent Tarihe Gömülüyor",
      channel: "ATV Kahvaltı Haberleri",
      publication_date: "05 Mayıs 2023",
      video_url: "https://www.youtube.com/embed/wkOhPb1denI",
      description: "Hipertansiyon ve damar sertliği tedavisinde yeni yöntemler ve Erzengin Solüsyonu’nun etkileri."
    },
    {
      title: "Prof.Dr. Faruk ERZENGİN Tanıtım Filmi 2017",
      channel: "Zirve Yapım Röportaj",
      publication_date: "20 Kasım 2022",
      video_url: "https://www.youtube.com/embed/gD-7bmIkBp0",
      description: "Prof.Dr. Faruk ERZENGİN Tanıtım Filmi"
    },
    {
      title: "İstanbul Üniversitesi Röportajı",
      channel: "Haber1 YouTube",
      publication_date: "2025",
      video_url: "https://www.youtube.com/embed/qcr3tWmyAD8",
      description: "Prof. Dr. Faruk Erzengin, İstanbul Üniversitesi’nin geleceği ve bilimsel vizyonu hakkında konuşuyor."
    },
    {
      title: "BY-PAS ve Stent Tarih Oluyor – Prof. Dr. Faruk Erzengin",
      channel: "ATV Haberleri",
      publication_date: "2015",
      video_url: "https://www.youtube.com/embed/qVGggabOSRI?si=P7kAtUCF6iE5zRPX",
      description: "Prof. Dr. Faruk Erzengin’in kalp damar hastalıklarında kullanılan bypass ve stent yöntemlerinin gelecekte önemini yitirebileceğini, yeni tedavi seçeneklerinin öne çıkacağını anlattığı bir konuşmadır."
    },
    {
      title: "Hocaların Hocası Prof. Dr. Faruk Erzengin COVID-19’un Çarpıcı Etkilerini ve Önlemleri Anlattı.",
      channel: "Funda Akosman",
      publication_date: "2021",
      video_url: "https://www.youtube.com/embed/kgnAwPz32Zw",
      description: "Prof. Dr. Faruk Erzengin bu söyleşide COVID-19’un etkilerini, mutasyonlarını ve alınması gereken önlemleri detaylı şekilde anlatıyor."
    }
  ];

  await supabase.from('press_videos').insert(pressVideos);
  console.log("Press Videos inserted.");

  // 2. TREATMENTS
  const treatmentsImagesDir = './src/assets/images/services/';
  const treatmentsData = [
    { title: "Hipertansiyon (Yüksek Tansiyon)", image: 'hipertansiyon.png', desc: "Hipertansiyon, kan basıncının atardamarlarda...", shortDesc: "Sessiz katil olarak bilinen yüksek tansiyonun tanı, takip ve kişiye özel ilaç tedavisi." },
    { title: "Diyabetik Ayak Yaraları", image: 'diyabetikayak.png', desc: "Diyabet hastalarında damar tıkanıklığı...", shortDesc: "Ampütasyon (kesilme) riski taşıyan yaraların özel solüsyonlar ile kurtarılması." },
    { title: "Koroner Arter Hastalığı", image: 'koronerarter.png', desc: "Kalbi besleyen damarların (koroner)...", shortDesc: "Damar sertliği ve kalp krizi riskine karşı erken teşhis ve tedavi." },
    { title: "Kalp Yetersizliği", image: 'kalpyetersizligi.png', desc: "Kalp kasının zayıflaması veya sertleşmesi...", shortDesc: "Kalbin vücuda yeterli kanı pompalayamadığı durumlarda yaşam kalitesini artıran tedaviler." },
    { title: "Aritmi (Ritim Bozukluğu)", image: 'aritmi.png', desc: "Kalbin çok hızlı, çok yavaş veya düzensiz atması durumudur.", shortDesc: "Çarpıntı, tekleme ve düzensiz kalp atışlarının tanı ve tedavisi." },
    { title: "Hiperlipidemi (Kolesterol)", image: 'hiperlipidemi.png', desc: "Kandaki yağ oranının (kolesterol ve trigliserid)...", shortDesc: "Yüksek kolesterolün damar yapısına zarar vermeden kontrol altına alınması." }
  ];

  for (let t of treatmentsData) {
    let imgUrl = await uploadFile(path.join(treatmentsImagesDir, t.image), 'article-images');
    await supabase.from('treatments').insert({
      title: t.title,
      short_desc: t.shortDesc,
      image_url: imgUrl,
      content_description: t.desc
    });
  }
  console.log("Treatments inserted.");

  // 3. PRESS NEWS
  const pressImagesDir = './src/assets/images/press/';
  const pressNewsData = [
    { title: "Türk Doktordan Tıpta Devrim: Erzengin Solüsyonu", src: "Turcomoney / Milliyet", date: "15 Mart 2015", img: "solusyonhaber.png", link: "https://www.turcomoney.com/", summary: "Erzengin Solüsyonu." },
    { title: "Tıpta Nobellik Buluş", src: "Önce Vatan Gazetesi", date: "17 Ocak 2014", img: "haber-nobel.png", link: "https://www.oncevatan.com.tr/", summary: "Dünya literatürüne giren buluş." },
    { title: "Nobel'e Aday Gösterilen Türk Profesör", src: "Hürriyet", date: "22 Nisan 2024", img: "haber-nobel-ekip.png", link: "https://hurriyet.com.tr", summary: "32 kişilik bilim kurulu..." },
    { title: "Kalp Krizini Önlemek Mümkün Mü?", src: "Sabah Gazetesi", date: "10 Ocak 2023", img: "haber-kalpkrizi.png", link: "https://sabah.com", summary: "5 altın kural." },
    { title: "Covid-19'a Dair Önemli Bilgiler", src: "Önce Vatan Gazetesi", date: "10 Haziran 2021", img: "haber-corona.png", link: "https://oncevatan.com", summary: "Covid uyarıları." },
    { title: "Vatandaş için çalışan Cesur Yürek", src: "Önce Vatan Gazetesi", date: "24 Ağustos 2017", img: "cesuryurek.png", link: "https://oncevatan.com", summary: "Cesur Yürek" }
  ];

  for (let p of pressNewsData) {
    let imgUrl = await uploadFile(path.join(pressImagesDir, p.img), 'article-images');
    await supabase.from('press_news').insert({
      title: p.title,
      source: p.src,
      publication_date: p.date,
      image_url: imgUrl,
      link: p.link,
      summary: p.summary
    });
  }
  console.log("Press News inserted.");

  // 4. BLOG DATA (Only if we want to move those too. I see articles table was already created, but we need to seed the static ones.)
  const blogImagesDir = './src/assets/images/blog/';
  const blogArticles = [
    { title: "Sessiz Katil Hipertansiyon: Vücudunuza Neler Yapıyor?", cat: "Hipertansiyon", img: "makale-hipertansiyon.png", content: "<p>Hipertansiyon...</p>" },
    { title: "Diyabetik Ayak ve Ampütasyon Riski: Kesilmek Kader Değil!", cat: "Diyabet & Yara Tedavisi", img: "makale-diyabetik.png", content: "<p>Diyabet (Şeker Hastalığı)...</p>" },
    { title: "Çarpıntı Ne Zaman Tehlikeli? 'Masum' ile 'Ciddi' Çarpıntıyı Ayırt Etme Rehberi", cat: "Aritmi & Kalp Ritim Bozuklukları", img: "makale-carpinti.png", content: "<p>Çarpıntı...</p>" },
    { title: "Bacak Damar Tıkanıklığı: Yürürken Duran Kalçalarınızın Sessiz Çığlığı", cat: "Damar Sağlığı & Periferik Arter Hastalığı", img: "makale-bacakagrisi.png", content: "<p>Periferik Arter...</p>" },
    { title: "Aspirin Kullanmalı mıyım? Koruyucu Kalp Tedavisinde En Büyük Yanılgı", cat: "Koruyucu Kardiyoloji & İlaçlar", img: "makale-asprin.png", content: "<p>Günde bir baby aspirin...</p>" },
    { title: "Kolesterol Düşman mı, Dost mu? İyi ve Kötü Kolesterol Efsaneleri", cat: "Kolesterol & Metabolizma", img: "makale-kolestrol.png", content: "<p>Kolesterol...</p>" }
  ];

  const existingRes = await supabase.from('articles').select('title');
  if (existingRes.data && existingRes.data.length < 5) {
      for (let b of blogArticles) {
        let imgUrl = await uploadFile(path.join(blogImagesDir, b.img), 'article-images');
        await supabase.from('articles').insert({
          title: b.title,
          category: b.cat,
          image_url: imgUrl,
          content: b.content
        });
      }
      console.log("Blog Articles inserted.");
  } else {
     console.log("Blog articles already in DB or skipped.");
  }

  process.exit(0);
}

seed();
