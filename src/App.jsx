import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Educaton from "./components/Educaton";
import Fallback from "./components/sub/Fallback"
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";

// Lazy load heavier or below-the-fold components
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <ParallaxProvider>
      <div className="z-0 bg-primary text-white min-h-[100vh] max-w-screen-2xl font-poppins">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Header /> 
          <Suspense fallback={<Fallback />}>
             <Hero />
          </Suspense>                
        </div>
        <About />
        <Skills />
        <Suspense fallback={<Fallback />}>
          <Projects />
          <Educaton />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
        <Footer />
      </div>
      <Toaster />
    </ParallaxProvider>
  );
};

export default App;
