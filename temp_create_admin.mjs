import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uekcducwvvwzufzhlwhg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function createAdmin() {
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@farukerzengin.com',
    password: 'faruk123',
  })
  
  if (error) {
    console.error("HATA:", error.message)
    process.exit(1)
  } else {
    console.log("BASARILI:", data?.user?.id)
  }
}

createAdmin()
