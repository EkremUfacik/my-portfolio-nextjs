import { About, Contact, Header, Projects, Skills } from "@/components";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />

      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
