import { createClient } from '@supabase/supabase-js'

// Bu bilgileri Supabase Dashboard -> Project Settings -> API kısmından alacaksın
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)