import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Code2, Brain, Globe, Database, Sparkles, Play, Video, Wifi, MessageSquare, Link, Zap, Server, Activity, Users, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import ecommerceImg from '@/assets/projects/ecommerce.jpg';
import emotionDetectionImg from '@/assets/projects/emotion-detection.jpg';
import fullstackWebImg from '@/assets/projects/fullstack-web.jpg';
import apiPlatformImg from '@/assets/projects/api-platform.jpg';
import rtcbridgeImg from '@/assets/projects/rtcbridge.png';
import quickchatImg from '@/assets/projects/quickchat.png';
import wavechatImg from '@/assets/projects/wavechat.png';
import snipurlImg from '@/assets/projects/snipurl.png';
import eventProcessingImg from '@/assets/projects/event-processing.png';
import codebridgeImg from '@/assets/projects/codebridge.png';

const categories = ['All', 'Web Dev', 'AI/ML', 'Full Stack', 'Backend'];

const projects = [
  {
    title: 'CodeBridge',
    category: 'Full Stack',
    description: 'Real-time collaborative coding platform enabling developers to code together, share cursors, synchronize edits instantly, and execute code directly from the browser. Built with FastAPI, WebSockets, React, Monaco Editor, and low-latency real-time communication architecture.',
    icon: Code2,
    image: codebridgeImg,
    badge: 'Live Coding',
    isPremium: true,
    highlights: [
      'Real-time collaborative code editing',
      'Live cursor tracking and shared selections',
      'In-browser Python & C++ code execution',
      'Room-based collaboration with WebSocket synchronization'
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'WebSocket', 'Monaco Editor', 'Docker'],
    techLimit: 6,
    customExtraCount: 5,
    hiddenTech: ['Tailwind CSS', 'Vite', 'Pydantic', 'Uvicorn', 'AsyncIO', 'Render', 'Room Management', 'Real-Time Systems', 'Collaborative Editing'],
    date: '06/2026',
    github: 'https://github.com/aryan9867bar/codebridge',
    video: 'https://drive.google.com/file/d/18k1usVbrB52h8lvyf9LOJlvv1TbrqgOd/view?usp=sharing',
    live: 'https://codebridge-web.vercel.app/',
  },
  {
    title: 'Event Processing System',
    category: 'Backend',
    description: 'Cloud-native event-driven microservices platform built with Apache Kafka, Spring Boot, Docker, Kubernetes, and PostgreSQL. Designed to process high-volume real-time events with asynchronous communication, fault tolerance, auto-scaling, and distributed system architecture.',
    icon: Server,
    image: eventProcessingImg,
    badge: 'Event Driven',
    isPremium: true,
    highlights: [
      'Real-time event streaming using Apache Kafka',
      'Producer, Consumer & Alerting microservices architecture',
      'Kubernetes auto-scaling with Horizontal Pod Autoscalers',
      'Cloud-ready deployment with Docker, GKE & Cloud SQL'
    ],
    tech: ['Spring Boot', 'Apache Kafka', 'Kubernetes', 'Docker', 'PostgreSQL', 'GCP'],
    techLimit: 6,
    customExtraCount: 6,
    hiddenTech: ['Microservices', 'Event-Driven Architecture', 'GKE', 'Cloud SQL', 'Artifact Registry', 'REST APIs', 'Kafka Listeners', 'Zookeeper', 'HPA', 'Distributed Systems'],
    date: '04/2026',
    github: 'https://github.com/aryan9867bar/vcc-event-processing-system',
    video: 'https://drive.google.com/file/d/1jMoUKrzLYcSEvKDZuY9VX6RgfNMCKf2W/view?usp=sharing',
    live: 'https://github.com/aryan9867bar/vcc-event-processing-system',
  },
  {
    title: 'WaveChat',
    category: 'Full Stack',
    description: 'Scalable real-time random video chat platform inspired by Omegle, built using React, FastAPI, Redis, WebRTC, and WebSockets. Users are randomly matched through a distributed matchmaking system and connected through low-latency peer-to-peer video and chat communication.',
    icon: Video,
    image: wavechatImg,
    badge: 'Live Video Chat',
    isPremium: true,
    highlights: [
      'Random peer-to-peer video matching system',
      'WebRTC video calling with ICE/STUN/TURN support',
      'Distributed matching & signalling microservices',
      'Real-time live chat with WebSocket communication'
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Redis', 'WebSockets', 'Tailwind CSS', 'Vite', 'STOMP'],
    date: '05/2026',
    github: 'https://github.com/aryan9867bar/RandomVideoChat',
    video: 'https://drive.google.com/file/d/1LxzqiAGrpDej7McVTSpZvbo0xEIIdcOp/view?usp=sharing',
    live: 'https://wavechat-ten.vercel.app',
  },
  {
    title: 'SnipURL',
    category: 'Full Stack',
    description: 'High-performance distributed URL shortening platform built with FastAPI, PostgreSQL, Redis, and React. Designed for scalability and low latency using Snowflake ID generation, Base62 encoding, Redis caching, distributed locking, and async API architecture.',
    icon: Link,
    image: snipurlImg,
    badge: 'Low Latency',
    isPremium: true,
    highlights: [
      'Collision-free short URL generation using Snowflake IDs',
      'Redis caching with distributed lock mechanism',
      'Low-latency URL redirection with cache optimization',
      'Rate-limited scalable async REST API architecture'
    ],
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'React', 'Docker', 'TypeScript'],
    techLimit: 6,
    customExtraCount: 5,
    hiddenTech: ['SQLAlchemy', 'Base62 Encoding', 'Distributed Locking', 'Async APIs', 'Vite', 'Pydantic', 'Uvicorn', 'Tailwind CSS'],
    date: '05/2026',
    github: 'https://github.com/aryan9867bar/URL-Shortener',
    video: 'https://drive.google.com/file/d/1kaHFFpjowoetw_RXkpgFhqqkG5N-alAZ/view?usp=sharing',
    live: 'https://github.com/aryan9867bar/snipurl',
  },
  {
    title: 'RTCBridge',
    category: 'Full Stack',
    description: 'Scalable real-time video calling platform enabling low-latency peer-to-peer communication using WebRTC and WebSockets. Built with Spring Boot signaling architecture, STOMP messaging, STUN/TURN traversal, and secure HTTPS deployment for seamless browser-based communication.',
    icon: Video,
    image: rtcbridgeImg,
    badge: 'Live RTC',
    isPremium: true,
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
    title: 'QuickChat',
    category: 'Full Stack',
    description: 'Real-time multi-room chatting platform built with Spring Boot and WebSockets, enabling instant communication between users using STOMP messaging and SockJS fallback support for seamless cross-browser connectivity.',
    icon: MessageSquare,
    image: quickchatImg,
    badge: 'Live Chat',
    isPremium: true,
    highlights: [
      'Real-time multi-room messaging system',
      'STOMP-based WebSocket communication',
      'SockJS fallback for unsupported browsers',
      'Secure and responsive chat interface'
    ],
    tech: ['Spring Boot', 'WebSocket', 'STOMP', 'SockJS', 'Java', 'Docker'],
    date: '05/2026',
    github: 'https://github.com/aryan9867bar/QuickChat',
    video: 'https://drive.google.com/file/d/1W9O9-6sGTB7GU9AGwW6JhKq07_fVd53Z/view?usp=sharing',
    live: 'https://quickchat-f1tn.onrender.com',
  },
  {
    title: 'E-Commerce Website Clone',
    category: 'Full Stack',
    description: 'Full-featured e-commerce platform with Stripe payment integration, Cloudinary for image management, and Redux for state management.',
    icon: Globe,
    image: ecommerceImg,
    isPremium: true,
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
    isPremium: true,
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
    isPremium: true,
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
    isPremium: true,
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
                className={`glass-card rounded-2xl overflow-hidden hover-glow group relative ${
                  project.isPremium 
                    ? 'border-2 border-primary/50 shadow-[0_0_25px_rgba(234,179,8,0.25)]' 
                    : ''
                }`}
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.isPremium && (
                    <>
                      {/* Signal-wave ripple effects */}
                      <span className="absolute inset-0 bg-primary/5 animate-pulse pointer-events-none" />
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-pulse pointer-events-none" />
                    </>
                  )}
                  {project.title === 'SnipURL' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                      {/* Animated URL redirection flow */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(234,179,8,0.25)]">
                        <span className="text-[10px] text-muted-foreground font-mono">snip.url/xyz</span>
                        <div className="relative flex items-center w-8">
                          <span className="absolute left-0 text-primary font-bold text-xs animate-redirect-flow">➔</span>
                        </div>
                        <span className="text-[10px] text-primary font-mono font-bold">target_service</span>
                      </div>

                      {/* Cache Hit Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-emerald-500/30 text-emerald-400 text-[10px] font-mono shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[9px] font-bold">CACHE HIT (99.8% • 1.8ms)</span>
                      </div>
                    </div>
                  )}
                  {project.title === 'Event Processing System' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                      {/* Animated Kafka event pipeline flow */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.25)]">
                        <span className="text-[9px] text-cyan-400 font-mono font-bold">Producer</span>
                        <span className="text-orange-400 font-bold text-xs animate-kafka-flow">➜</span>
                        <span className="text-[9px] text-primary font-mono font-bold">Kafka</span>
                        <span className="text-orange-400 font-bold text-xs animate-kafka-flow animation-delay-200">➜</span>
                        <span className="text-[9px] text-emerald-400 font-mono font-bold">Consumer</span>
                        <span className="text-orange-400 font-bold text-xs animate-kafka-flow animation-delay-400">➜</span>
                        <span className="text-[9px] text-red-400 font-mono font-bold">Alert</span>
                      </div>

                      {/* Throughput Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-orange-500/30 text-orange-400 text-[10px] font-mono shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                        <Activity className="w-3 h-3 animate-pulse" />
                        <span className="text-[9px] font-bold">85.3K events/sec • 3 brokers</span>
                      </div>

                      {/* K8s HPA Badge */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-cyan-500/30 text-cyan-400 text-[10px] font-mono shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-[9px] font-bold">HPA: 3→8 pods</span>
                      </div>
                    </div>
                  )}
                  {project.title === 'CodeBridge' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                      {/* Collaborative editing indicator */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.25)]">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-cursor-blink" />
                        <span className="text-[9px] text-blue-400 font-mono font-bold">Dev 1</span>
                        <Code2 className="w-3 h-3 text-violet-400 animate-pulse" />
                        <span className="text-[9px] text-emerald-400 font-mono font-bold">Dev 2</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-cursor-blink animation-delay-400" />
                      </div>

                      {/* Live sync badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-violet-500/30 text-violet-400 text-[10px] font-mono shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                        <Users className="w-3 h-3 animate-pulse" />
                        <span className="text-[9px] font-bold">2 collaborators • synced</span>
                      </div>

                      {/* Code execution badge */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-emerald-500/30 text-emerald-400 text-[10px] font-mono shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                        <Terminal className="w-3 h-3" />
                        <span className="text-[9px] font-bold">▶ run: OK (0.12s)</span>
                      </div>
                    </div>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full text-white backdrop-blur-sm animate-pulse ${
                        project.isPremium ? 'bg-primary text-black' : 'bg-emerald-500/90'
                      }`}>
                        {project.title === 'SnipURL' ? <Zap className="w-3 h-3" /> : project.title === 'Event Processing System' ? <Activity className="w-3 h-3" /> : project.title === 'CodeBridge' ? <Code2 className="w-3 h-3" /> : <Wifi className="w-3 h-3" />}
                        {project.badge}
                      </span>
                    )}
                    {project.isPremium && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        ONLINE
                      </span>
                    )}
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm text-primary">
                    <div className="relative flex items-center gap-1">
                      {project.isPremium && (
                        <span className="absolute -inset-1 rounded bg-primary/30 animate-ping pointer-events-none" />
                      )}
                      {project.title === 'WaveChat' ? (
                        <>
                          <Video className="w-4 h-4 relative z-10" />
                          <MessageSquare className="w-4 h-4 relative z-10" />
                        </>
                      ) : project.title === 'Event Processing System' ? (
                        <>
                          <Server className="w-4 h-4 relative z-10" />
                          <Activity className="w-4 h-4 relative z-10" />
                        </>
                      ) : project.title === 'CodeBridge' ? (
                        <>
                          <Code2 className="w-4 h-4 relative z-10" />
                          <Users className="w-4 h-4 relative z-10" />
                        </>
                      ) : (
                        <IconComponent className="w-5 h-5 relative z-10" />
                      )}
                    </div>
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
                    {project.tech.slice(0, project.techLimit || 4).map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > (project.techLimit || 4) && (
                      <span 
                        className="skill-badge text-xs cursor-help"
                        title={project.hiddenTech ? project.hiddenTech.join(', ') : project.tech.slice(project.techLimit || 4).join(', ')}
                      >
                        +{project.customExtraCount || (project.tech.length - (project.techLimit || 4))}
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
