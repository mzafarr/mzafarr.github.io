import ContactForm from "./components/ContactForm";
import HomeHero from "./components/HomeHero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Layers from "./components/widgets/Layers";
export default function Home() {
  return (
    <>
      <HomeHero />
      <Layers />
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
}
