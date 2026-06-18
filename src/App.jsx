import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Speaking from "./components/Speaking";
import Works from "./components/Works";
import Stats from "./components/Stats";

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
    </>
  );
}
