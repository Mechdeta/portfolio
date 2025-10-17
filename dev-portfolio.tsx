import React, { useState } from 'react';
import { Code2, Trophy, Mail, Github, Linkedin, ExternalLink, Terminal, Database, Server } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const cpStats = [
    { platform: 'LeetCode', rating: 1550, color: 'from-yellow-400 to-orange-500', icon: '💻' },
    { platform: 'CodeChef', rating: 1348, color: 'from-amber-600 to-orange-700', icon: '👨‍🍳' },
    { platform: 'Codeforces', rating: 1120, color: 'from-blue-500 to-indigo-600', icon: '⚔️' }
  ];

  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'Java', category: 'CP & Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'DSA', category: 'Core' },
    { name: 'Git', category: 'Tools' }
  ];

  const projectIdeas = [
    {
      title: 'Project Slot 1',
      description: 'Your next amazing full-stack project goes here!',
      tech: ['React', 'Node.js', 'MongoDB'],
      placeholder: true
    },
    {
      title: 'Project Slot 2',
      description: 'Another awesome project waiting to be built!',
      tech: ['Express', 'PostgreSQL', 'JWT'],
      placeholder: true
    },
    {
      title: 'Project Slot 3',
      description: 'Something creative and impactful!',
      tech: ['React', 'API Integration'],
      placeholder: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {'<YourName />'}
          </div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-cyan-400 text-lg">Full-Stack Developer</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Building Scalable
            <br />Web Applications
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Backend & Full-Stack Developer specializing in React, Node.js, and modern web technologies. 
            Passionate about competitive programming and solving complex algorithmic challenges.
          </p>

          {/* CP Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {cpStats.map((stat) => (
              <div key={stat.platform} className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{stat.icon}</span>
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">{stat.platform}</h3>
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.rating}
                </p>
                <p className="text-sm text-gray-500 mt-2">Rating</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-cyan-400" />
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gradient-to-r from-gray-800 to-gray-700 px-5 py-3 rounded-lg border border-gray-600 hover:border-cyan-500 transition">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-xs text-gray-400 ml-2">· {skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Server className="text-cyan-400" />
            Projects
          </h2>
          <p className="text-gray-400 mb-12">Projects coming soon! Building something awesome...</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectIdeas.map((project, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-dashed border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-8">Open to opportunities and collaborations</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg transition">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://github.com/yourusername" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-500">
        <p>© 2024 Your Name. Built with React & passion for code.</p>
      </footer>
    </div>
  );
}