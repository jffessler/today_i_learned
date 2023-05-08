import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nfghaktyqglfkmelusca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZ2hha3R5cWdsZmttZWx1c2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzMzQ1ODQsImV4cCI6MTk5ODkxMDU4NH0.kydHiwxz5BsGubJjY0QOtJMqDB4gfXjf2p53JVneI0I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
