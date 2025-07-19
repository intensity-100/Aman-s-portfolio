import React from 'react';
import { Mail, Linkedin, MapPin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "aman3281sharma@gmail.com",
      link: "mailto:aman3281sharma@gmail.com",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "aman-sharma-605b65210",
      link: "https://linkedin.com/in/aman-sharma-605b65210",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "intensity-100",
      link: "https://github.com/intensity-100",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-cyan-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss security opportunities? 
            Let's connect and build a more secure digital future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - Full Width */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 text-center"
                  >
                    <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 mt-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action - Centered */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">
                Let's Collaborate
              </h3>
              <p className="opacity-90 mb-4">
                Interested in cybersecurity consulting, threat analysis, or security audits? 
                I'm always open to discussing new opportunities and challenges.
              </p>
              <div className="flex items-center justify-center text-cyan-100">
                <MapPin className="w-5 h-5 mr-2" />
                Available for remote opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Aman Sharma. Built with React and deployed on GitHub Pages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;