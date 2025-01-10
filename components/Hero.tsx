import Image from 'next/image'
import Link from 'next/link'
import { config } from '@/lib/config'

export function Hero() {
  return (
    <section id="home" className="bg-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{config.siteName}</h1>
            <p className="text-xl text-gray-600 mb-8">{config.siteDescription}</p>
            <Link href="#contact" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
              احجز موعدًا
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/470551131_990584549774466_4574358991006907367_n.jpg-ah6vzpttz6bpF7oaVSVSSoXVWbHp0T.jpeg"
              alt="عيادة طب الأسنان"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

