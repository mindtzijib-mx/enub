import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xqaarjwmyclltbkaedvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxYWFyandteWNsbHRia2FlZHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4NDM4MzcsImV4cCI6MjAzOTQxOTgzN30.TTyow8Ba3DjxMo3AR4DYBHIrTw4EOLTbls61YEchIQY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
