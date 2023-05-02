import { About, Contact, Header, Projects2, Skills } from "@/components";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useThemeContext } from "../context/ThemeProvider";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { theme } = useThemeContext();
  return (
    <div className={theme === "light" ? "app" : "app-dark"}>
      <Head>
        <meta name="description" content="Ekrem's Portfolio" />
        <title>eU</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <ToastContainer hideProgressBar={true} autoClose={3000} />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects2 />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
