import { createClient } from "@supabase/supabase-js";

const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = import.meta.env;

export default createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY, {
  db: { schema: "public" },
});