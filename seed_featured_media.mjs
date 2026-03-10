import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://uekcducwvvwzufzhlwhg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE';
const supabase = createClient(supabaseUrl, supabaseKey);

const videosData = [
  {
    youtube_id: "gD-7bmIkBp0",
    tag: "Biyografi",
    title: "Bir Bilim İnsanının Yolculuğu",
    description: "\"Hocaların Hocası\" olarak bilinen Prof. Dr. Faruk Erzengin'in akademik kariyeri ve tıp dünyasına kattığı değerler.",
    is_news: false
  },
  {
    youtube_id: "wkOhPb1denI",
    tag: "Haber",
    title: "By-Pass ve Stent Tarihe Karışıyor",
    description: "Prof. Dr. Erzengin, ameliyatsız damar açma tedavisiyle kalp hastalıklarında yeni bir dönem başlattı.",
    is_news: true
  },
  {
    youtube_id: "PKAJrMgZlfg",
    tag: "Şarkı",
    title: "Büyük Ozan Hilmi Şahballı'nın Prof. Dr. Faruk Erzengine İthaf Ettiği Türkü",
    description: "Şarkı, hocanın hastalara şifa dağıtan, tatlı sözlü, bilgeliğiyle öne çıkan bir hekim olduğunu anlatıyor.",
    is_news: false
  },
  {
    youtube_id: "NSW8X5RlUUE",
    tag: "Seminer",
    title: "Prof. Dr. Faruk Erzengin Soru-Cevap",
    description: "Prof. Dr. Faruk Erzengin'in hayatını, meslek yolculuğunu ve tıbba bakışını anlattığı özel röportaj.",
    is_news: true
  },
  {
    youtube_id: "kgnAwPz32Zw",
    tag: "Seminer",
    title: "Hocaların Hocası Prof. Dr. Faruk Erzengin COVID-19’un Çarpıcı Etkilerini ve Önlemleri Anlattı.",
    description: "Prof. Dr. Faruk Erzengin bu söyleşide COVID-19’un etkilerini, mutasyonlarını ve alınması gereken önlemleri detaylı şekilde anlatıyor. Virüsün kalp ve damar sistemine verdiği zararları, farklı semptomlarını ve uzun vadeli komplikasyonlarını vurguluyor. Ayrıca aşıların önemi, mutasyonlara karşı etkinliği ve toplumun maske, mesafe, hijyen kurallarına uyması gerektiğini sık sık hatırlatıyor. Psikolojik etkilerden de bahsederek bu sürecin bir “görünmeyen savaş” olduğunu söylüyor ve moralin korunmasının önemini dile getiriyor.",
    is_news: true
  }
];

const audiosData = [
  { title: "Prof. Dr. Faruk Erzengin - Hocamıza Selamlar", filename: "seskaydi1.mp3" },
  { title: "Prof. Dr. Faruk Erzengin - Şiir Seslendirmesi", filename: "siir-sesi.mp3" }
];

async function uploadAudio(localPath, bucketName) {
  try {
    const fileContent = fs.readFileSync(localPath);
    const fileName = path.basename(localPath);
    const uniqueName = `${Date.now()}_${fileName}`;
    const mimeType = 'audio/mpeg';
    
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(uniqueName, fileContent, {
        contentType: mimeType
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

async function seedMedia() {
  await supabase.auth.signInWithPassword({ email: 'admin@farukerzengin.com', password: 'faruk123' });
  
  console.log("Seeding featured videos...");
  for (let v of videosData) {
    await supabase.from('featured_videos').insert([v]);
  }
  console.log("Videos seeded!");

  console.log("Seeding audios...");
  const audioDir = './src/assets/audio/';
  for (let a of audiosData) {
    const fullPath = path.join(audioDir, a.filename);
    if(fs.existsSync(fullPath)) {
      let audioUrl = await uploadAudio(fullPath, 'media');
      if(audioUrl) {
         await supabase.from('audios').insert([{ title: a.title, audio_url: audioUrl }]);
         console.log('Inserted:', a.filename);
      }
    } else {
      console.log('File not found:', fullPath);
    }
  }

  console.log("Featured media seeding finished!");
  process.exit(0);
}

seedMedia();
