import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uekcducwvvwzufzhlwhg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE';
const supabase = createClient(supabaseUrl, supabaseKey);

import { reviewsData } from './src/data/reviewsData.js';

async function seedReviews() {
  await supabase.auth.signInWithPassword({ email: 'admin@farukerzengin.com', password: 'faruk123' });
  
  const formattedReviews = reviewsData.map((review) => {
    return {
      source: review.source,
      name: review.name,
      date: review.date,
      rating: review.rating,
      treatment: review.treatment,
      comment: review.comment || ""
    };
  });

  const { error } = await supabase.from('reviews').insert(formattedReviews);
  if (error) {
    console.error("Error inserting reviews:", error);
  } else {
    console.log("Reviews successfully inserted!");
  }
}

seedReviews();
