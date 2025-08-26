import ContactForm from "../contact/contact-form";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our energy experts",
      details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
      action: "Call Now",
      actionType: "phone",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message anytime",
      details: ["info@amgenergystorage.com", "support@amgenergystorage.com"],
      action: "Send Email",
      actionType: "email",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Schedule an in-person consultation",
      details: ["123 Energy Street", "Lagos, Nigeria"],
      action: "Get Directions",
      actionType: "location",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-main-700 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your sustainable energy needs? Our team of experts
            is here to help you transform your energy infrastructure with
            AMG&apos;s innovative solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-main-900 mb-6">
                Contact Methods
              </h3>

              {/* {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-main-100 rounded-lg flex-shrink-0">
                      <method.icon className="w-6 h-6 text-main-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-main-900 mb-2">
                        {method.title}
                      </h4>
                      <p className="text-main-700 mb-3 text-sm">
                        {method.description}
                      </p>
                      <div className="space-y-1 mb-4">
                        {method.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-main-800 font-medium text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                      <button className="text-main-600 hover:text-main-800 font-semibold text-sm transition-colors duration-300">
                        {method.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-main-50 border border-main-200 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6 text-main-600" />
                <h4 className="text-lg font-semibold text-main-900">
                  Quick Response Promise
                </h4>
              </div>
              <p className="text-main-700 text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-main-900 mb-2">
                Send us a Message
              </h3>
              <p className="text-main-700 text-sm">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-main-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl 2xl:text-4xl text-main-50 font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-main-50/70 mb-6 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t wait to transform your energy infrastructure. Contact
              AMG today and take the first step toward a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size={"lg"}
                variant={"amg"}
                className="w-[12rem] 2xl:w-[15rem]"
              >
                Explore Products
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                className="bg-transparent border-2 border-main-300 text-main-300 px-8 py-4 rounded-full font-semibold hover:bg-main-300 hover:text-main-900 transition-colors duration-300 w-[12rem] 2xl:w-[15rem]"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
