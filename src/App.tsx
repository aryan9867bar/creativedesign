import { Suspense } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MusicProvider } from "@/contexts/MusicContext";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Blogs from "@/sections/Blogs";
import Certifications from "@/sections/Certifications";
import Achievements from "@/sections/Achievements";
import JustForFun from "@/sections/JustForFun";
import Contact from "@/sections/Contact";

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <MusicProvider>
        <TooltipProvider>
          <Toaster position="top-right" />
          <div className="relative min-h-screen">
            <Suspense fallback={<LoadingFallback />}>
              <ThreeBackground />
            </Suspense>
            <Navbar />
            <main>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Blogs />
              <Certifications />
              <Achievements />
              <JustForFun />
              <Contact />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </MusicProvider>
    </ThemeProvider>
  );
}

export default App;
