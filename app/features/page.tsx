import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    "Real-time GPS tracking with high accuracy",
    "Long-lasting battery life for extended operations",
    "Compact and discreet device designs",
    "Geofencing capabilities with instant alerts",
    "Historical data and comprehensive reporting",
    "User-friendly mobile app for on-the-go monitoring",
    "24/7 customer support",
    "Regular software updates and improvements",
  ]

  return (
    <div className="bg-[#fff3e6] min-h-screen">
      <section className="bg-[#ff6600] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Features</h1>
          <p className="text-xl">Discover the powerful capabilities of Triangle Tracking.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#ff6600]">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#ff6600] flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

