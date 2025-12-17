import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  'Home', 'About', 'Skills', 'Projects', 'Experience', 
  'Education', 'Blogs', 'Certifications', 'Achievements', 'JustForFun', 'Contact'
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => 
        document.getElementById(item.toLowerCase().replace('justforfun', 'justforfun'))
      );

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(navItems[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase().replace('justforfun', 'justforfun'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-card py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo - {AB} with Aryan Baranwal */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('Home'); }}
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center">
              <span className="text-primary text-xl font-bold">{`{`}</span>
              <span className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                AB
              </span>
              <span className="text-primary text-xl font-bold">{`}`}</span>
            </div>
            <span className="text-[9px] text-muted-foreground font-medium tracking-widest uppercase group-hover:text-primary transition-colors">
              Aryan Baranwal
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item === 'JustForFun' ? 'Just For Fun' : item}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Resume Button */}
            <Button
              variant="default"
              className="hidden sm:flex items-center gap-2"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
              <Download className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-card mt-2 mx-4 rounded-lg overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left py-2 px-4 rounded-lg transition-colors ${
                      activeSection === item
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {item === 'JustForFun' ? 'Just For Fun' : item}
                  </button>
                ))}
                <Button
                  variant="default"
                  className="mt-2 w-full"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
