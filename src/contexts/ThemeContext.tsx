import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeColor = 'yellow' | 'cyan' | 'purple' | 'blue' | 'green' | 'pink' | 'orange' | 'red' | 'teal' | 'lime' | 'indigo' | 'rose' | 'coral' | 'violet' | 'mint' | 'gold' | 'aqua' | 'magenta' | 'peach' | 'sky';

interface ThemeContextType {
  color: ThemeColor;
  setColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themeColors: { name: ThemeColor; hsl: string }[] = [
  { name: 'cyan', hsl: 'hsl(180, 100%, 50%)' },
  { name: 'purple', hsl: 'hsl(270, 100%, 60%)' },
  { name: 'yellow', hsl: 'hsl(45, 100%, 50%)' },
  { name: 'blue', hsl: 'hsl(210, 100%, 50%)' },
  { name: 'green', hsl: 'hsl(140, 80%, 45%)' },
  { name: 'teal', hsl: 'hsl(170, 80%, 40%)' },
  { name: 'lime', hsl: 'hsl(80, 100%, 45%)' },
  { name: 'orange', hsl: 'hsl(25, 100%, 50%)' },
  { name: 'pink', hsl: 'hsl(330, 100%, 60%)' },
  { name: 'rose', hsl: 'hsl(350, 90%, 55%)' },
  { name: 'red', hsl: 'hsl(0, 100%, 50%)' },
  { name: 'indigo', hsl: 'hsl(240, 80%, 55%)' },
  { name: 'coral', hsl: 'hsl(16, 100%, 66%)' },
  { name: 'violet', hsl: 'hsl(280, 80%, 55%)' },
  { name: 'mint', hsl: 'hsl(160, 70%, 50%)' },
  { name: 'gold', hsl: 'hsl(43, 100%, 55%)' },
  { name: 'aqua', hsl: 'hsl(195, 100%, 50%)' },
  { name: 'magenta', hsl: 'hsl(300, 100%, 50%)' },
  { name: 'peach', hsl: 'hsl(30, 100%, 75%)' },
  { name: 'sky', hsl: 'hsl(200, 100%, 65%)' },
];

// HSL values for each theme
const themeHSLValues: Record<ThemeColor, { h: number; s: number; l: number }> = {
  yellow: { h: 45, s: 100, l: 50 },
  cyan: { h: 180, s: 100, l: 50 },
  purple: { h: 270, s: 100, l: 60 },
  blue: { h: 210, s: 100, l: 50 },
  green: { h: 140, s: 80, l: 45 },
  pink: { h: 330, s: 100, l: 60 },
  orange: { h: 25, s: 100, l: 50 },
  red: { h: 0, s: 100, l: 50 },
  teal: { h: 170, s: 80, l: 40 },
  lime: { h: 80, s: 100, l: 45 },
  indigo: { h: 240, s: 80, l: 55 },
  rose: { h: 350, s: 90, l: 55 },
  coral: { h: 16, s: 100, l: 66 },
  violet: { h: 280, s: 80, l: 55 },
  mint: { h: 160, s: 70, l: 50 },
  gold: { h: 43, s: 100, l: 55 },
  aqua: { h: 195, s: 100, l: 50 },
  magenta: { h: 300, s: 100, l: 50 },
  peach: { h: 30, s: 100, l: 75 },
  sky: { h: 200, s: 100, l: 65 },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColorState] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem('theme-color');
    return (saved as ThemeColor) || 'yellow';
  });

  const setColor = (newColor: ThemeColor) => {
    setColorState(newColor);
    localStorage.setItem('theme-color', newColor);
  };

  useEffect(() => {
    // Apply theme colors directly to CSS variables
    const hsl = themeHSLValues[color];
    const root = document.documentElement;
    
    // Set the primary color CSS variables
    root.style.setProperty('--primary', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    root.style.setProperty('--ring', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    root.style.setProperty('--sidebar-primary', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    root.style.setProperty('--sidebar-ring', `${hsl.h} ${hsl.s}% ${hsl.l}%`);
    
    // Force a repaint to ensure all components update
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
