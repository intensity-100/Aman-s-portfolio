import React from 'react';
import { Shield, Eye, Search, Bug, Terminal, Lock } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SOC Operations",
      description: "Security Operations Center management and 24/7 threat monitoring",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Threat Detection",
      description: "Advanced persistent threat identification and behavioral analysis",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Log & Packet Analysis",
      description: "Deep dive forensic analysis of network traffic and system logs",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Bug Hunting",
      description: "Vulnerability research and responsible disclosure programs",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "OSINT",
      description: "Open Source Intelligence gathering and reconnaissance techniques",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Linux Hardening",
      description: "System security configuration and infrastructure protection",
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const tools = [
    "Splunk", "ELK Stack", "Wireshark", "Burp Suite", "Metasploit", "Nmap",
    "OWASP ZAP", "Nessus", "Maltego", "TheHarvester", "Shodan", "Recon-ng"
  ];

  return (
    <section id="interests" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Areas of <span className="text-cyan-500">Interest</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${interest.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {interest.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {interest.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specialized Tools */}
        <div className="bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-600">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
              <Lock className="w-8 h-8 text-cyan-500 mr-3" />
              Specialized Security Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proficient in a comprehensive suite of cybersecurity tools for threat hunting, 
              vulnerability assessment, and security operations.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group px-4 py-2 bg-white dark:bg-gray-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-500"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Passionate About Cybersecurity Excellence
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Continuously expanding knowledge and skills to stay ahead of emerging threats 
              and contribute to a more secure digital world.
            </p>
            <button className="px-8 py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;