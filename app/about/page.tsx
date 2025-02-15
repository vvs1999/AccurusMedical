"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Navbar } from "@/components/Navbar"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Marie Dubois",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Dr. Dubois brings 15 years of experience in healthcare administration and a passion for improving medical billing processes.",
      expertise: "Healthcare Administration, Revenue Cycle Management",
      funFact: "Completed 3 marathons in the past year",
    },
    {
      name: "Jean Tremblay",
      role: "Head of Operations",
      image: "/placeholder.svg",
      bio: "Jean has over a decade of experience streamlining operations in healthcare organizations across Quebec.",
      expertise: "Process Optimization, Team Management",
      funFact: "Fluent in 5 languages",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Medical Coder",
      image: "/placeholder.svg",
      bio: "Sarah is a certified medical coder with expertise in ICD-10-CA and CPT coding systems.",
      expertise: "Medical Coding, Compliance",
      funFact: "Volunteers at local animal shelters on weekends",
    },
    {
      name: "Michael Chang",
      role: "Client Success Manager",
      image: "/placeholder.svg",
      bio: "Michael ensures our clients receive top-notch support and achieve their revenue goals.",
      expertise: "Customer Relations, Healthcare IT",
      funFact: "Amateur chef specializing in fusion cuisine",
    },
  ]

  const [activeTeamMember, setActiveTeamMember] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">About Celestimed</h1>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Mission</h2>
          <p className="text-lg mb-6 text-gray-700">
            At Celestimed, we are dedicated to helping healthcare providers optimize their revenue cycle, minimize
            administrative burden, and improve financial performance with expert medical billing services.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Core Values</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Accuracy & Compliance - Ensuring 100% RAMQ & insurance compliance</li>
                <li className="mb-2">Efficiency & Speed - Faster claim approvals & reduced denials</li>
                <li className="mb-2">Transparency - No hidden fees, clear pricing & reporting</li>
                <li className="mb-2">Client-Centric Approach - Customized solutions for every clinic</li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Celestimed team"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-600 p-8 rounded-lg shadow-md text-white">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Founded in 2015, Celestimed started as a small team of medical billing experts who recognized the challenges
            faced by healthcare providers in Quebec. We've since grown into a trusted partner for clinics across Canada,
            helping them navigate the complexities of medical billing and revenue cycle management.
          </p>
          <div className="bg-white p-6 rounded-lg text-blue-800">
            <h3 className="text-xl font-semibold mb-4">Celestimed by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p>Healthcare Providers Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">98%</p>
                <p>Claim Approval Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">30%</p>
                <p>Average Revenue Increase</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setActiveTeamMember(activeTeamMember === index ? null : index)}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                {activeTeamMember === index && (
                  <div className="mt-4 text-left">
                    <p className="mb-2 text-gray-700">
                      <strong>Bio:</strong> {member.bio}
                    </p>
                    <p className="mb-2 text-gray-700">
                      <strong>Expertise:</strong> {member.expertise}
                    </p>
                    <p className="text-gray-700">
                      <strong>Fun fact:</strong> {member.funFact}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="text-center bg-blue-600 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-3xl font-semibold mb-6">Ready to Optimize Your Medical Billing?</h2>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started with Celestimed</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

