import React from 'react';
import { Monitor, Network, Shield, Code, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Operating Systems",
      skills: ["Linux (Ubuntu, Kali)", "Windows Server", "macOS", "Virtual Environments"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking",
      skills: ["TCP/IP", "Wireshark", "Nmap", "Network Security", "Firewall Management"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Tools",
      skills: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Splunk", "ELK Stack"],
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      skills: ["Python", "Bash", "PowerShell", "SQL", "JavaScript", "C++"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Cloud & Security Analysis",
      skills: ["AWS Security", "EC2", "S3", "IAM", "SIEM", "Log Analysis", "Incident Response", "Forensics", "Threat Hunting"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Methodologies",
      skills: ["OWASP Top 10", "NIST Framework", "ISO 27001", "MITRE ATT&CK", "Risk Assessment"],
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const proficiencyLevels = [
    { name: "Network Security", level: 90 },
    { name: "Linux Administration", level: 85 },
    { name: "AWS Cloud Security", level: 75 },
    { name: "Penetration Testing", level: 80 },
    { name: "Incident Response", level: 85 },
    { name: "Python Scripting", level: 75 },
    { name: "SIEM Management", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium mr-2 mb-2 hover:bg-cyan-50 dark:hover:bg-gray-500 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencyLevels.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill.name}
                  </span>
                  <span className="text-cyan-500 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;