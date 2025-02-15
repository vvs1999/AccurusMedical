"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Navbar } from "@/components/Navbar"

export default function ServicesPage() {
  const services = [
    {
      id: "medical-billing-claims-processing",
      title: "Medical Billing & Claims Processing",
      description:
        "We process claims efficiently with RAMQ, OHIP, MSP, private insurance, and direct patient billing. Our experts ensure maximum reimbursement with minimal denials.",
      benefits: [
        "Faster payments & fewer claim rejections",
        "Fully compliant with RAMQ, OHIP, MSP, and private insurers",
        "Secure & automated claims submission",
        "Transparent reporting & revenue tracking",
      ],
      color: "bg-blue-100",
    },
    {
      id: "medical-coding",
      title: "Medical Coding (ICD-10-CA & CPT)",
      description:
        "Accurate medical coding ensures faster claim approvals and maximized reimbursements. We handle ICD-10-CA (Diagnosis Coding), CPT & HCPCS (Procedure Coding), and RAMQ-specific medical codes.",
      benefits: [
        "Eliminate coding errors & reduce claim denials",
        "Fully trained ICD-10-CA & CPT coders",
        "Compliance with Canadian medical coding standards",
      ],
      color: "bg-green-100",
    },
    {
      id: "prior-authorization-insurance-verification",
      title: "Prior Authorization & Insurance Verification",
      description:
        "Avoid payment delays and denied claims with real-time insurance verification & prior authorization services.",
      benefits: [
        "Faster approval for medical procedures",
        "Direct communication with insurance companies",
        "Reduce paperwork for clinic staff",
      ],
      color: "bg-purple-100",
    },
    {
      id: "virtual-medical-scribing",
      title: "Virtual Medical Scribing",
      description:
        "Our remote medical scribes handle real-time documentation, allowing doctors to focus more on patient care and less on paperwork.",
      benefits: [
        "Save 2+ hours per day in documentation",
        "Fully HIPAA/PIPEDA-compliant scribing solutions",
        "Secure cloud-based transcription",
      ],
      color: "bg-yellow-100",
    },
    {
      id: "emr-data-entry-management",
      title: "EMR Data Entry & Management",
      description: "We help clinics digitize, manage, and maintain patient records with seamless EMR/EHR integration.",
      benefits: [
        "Works with OSCAR, Telus Health, ClinicAid, and Medesync",
        "Faster & more accurate patient data entry",
        "Secure cloud-based storage & access",
      ],
      color: "bg-red-100",
    },
  ]

  const [activeService, setActiveService] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Our Services</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Comprehensive Medical Billing & Revenue Management Services
        </p>

        {services.map((service, index) => (
          <div key={service.id} className={`mb-16 p-6 rounded-lg ${service.color}`}>
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">{service.title}</h2>
            <p className="text-lg mb-6 text-gray-700">{service.description}</p>
            <Button
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className="mb-4"
              variant={activeService === service.id ? "secondary" : "default"}
            >
              {activeService === service.id ? "Hide Details" : "Show Details"}
            </Button>
            {activeService === service.id && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Key Benefits:</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button asChild className="mt-4">
              <Link href={`/contact?service=${service.title}`}>Get Started with {service.title}</Link>
            </Button>
            {index < services.length - 1 && <hr className="my-12 border-gray-300" />}
          </div>
        ))}

        <div className="mt-16 text-center bg-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Ready to Optimize Your Medical Billing?</h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us for a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

