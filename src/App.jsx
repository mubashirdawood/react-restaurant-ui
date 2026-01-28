import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

// Wrapper component to handle AnimatePresence with location
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light');
    } else {
      root.classList.add('light');
    }
  }, [isDark]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          
          <div className={`min-h-screen flex flex-col ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <Navbar isDark={isDark} onThemeToggle={handleThemeToggle} />
            
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
