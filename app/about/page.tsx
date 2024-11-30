import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-[#fff3e6] min-h-screen">
      <section className="bg-[#ff6600] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Triangle Tracking</h1>
          <p className="text-xl">Learn about our mission and commitment to private investigators.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Triangle Tracking was founded by a team of experienced private investigators and tech experts who recognized the need for more reliable and user-friendly GPS tracking solutions in the field of private investigation.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to empower private investigators with cutting-edge technology that enhances their capabilities and improves the efficiency of their investigations.
            </p>
            <h2 className="text-3xl font-bold mb-6 text-[#ff6600]">Our Commitment</h2>
            <p className="text-gray-700 mb-6">
              We are committed to providing top-quality GPS tracking devices and services that meet the unique needs of private investigators. Our team continuously works on improving our products and services based on feedback from our clients.
            </p>
            <Button asChild size="lg" className="bg-[#ff6600] text-white hover:bg-[#ff6600]/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

