import { motion } from 'framer-motion';
import { Brain, Code2, Lightbulb, Trophy, GitCommit, Building, Users, Coffee } from 'lucide-react';
import InteractiveTerminal from '@/components/InteractiveTerminal';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Specialized in deep learning, NLP, computer vision with expertise in PyTorch, TensorFlow, and building intelligent systems.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building end-to-end solutions with modern web frameworks, RESTful APIs, databases, and cloud deployment pipelines.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Converting complex challenges into elegant, innovative solutions that deliver real-world impact and value.',
  },
];

const stats = [
  { icon: Trophy, value: '3', label: 'Hackathons Won', color: 'text-yellow-500' },
  { icon: Code2, value: '30+', label: 'Projects Built', color: 'text-primary' },
  { icon: Building, value: '4', label: 'Internships', color: 'text-pink-500' },
  { icon: GitCommit, value: '500+', label: 'Git Commits', color: 'text-cyan-500' },
  { icon: Users, value: '150+', label: 'Students Mentored', color: 'text-green-500' },
  { icon: Coffee, value: '999+', label: 'Cups of Coffee', color: 'text-orange-500' },
];

const keyHighlights = [
  'M.Tech in Computer Science from IIT Jodhpur',
  'Published Research in Sleep Monitoring Systems',
  'Teaching Assistant for 150+ M.Tech students',
  'Government Project: Police Duty Management System',
];

const focusAreas = [
  'Machine Learning',
  'Cloud Computing',
  'Full-Stack Development',
  'Research',
  'Teaching',
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
                Currently pursuing M.Tech in Computer Science at IIT Jodhpur, I'm passionate about 
                leveraging technology to solve real-world challenges. My journey spans from developing 
                AI-powered healthcare solutions to building government systems that serve thousands of users.
              </p>
              <p>
                With expertise in full-stack development, machine learning, and cloud computing, 
                I've successfully delivered projects that combine technical innovation with practical 
                impact. My work has been recognized through published research and real-world deployments.
              </p>
              <p>
                As a Teaching Assistant at IIT Jodhpur, I mentor students while continuously expanding 
                my knowledge in emerging technologies. I believe in the power of continuous learning 
                and collaborative innovation.
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
