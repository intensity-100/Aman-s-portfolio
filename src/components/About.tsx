import React from 'react';
import { Shield, Terminal, Search, Bug } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SOC Operations",
      description: "Expert in threat detection and incident response"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Linux Security",
      description: "Advanced Linux hardening and system administration"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Threat Hunting",
      description: "Proactive threat detection and analysis"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Bug Bounty",
      description: "Responsible disclosure and vulnerability research"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a dedicated cybersecurity analyst with a passion for protecting digital assets, 
                I specialize in threat detection, SOC operations, and ethical hacking. My expertise 
                spans across Linux security, network analysis, and vulnerability assessment.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With hands-on experience in responsible disclosure to government entities and extensive 
                training through platforms like PortSwigger Labs and TryHackMe, I bring both theoretical 
                knowledge and practical skills to every security challenge.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm committed to continuous learning and staying ahead of emerging threats, 
                leveraging automation and OSINT techniques to enhance security postures and 
                protect organizations from evolving cyber threats.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;