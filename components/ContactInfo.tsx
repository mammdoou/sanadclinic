import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import { config } from '@/lib/config'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="text-blue-600 ml-4 mt-1 flex-shrink-0" />
        <div className="space-y-2">
          <div className="font-semibold">مواقعنا:</div>
          <div>
            {config.contact.locations.map((location, index) => (
              <div key={index}>• {location}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Phone className="text-blue-600 ml-4" />
        <span>{config.contact.phone}</span>
      </div>
      <div className="flex items-center">
        <Clock className="text-blue-600 ml-4" />
        <span>{config.contact.hours}</span>
      </div>
      <div className="flex items-center">
        <Calendar className="text-blue-600 ml-4" />
        <a href="#" className="text-blue-600 hover:underline">احجز موعدًا</a>
      </div>
    </div>
  )
}

