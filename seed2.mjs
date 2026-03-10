import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://uekcducwvvwzufzhlwhg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadFile(localPath, bucketName) {
  try {
    const fileContent = fs.readFileSync(localPath);
    const fileName = path.basename(localPath);
    const uniqueName = `${Date.now()}_${fileName}`;
    
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(uniqueName, fileContent, {
        contentType: 'image/png'
      });

    if (error) return null;

    const { data: { publicUrl } } = supabase.storage.from(bucketName).getPublicUrl(uniqueName);
    return publicUrl;
  } catch (err) {
    return null;
  }
}

async function fixTreatments() {
  await supabase.auth.signInWithPassword({ email: 'admin@farukerzengin.com', password: 'faruk123' });

  // TRUNCATE the treatments table using raw SQL? No, just delete all rows.
  const { data: allT } = await supabase.from('treatments').select('id');
  if (allT && allT.length > 0) {
      await supabase.from('treatments').delete().in('id', allT.map(t => t.id));
      console.log("Old treatments deleted.");
  }

  const treatmentsImagesDir = './src/assets/images/services/';
  
  const treatmentsData = [
    {
      title: "Hipertansiyon (Yüksek Tansiyon)",
      shortDesc: "Sessiz katil olarak bilinen yüksek tansiyonun tanı, takip ve kişiye özel ilaç tedavisi.",
      image: "hipertansiyon.png", 
      content: {
        description: "Hipertansiyon, kan basıncının atardamarlarda sürekli olarak yüksek olması durumudur. Tedavi edilmezse kalp krizi, felç ve böbrek yetmezliğine yol açabilir.",
        symptoms: ["Baş ağrısı ve baş dönmesi", "Burun kanaması", "Kulak çınlaması", "Yorgunluk ve halsizlik"],
        treatment: "Yaşam tarzı değişiklikleri (tuz kısıtlaması, egzersiz) ve kişiye özel ilaç kombinasyonları ile kan basıncı kontrol altına alınır.",
        approach: "Prof. Dr. Faruk Erzengin, 24 saatlik tansiyon holter takibi ve detaylı ekokardiyografi ile hipertansiyonun kalbe etkisini inceler ve en uygun ilaç rejimini belirler."
      }
    },
    {
      title: "Diyabetik Ayak Yaraları",
      shortDesc: "Ampütasyon (kesilme) riski taşıyan yaraların özel solüsyonlar ile kurtarılması.",
      image: "diyabetikayak.png",
      content: {
        description: "Diyabet hastalarında damar tıkanıklığı ve sinir hasarına bağlı olarak ayaklarda iyileşmeyen yaralar oluşabilir.",
        symptoms: ["Ayakta his kaybı veya uyuşma", "İyileşmeyen yaralar", "Renk değişikliği ve morarma", "Ağrı (bazen hiç hissedilmeyebilir)"],
        treatment: "Enfeksiyon kontrolü, ölü dokuların temizlenmesi ve kan dolaşımını artırıcı tedaviler.",
        approach: "Hocamızın geliştirdiği özel 'Erzengin Solüsyonu' ve multidisipliner yaklaşım sayesinde, kesilme kararı verilen ayaklarda %99 oranında kurtarma başarısı sağlanmaktadır."
      }
    },
    {
      title: "Koroner Arter Hastalığı",
      shortDesc: "Damar sertliği ve kalp krizi riskine karşı erken teşhis ve tedavi.",
      image: "koronerarter.png", 
      content: {
        description: "Kalbi besleyen damarların (koroner) daralması veya tıkanması sonucu kalbin yeterli oksijen alamaması durumudur.",
        symptoms: ["Göğüs ağrısı (Anjina)", "Nefes darlığı", "Çarpıntı", "Sol kola vuran ağrı"],
        treatment: "İlaç tedavisi, balon/stent işlemleri veya gerekli durumlarda bypass cerrahisi.",
        approach: "Klasik anjiyodan önce, gelişmiş ekokardiyografi ve efor testleri ile risk belirlenir. 'Adventisya Teorisi' ışığında damar sertliğini gerileten tedaviler uygulanır."
      }
    },
    {
      title: "Kalp Yetersizliği",
      shortDesc: "Kalbin vücuda yeterli kanı pompalayamadığı durumlarda yaşam kalitesini artıran tedaviler.",
      image: "kalpyetersizligi.png",
      content: {
        description: "Kalp kasının zayıflaması veya sertleşmesi sonucu pompalama gücünün azalmasıdır.",
        symptoms: ["Çabuk yorulma", "Ayaklarda şişlik (ödem)", "Gece nefes darlığı ile uyanma", "İştahsızlık"],
        treatment: "Kalbin iş yükünü azaltan ilaçlar, diüretikler (idrar söktürücüler) ve ritim düzenleyici cihazlar.",
        approach: "Hasta eğitimi ve sıkı takip ile hastaneye yatış oranları en aza indirilir. Kalbin yeniden şekillenmesini (remodeling) önleyici modern ilaç tedavileri uygulanır."
      }
    },
    {
      title: "Aritmi (Ritim Bozukluğu)",
      shortDesc: "Çarpıntı, tekleme ve düzensiz kalp atışlarının tanı ve tedavisi.",
      image: "aritmi.png", 
      content: {
        description: "Kalbin çok hızlı, çok yavaş veya düzensiz atması durumudur.",
        symptoms: ["Göğüste kuş çırpınması hissi", "Baş dönmesi", "Bayılma", "Nefes darlığı"],
        treatment: "İlaç tedavisi, ablasyon (yakma) işlemi veya pil (pacemaker) takılması.",
        approach: "Holter EKG ile ritim bozukluğunun türü 24-48 saat izlenerek tespit edilir ve nokta atışı tedavi planlanır."
      }
    },
    {
      title: "Hiperlipidemi (Kolesterol)",
      shortDesc: "Yüksek kolesterolün damar yapısına zarar vermeden kontrol altına alınması.",
      image: "hiperlipidemi.png", 
      content: {
        description: "Kandaki yağ oranının (kolesterol ve trigliserid) yüksek olması, damar tıkanıklığının ana sebebidir.",
        symptoms: "Genellikle belirti vermez, kan tahlili ile anlaşılır. İleri evrede göz çevresinde yağ bezeleri görülebilir.",
        treatment: "Diyet, egzersiz ve statin grubu ilaçlar.",
        approach: "Sadece kolesterolü düşürmek değil, damar iç yapısını (endotel) korumak hedeflenir. Kişiye özel diyet ve ilaç programı uygulanır."
      }
    }
  ];

  for (let t of treatmentsData) {
    let imgUrl = await uploadFile(path.join(treatmentsImagesDir, t.image), 'article-images');
    await supabase.from('treatments').insert({
      title: t.title,
      short_desc: t.shortDesc,
      image_url: imgUrl,
      content_description: t.content.description,
      content_symptoms: t.content.symptoms,
      content_treatment: t.content.treatment,
      content_approach: t.content.approach
    });
  }
  console.log("Treatments fully inserted.");
  process.exit(0);
}

fixTreatments();
