import { createClient } from "@supabase/supabase-js";

// Make sure to load environment variables. Since we are in a node script, we use dotenv or read from .env manually.
import fs from "fs";
const env = fs.readFileSync(".env", "utf-8");
const urlMatch = env.match(/VITE_SUPABASE_URL=([^\r\n]+)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=([^\r\n]+)/);

const supabaseUrl = urlMatch ? urlMatch[1] : null;
const supabaseKey = keyMatch ? keyMatch[1] : null;

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase credentials not found in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdmin() {
  const { data, error } = await supabase.auth.signUp({
    email: "adminfaruk@farukerzengin.com",
    password: "F1a2r3u4z5*",
  });

  if (error) {
    console.error("Sil veya kayıt hatası:", error.message);
  } else {
    console.log("Kullanıcı başarıyla oluşturuldu:", data.user?.email);
  }
}

createAdmin();
