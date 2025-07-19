import React from 'react';
import { Briefcase, Target, Users, TrendingUp, ExternalLink, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Responsible Disclosure",
      organization: "Indian Government",
      period: "2024",
      type: "Security Research",
      description: "Successfully identified and reported security vulnerabilities to government entities through responsible disclosure processes.",
      achievements: [
        "Identified critical security vulnerabilities",
        "Followed responsible disclosure protocols",
        "Contributed to national cybersecurity efforts"
      ],
      technologies: ["Web Application Security", "OWASP", "Vulnerability Assessment"]
    },
    {
      title: "Security Labs Completion",
      organization: "PortSwigger Web Security Academy",
      period: "2024",
      type: "Training & Certification",
      description: "Completed 50+ hands-on security labs covering various web application vulnerabilities and attack techniques.",
      achievements: [
        "Mastered OWASP Top 10 vulnerabilities",
        "Advanced SQL injection techniques",
        "Cross-site scripting (XSS) exploitation",
        "Authentication and session management flaws"
      ],
      technologies: ["Burp Suite", "Web Security", "Penetration Testing"]
    },
    {
      title: "TryHackMe - Top 10% Ranking",
      organization: "TryHackMe Platform",
      period: "2023-2024",
      type: "Skill Development",
      description: "Achieved top 10% ranking while completing Red Team, Blue Team, and SOC Level 1 learning paths.",
      achievements: [
        "Red Team operations and tactics",
        "Blue Team defensive strategies",
        "SOC Level 1 incident response",
        "Digital forensics and analysis"
      ],
      technologies: ["Linux", "Windows", "Network Security", "SIEM"]
    }
  ];

  const projects = [
    {
      title: "Custom Automation Scripts",
      description: "Developed Python and Bash scripts for security automation and monitoring tasks.",
      technologies: ["Python", "Bash", "Linux", "Automation"],
      impact: "Reduced manual security tasks by 60%"
    },
    {
      title: "Incident Response with Splunk/ELK",
      description: "Implemented and managed SIEM solutions for threat detection and incident response.",
      technologies: ["Splunk", "ELK Stack", "Log Analysis", "SIEM"],
      impact: "Improved threat detection time by 40%"
    },
    {
      title: "Network Security Assessment",
      description: "Conducted comprehensive network security assessments and vulnerability scans.",
      technologies: ["Nmap", "Nessus", "Wireshark", "Network Analysis"],
      impact: "Identified and mitigated 20+ security issues"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Briefcase className="w-8 h-8 text-cyan-500 mr-3" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mr-3">
                        {exp.title}
                      </h4>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Target className="w-4 h-4 mr-2" />
                      {exp.organization}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 text-cyan-500 mr-3" />
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">
                    {project.impact}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;