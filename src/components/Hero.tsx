import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import Orb from './Orb';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Orb Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* ✅ Main content with pointer events enabled only where needed */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/30"
          style={{ pointerEvents: 'auto' }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block">Aman</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sharma
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Cybersecurity Analyst
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about threat detection, SOC operations, and ethical hacking.
            Protecting digital assets through proactive security measures and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Aman-s-portfolio/resume.pdf"
              download
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>

            <div className="flex space-x-4">
              <a
                href="mailto:aman3281sharma@gmail.com"
                className="p-4 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-white/20 dark:border-gray-700/30"
              >
                <Mail size={24} />
              </a>

              <a
                href="https://linkedin.com/in/aman-sharma-605b65210"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-white/20 dark:border-gray-700/30"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://github.com/intensity-100"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/20 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-white/20 dark:border-gray-700/30"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
