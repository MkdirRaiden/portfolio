import Educaton from "./components/Educaton";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <div className="bg-color-bgDark text-white min-h-[100vh] max-w-screen-2xl font-poppins">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Educaton />
          <Contact />
          <Footer />
        </div>
        <Toaster />
      </ParallaxProvider>
    </>
  );
};

export default App;
