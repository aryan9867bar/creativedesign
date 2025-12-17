import { motion } from 'framer-motion';
import { Gamepad2, Music, Coffee, Book, Camera, Plane, Code, Heart } from 'lucide-react';

const hobbies = [
  { icon: Code, title: 'Coding', description: 'Building side projects and exploring new technologies' },
  { icon: Gamepad2, title: 'Gaming', description: 'Strategy and puzzle games in free time' },
  { icon: Music, title: 'Music', description: 'Listening to lo-fi and ambient music while coding' },
  { icon: Coffee, title: 'Coffee', description: 'Fueling late-night coding sessions' },
  { icon: Book, title: 'Reading', description: 'Tech blogs and software architecture books' },
  { icon: Camera, title: 'Photography', description: 'Capturing moments and landscapes' },
  { icon: Plane, title: 'Travel', description: 'Exploring new places and cultures' },
  { icon: Heart, title: 'Open Source', description: 'Contributing to the developer community' },
];

const funFacts = [
  "I've participated in Hacktoberfest twice 🎃",
  "My first line of code was in HTML at age 15 💻",
  "I drink approximately 4 cups of coffee a day ☕",
  "I can type 80+ WPM on a good day ⌨️",
  "I believe in 'code first, debug later' philosophy 🐛",
  "My favorite editor is VS Code with a dark theme 🌙",
];

export default function JustForFun() {
  return (
    <section id="justforfun" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Just For Fun 🎉</h2>
          <p className="section-subtitle">A little more about me beyond code</p>
        </motion.div>

        {/* Hobbies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass-card p-4 rounded-xl text-center cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <hobby.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {hobby.title}
                </h4>
                <p className="text-xs text-muted-foreground">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Fun Facts About Me</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 rounded-xl flex items-center gap-3 hover-glow"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Easter Egg Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="inline-block text-6xl"
          >
            🚀
          </motion.div>
          <p className="text-muted-foreground mt-4">Always learning, always growing!</p>
        </motion.div>
      </div>
    </section>
  );
}
