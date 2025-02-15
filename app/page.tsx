import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation (Sticky Header) */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Celestimed Logo" width={32} height={32} />
            <span className="font-bold text-xl">Celestimed</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get a Free Audit</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Hassle-Free Medical Billing for Clinics & Physicians</h1>
              <p className="text-xl mb-8">
                Reduce Claim Denials, Maximize Revenue, and Focus on Patient Care While We Handle Your Billing
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/contact">Get a Free Billing Audit</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Schedule a Call
                </Button>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <Image src="/ramq-certified.svg" alt="RAMQ Certified" width={80} height={40} />
              <Image src="/phipa-compliant.svg" alt="PHIPA/PIPEDA Compliant" width={80} height={40} />
              <Image src="/private-insurance.svg" alt="Works with Private Insurance" width={80} height={40} />
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Faster Payments", description: "Reduce rejected claims & get paid on time." },
                {
                  title: "100% RAMQ & Private Insurance Compliance",
                  description: "Expert in Quebec healthcare billing.",
                },
                { title: "Seamless EMR Integration", description: "Works with Telus Health, OSCAR, ClinicAid, etc." },
                {
                  title: "Cost-Effective & Scalable",
                  description: "Billing solutions for solo doctors & large clinics.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Medical Billing & Claims Processing", description: "RAMQ, OHIP, Private Insurance" },
                { title: "Medical Coding (ICD-10-CA & CPT)", description: "Ensuring Correct Claim Submissions" },
                { title: "Prior Authorization & Insurance Verification", description: "Prevent Delays & Denials" },
                { title: "Virtual Medical Scribing", description: "Reduce Documentation Burden for Physicians" },
                { title: "EMR Data Entry & Management", description: "Streamline Clinic Operations" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/ /g, "-")}`}
                    className="text-blue-600 hover:underline"
                  >
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Submit Patient & Insurance Details" },
                { step: 2, title: "We Process, Code & Verify Claims" },
                { step: 3, title: "Claims Submitted to RAMQ/Insurance" },
                { step: 4, title: "You Get Paid Faster & More Efficiently" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials & Social Proof */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <p className="text-xl italic mb-4">
                  "We recovered 20% more revenue after switching to Celestimed – Highly Recommend!"
                </p>
                <p className="font-semibold">- Dr. Smith, Montreal Clinic</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-xl italic mb-4">
                  "Billing errors dropped to near zero, and our team now focuses on patient care."
                </p>
                <p className="font-semibold">- Family Practice Owner, Quebec</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture (Inquiry Form) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Billing Audit</h2>
            <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input type="text" placeholder="Clinic Name" required />
                <Input type="text" placeholder="Contact Person" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input type="email" placeholder="Email" required />
                <Input type="tel" placeholder="Phone" required />
              </div>
              <div className="mb-6">
                <select className="w-full p-2 border rounded-md" required>
                  <option value="">Select Services Needed</option>
                  <option value="medical-billing">Medical Billing</option>
                  <option value="coding">Medical Coding</option>
                  <option value="prior-auth">Prior Authorization</option>
                  <option value="emr-management">EMR Management</option>
                </select>
              </div>
              <Button type="submit" className="w-full">
                Get Your Free Billing Audit
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-blue-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services#billing" className="hover:text-blue-400">
                    Medical Billing
                  </Link>
                </li>
                <li>
                  <Link href="/services#coding" className="hover:text-blue-400">
                    Medical Coding
                  </Link>
                </li>
                <li>
                  <Link href="/services#prior-auth" className="hover:text-blue-400">
                    Prior Authorization
                  </Link>
                </li>
                <li>
                  <Link href="/services#emr" className="hover:text-blue-400">
                    EMR Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Phone: (XXX) XXX-XXXX</p>
              <p>Email: info@celestimed.com</p>
              <p>Address: 123 Medical Plaza, Montreal, QC</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Celestimed. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/terms" className="hover:text-blue-400 ml-2">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

