import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dddyozajxkbroqyotxjv.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZHlvemFqeGticm9xeW90eGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTE0ODksImV4cCI6MjAxMDM2NzQ4OX0.4zh7ESeXPee1NMVhMR8NvoocW_2joyDwcYADxGBawB8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
