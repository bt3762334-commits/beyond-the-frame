import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Speaking from "./components/Speaking";
import Works from "./components/Works";
import Publications from "./components/Publications";
import Stats from "./components/Stats";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Speaking />
      <Works />
      <Publications />
      <Stats />
      <Certificates />
      <Footer />
    </>
  );
}
