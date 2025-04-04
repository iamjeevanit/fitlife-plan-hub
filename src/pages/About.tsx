
import React from 'react';
import MobileNavbar from '@/components/MobileNavbar';
import { GraduationCap, Clock, Award, Users, Check, Heart } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MobileNavbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About FitLife</h1>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Transforming lives through personalized fitness coaching and science-backed training methods
              since 2018.
            </p>
            <div className="w-24 h-1 bg-fitness-primary mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="bg-gradient-to-br from-fitness-light to-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                At FitLife, we believe that fitness is for everyone. Our mission is to make expert-level 
                fitness training accessible, enjoyable, and sustainable. We don't just help you achieve 
                short-term results—we empower you with the knowledge and habits to maintain a healthy 
                lifestyle for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <GraduationCap className="text-fitness-primary h-8 w-8" />,
                  title: "Evidence-Based",
                  description: "All our training plans are based on scientific research and proven methodologies."
                },
                {
                  icon: <Users className="text-fitness-primary h-8 w-8" />,
                  title: "Personalized",
                  description: "We tailor our approach to your unique body, goals, and lifestyle."
                },
                {
                  icon: <Clock className="text-fitness-primary h-8 w-8" />,
                  title: "Sustainable",
                  description: "We focus on lasting habits rather than quick fixes that don't last."
                },
                {
                  icon: <Heart className="text-fitness-primary h-8 w-8" />,
                  title: "Holistic",
                  description: "We address nutrition, recovery, mindset, and training as a complete system."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trainer Credentials */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Trainer Credentials</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-6 bg-fitness-primary bg-opacity-10">
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="h-32 w-32 rounded-full overflow-hidden mb-4">
                      <img 
                        src="/trainer-profile.jpg" 
                        alt="Head Trainer"
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Alex Rodriguez</h3>
                    <p className="text-gray-600 text-sm">Head Fitness Coach</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <ul className="space-y-3">
                    {[
                      "Certified Personal Trainer (NASM-CPT)",
                      "Sports Nutrition Specialist",
                      "10+ Years of Professional Experience",
                      "Former Collegiate Athlete",
                      "Specialization in Functional Training"
                    ].map((credential, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-fitness-primary h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Philosophy</h4>
                    <p className="text-gray-700">
                      "I believe that fitness is a journey, not a destination. My goal is to guide you through 
                      that journey with expertise, compassion, and personalized attention to help you become the 
                      strongest version of yourself, both physically and mentally."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  year: "2023",
                  title: "Best Online Fitness Program",
                  org: "Fitness Innovation Awards"
                },
                {
                  year: "2022",
                  title: "Excellence in Client Results",
                  org: "Health & Wellness Association"
                },
                {
                  year: "2021",
                  title: "Top 10 Fitness Influencers",
                  org: "FitTech Magazine"
                }
              ].map((award, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center card-hover">
                  <Award className="text-fitness-primary h-8 w-8 mx-auto mb-3" />
                  <div className="inline-block px-3 py-1 bg-fitness-primary bg-opacity-10 text-fitness-primary rounded-full text-sm font-medium mb-2">
                    {award.year}
                  </div>
                  <h3 className="font-semibold mb-1">{award.title}</h3>
                  <p className="text-gray-500 text-sm">{award.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
