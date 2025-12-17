import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target, TrendingUp, Users } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hacktoberfest Contributor',
    description: 'Successfully completed Hacktoberfest 2022 & 2023 by contributing to open source projects.',
    year: '2022-2023',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Star,
    title: 'Published Researcher',
    description: 'Published research paper on AI-based emotion detection at ICADIE-2024 and IJIRCCE journal.',
    year: '2024',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'IIT Jodhpur M.Tech',
    description: 'Secured admission to M.Tech program at Indian Institute of Technology Jodhpur.',
    year: '2025',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Target,
    title: 'Full Stack Projects',
    description: 'Successfully delivered multiple full-stack projects for global clients during internship.',
    year: '2023',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: TrendingUp,
    title: 'Academic Excellence',
    description: 'Maintained CGPA of 8.407/10.00 throughout B.Tech at Jain University.',
    year: '2020-2024',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Letter of Recommendation',
    description: 'Received letter of recommendation from Nexus Institute for outstanding performance.',
    year: '2023',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones and accomplishments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover-glow group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} p-0.5`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <achievement.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
