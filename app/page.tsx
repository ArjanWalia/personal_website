import About from "@/components/About";
import Connect from "@/components/Connect";
import Extracurriculars from "@/components/Extracurriculars";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { LangProvider } from "@/components/i18n";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Header />
        <About />
        <Extracurriculars />
        <Connect />
      </main>
      <Footer />
    </LangProvider>
  );
}
