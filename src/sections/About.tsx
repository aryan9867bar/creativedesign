import { motion } from 'framer-motion';
import { Brain, Code2, Lightbulb, Trophy, GitCommit, Building, Users, Coffee } from 'lucide-react';
import InteractiveTerminal from '@/components/InteractiveTerminal';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Focused on building intelligent systems using deep learning, computer vision, and natural language processing. Experienced with PyTorch and transformer-based models, with hands-on work in areas like emotion recognition, multimodal learning, and emerging topics such as machine unlearning and deepfake detection.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Developing scalable web applications using the MERN/MEAN stack with a strong focus on backend architecture, RESTful APIs, and database design. Experienced in building end-to-end systems with cloud integration, authentication, and performance optimization.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Strong problem-solving mindset with a focus on writing efficient, maintainable code. Actively improving data structures and algorithms while approaching real-world problems with a system design perspective to build reliable and scalable solutions.',
  },
];

const stats = [
  { icon: Trophy, value: '1', label: 'Research Publications', color: 'text-yellow-500' },
  { icon: Code2, value: '30+', label: 'Projects Built', color: 'text-primary' },
  { icon: Building, value: '1', label: 'Internships', color: 'text-pink-500' },
  { icon: GitCommit, value: '500+', label: 'Git Commits', color: 'text-cyan-500' },
  { icon: Users, value: '150+', label: 'Students Mentored', color: 'text-green-500' },
  { icon: Coffee, value: '999+', label: 'Cups of Coffee', color: 'text-orange-500' },
];

const keyHighlights = [
  'M.Tech in Computer Science – IIT Jodhpur',
  'Researcher at Image Analysis & Biometrics Lab (IAB)',
  'Strong focus on Backend Development & System Design',
  'Built scalable projects (Event Processing System, Full-Stack Applications)',
  'Active in Data Structures & Algorithms (DSA)',
  'Exploring Distributed Systems, Cloud Computing, Computer Vision & Natural Language Processing',
  'Full Stack Developer Intern (MERN/MEAN Stack)',
];

const focusAreas = [
  'Backend Development',
  'System Design',
  'Distributed Systems',
  'Cloud Computing',
  'Machine Learning & Deep Learning',
  'Computer Vision & NLP',
  'Large Language Models (LLMs)',
  'Full-Stack Development',
  'Distributed Systems & Cloud',
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center hover-glow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <area.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* My Journey + Key Highlights Section (Sachin Style) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing M.Tech in Computer Science at IIT Jodhpur, I am passionate about
                building scalable systems and exploring intelligent technologies.
              </p>
              <p>
                My journey centers on backend engineering, distributed systems, and solving real-world
                problems. I have built projects ranging from distributed URL shorteners to full-stack
                applications and research-driven solutions. Alongside this, I have developed a strong
                foundation in full-stack development using MERN and MEAN stacks, while expanding my
                expertise in machine learning and artificial intelligence through deep learning–based projects.
              </p>
              <p>
                With a strong foundation in data structures, system design, and cloud technologies,
                I aim to develop systems that are efficient, reliable, and production-ready.
                I continuously explore new technologies and improve my problem-solving skills.
              </p>
              <p>
                Alongside academics, I actively work on projects and research to bridge the gap between
                theory and real-world applications. I believe in continuous learning, consistency,
                and building meaningful solutions.
              </p>
              <p>
                I enjoy solving complex problems, continuously improving my technical skills, and
                working on projects and research that bridge the gap between theory and real-world applications.
              </p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Key Highlights</h3>
            <ul className="space-y-4">
              {keyHighlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Currently Focused On */}
            <div className="mt-8 glass-card p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-primary mb-4">Currently Focused On</h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, index) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1.5 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Terminal - After My Journey, Before By the Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <InteractiveTerminal />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-primary mb-2">By the Numbers</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-muted-foreground mb-12">A snapshot of my journey in tech and development.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover-glow"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
