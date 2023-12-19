import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sgeqonnmnxmsoqldrmuo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnZXFvbm5tbnhtc29xbGRybXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5ODMyMTEsImV4cCI6MjAxODU1OTIxMX0.VzQLQeiWG5R1nCrl08zq06_Mxl1BgpqqnIdxIzvqZdI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
