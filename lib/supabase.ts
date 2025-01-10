import { createClient } from '@supabase/supabase-js'

// التأكد من أن المتغيرات البيئية موجودة
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// التحقق من وجود المتغيرات قبل إنشاء عميل Supabase
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is missing in the environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
