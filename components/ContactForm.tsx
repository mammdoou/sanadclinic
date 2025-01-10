'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      whatsapp: formData.get('whatsapp'), // تغيير email إلى whatsapp
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus('success')
      } else {
        const errorData = await response.json()
        console.error('Form submission error:', errorData)
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-800 mb-2">الاسم</label>
        <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label htmlFor="whatsapp" className="block text-gray-800 mb-2">رقم الواتساب</label>
        <input type="text" id="whatsapp" name="whatsapp" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-800 mb-2">الرسالة</label>
        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
      </div>
      <button 
        type="submit" 
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        disabled={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
      </button>
      {formStatus === 'success' && (
        <p className="text-green-600">تم إرسال رسالتك بنجاح!</p>
      )}
      {formStatus === 'error' && (
        <p className="text-red-600">حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.</p>
      )}
    </form>
  )
}
