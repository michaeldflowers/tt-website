import { Button } from "@/components/ui/button"
import { CheckCircle } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$49.99",
      features: [
        "1 GPS tracker",
        "Real-time tracking",
        "7-day history",
        "Mobile app access",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$99.99",
      features: [
        "3 GPS trackers",
        "Real-time tracking",
        "30-day history",
        "Mobile app access",
        "Geofencing alerts",
        "Priority email support",
        "Phone support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited GPS trackers",
        "Real-time tracking",
        "90-day history",
        "Mobile app access",
        "Geofencing alerts",
        "24/7 priority support",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <div className="bg-[#fff3e6] min-h-screen">
      <section className="bg-[#ff6600] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl">Choose the perfect plan for your investigation needs.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 bg-[#ff6600] text-white">
                  <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                  <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/month</span></p>
                </div>
                <div className="p-6">
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#ff6600] mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#ff6600] text-white hover:bg-[#ff6600]/90">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

