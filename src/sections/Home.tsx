import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';
import FloatingControls from '@/components/FloatingControls';

const socialLinks = [
  { icon: Github, href: 'https://github.com/aryan9867bar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aryanbaranwal', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aryan123web@gmail.com', label: 'Email' },
];

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 relative">
      {/* Floating Theme & Music Controls */}
      <FloatingControls />
      
      <div className="container mx-auto flex-1 flex flex-col">

        <div className="flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                <span className="text-foreground">Aryan</span>{' '}
                <span className="text-primary glow-text">Baranwal</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-primary font-semibold mb-6 h-8"
              >
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Expert',
                    2000,
                    'Machine Learning Enthusiast',
                    2000,
                    'M.Tech @ IIT Jodhpur',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground text-lg mb-8 max-w-xl"
              >
                I love turning ideas into real-world applications—smart systems, intuitive tools,
                and end-to-end products that bring ideas to life. From AI to full-stack apps,
                I've led projects that turn complexity into clarity and blend innovation with real-world impact.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
                {/* Hugging Face */}
                <motion.a
                  href="https://huggingface.co/aryanbaranwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all text-xl"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  🤗
                </motion.a>
                {/* Medium */}
                <motion.a
                  href="https://medium.com/@aryanbaranwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all font-bold text-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  M
                </motion.a>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToContact}
                  className="border-border hover:bg-secondary"
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex justify-center relative"
            >
              <div className="relative">
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full profile-ring p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ width: 320, height: 320, margin: '-10px' }}
                />
                
                {/* Profile Image */}
                <motion.div
                  className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={profileImage}
                    alt="Aryan Baranwal"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                  className="absolute -top-2 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  M.Tech @ IIT Jodhpur
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: 'spring' }}
                  className="absolute -bottom-2 -left-4 bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-primary/50"
                >
                  Full Stack Developer
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 cursor-pointer mt-8"
          onClick={scrollToAbout}
        >
          <span className="text-primary text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
