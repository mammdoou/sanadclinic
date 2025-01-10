import { supabase } from '../../lib/supabaseClient'; // تأكد من مسار ملف supabaseClient.ts

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // استخراج البيانات من جسم الطلب
      const { name, email, message } = req.body;

      // إدخال البيانات في جدول 'contacts' مع التاريخ
      const { data, error } = await supabase
        .from('contacts')
        .insert([{ name, email, message, created_at: new Date().toISOString() }]);

      // التحقق من وجود أخطاء أثناء الإدخال
      if (error) {
        console.error('Supabase error:', error.message); // تسجيل الخطأ
        return res.status(500).json({ error: error.message }); // إرسال الخطأ للعميل
      }

      // إرسال استجابة بنجاح
      return res.status(200).json({ message: 'تم إرسال البيانات بنجاح!', data });
    } catch (error) {
      console.error('Error inserting data:', error); // تسجيل الخطأ
      return res.status(500).json({ error: 'حدث خطأ أثناء إرسال البيانات.' }); // إرسال خطأ عام في حالة فشل الاستعلام
    }
  } else {
    return res.status(405).json({ error: 'الطريقة غير مدعومة' }); // حالة لم يتم دعمها
  }
}
