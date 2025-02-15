"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/Navbar"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    const plan = searchParams.get("plan")
    if (plan) {
      setSelectedService(plan)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Get in Touch with Celestimed</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Have questions about medical billing? Need a custom quote? We're here to help!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Contact Information</h2>
            <p className="mb-4 text-gray-700">
              <strong className="text-blue-600">Phone:</strong> +1 (XXX) XXX-XXXX
            </p>
            <p className="mb-4 text-gray-700">
              <strong className="text-blue-600">Email:</strong> info@celestimed.com
            </p>
            <p className="mb-4 text-gray-700">
              <strong className="text-blue-600">Address:</strong> 1234 Rue Sainte-Catherine, Montreal, QC H3B 1A7
            </p>
            <p className="mb-8 text-gray-700">
              <strong className="text-blue-600">Business Hours:</strong> Monday – Friday: 9 AM – 5 PM EST
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Schedule a Call</h2>
            <Button asChild size="lg" className="w-full">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Book a Consultation
              </a>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-blue-700">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <Input type="text" placeholder="Clinic/Company Name" required />
              </div>
              <div className="mb-4">
                <Input type="text" placeholder="Full Name" required />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Email Address" required />
              </div>
              <div className="mb-4">
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div className="mb-4">
                <select
                  className="w-full p-2 border rounded-md"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Services Needed</option>
                  <option value="Pay-Per-Claim">Pay-Per-Claim</option>
                  <option value="Subscription-Based">Subscription-Based</option>
                  <option value="Custom Enterprise">Custom Enterprise</option>
                  <option value="Medical Billing">Medical Billing</option>
                  <option value="Coding">Medical Coding</option>
                  <option value="Prior Authorization">Prior Authorization</option>
                  <option value="EMR Management">EMR Management</option>
                </select>
              </div>
              <div className="mb-4">
                <select className="w-full p-2 border rounded-md" required>
                  <option value="">Preferred Contact Method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Video Call">Video Call</option>
                </select>
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" rows={4} />
              </div>
              <Button type="submit" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">How long does it take to process claims?</h3>
              <p>
                We typically process claims within 24-48 hours of receipt, ensuring quick turnaround times for our
                clients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you work with all private insurance providers?</h3>
              <p>
                Yes, we work with all major private insurance providers in Canada, as well as provincial health
                insurance plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What billing software do you integrate with?</h3>
              <p>
                We integrate with popular EMR/EHR systems including OSCAR, Telus Health, ClinicAid, and Medesync, among
                others.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I get started with your services?</h3>
              <p>
                Getting started is easy! Simply fill out the contact form above or give us a call, and one of our
                experts will guide you through the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

