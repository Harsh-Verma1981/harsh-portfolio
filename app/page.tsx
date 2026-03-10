'use client';

import { useEffect, useState } from 'react';
import { StarfieldBackground } from '@/components/starfield-background';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink, Phone, Award, BookOpen, Code } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  if (!mounted) return null;

  const skills = {
    'Programming Languages': ['C++', 'Java', 'JavaScript', 'Python', 'PHP', 'HTML', 'CSS'],
    'Frameworks': ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    'Tools': ['Git', 'GitHub', 'Postman', 'Kali Linux', 'VSCode'],
    'Databases': ['MySQL', 'MongoDB', 'Firebase', 'NoSQL'],
  };

  const projects = [
    {
      title: 'Zenzloom',
      description: 'Scalable e-commerce platform with product discovery, cart management, order placement, and role-based access control for customers and administrators.',
      tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Redux Toolkit'],
      LiveLink : '#', // not hosted 
      link: 'https://github.com/Harsh-Verma1981/Zenzloom',
    },
    {
      title: 'Plant Hub',
      description: 'Community garden portal enabling users to purchase seeds, tools, and plants with integrated chatbot assistance and dynamic user authentication.',
      tech: ['PHP', 'MySQL', 'Responsive Web Design', 'Tailwind CSS', 'JavaScript'],
      LiveLink : 'https://plantlovershub.rf.gd/', // hosted link
      link: 'https://github.com/Harsh-Verma1981/Plant-Hub',
    },
  ];

  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'Computer Science and Engineering',
      duration: 'Aug 2023 – Present',
      gpa: '7.03 CGPA',
      location: 'Phagwara, Punjab',
    },
    {
      institution: 'Aggarwal Public School',
      degree: 'Intermediate (XII)',
      duration: 'Apr 2022 – May 2023',
      percentage: '73%',
      location: 'Faridabad, Haryana',
    },
    {
      institution: 'Aggarwal Public School',
      degree: 'Matriculation (X)',
      duration: 'Apr 2020 – Jun 2021',
      percentage: '65%',
      location: 'Faridabad, Haryana',
    },
  ];

  const certifications = [
    {
      title: 'Bits and Bytes of Computer Networking',
      issuer: 'Coursera',
      date: 'Sep 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/EKNCX03T2RRE',
    },
    {
      title: 'Master in C: Basic to Beyond',
      issuer: 'CSEpathshala',
      date: 'Mar 2024',
      link: 'https://drive.google.com/file/d/1fFjRparNVocR3a-smUz1T1LEN_pwoudV/view',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: 'Nov 2023',
      link: 'https://www.freecodecamp.org/certification/fccde7b6ad1-bbf7-473d-85f3-1b6b2828e7cc/responsive-web-design',
    },
  ];

  const achievements = [
    {
      title: '5-Star Golden Badge in Java',
      description: 'Awarded with 5-star golden badge from HackerRank in Java programming',
      icon: Award,
    },
    {
      title: '100+ LeetCode Problems Solved',
      description: 'Successfully solved over 100 challenging problems on LeetCode with consistent performance',
      icon: Code,
    },
    {
      title: 'Advanced Problem-Solving Expertise',
      description: 'Demonstrated mastery in Data Structures and Algorithms through practical implementations and competitive programming',
      icon: BookOpen,
    },
  ];

  const training = {
    title: 'Summer Training - Data Structures and Algorithms (DSA)',
    institution: 'Centre for Professional Enhancement',
    duration: 'Jun 2025 – Jul 2025',
    description: 'Completed certified summer training in DSA covering arrays, linked lists, stacks, queues, trees, sorting, searching, and recursion with practical implementations in C++/Java.',
    certificateUrl: 'https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12315634_848_20_08_2025.pdf?_gl=1*zir137*_gcl_au*MTU1NjQyMzY0NC4xNzcyMjA5NTk1',
  };

  return (
    <main className="relative min-h-screen">
      <StarfieldBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-background/80 to-background/0 backdrop-blur-md border-b border-border/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">HV</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/Harsh-Verma-CV.pdf" download>
                Download CV
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              HV
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Harsh Verma
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, functional web experiences with modern technologies. Passionate about clean code, user experience, and solving complex problems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <a href="/Harsh-Verma-CV.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                My journey in development has equipped me with skills in React, Node.js, TypeScript, and various databases. I thrive in collaborative environments and am committed to continuous learning and growth.
              </p>
            </div>
            <Card className="bg-card/50 backdrop-blur border-border/30 p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick Facts</h3>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <span>Fresher Full Stack Developer passionate about building modern web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <span>Specialized in React, Node.js, and Express.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <span>Strong foundation in DSA and competitive programming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <span>Always learning new technologies and exploring best practices</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Summer Training
          </h2>
          <Card className="bg-card/50 backdrop-blur border-border/30 p-8 border-l-4 border-l-primary">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{training.title}</h3>
                <p className="text-primary font-semibold">{training.institution}</p>
              </div>
              <span className="text-foreground/60 text-sm">{training.duration}</span>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6">{training.description}</p>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <a href={training.certificateUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-card/50 backdrop-blur border-border/30 p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.LiveLink}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View on GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card
                key={category}
                className="bg-card/50 backdrop-blur border-border/30 p-8 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-primary mb-6">{category}</h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-foreground/80 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={idx}
                  className="bg-card/50 backdrop-blur border-border/30 p-8 hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {achievement.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-border/30 p-8 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-foreground/70">{cert.issuer}</p>
                  </div>
                  {cert.date && <span className="text-foreground/60 text-sm whitespace-nowrap ml-4">{cert.date}</span>}
                </div>
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur border-border/30 p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{edu.institution}</h3>
                    <p className="text-primary font-semibold text-lg">{edu.degree}</p>
                  </div>
                  <span className="text-foreground/60 text-sm">{edu.duration}</span>
                </div>
                <p className="text-foreground/70 mb-2">{edu.location}</p>
                <p className="text-primary font-semibold">
                  {edu.gpa ? `CGPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
            Get In Touch
          </h2>
          <Card className="bg-card/50 backdrop-blur border-border/30 p-12 max-w-2xl mx-auto">
            <p className="text-foreground/80 text-center mb-12 text-lg leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you want to collaborate on something great or just say hello, feel free to reach out!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-foreground/60">+91 7428562300</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-foreground/60">harshv2208@gmail.com</p>
                </div>
              </div>
              <a
                href="https://github.com/Harsh-Verma1981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-foreground/60">github.com/Harsh-Verma1981</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/harshverma05s/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-foreground/60">linkedin.com/in/harshverma05s/</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Harsh Verma. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
