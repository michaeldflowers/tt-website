import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <section className="bg-[#ff6600] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional GPS Tracking for Private Investigators</h1>
            <p className="text-xl mb-8">Enhance your investigative capabilities with our high-quality tracking devices and services.</p>
            <div className="space-x-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-[#ff6600] hover:bg-gray-100">
                <Link href="/features">Learn More</Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white bg-transparent hover:bg-white hover:text-[#ff6600]">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#fff3e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#ff6600]">Why Choose Triangle Tracking?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#ff6600] text-white rounded-full p-4 inline-block mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#ff6600]">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor your targets in real-time with our advanced GPS technology.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#ff6600] text-white rounded-full p-4 inline-block mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#ff6600]">Secure & Discreet</h3>
              <p className="text-gray-600">Our devices are designed for maximum security and discretion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-[#ff6600] text-white rounded-full p-4 inline-block mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#ff6600]">Comprehensive Reports</h3>
              <p className="text-gray-600">Generate detailed reports for your investigations with ease.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

