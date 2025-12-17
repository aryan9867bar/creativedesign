import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Loader2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactInfo = {
  email: 'aryan123web@gmail.com',
  github: 'https://github.com/aryan9867bar',
  linkedin: 'https://linkedin.com/in/aryanbaranwal',
  huggingface: 'https://huggingface.co/aryanbaranwal',
  medium: 'https://medium.com/@aryanbaranwal',
};

// EmailJS configuration - these are publishable keys
const EMAILJS_SERVICE_ID = 'service_5m273dl';
const EMAILJS_TEMPLATE_ID = 'template_u0mdrm1';
const EMAILJS_PUBLIC_KEY = 'kMOMfwQdnPg495eg2';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStage, setFormStage] = useState<'idle' | 'form' | 'success'>('idle');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '> Connection established.',
    '> Waiting for user input...',
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalOutput(prev => [
        ...prev,
        '> Initializing collaboration module...',
        '> Form interface loaded.',
        '> Please enter your details below.',
      ]);
      setFormStage('form');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setTerminalOutput(prev => [...prev, `> Processing request from ${name}...`]);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message,
          to_name: 'Aryan Baranwal',
          to_email: contactInfo.email,
          reply_to: email,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setTerminalOutput(prev => [
        ...prev,
        '> Message transmitted successfully! ✓',
        `> Partner: "Aryan Baranwal"`,
        `> Stack: ["MERN", "MEAN", "AI/ML", "Python"]`,
        '> Expected response: ~24-48 hours',
        '> Connection maintained.',
      ]);
      setFormStage('success');
      toast.success("Message sent successfully! I'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setTerminalOutput(prev => [...prev, '> Error: Transmission failed ✗', '> Retrying connection...']);
      toast.error('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {"Let's "}<span className="text-primary glow-text">Collaborate</span>{" 🤝"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a <span className="text-primary">project idea</span>, a{' '}
            <span className="text-primary">research question</span>, or just want to say hi?
            <br />
            Use the interactive terminal below or simply reach out via email.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Code Editor Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-window h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-muted-foreground">▸_</span>
                  collaborate.tsx
                </span>
                <div className="ml-auto flex gap-2">
                  <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">TypeScript</span>
                  <span className="px-2 py-0.5 text-xs bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/30">React</span>
                </div>
              </div>
              <div className="terminal-body font-mono text-sm">
                {/* Line numbers and code */}
                <div className="space-y-1">
                  <CodeLine num="01" keyword="import" text={`{ `} func="Collaboration" text2={` } `} keyword2="from" string={`"@aryanbaranwal/api"`} end=";" />
                  <CodeLine num="02" />
                  <CodeLine num="03" keyword="interface" func="ProjectRequest" text=" {" />
                  <CodeLine num="04" indent variable="name" type="string" />
                  <CodeLine num="05" indent variable="email" type="string" />
                  <CodeLine num="06" indent variable="idea" type="string" />
                  <CodeLine num="07" text="}" />
                  <CodeLine num="08" />
                  <CodeLine num="09" keyword="const" func="sendMessage" text=" = " keyword2="async" text2=" (req: ProjectRequest) => {" />
                  <CodeLine num="10" indent keyword="await" text=" Collaboration." func="connect" text2={`("`} string="aryanbaranwal.dev" text3={`");`} />
                  <CodeLine num="11" indent keyword="return" text=" Collaboration." func="init" text2="({" />
                  <CodeLine num="12" indent2 variable="partner" text=": " string={`"Aryan Baranwal"`} end="," />
                  <CodeLine num="13" indent2 variable="stack" text=": [" string={`"Python"`} text2=", " string2={`"PyTorch"`} text3=", " string3={`"LangChain"`} end="]," />
                  <CodeLine num="14" indent2 text="...req" />
                  <CodeLine num="15" indent text="}); }" />
                  <CodeLine num="16" cursor />
                </div>
                
                {/* Status bar */}
                <div className="mt-4 pt-3 border-t border-border/50 flex justify-between items-center text-xs text-muted-foreground">
                  <span>Ln 16, Col 1</span>
                  <span>UTF-8</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminal Output & Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Terminal Output */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  TERMINAL OUTPUT
                </span>
                <span className="flex items-center gap-1 text-green-400 ml-auto">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Connected
                </span>
              </div>
              <div className="terminal-body min-h-[140px] max-h-[180px] overflow-y-auto">
                <AnimatePresence mode="popLayout">
                  {terminalOutput.map((line, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-sm mb-1 font-mono ${
                        line.includes('✓') ? 'text-green-400' :
                        line.includes('✗') ? 'text-red-400' :
                        line.includes('loaded') || line.includes('established') ? 'text-primary' :
                        'text-muted-foreground'
                      }`}
                    >
                      {line}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Form Fields */}
            {formStage !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="terminal-window"
              >
                <div className="terminal-body">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground font-mono mb-1 block">name:</label>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        className="bg-background/50 border-border/50 font-mono text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground font-mono mb-1 block">email:</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background/50 border-border/50 font-mono text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground font-mono mb-1 block">message:</label>
                      <Textarea
                        name="message"
                        placeholder="Your project idea or message..."
                        className="bg-background/50 border-border/50 font-mono text-sm min-h-[80px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Zap className="w-4 h-4 mr-2" />
                      )}
                      EXECUTE_CHAT →
                    </Button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* Social Link Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 border-border/50 hover:bg-secondary/50 font-mono"
                onClick={() => window.open(contactInfo.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GH_REPO
              </Button>
              <Button
                variant="outline"
                className="h-12 border-primary/50 text-primary hover:bg-primary/10 font-mono"
                onClick={() => window.open(contactInfo.linkedin, '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LINKEDIN
              </Button>
            </div>
            
            <Button
              variant="outline"
              className="w-full h-12 border-border/50 hover:bg-secondary/50 font-mono"
              onClick={() => window.open(contactInfo.medium, '_blank')}
            >
              <span className="font-bold mr-2">M</span>
              MEDIUM
            </Button>

            {/* Quick Response Note */}
            <div className="text-center text-sm text-muted-foreground pt-2">
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Quick Response: I typically respond within 24-48 hours.
              </p>
              <p className="mt-2">
                {"📧 "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary hover:underline"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Code line component for cleaner rendering
interface CodeLineProps {
  num: string;
  keyword?: string;
  keyword2?: string;
  func?: string;
  variable?: string;
  type?: string;
  string?: string;
  string2?: string;
  string3?: string;
  text?: string;
  text2?: string;
  text3?: string;
  end?: string;
  indent?: boolean;
  indent2?: boolean;
  cursor?: boolean;
}

function CodeLine({ num, keyword, keyword2, func, variable, type, string, string2, string3, text, text2, text3, end, indent, indent2, cursor }: CodeLineProps) {
  return (
    <p className="text-muted-foreground leading-relaxed">
      <span className="text-muted-foreground/50 w-6 inline-block">{num}</span>
      {indent && <span className="ml-4" />}
      {indent2 && <span className="ml-8" />}
      {keyword && <span className="text-pink-400">{keyword} </span>}
      {text && <span>{text}</span>}
      {func && <span className="text-yellow-400">{func}</span>}
      {text2 && <span>{text2}</span>}
      {keyword2 && <span className="text-pink-400"> {keyword2} </span>}
      {string && <span className="text-green-400">"{string}"</span>}
      {text3 && <span>{text3}</span>}
      {string2 && <span className="text-green-400">"{string2}"</span>}
      {string3 && <span className="text-green-400">"{string3}"</span>}
      {variable && <span className="text-cyan-400">{variable}</span>}
      {type && <span className="text-blue-400">: {type};</span>}
      {end && <span>{end}</span>}
      {cursor && <span className="animate-pulse text-primary">|</span>}
    </p>
  );
}