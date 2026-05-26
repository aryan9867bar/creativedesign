import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Brain, Globe, Database, Sparkles, Play, Video, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import ecommerceImg from '@/assets/projects/ecommerce.jpg';
import emotionDetectionImg from '@/assets/projects/emotion-detection.jpg';
import fullstackWebImg from '@/assets/projects/fullstack-web.jpg';
import apiPlatformImg from '@/assets/projects/api-platform.jpg';
import rtcbridgeImg from '@/assets/projects/rtcbridge.png';

const categories = ['All', 'Web Dev', 'AI/ML', 'Full Stack'];

const projects = [
  {
    title: 'RTCBridge',
    category: 'Full Stack',
    description: 'Scalable real-time video calling platform enabling low-latency peer-to-peer communication using WebRTC and WebSockets. Built with Spring Boot signaling architecture, STOMP messaging, STUN/TURN traversal, and secure HTTPS deployment for seamless browser-based communication.',
    icon: Video,
    image: rtcbridgeImg,
    badge: 'Live RTC',
    highlights: [
      'Real-time peer-to-peer video & audio calling',
      'WebSocket signaling with STOMP + SockJS',
      'STUN/TURN integration for NAT traversal',
      'Secure HTTPS deployment with Docker & Render'
    ],
    tech: ['Spring Boot', 'WebRTC', 'WebSocket', 'Java', 'STOMP', 'Docker'],
    date: '05/2026',
    github: 'https://github.com/aryan9867bar/RTCBridge',
    video: 'https://drive.google.com/file/d/13ZH78iYqe2N2V9p4vvKpZLqKJ601CDJ7/view?usp=sharing',
    live: 'https://rtcbridge.onrender.com/',
  },
  {
    title: 'E-Commerce Website Clone',
    category: 'Full Stack',
    description: 'Full-featured e-commerce platform with Stripe payment integration, Cloudinary for image management, and Redux for state management.',
    icon: Globe,
    image: ecommerceImg,
    highlights: [
      'Stripe payment integration',
      'Cloudinary image management',
      'Redux state management',
      'User authentication system'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Redux'],
    date: '01/2024',
    github: 'https://github.com/aryan9867bar',
    video: '#',
    live: '#',
  },
  {
    title: 'Real-Time Emotion Detection',
    category: 'AI/ML',
    description: 'AI/ML powered application for detecting emotions in real-time using computer vision and deep learning techniques.',
    icon: Brain,
    image: emotionDetectionImg,
    highlights: [
      'Real-time facial emotion detection',
      'CNN-based deep learning model',
      'OpenCV integration',
      'Multi-class emotion classification'
    ],
    tech: ['Python', 'PyTorch', 'OpenCV', 'Keras', 'CNN', 'NLP'],
    date: '01/2023',
    github: 'https://github.com/aryan9867bar',
    video: '#',
    live: '#',
  },
  {
    title: 'Responsive Full-Stack Website',
    category: 'Web Dev',
    description: 'Modern responsive website built with MERN/MEAN stack, featuring RESTful APIs and MongoDB database integration.',
    icon: Code,
    image: fullstackWebImg,
    highlights: [
      'MERN/MEAN stack implementation',
      'RESTful API architecture',
      'Responsive design system',
      'MongoDB database integration'
    ],
    tech: ['Angular.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    date: '03/2021 - Present',
    github: 'https://github.com/aryan9867bar',
    video: '#',
    live: '#',
  },
  {
    title: 'API Integration Platform',
    category: 'Full Stack',
    description: 'Built responsive websites using various APIs including REST APIs and RapidAPI integrations with PostgreSQL database.',
    icon: Database,
    image: apiPlatformImg,
    highlights: [
      'Multiple API integrations',
      'RapidAPI marketplace usage',
      'PostgreSQL database',
      'Postman API testing'
    ],
    tech: ['React.js', 'REST APIs', 'RapidAPI', 'PostgreSQL', 'Postman'],
    date: '03/2021 - Present',
    github: 'https://github.com/aryan9867bar',
    video: '#',
    live: '#',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of my work in AI, web development, and other areas. Each project showcases different skills and technologies.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="glass-card rounded-2xl overflow-hidden hover-glow group relative"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/90 text-white backdrop-blur-sm animate-pulse">
                        <Wifi className="w-3 h-3" />
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm text-primary">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6">
                  {/* Title and Date */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="skill-badge text-xs">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex items-center gap-1.5 flex-1 text-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.video, '_blank')}
                      className="flex items-center gap-1.5 flex-1 text-xs border-red-500/40 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-400/60"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Video
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="flex items-center gap-1.5 flex-1 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/aryan9867bar', '_blank')}
            className="px-8 py-6 text-base rounded-full border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
