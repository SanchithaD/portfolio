import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Awards from "./components/Awards";
import Supernova from "./components/Supernova";
import SocialFollow from "./components/SocialFollow"
import Activities from "./components/Activities"
import Hobbies from "./components/Hobbies"

export default function App() {
  return (
    <main className="text-gray-400 bg-blue-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Supernova/>
      <Awards />
      <Activities/>
      <Skills />
      <Hobbies/>
      <SocialFollow />
    </main>
  );
}

// export default function App() {
//   return (
//     <main className="text-gray-400 bg-gray-900 body-font">
//       <Navbar />
//       <About />
//       <Projects />
//       <Skills />
//       <Testimonials />
//       <Contact />
//     </main>
//   );
// }