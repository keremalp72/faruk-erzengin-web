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
    
    let mimeType = 'image/png';
    if(fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) mimeType = 'image/jpeg';
    
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

async function seedGallery() {
  await supabase.auth.signInWithPassword({ email: 'admin@farukerzengin.com', password: 'faruk123' });
  
  const imagesDir = './src/assets/images/aboutme/';
  
  const files = [
    'about12-min.png', 'about10-min.png', 'about9-min.png', 'Screenshot_9-min.png',
    'Screenshot_4-min.png', 'Screenshot_5-min.png', 'Screenshot_6-min.png', 'Screenshot_7-min.png',
    'Screenshot_11-min.jpeg', 'Screenshot_12-min.png', 'Screenshot_10-min.png', 'Screenshot_8-min.png',
    'about1-min.png', 'about2-min.png', 'about3-min.png', 'about4-min.png', 'about5-min.png',
    'about6-min.png', 'about8-min.png', 'about11-min.png', 'about13-min.png', 'about14-min.png',
    'about15-min.png', 'about16-min.png', 'about17-min.png', 'about18-min.png',
    'hakkimda2.png', 'hakkimda3.png', 'hakkimda4.png',
    'pdf-image-003.jpg', 'pdf-image-008.jpg', 'pdf-image-011.jpg', 'pdf-image-012.jpg',
    'pdf-image-013.jpg', 'pdf-image-015.jpg', 'pdf-image-025.jpg', 'pdf-image-042.jpg',
    'pdf-image-047.jpg', 'pdf-image-048.jpg', 'pdf-image-049.jpg', 'pdf-image-088.jpg',
    'pdf-image-089.jpg',
    'book1.jpeg', 'book2.jpeg', 'book3.jpeg',
    'resim1.jpeg', 'resim2.jpeg', 'resim3.jpeg', 'resim4.png'
  ];

  for (let file of files) {
    const fullPath = path.join(imagesDir, file);
    if(fs.existsSync(fullPath)) {
      let imgUrl = await uploadFile(fullPath, 'article-images'); // utilizing the same bucket
      if(imgUrl) {
         await supabase.from('gallery_images').insert({ image_url: imgUrl });
         console.log('Inserted:', file);
      }
    } else {
      console.log('File not found:', fullPath);
    }
  }

  console.log("Gallery seeding finished!");
  process.exit(0);
}

seedGallery();
