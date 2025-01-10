import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/463334851_522716877215587_577006450250575017_n.jpg-Fw94hKNgRSSeOQfp8O8d88qdhWZ58T.jpeg"
              alt="الدكتور محمد سند"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">عن الدكتور محمد سند</h2>
            <p className="text-gray-600 mb-6">الدكتور محمد سند طبيب أسنان ماهر وذو خبرة تزيد عن 7 سنوات في الممارسة. وهو ملتزم بتقديم أعلى جودة من رعاية الأسنان لمرضاه باستخدام أحدث التقنيات والتكنولوجيا.</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full p-1 ml-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                تخرج من كلية طب الأسنان بجامعة فاروس
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full p-1 ml-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                عضو في نقابة أطباء الأسنان المصرية
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full p-1 ml-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                حاصل على شهادة في طب الأسنان التجميلي المتقدم
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

