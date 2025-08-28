"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import HeroLayout from "@/components/general/hero-layout";
import MenuBar from "@/components/navigation/menu";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroLayout
        bgImage={
          "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg"
        }
      >
        <MenuBar />
      </HeroLayout>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-main-50 to-main-100 py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-main-900">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-main-700 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your sustainable energy needs? We&apos;re here to
            help you transform your energy infrastructure with AMG&apos;s
            innovative solutions.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
                description: "Call us during business hours",
              },
              {
                icon: Mail,
                title: "Email",
                details: [
                  "info@amgenergystorage.com",
                  "support@amgenergystorage.com",
                ],
                description: "We'll respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Office",
                details: ["123 Energy Street", "Lagos, Nigeria"],
                description: "Visit us for a consultation",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-main-100 rounded-full mb-6">
                  <contact.icon className="w-8 h-8 text-main-600" />
                </div>
                <h3 className="text-xl font-bold text-main-900 mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2 mb-3">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-main-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-main-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-main-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-main-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-main-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-main-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-main-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="consultation">
                        Schedule Consultation
                      </option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="amg-proyten">
                        AMG Proyten Hybrid Synchronizer
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-main-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-main-600 text-white py-4 rounded-lg font-semibold hover:bg-main-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-main-900 mb-6">
                  Visit Our Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-main-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-main-900">
                        AMG Energy Storage Headquarters
                      </p>
                      <p className="text-main-700">123 Energy Street</p>
                      <p className="text-main-700">Lagos, Nigeria</p>
                      <p className="text-main-700">West Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-main-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-main-900">
                        Business Hours
                      </p>
                      <p className="text-main-700">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-main-700">
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                      <p className="text-main-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-main-700">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you respond to inquiries?",
                answer:
                  "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes, we provide complimentary initial consultations to understand your energy needs and discuss potential solutions.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We primarily serve Nigeria and West Africa, with plans to expand across the continent. We also work with international partners.",
              },
              {
                question: "Can you work with existing energy infrastructure?",
                answer:
                  "Absolutely! We specialize in upgrading and optimizing existing energy systems to improve efficiency and sustainability.",
              },
              {
                question:
                  "Tell me more about the AMG Proyten Hybrid Synchronizer",
                answer:
                  "The AMG Proyten Hybrid Synchronizer is our flagship product that enables seamless integration of multiple energy sources for optimal efficiency and reliability.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-main-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-main-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-main-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-main-100 mb-8 leading-relaxed">
            Don&apos;t wait to transform your energy infrastructure. Contact AMG
            today and take the first step toward a sustainable future.
          </p>
          <button className="bg-main-300 text-main-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-200 transition-colors duration-300">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
}
