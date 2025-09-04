import { Briefcase, Globe, ArrowRight, CheckCircle } from "lucide-react";

export default function JoinPage() {
  const careerOpportunities = [
    {
      title: "Senior Solar Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead the design and development of innovative solar energy solutions for African markets and conditions.",
    },
    {
      title: "Energy Storage Specialist",
      department: "Research & Development",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Research and develop next-generation energy storage technologies and battery management systems for African applications.",
    },
    {
      title: "Sustainability Consultant",
      department: "Consulting",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Help businesses across Africa develop and implement comprehensive sustainability strategies and energy efficiency programs.",
    },
    {
      title: "AMG Proyten Product Manager",
      department: "Product Management",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Manage the development and market strategy for our flagship AMG Proyten Hybrid Synchronizer product.",
    },
  ];

  const partnershipTypes = [
    {
      title: "Technology Partnerships",
      description:
        "Collaborate with innovative companies to develop cutting-edge sustainable energy solutions for African markets.",
      icon: "🔬",
      benefits: [
        "Joint R&D Projects",
        "Technology Licensing",
        "Patent Sharing",
        "Market Expansion",
      ],
    },
    {
      title: "Distribution Partnerships",
      description:
        "Expand your market reach by becoming an authorized distributor of AMG products and services across Africa.",
      icon: "🌐",
      benefits: [
        "Exclusive Territories",
        "Training & Support",
        "Marketing Materials",
        "Competitive Pricing",
      ],
    },
    {
      title: "Strategic Alliances",
      description:
        "Form long-term strategic partnerships to tackle complex energy challenges and market opportunities in Africa.",
      icon: "🤝",
      benefits: [
        "Joint Ventures",
        "Shared Resources",
        "Risk Mitigation",
        "Innovation Synergy",
      ],
    },
    {
      title: "Academic Collaborations",
      description:
        "Partner with African universities and research institutions to advance sustainable energy knowledge and technology.",
      icon: "🎓",
      benefits: [
        "Research Grants",
        "Student Programs",
        "Publication Opportunities",
        "Technology Transfer",
      ],
    },
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description:
        "We encourage creative thinking and reward innovative solutions that push the boundaries of what's possible in African energy markets.",
      icon: "💡",
    },
    {
      title: "Sustainability Focus",
      description:
        "Every decision we make considers environmental impact and long-term sustainability for future generations across Africa.",
      icon: "🌱",
    },
    {
      title: "Collaborative Culture",
      description:
        "We believe the best solutions come from diverse teams working together toward common goals for African development.",
      icon: "👥",
    },
    {
      title: "African Excellence",
      description:
        "We invest in our people with ongoing training, mentorship, and opportunities for professional growth in the African energy sector.",
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-main-50 to-main-100 py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-main-900">
            Join AMG
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-main-700 max-w-4xl mx-auto leading-relaxed">
            Be part of the sustainable energy revolution in Africa. Join our
            team or partner with us to create a cleaner, more sustainable future
            for the continent.
          </p>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Career Opportunities
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Join our mission to transform the energy industry across Africa
              with innovative, sustainable solutions that make a real difference
              in communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerOpportunities.map((job, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-main-900">
                    {job.title}
                  </h3>
                  <span className="px-3 py-1 bg-main-100 text-main-700 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-main-600">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    {job.location}
                  </div>
                </div>

                <p className="text-main-700 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-main-600">
                    Experience: {job.experience}
                  </span>
                  <button className="flex items-center gap-2 text-main-600 hover:text-main-800 font-semibold transition-colors duration-300">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-main-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-700 transition-colors duration-300">
              View All Openings
            </button>
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Collaborate with AMG to accelerate innovation and expand your
              impact in the sustainable energy sector across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{partnership.icon}</div>
                <h3 className="text-2xl font-bold text-main-900 mb-4">
                  {partnership.title}
                </h3>
                <p className="text-main-700 mb-6 leading-relaxed">
                  {partnership.description}
                </p>

                <h4 className="font-semibold text-main-800 mb-3">
                  Key Benefits:
                </h4>
                <ul className="space-y-2 mb-6">
                  {partnership.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-main-700"
                    >
                      <CheckCircle className="w-4 h-4 text-main-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-main-600 text-white py-3 rounded-lg font-semibold hover:bg-main-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Culture */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Why Work With AMG?
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Discover what makes AMG a great place to build your career and
              make a meaningful impact across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-main-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-main-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              Benefits & Perks
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and a
              supportive work environment focused on African development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                items: [
                  "Comprehensive Health Insurance",
                  "Dental & Vision Coverage",
                  "Mental Health Support",
                  "Fitness Reimbursement",
                ],
              },
              {
                title: "Professional Development",
                items: [
                  "Tuition Reimbursement",
                  "Conference Attendance",
                  "Online Learning Platforms",
                  "Mentorship Programs",
                ],
              },
              {
                title: "Work-Life Balance",
                items: [
                  "Flexible Work Hours",
                  "Remote Work Options",
                  "Generous PTO",
                  "Parental Leave",
                ],
              },
              {
                title: "Financial Benefits",
                items: [
                  "Competitive Salary",
                  "Performance Bonuses",
                  "401(k) Matching",
                  "Stock Options",
                ],
              },
              {
                title: "Team Environment",
                items: [
                  "Collaborative Culture",
                  "Team Building Events",
                  "Diversity & Inclusion",
                  "Employee Recognition",
                ],
              },
              {
                title: "African Impact",
                items: [
                  "Contribute to African Development",
                  "Local Community Projects",
                  "Sustainable Initiatives",
                  "Regional Growth",
                ],
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-main-900 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-sm text-main-700"
                    >
                      <CheckCircle className="w-4 h-4 text-main-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-900 mb-6">
              How to Apply
            </h2>
            <p className="text-lg text-main-700 max-w-3xl mx-auto">
              Ready to join our team? Here&apos;s what you need to know about
              our application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Submit Application",
                description:
                  "Complete our online application form with your resume, cover letter, and portfolio if applicable.",
              },
              {
                step: "2",
                title: "Initial Review",
                description:
                  "Our HR team reviews your application and qualifications for the position.",
              },
              {
                step: "3",
                title: "Interview Process",
                description:
                  "Participate in phone screenings, technical assessments, and team interviews.",
              },
              {
                step: "4",
                title: "Final Decision",
                description:
                  "Receive feedback and, if selected, welcome to the AMG team!",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-main-100 text-main-600 rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-main-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-main-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-10 lg:px-26 2xl:px-54 bg-main-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-main-100 mb-8 leading-relaxed">
            Join AMG in our mission to create a sustainable energy future across
            Africa. Your skills and passion can help change the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-main-300 text-main-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-200 transition-colors duration-300">
              Browse Openings
            </button>
            <button className="border-2 border-main-300 text-main-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-main-300 hover:text-main-900 transition-colors duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
