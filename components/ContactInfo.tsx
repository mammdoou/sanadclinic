import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import { config } from '@/lib/config'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* عرض المواقع */}
      <div className="flex items-start">
        <MapPin className="text-blue-600 ml-4 mt-1 flex-shrink-0" />
        <div className="space-y-2">
          <div className="font-semibold">مواقعنا:</div>
          <div>
            {config.contact.locations.length > 0 ? (
              config.contact.locations.map((location, index) => (
                <div key={index}>• {location}</div>
              ))
            ) : (
              <div>لم يتم تحديد المواقع بعد.</div>
            )}
          </div>
        </div>
      </div>
      {/* عرض رقم الهاتف */}
      <div className="flex items-center">
        <Phone className="text-blue-600 ml-4" />
        <span>{config.contact.phone || 'لم يتم تحديد رقم الهاتف'}</span>
      </div>
      {/* عرض ساعات العمل */}
      <div className="flex items-center">
        <Clock className="text-blue-600 ml-4" />
        <span>{config.contact.hours || 'لم يتم تحديد ساعات العمل'}</span>
      </div>
      {/* عرض رابط الحجز */}
      <div className="flex items-center">
        <Calendar className="text-blue-600 ml-4" />
        <a href="/schedule" className="text-blue-600 hover:underline">احجز موعدًا</a> {/* تأكد من المسار الصحيح */}
      </div>
    </div>
  )
}
