'use client';

import { useEffect, useState } from 'react';
import { StarfieldBackground } from '@/components/starfield-background';
import { ThemeToggle } from '@/components/theme-toggle';
import { MobileNav } from '@/components/mobile-nav';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink, Phone, Award, BookOpen, Code, ArrowRight } from 'lucide-react';

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
    'Programming Languages': [
      { name: 'C++', level: 'Good' },
      { name: 'Java', level: 'Good' },
      { name: 'JavaScript', level: 'Above Intermediate' },
      { name: 'Python', level: 'Beginner' },
      { name: 'PHP', level: 'Intermediate' },
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
    ],
    'Frameworks': [
      { name: 'React.js', level: 'Above Intermediate' },
      { name: 'Node.js', level: 'Good' },
      { name: 'Express.js', level: 'Good' },
      { name: 'Tailwind CSS', level: 'Good' },
    ],
    'Tools & Libraries': [
      { name: 'Git', level: 'Good' },
      { name: 'GitHub', level: 'Good' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Linux', level: 'Intermediate' },
      { name: 'VSCode', level: 'Advanced' },
    ],
    'Databases': [
      { name: 'MySQL', level: 'Good' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Beginner' },
    ],
  };

  const projects = [
    {
      title: 'Zenzloom',
      description: 'Scalable e-commerce platform with product discovery, cart management, order placement, and role-based access control for customers and administrators.',
      tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Redux Toolkit'],
      link: 'https://github.com/Harsh-Verma1981/ZenzyBeta',
      LiveLink : 'https://zenzloom-shop.vercel.app/',
    },
    {
      title: 'Plant Hub',
      description: 'Community garden portal enabling users to purchase seeds, tools, and plants with integrated chatbot assistance and dynamic user authentication.',
      tech: ['PHP', 'MySQL', 'Responsive Web Design', 'Tailwind CSS', 'JavaScript'],
      link: 'https://github.com/Harsh-Verma1981/Plant-Hub',
      LiveLink : 'https://plantlovershub.rf.gd/'
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
      <nav style={{isolation: 'auto'}} className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-background/80 to-background/0 backdrop-blur-md border-b border-border/20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary animate-pulse">HV</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4">
              About
            </a>
            <a href="#training" className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Training
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Projects
            </a>
            <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Skills
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4">
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
          <MobileNav />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block animate-bounce" style={{animationDuration: '2s'}}>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
              HV
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-in slide-in-from-bottom duration-700" style={{animationDelay: '0.1s'}}>
            Harsh Verma
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-4 animate-in fade-in duration-700" style={{animationDelay: '0.2s'}}>
            Full Stack Developer
          </p>
          <p className="text-base md:text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-700" style={{animationDelay: '0.3s'}}>
            Crafting beautiful, functional web experiences with modern technologies. Passionate about clean code, user experience, and solving complex problems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-in fade-in duration-700" style={{animationDelay: '0.4s'}}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              <a href="/Harsh-Verma-CV.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground animate-in slide-in-from-left duration-700">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-in slide-in-from-left duration-700" style={{animationDelay: '0.1s'}}>
              <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                I'm a passionate full-stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
              </p>
              <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                My journey in development has equipped me with skills in React, Node.js, TypeScript, and various databases. I thrive in collaborative environments and am committed to continuous learning and growth.
              </p>
            </div>
            <Card className="bg-card/50 backdrop-blur border-border/30 p-8 animate-in slide-in-from-right duration-700 hover:border-primary/50 transition-all hover:shadow-lg" style={{animationDelay: '0.2s'}}>
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
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
              Summer Training
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100} direction="up">
            <Card className="relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur border border-primary/20 p-8 md:p-10 overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="inline-block mb-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                      <p className="text-primary font-semibold text-xs md:text-sm">PROFESSIONAL DEVELOPMENT</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {training.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm md:text-base">
                      {training.institution}
                    </p>
                  </div>
                  <span className="text-foreground/60 text-sm md:text-base whitespace-nowrap">
                    {training.duration}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 text-sm md:text-base">
                  {training.description}
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <a href={training.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    View Certificate <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground animate-in slide-in-from-left duration-700">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={project.title}
                className="bg-card/50 backdrop-blur border-border/30 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-in slide-in-from-bottom"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <a
                    href={project.LiveLink}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm md:text-base"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm md:text-base"
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
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Skills & Expertise
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <ScrollReveal key={category} delay={idx * 100} direction="up">
                <Card
                  className="relative h-full bg-gradient-to-br from-card/60 to-card/30 backdrop-blur border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
                      {category}
                    </h3>
                    <ul className="space-y-3 flex-1">
                      {items.map((skill, skillIdx) => {
                        const levelWidths = {
                          'Beginner': 0.3,
                          'Intermediate': 0.5,
                          'Good': 0.75,
                          'Above Intermediate': 0.8,
                          'Advanced': 1,
                        };
                        return (
                          <li
                            key={typeof skill === 'string' ? skill : skill.name}
                            className="group/skill"
                          >
                            <div className="flex items-center justify-start mb-1">
                              <span className="text-foreground/80 text-xs md:text-sm font-medium group-hover/skill:text-primary transition-colors">
                                {typeof skill === 'string' ? skill : skill.name}
                              </span>
                            </div>
                            <div className="h-1.5 bg-border rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform origin-left transition-all duration-500"
                                style={{
                                  transform: `scaleX(${typeof skill === 'string' ? 0.6 + (skillIdx * 0.1) : levelWidths[skill.level] || 0.5})`,
                                }}
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Achievements
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100} direction="up">
                  <Card
                    className="relative h-full min-h-[280px] bg-gradient-to-br from-card/60 to-card/30 backdrop-blur border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group overflow-hidden flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed text-sm md:text-base flex-1">
                        {achievement.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Certifications
            </h2>
          </ScrollReveal>
          <div className="space-y-4 md:space-y-6">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <Card
                  className="bg-gradient-to-r from-card/50 to-card/30 backdrop-blur border-border/30 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:scale-102 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-foreground/70 text-sm md:text-base">{cert.issuer}</p>
                      </div>
                      {cert.date && (
                        <span className="text-primary font-semibold text-sm md:text-base whitespace-nowrap">
                          {cert.date}
                        </span>
                      )}
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm md:text-base group/link"
                    >
                      View Certificate
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
              Education
            </h2>
          </ScrollReveal>
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} direction="left">
                <Card
                  className="bg-gradient-to-br from-card/50 via-card/30 to-card/20 backdrop-blur border border-primary/20 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4 gap-4 flex-col md:flex-row">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {edu.institution}
                        </h3>
                      </div>
                      <p className="text-primary font-semibold text-base md:text-lg ml-4">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-foreground/60 text-sm whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <div className="ml-4 space-y-2">
                    <p className="text-foreground/70 text-sm md:text-base">{edu.location}</p>
                    <p className="text-accent font-semibold text-sm md:text-base">
                      {edu.gpa ? `CGPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Get In Touch
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100} direction="up">
            <Card className="relative bg-gradient-to-br from-card/50 via-card/40 to-card/30 backdrop-blur border border-primary/20 p-8 md:p-12 max-w-2xl mx-auto group overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <p className="text-foreground/80 text-center mb-12 text-base md:text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you want to collaborate on something great or just say hello, feel free to reach out!
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 min-h-[80px] group/contact hover:border border-primary/30">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 group-hover/contact:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm md:text-base">Phone</p>
                      <p className="text-foreground/60 text-sm md:text-base truncate">+91 7428562300</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 min-h-[80px] group/contact hover:border border-primary/30">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 group-hover/contact:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm md:text-base">Email</p>
                      <p className="text-foreground/60 text-sm md:text-base truncate">harshv2208@gmail.com</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/Harsh-Verma1981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 group/contact min-h-[80px] hover:border border-primary/30"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover/contact:scale-110 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm md:text-base">GitHub</p>
                      <p className="text-foreground/60 text-sm md:text-base truncate">github.com/Harsh-Verma1981</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/harshverma05s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 group/contact min-h-[80px] hover:border border-primary/30"
                  >
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover/contact:scale-110 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm md:text-base">LinkedIn</p>
                      <p className="text-foreground/60 text-sm md:text-base truncate">linkedin.com/in/harshverma05s/</p>
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          </ScrollReveal>
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
