import { BrowserRouter, Routes, Route } from "react-router-dom";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

const App = () => (
  <ErrorBoundary>
    {/* Hover motion stays still for visitors who ask their OS for less motion. */}
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Resume />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </MotionConfig>
    </LazyMotion>
  </ErrorBoundary>
);

export default App;
