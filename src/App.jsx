import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Speaking from "./components/Speaking";
import Works from "./components/Works";
import Stats from "./components/Stats";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Speaking />
      <Works />
      <Stats />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}
