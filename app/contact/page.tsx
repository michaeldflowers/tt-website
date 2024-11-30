import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="bg-[#fff3e6] min-h-screen">
      <section className="bg-[#ff6600] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team for any inquiries or support.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                <Input id="name" placeholder="Your name" required className="w-full border-gray-300 focus:border-[#ff6600] focus:ring-[#ff6600]" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" required className="w-full border-gray-300 focus:border-[#ff6600] focus:ring-[#ff6600]" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="How can we help you?" required className="w-full border-gray-300 focus:border-[#ff6600] focus:ring-[#ff6600]" />
              </div>
              <Button type="submit" className="w-full bg-[#ff6600] text-white hover:bg-[#ff6600]/90">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

