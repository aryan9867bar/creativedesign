import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/aryan9867bar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aryanbaranwal', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aryan123web@gmail.com', label: 'Email' },
  { icon: null, href: 'https://huggingface.co/aryanbaranwal', label: 'HuggingFace', emoji: '🤗' },
  { icon: null, href: 'https://medium.com/@aryanbaranwal', label: 'Medium', text: 'M' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo with {AB} and Aryan Baranwal */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center">
              <span className="text-primary text-2xl font-bold">{`{`}</span>
              <span className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                AB
              </span>
              <span className="text-primary text-2xl font-bold">{`}`}</span>
            </div>
            <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase group-hover:text-primary transition-colors">
              Aryan Baranwal
            </span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon ? (
                  <social.icon className="w-5 h-5" />
                ) : social.emoji ? (
                  <span className="text-lg">{social.emoji}</span>
                ) : (
                  <span className="font-bold">{social.text}</span>
                )}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Aryan Baranwal
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
