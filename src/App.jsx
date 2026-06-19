import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Speaking from "./components/Speaking";
import Works from "./components/Works";
import Publications from "./components/Publications";
import Stats from "./components/Stats";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Background from "./components/Background";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <>
      <Background />
      <Cursor />

      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Speaking />
      <Works />
      <Publications />
      <Stats />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}
