import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    if (cmd === 'npm run start' || cmd === 'npm start') {
      setOutput(prev => [
        ...prev,
        `C:\\Users\\Aryan> ${input}`,
        '',
        '> portfolio@1.0.0 start',
        '> Starting development server...',
        '',
        '✓ Ready in 1.2s',
        '➜ Navigating to Skills section...',
      ]);
      setInput('');

      // Scroll to skills after a short delay
      setTimeout(() => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    } else if (cmd === 'help') {
      setOutput(prev => [
        ...prev,
        `C:\\Users\\Aryan> ${input}`,
        '',
        'Available commands:',
        '  npm run start  - Navigate to Skills section',
        '  clear          - Clear terminal',
        '  help           - Show this help message',
      ]);
      setInput('');
    } else if (cmd === 'clear') {
      setOutput([]);
      setInput('');
    } else if (cmd !== '') {
      setOutput(prev => [
        ...prev,
        `C:\\Users\\Aryan> ${input}`,
        `'${input}' is not recognized. Type 'help' for available commands.`,
      ]);
      setInput('');
    }
  };

  return (
    <div
      className="terminal-window max-w-3xl mx-auto cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-4 text-sm text-muted-foreground">portfolio.tsx</span>
      </div>
      <div className="terminal-body font-mono text-sm md:text-base min-h-[300px]">
        {/* Code Display */}
        <p className="mb-2">
          <span className="code-keyword">const</span>{' '}
          <span className="code-variable">Portfolio</span> = () =&gt; {'{'}
        </p>
        <p className="ml-4">
          <span className="code-keyword">const</span>{' '}
          <span className="code-variable">name</span> ={' '}
          <span className="code-string">"Aryan Baranwal"</span>;
        </p>
        <p className="ml-4">
          <span className="code-keyword">const</span>{' '}
          <span className="code-variable">bio</span> ={' '}
          <span className="code-string">"Full Stack Developer & ML Engineer"</span>;
        </p>
        <p className="ml-4 mt-2">
          <span className="code-keyword">const</span>{' '}
          <span className="code-variable">handleClick</span> = () =&gt; {'{'}
        </p>
        <p className="ml-8">
          <span className="code-variable">navigate</span>(<span className="code-string">"/projects"</span>);
        </p>
        <p className="ml-4">{'}'}</p>
        <p className="mt-2 ml-4">
          <span className="code-keyword">return</span> (
        </p>
        <p className="ml-8">
          &lt;<span className="code-keyword">button</span>{' '}
          <span className="code-variable">onClick</span>={'{'}handleClick{'}'}&gt;
          explore my work &lt;/<span className="code-keyword">button</span>&gt;
        </p>
        <p className="ml-4">)</p>
        <p>{'}'}</p>
        <p className="mt-2">
          <span className="code-keyword">export default</span>{' '}
          <span className="code-variable">Portfolio</span>;
        </p>

        {/* Terminal Output */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-muted-foreground text-xs mb-2">
            &gt;&gt; Interactive Terminal - Type 'npm run start' and press Enter
          </p>

          {/* Output History */}
          {output.map((line, index) => (
            <p key={index} className={`text-sm ${line.includes('✓') ? 'text-green-400' :
                line.includes('➜') ? 'text-primary' :
                  line.startsWith('C:') ? 'text-cyan-400' :
                    'text-muted-foreground'
              }`}>
              {line}
            </p>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-cyan-400">C:\Users\Aryan&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-foreground ml-2 font-mono"
              placeholder=""
              autoFocus
            />
            <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </form>
        </div>
      </div>
    </div>
  );
}
