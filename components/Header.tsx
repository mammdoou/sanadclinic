import Image from 'next/image'
import Link from 'next/link'
import { config } from '@/lib/config'

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/463880899_952221473610774_5193899600138336554_n.jpg-XNFD7mP57BsHDwwzymMFVkqywsBilX.jpeg"
              alt="شعار عيادة الدكتور محمد سند"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-800 hover:text-blue-600">الرئيسية</Link>
            <Link href="#services" className="text-gray-800 hover:text-blue-600">خدماتنا</Link>
            <Link href="#about" className="text-gray-800 hover:text-blue-600">عن العيادة</Link>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600">اتصل بنا</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

