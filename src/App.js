import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Testi from "./components/Testimonials";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Tools />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
