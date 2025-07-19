import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: "Diploma in Cyber Security",
      institution: "Craw Security Pvt. Ltd.",
      year: "2024",
      status: "Completed",
      description: "Comprehensive cybersecurity program covering advanced threat detection, incident response, and security operations."
    }
  ];

  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH) v12",
      issuer: "EC-Council",
      year: "2024",
      icon: <Shield className="w-5 h-5" />,
      verified: true
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
      verified: true
    },
    {
      title: "SQL Injection",
      issuer: "EC-Council",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
      verified: true
    },
    {
      title: "Ethical Hacking: Session Hijacking",
      issuer: "EC-Council",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
      verified: true
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
      verified: true
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="text-cyan-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-cyan-500 mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.title}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.year}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-cyan-500 mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg text-white">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                    {cert.verified && (
                      <div className="flex items-center text-green-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Shield from lucide-react for the education component
import { Shield } from 'lucide-react';

export default Education;