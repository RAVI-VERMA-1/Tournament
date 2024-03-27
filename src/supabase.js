import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gqxscjyqgiejjpnbddro.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxeHNjanlxZ2llampwbmJkZHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NTYyOTMsImV4cCI6MjAyNzAzMjI5M30.g5qFkWeHK2i3YpEfPb2xx2ChkBe2H-xA_5D5PLiDBW0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
