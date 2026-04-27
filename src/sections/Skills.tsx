import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Globe, BarChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'TypeScript'],
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: ['React.js', 'Angular.js', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['GCP', 'Docker', 'Kubernetes', 'Vercel', 'Render'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Eclipse', 'IntelliJ IDEA'],
  },
  {
    title: 'AI / Machine Learning',
    icon: BarChart,
    skills: ['PyTorch', 'Computer Vision', 'NLP', 'Deep Learning', 'Transformers', 'Generative AI', 'Deepfake Detection', 'Multimodal Learning', 'LLMs'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My technical expertise across software development and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover-glow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
