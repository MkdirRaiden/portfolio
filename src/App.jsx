import Educaton from "./components/Educaton";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import StarsCanvas from "./components/canvas/Stars";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <div className="z-0 bg-primary text-white min-h-[100vh] max-w-screen-2xl font-poppins">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Header />
            <Hero />
          </div>
          <About />
          <Skills />
          <Projects />
          <Educaton />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
        <Toaster />
      </ParallaxProvider>
    </>
  );
};

export default App;
